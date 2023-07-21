// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "techshop-fa93b.firebaseapp.com",
  projectId: "techshop-fa93b",
  storageBucket: "techshop-fa93b.appspot.com",
  messagingSenderId: "352061467592",
  appId: "1:352061467592:web:9b2e37e285b7311a09eefd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
