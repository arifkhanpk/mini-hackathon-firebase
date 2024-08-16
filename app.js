// Import Firebase modules

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
  

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmVjp2mFrF1YZFNQOmbWmcN1ypVYAaO-0",
  authDomain: "mini-hackathon-firebase.firebaseapp.com",
  projectId: "mini-hackathon-firebase",
  storageBucket: "mini-hackathon-firebase.appspot.com",
  messagingSenderId: "595272317057",
  appId: "1:595272317057:web:3328a1cdc996a508b8f580"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-In
document.getElementById('signInForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'signin.html';
  } catch (error) {
    console.error('Error signing in:', error.message);
  }
});

// Sign-Up
document.getElementById('signUpForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = 'signup.html';
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
});




