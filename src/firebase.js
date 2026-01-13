import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyRiselfmzKvlnlAhw85-iJFNnK-fp7Ko",
  authDomain: "portfolio-b35ca.firebaseapp.com",
  projectId: "portfolio-b35ca",
  storageBucket: "portfolio-b35ca.firebasestorage.app",
  messagingSenderId: "2515692888",
  appId: "1:2515692888:web:89f81c6508fe31dfa9492d",
  measurementId: "G-QB8ZYB46BE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export default app;