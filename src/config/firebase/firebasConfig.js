import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1d-_ROAiLdez3804lnle3_NrDk3YwVv0",
  authDomain: "newsappwithfirebaseauth.firebaseapp.com",
  projectId: "newsappwithfirebaseauth",
  storageBucket: "newsappwithfirebaseauth.appspot.com",
  messagingSenderId: "443907202538",
  appId: "1:443907202538:web:b255f46c6da9ee67a2e693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;