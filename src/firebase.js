// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsw85i4CYpwx12ikzwluKipwiBb49n0Fc",
  authDomain: "hridaya-sparsh.firebaseapp.com",
  projectId: "hridaya-sparsh",
  storageBucket: "hridaya-sparsh.firebasestorage.app",
  messagingSenderId: "42256463761",
  appId: "1:42256463761:web:9f8ccc3a875cebeda58c30",
  measurementId: "G-PMSD3KWWP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore and Firebase Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export everything you need
export { app, auth, provider, db, storage };
