const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на токен вашего бота
const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = `Привет! Мы — <b>moodern design studio</b> 🎨

Делаем дизайн, который цепляет:  

• <b>UI/UX-дизайн</b> — продумываем интерфейсы до мелочей  
• <b>Аватарки</b> (анимированные и статичные) — чтобы вас замечали  
• <b>Баннеры</b> (анимированные и статичные) — для соцсетей и не только  
• <b>Стикеры и эмодзи</b> — добавляем эмоций в переписку  

И другое 🔹

Заказать можно в mini-app — заходите!😉👇`;

    const keyboard = {
        inline_keyboard: [
            [
                {
                    text: 'Open App',
                    url: 'https://t.me/MoodernDesignBot/MoodernDesign'
                }
            ]
        ]
    };

    bot.sendMessage(chatId, message, {
        parse_mode: 'HTML',
        reply_markup: keyboard
    });
});

console.log('Bot is running...'); 