// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbmC88X4iG8CesZUSChrkjGlrex2uJlVk",
  authDomain: "amysho-694d8.firebaseapp.com",
  projectId: "amysho-694d8",
  storageBucket: "amysho-694d8.appspot.com",
  messagingSenderId: "77648983475",
  appId: "1:77648983475:web:b0ea103f38d720843a87c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const fireDB = getFirestore(app);
export const auth = getAuth(app)