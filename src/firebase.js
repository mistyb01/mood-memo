// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsvtXi0SyydAQzTbTgSPZUAbuwUOrLLrY",
  authDomain: "moodmemo.firebaseapp.com",
  projectId: "moodmemo",
  storageBucket: "moodmemo.appspot.com",
  messagingSenderId: "198191649247",
  appId: "1:198191649247:web:2d9457b7e9a10d04cb346a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}