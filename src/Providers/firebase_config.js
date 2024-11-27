// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4HJFa49Menh5qBQN5o-2PAo9R-EjZSzs",
  authDomain: "sucess-blueprint.firebaseapp.com",
  projectId: "sucess-blueprint",
  storageBucket: "sucess-blueprint.firebasestorage.app",
  messagingSenderId: "379316956391",
  appId: "1:379316956391:web:3f99bab6dff130bc1c8642",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
