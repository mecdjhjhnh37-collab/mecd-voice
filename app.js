let currentLang = "ar";

function toggleLanguage() {
  const title = document.getElementById("title");
  const welcome = document.getElementById("welcome");
  const loginBtn = document.getElementById("loginBtn");
  const langBtn = document.getElementById("langBtn");

  if (currentLang === "ar") {
    currentLang = "tr";

    document.documentElement.lang = "tr";
    title.textContent = "🎙️ Mecd Geliştirici";
    welcome.textContent = "Mecd Geliştirici'nin sitesine hoş geldiniz";
    loginBtn.textContent = "Google ile giriş yap";
    langBtn.textContent = "🇸🇦 العربية";
  } else {
    currentLang = "ar";

    document.documentElement.lang = "ar";
    title.textContent = "🎙️ موقع المطور مجد";
    welcome.textContent = "مرحبًا بك في موقع المطور مجد";
    loginBtn.textContent = "🇬🇴 تسجيل الدخول باستخدام Google";
    langBtn.textContent = "🇹🇷 Türkçe";
  }
}
