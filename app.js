// استيراد مكتبات Firebase (تأكد من مطابقة إصدار 10 أو الإصدار الذي تستخدمه)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase.app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase.auth.js";

// ملاحظة: إذا كنت تقوم بتهيئة الـ Firebase في ملف firebase.js منفصل، 
// تأكد من ربطه أو استيراد الـ auth منه مباشرة.

// 1. برمجة زر تسجيل الدخول باستخدام جوجل
const googleLoginBtn = document.getElementById('googleLogin');

if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            
            // فتح نافذة تسجيل الدخول من جوجل
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            alert(`أهلاً بك يا ${user.displayName}، تم تسجيل الدخول بنجاح!`);
            console.log("Logged in user:", user);
            
        } catch (error) {
            console.error("خطأ في تسجيل الدخول:", error);
            alert("فشل تسجيل الدخول. تأكد من تفعيل Google Sign-in وإضافة رابط موقعك في إعدادات Firebase Authentication.");
        }
    });
}

// 2. دالة تغيير اللغة (التي تم استدعاؤها عبر onclick في HTML)
let currentLang = 'ar';

window.changeLang = function() {
    const title = document.getElementById('title');
    const welcome = document.getElementById('welcome');
    const langBtn = document.querySelector('.lang');
    const googleBtn = document.getElementById('googleLogin');

    if (currentLang === 'ar') {
        currentLang = 'tr';
        // تغيير النصوص إلى اللغة التركية
        title.innerHTML = '🎙️ Mecd Geliştirici Sitesi';
        welcome.innerHTML = 'Mecd Geliştirici Sitesine Hoş Geldiniz';
        langBtn.innerHTML = '🌍 Türkçe / العربية';
        googleBtn.innerHTML = '🔐 Google ile Giriş Yap';
    } else {
        currentLang = 'ar';
        // إرجاع النصوص إلى اللغة العربية
        title.innerHTML = '🎙️ موقع المطور مجد';
        welcome.innerHTML = 'مرحبًا بك في موقع المطور مجد';
        langBtn.innerHTML = '🌍 العربية / Türkçe';
        googleBtn.innerHTML = '🔐 تسجيل الدخول باستخدام Google';
    }
};
