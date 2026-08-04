alert("app.js اشتغل");
import { auth, db } from "./firebase.js";

import {
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



let arabic = true;


// تحميل اللغة

let savedLanguage = localStorage.getItem("language");


if(savedLanguage === "tr"){

arabic = false;

document.getElementById("title").textContent =
"🎙️ Mecd Geliştirici";


document.getElementById("welcome").textContent =
"Mecd Geliştirici'nin sitesine hoş geldiniz";

}




// زر اللغة

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





// Google Login


document.getElementById("googleLogin").onclick = async function(){


const provider = new GoogleAuthProvider();



try{


const result = await signInWithPopup(
auth,
provider
);



const user = result.user;



const userRef = doc(
db,
"users",
user.uid
);



const check = await getDoc(userRef);



if(!check.exists()){


await setDoc(userRef,{


name:user.displayName,

email:user.email,

photo:user.photoURL,

id:
"MV-" + Math.floor(100000 + Math.random()*900000)


});


}



localStorage.setItem(
"userId",
user.uid
);



window.location.href="home.html";



}catch(error){


console.log(error);

alert("فشل تسجيل الدخول");


}



};
