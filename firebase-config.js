// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa58FwdAcwozKZU9_i2ySp1eY1hMVEDhE",
  authDomain: "estetica-petts.firebaseapp.com",
  projectId: "estetica-petts",
  storageBucket: "estetica-petts.firebasestorage.app",
  messagingSenderId: "461003309445",
  appId: "1:461003309445:web:ab869e9e0c31bcf30404ec",
  measurementId: "G-BR9DG8LJQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
