// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6w8FuhmXbZR7YOURU5z_OeIHdUZYQY",
  authDomain: "mecd-voice.firebaseapp.com",
  projectId: "mecd-voice",
  storageBucket: "mecd-voice.firebasestorage.app",
  messagingSenderId: "257044858013",
  appId: "1:257044858013:web:41d6b319022d6edea40074",
  measurementId: "G-6J08MM27J2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
