import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// تغيير اللغة
let arabic = true;

const langButton = document.getElementById("langToggleBtn");

if(langButton){

  langButton.onclick = function(){

    if(arabic){

      document.getElementById("title").innerHTML = "🎙️ Mecd Geliştirici";

      document.getElementById("welcome").innerHTML =
      "Mecd Geliştirici'nin sitesine hoş geldiniz";

    }else{

      document.getElementById("title").innerHTML =
      "🎙️ موقع المطور مجد";

      document.getElementById("welcome").innerHTML =
      "مرحبًا بك في موقع المطور مجد";

    }

    arabic = !arabic;

  };

}


// تسجيل الدخول بجوجل
const googleButton = document.getElementById("googleLogin");

if(googleButton){

  googleButton.onclick = async function(){

    try{

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      alert("مرحبًا " + user.displayName);

    }catch(error){

      console.log(error);

      alert(error.message);

    }

  };

}
