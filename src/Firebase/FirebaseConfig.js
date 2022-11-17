// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP,
  authDomain: process.env.REACT_APP,
  projectId: process.env.REACT_APP,
  storageBucket: process.env.REACT_APP,
  messagingSenderId: process.env.REACT_APP,
  appId: process.env.REACT_APP,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;