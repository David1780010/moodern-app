const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // Создаем кнопку "Open App"
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: 'Open App',
          url: 'http://t.me/MoodernDesignBot/MoodernDesign'
        }
      ]
    ]
  };

  // Текст сообщения с жирным форматированием
  const message = `Привет! Мы — *moodern design studio* 🎨

Делаем дизайн, который цепляет:  

• *UI/UX-дизайн* — продумываем интерфейсы до мелочей  
• *Аватарки* (анимированные и статичные) — чтобы вас замечали  
• *Баннеры* (анимированные и статичные) — для соцсетей и не только  
• *Стикеры и эмодзи* — добавляем эмоций в переписку  

И другое 🔹

Заказать можно в mini-app — заходите!😉👇`;

  // Отправляем сообщение с форматированием Markdown и кнопкой
  bot.sendMessage(chatId, message, {
    parse_mode: 'Markdown',
    reply_markup: keyboard
  });
});

console.log('Бот запущен...'); 