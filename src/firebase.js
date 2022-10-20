// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyA452infetepCoqkBCQ_oWtAKp7WNMhi5k",
  authDomain: "iris-ff11c.firebaseapp.com",
  databaseURL: "https://iris-ff11c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iris-ff11c",
  storageBucket: "iris-ff11c.appspot.com",
  messagingSenderId: "324151430628",
  appId: "1:324151430628:web:213f9d4f16060779054bf1",
  measurementId: "G-370JR5GKFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;