import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  const serviceAccount = require('../../../../config/firebaseServiceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Define the GET function to handle the GET request
export async function GET(req: Request) {
  const authHeader = req.headers.get('Authorization');
  
  if (!authHeader?.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const token = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    const [userRecord, userDoc] = await Promise.all([
      admin.auth().getUser(uid),
      admin.firestore().collection('users').doc(uid).get()
    ]);

    if (!userDoc.exists) {
      return new Response(JSON.stringify({ error: 'User data not found in Firestore' }), { status: 404 });
    }

    const userData = {
      ...userRecord.toJSON(),
      ...userDoc.data(),
    };

    return new Response(JSON.stringify({ user: userData }), { status: 200 });
  } catch (error:any) {
    console.error('Error fetching user:', error);
    const status = error.code === 'auth/id-token-expired' ? 401 : 500;
    const errorMessage = error.message || 'Error fetching user';
    return new Response(JSON.stringify({ error: errorMessage }), { status });
  }
}
