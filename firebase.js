import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6w8FuhmXbZRsrY70URU5z_OeIHdUZYQY",
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

provider.setCustomParameters({
  prompt: "select_account"
});
