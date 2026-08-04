import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";

const googleLogin = document.getElementById("googleLogin");

if (googleLogin) {
  googleLogin.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      alert("مرحبًا " + user.displayName);

    } catch (error) {
      alert("حدث خطأ في تسجيل الدخول");
      console.log(error);
    }
  });
}
