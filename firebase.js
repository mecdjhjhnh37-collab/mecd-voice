import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6w8FuhmXbZRrY7OURU5z_OeIHdUZYQY",
  authDomain: "mecd-voice.firebaseapp.com",
  projectId: "mecd-voice",
  storageBucket: "mecd-voice.firebasestorage.app",
  messagingSenderId: "257044858013",
  appId: "1:257044858013:web:03ad6c298183063ea40074",
  measurementId: "G-JPBR5SXERR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
