import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { db } from "./firebase.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";



// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6w8FuhmXbZRsrY7OURU5z_OeIHdUZYQY",
  authDomain: "mecd-voice.firebaseapp.com",
  projectId: "mecd-voice",
  storageBucket: "mecd-voice.firebasestorage.app",
  messagingSenderId: "257044858013",
  appId: "1:257044858013:web:03ad6c298183063ea40074"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



// اللغة

let arabic = true;

const savedLanguage = localStorage.getItem("language");

if(savedLanguage === "tr"){
  arabic = false;

  document.getElementById("title").textContent =
  "🎙️ Mecd Geliştirici";

  document.getElementById("welcome").textContent =
  "Mecd Geliştirici'nin sitesine hoş geldiniz";
}



document.getElementById("langToggleBtn").onclick = function(){

  if(arabic){

    document.getElementById("title").textContent =
    "🎙️ Mecd Geliştirici";

    document.getElementById("welcome").textContent =
    "Mecd Geliştirici'nin sitesine hoş geldiniz";

    localStorage.setItem("language","tr");

    arabic = false;

  }else{

    document.getElementById("title").textContent =
    "🎙️ موقع المطور مجد";

    document.getElementById("welcome").textContent =
    "مرحبًا بك في موقع المطور مجد";

    localStorage.setItem("language","ar");

    arabic = true;

  }

};



// تسجيل دخول Google

const provider = new GoogleAuthProvider();


document.getElementById("googleLogin").onclick = async function(){

try{


const result = await signInWithPopup(auth, provider);


const user = result.user;



const userRef = doc(db,"users",user.uid);


const userSnap = await getDoc(userRef);



if(!userSnap.exists()){


await setDoc(userRef,{

name:user.displayName,

email:user.email,

photo:user.photoURL,

id:"MV-" + Math.floor(100000 + Math.random()*900000)

});


}



localStorage.setItem("userId",user.uid);


window.location.href="home.html";



}catch(error){

console.log(error);

alert("حدث خطأ في تسجيل الدخول");

}


};
