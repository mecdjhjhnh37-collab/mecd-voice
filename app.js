import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// زر تغيير اللغة
let arabic = true;

document.getElementById("langToggleBtn").onclick = function(){

  if(arabic){

    document.getElementById("title").textContent = "🎙️ Mecd Geliştirici";

    document.getElementById("welcome").textContent =
    "Mecd Geliştirici'nin sitesine hoş geldiniz";

  }else{

    document.getElementById("title").textContent = "🎙️ موقع المطور مجد";

    document.getElementById("welcome").textContent =
    "مرحبًا بك في موقع المطور مجد";

  }

  arabic = !arabic;

};


// تسجيل الدخول Google
document.getElementById("googleLogin").onclick = async function(){

  try {

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    alert("تم تسجيل الدخول: " + user.displayName);

  } catch(error) {

    console.log(error);

    alert("خطأ: " + error.message);

  }

};
