import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// زر تغيير اللغة
let arabic = true;

document.getElementById("langToggleBtn").onclick = function(){

  if(arabic){
    document.getElementById("title").innerHTML = "🎙️ Mecd Geliştirici";
    document.getElementById("welcome").innerHTML =
    "Mecd Geliştirici'nin sitesine hoş geldiniz";
  }else{
    document.getElementById("title").innerHTML = "موقع المطور مجد";
    document.getElementById("welcome").innerHTML =
    "مرحبًا بك في موقع المطور مجد";
  }

  arabic = !arabic;
};


// زر تسجيل الدخول Google
document.getElementById("googleLogin").onclick = async function(){

  try{

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    alert("مرحبًا " + user.displayName);

  }catch(error){

    console.log(error);
    alert("حدث خطأ في تسجيل الدخول");

  }

};
