// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-In
document.getElementById('signInForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
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
    window.location.href = 'dashboard.html';
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
});

// Sign-Out
document.getElementById('signOutBtn')?.addEventListener('click', async () => {
  try {
    await signOut(auth);
    window.location.href = 'signin.html';
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
});

// Redirect to dashboard if user is already signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (window.location.pathname === '/signin.html') {
      window.location.href = 'dashboard.html';
    }
  }
});
