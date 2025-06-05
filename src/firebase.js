// For Firebase v9+ Modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPFLvlgJ_xOwBeOoXO9Tgra-ydlGU7dWw",
  authDomain: "challenge-b6c75.firebaseapp.com",
  projectId: "challenge-b6c75",
  storageBucket: "challenge-b6c75.appspot.com",
  messagingSenderId: "531728737259",
  appId: "1:531728737259:web:eac327f8c202a09e16efae",
  measurementId: "G-HN9HBVPTL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
