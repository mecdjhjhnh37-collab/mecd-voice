let arabic = true;


document.getElementById("langToggleBtn").onclick = function(){

if(arabic){

document.getElementById("title").textContent =
"🎙️ Mecd Geliştirici";

document.getElementById("welcome").textContent =
"Mecd Geliştirici'nin sitesine hoş geldiniz";

document.getElementById("continueBtn").textContent =
"➡️ Devam et";

}else{

document.getElementById("title").textContent =
"🎙️ موقع المطور مجد";

document.getElementById("welcome").textContent =
"مرحبًا بك في موقع المطور مجد";

document.getElementById("continueBtn").textContent =
"➡️ أكمل";

}

arabic = !arabic;

};



document.getElementById("continueBtn").onclick = function(){

alert("أهلاً بك في الموقع 🚀");

};
