import * as admin from 'firebase-admin';

// Service account initialization (using env vars)
interface FirebaseServiceAccount {
  project_id?: string;
  private_key?: string;
  client_email?: string;
}

// Environment configuration
const firebaseServiceAccountKey: FirebaseServiceAccount = {
  project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
};

// Initialize Firebase Admin SDK if not initialized
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceAccountKey as admin.ServiceAccount),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

// Function to handle GET requests and fetch user information by email
export async function GET(req: Request): Promise<Response> {
  const authHeader = req.headers.get('Authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const token = authHeader.split('Bearer ')[1];

  try {
    // Verify the token and extract the email
    const decodedToken = await admin.auth().verifyIdToken(token);
    const email = decodedToken.email;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email not found in token' }), { status: 400 });
    }

    // Fetch user information from Firebase Auth using the email
    const userRecord = await admin.auth().getUserByEmail(email);
    const userDoc = await admin.firestore().collection('users').doc(userRecord.uid).get();

    if (!userDoc.exists) {
      return new Response(JSON.stringify({ error: 'User data not found in Firestore' }), { status: 404 });
    }

    // Combine user record and Firestore data
    const userData = {
      ...userRecord.toJSON(),
      ...userDoc.data(),
    };

    return new Response(JSON.stringify({ user: userData }), { status: 200 });
  } catch (error: any) {
    console.error('Error fetching user:', error);
    const status = error.code === 'auth/id-token-expired' ? 401 : 500;
    const errorMessage = error.message || 'Error fetching user';
    return new Response(JSON.stringify({ error: errorMessage }), { status });
  }
}
