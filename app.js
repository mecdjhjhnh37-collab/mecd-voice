let arabic = true;


// تغيير اللغة
document.getElementById("langToggleBtn").onclick = function(){

  if(arabic){

    document.getElementById("title").textContent =
    "🎙️ Mecd Geliştirici";

    document.getElementById("welcome").textContent =
    "Mecd Geliştirici'nin sitesine hoş geldiniz";

    document.getElementById("continueBtn").textContent =
    "➡️ Devam et";

    arabic = false;

  }else{

    document.getElementById("title").textContent =
    "🎙️ موقع المطور مجد";

    document.getElementById("welcome").textContent =
    "مرحبًا بك في موقع المطور مجد";

    document.getElementById("continueBtn").textContent =
    "➡️ أكمل";

    arabic = true;

  }

};


// زر أكمل
document.getElementById("continueBtn").onclick = function(){

  if(arabic){

    localStorage.setItem("language","ar");

  }else{

    localStorage.setItem("language","tr");

  }

  window.location.href = "home.html";

};
