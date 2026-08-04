alert("app.js اشتغل");

import { auth, db } from "./firebase.js";

import {
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// اللغة

let language = localStorage.getItem("language") || "ar";


function changeLanguage(){

let title = document.getElementById("title");
let welcome = document.getElementById("welcome");


if(!title || !welcome) return;


if(language === "tr"){

title.textContent = "🎙️ Mecd Geliştirici";

welcome.textContent =
"Mecd Geliştirici'nin sitesine hoş geldiniz";

}else{

title.textContent =
"🎙️ موقع المطور مجد";

welcome.textContent =
"مرحبًا بك في موقع المطور مجد";

}

}


changeLanguage();



// زر اللغة

let langBtn = document.getElementById("langToggleBtn");


if(langBtn){

langBtn.onclick = ()=>{


if(language === "ar"){

language="tr";

}else{

language="ar";

}


localStorage.setItem("language",language);

changeLanguage();


};

}



// تسجيل الدخول Google

let googleBtn =
document.getElementById("googleLogin");


if(googleBtn){


googleBtn.onclick = async ()=>{


const provider =
new GoogleAuthProvider();


try{


const result =
await signInWithPopup(auth,provider);


const user = result.user;


await setDoc(
doc(db,"users",user.uid),
{

name:user.displayName,

email:user.email,

photo:user.photoURL,

id:
"MV-" +
Math.floor(100000 + Math.random()*900000)

}

);



localStorage.setItem(
"userId",
user.uid
);



window.location.href="home.html";


}catch(error){


console.log(error);

alert(
"حدث خطأ في تسجيل الدخول"
);


}


};


}
