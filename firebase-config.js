// Configuração do Firebase
const firebaseConfig = {
     apiKey: "AIzaSyAa58FwdAcwozKZU9_i2ySp1eY1hMVEDhE",
  authDomain: "estetica-petts.firebaseapp.com",
  projectId: "estetica-petts",
  storageBucket: "estetica-petts.firebasestorage.app",
  messagingSenderId: "461003309445",
  appId: "1:461003309445:web:ab869e9e0c31bcf30404ec",
  measurementId: "G-BR9DG8LJQK"
};

// Inicializar o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
