import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("googleLogin").onclick = async function () {

  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    alert("مرحبًا " + user.displayName);

  } catch (error) {
    console.log(error);
    alert("حدث خطأ في تسجيل الدخول");
  }

};
