import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA0FXk5WQycTc7rsTZkSZHgX38S0fAHvxI",
  authDomain: "paysample.firebaseapp.com",
  projectId: "paysample",
  storageBucket: "paysample.firebasestorage.app",
  messagingSenderId: "971455977437",
  appId: "1:971455977437:web:bbdeece27e2de5beaa4834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("User logged out");
  }
});