import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// زر تغيير اللغة
const langButton = document.getElementById("langToggleBtn");

let arabic = true;

langButton.onclick = () => {

  if(arabic){

    document.getElementById("title").textContent =
    "🎙️ Mecd Geliştirici";

    document.getElementById("welcome").textContent =
    "Mecd Geliştirici'nin sitesine hoş geldiniz";

  }else{

    document.getElementById("title").textContent =
    "🎙️ موقع المطور مجد";

    document.getElementById("welcome").textContent =
    "مرحبًا بك في موقع المطور مجد";

  }

  arabic = !arabic;

};


// زر تسجيل الدخول
const googleButton = document.getElementById("googleLogin");

googleButton.onclick = async () => {

  try {

    const result = await signInWithPopup(auth, provider);

    alert("مرحبًا " + result.user.displayName);

  } catch(error){

    console.log(error);
    alert(error.message);

  }

};
