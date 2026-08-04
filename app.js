let arabic = true;


// عند فتح الصفحة نحفظ اللغة الحالية
let savedLanguage = localStorage.getItem("language");

if(savedLanguage === "tr"){
  arabic = false;

  document.getElementById("title").textContent =
  "🎙️ Mecd Geliştirici";

  document.getElementById("welcome").textContent =
  "Mecd Geliştirici'nin sitesine hoş geldiniz";

  document.getElementById("continueBtn").textContent =
  "➡️ Devam et";
}


// زر تغيير اللغة
document.getElementById("langToggleBtn").onclick = function(){

  if(arabic){

    document.getElementById("title").textContent =
    "🎙️ Mecd Geliştirici";

    document.getElementById("welcome").textContent =
    "Mecd Geliştirici'nin sitesine hoş geldiniz";

    document.getElementById("continueBtn").textContent =
    "➡️ Devam et";

    localStorage.setItem("language","tr");

  }else{

    document.getElementById("title").textContent =
    "🎙️ موقع المطور مجد";

    document.getElementById("welcome").textContent =
    "مرحبًا بك في موقع المطور مجد";

    document.getElementById("continueBtn").textContent =
    "➡️ أكمل";

    localStorage.setItem("language","ar");

  }

  arabic = !arabic;

};


// زر أكمل
document.getElementById("continueBtn").onclick = function(){

  window.location.href = "home.html";

};
