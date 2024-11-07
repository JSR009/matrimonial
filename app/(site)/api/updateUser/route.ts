import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
// if (!admin.apps.length) {
//   const serviceAccount = require('../../../../config/firebaseServiceAccountKey.json');
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       type: process.env.NEXT_PUBLIC_FIREBASE_TYPE,
//       project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       private_key_id: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID,
//       private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
//       client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//       client_id: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
//       auth_uri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI,
//       token_uri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI,
//       auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_CERT_URL,
//       client_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_CERT_URL,
//       universe_domain: process.env.NEXT_PUBLIC_FIREBASE_UNIVERSE_DOMAIN,
//     }),
//   });
// }

interface FirebaseServiceAccount {
  type?: string;  // Type is optional, as it's not needed by `admin.credential.cert`
  project_id?: string;
  private_key_id?: string;
  private_key?: string;
  client_email?: string;
  client_id?: string;
  auth_uri?: string;
  token_uri?: string;
  auth_provider_x509_cert_url?: string;
  client_x509_cert_url?: string;
  universe_domain?: string;
}

// Define the service account configuration, ensuring private_key includes newline characters
const firebaseServiceAccountKey: FirebaseServiceAccount = {
  type: process.env.NEXT_PUBLIC_FIREBASE_TYPE,
  project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
  auth_uri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI,
  token_uri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_CERT_URL,
  universe_domain: process.env.NEXT_PUBLIC_FIREBASE_UNIVERSE_DOMAIN,
};

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceAccountKey as admin.ServiceAccount),
  });
}

// Define the POST function to handle the update request
export async function POST(req: Request) {
  const authHeader = req.headers.get('Authorization');

  // Check if the Authorization header is present and correctly formatted
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const token = authHeader.split('Bearer ')[1];

  try {
    // Verify the token to ensure the user is authenticated
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid; // Logged-in user's ID

    // Parse the request body to get the update data
    const { updates } = await req.json();
    const authUpdates: Partial<admin.auth.UpdateRequest> = {};
    const firestoreUpdates: Record<string, any> = {};

    // Separate fields that go into Firebase Auth vs Firestore
    if (updates.displayName) authUpdates.displayName = updates.displayName;
    if (updates.photoURL) authUpdates.photoURL = updates.photoURL;

    // Any additional fields for Firestore can be added here
    for (const [key, value] of Object.entries(updates)) {
      if (key !== 'displayName' && key !== 'photoURL') {
        firestoreUpdates[key] = value;
      }
    }

    // Update Firebase Auth profile if there are any relevant updates
    if (Object.keys(authUpdates).length > 0) {
      await admin.auth().updateUser(uid, authUpdates);
    }

    // Update Firestore with remaining user data if there are fields to update
    if (Object.keys(firestoreUpdates).length > 0) {
      const firestore = admin.firestore();
      await firestore.collection('users').doc(uid).update(firestoreUpdates);
    }

    // Return a successful response
    return new Response(JSON.stringify({ message: 'User updated successfully' }), { status: 200 });

  } catch (error) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: 'Error updating user' }), { status: 500 });
  }
}
