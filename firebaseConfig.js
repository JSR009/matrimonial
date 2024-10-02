// 

// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaBEPKg4V4YVhyBoyzUUD8C6JoVYz-gIA",
    authDomain: "matrimonial-c5bf1.firebaseapp.com",
    projectId: "matrimonial-c5bf1",
    storageBucket: "matrimonial-c5bf1.appspot.com",
    messagingSenderId: "1080183363787",
    appId: "1:1080183363787:web:cd1da5c514479e14cc634e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
