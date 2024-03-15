// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7eefb.firebaseapp.com",
  projectId: "mern-estate-7eefb",
  storageBucket: "mern-estate-7eefb.appspot.com",
  messagingSenderId: "246550249039",
  appId: "1:246550249039:web:7453fc22816a8c63c1743a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);