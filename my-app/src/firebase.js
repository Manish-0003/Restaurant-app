import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNAccJ3bZH4dwJbm7iZDW7RrUfuKVZYwo",
  authDomain: "restaurant-bcdfa.firebaseapp.com",
  projectId: "restaurant-bcdfa",
  storageBucket: "restaurant-bcdfa.firebasestorage.app",
  messagingSenderId: "866614000746",
  appId: "1:866614000746:web:9dd7f0233568d77812de13",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
