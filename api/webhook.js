const TelegramBot = require('node-telegram-bot-api');

const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';
const bot = new TelegramBot(token);

module.exports = async (req, res) => {
    try {
        const { body } = req;
        
        if (body.message && body.message.text === '/start') {
            const chatId = body.message.chat.id;
            await bot.sendMessage(chatId, `Привет! Мы — <b>moodern design studio</b> 🎨

Делаем дизайн, который цепляет:  

• <b>UI/UX-дизайн</b> — продумываем интерфейсы до мелочей  
• <b>Аватарки</b> (анимированные и статичные) — чтобы вас замечали  
• <b>Баннеры</b> (анимированные и статичные) — для соцсетей и не только  
• <b>Стикеры и эмодзи</b> — добавляем эмоций в переписку  

И другое 🔹

Заказать можно в mini-app — заходите!😉👇`, {
                parse_mode: 'MarkDownV2',
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Open App',
                            web_app: { url: 'https://moodern-app-david1780010.vercel.app' }
                        }
                    ]]
                }
            });
        }
        
        res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Error in webhook handler:', error);
        res.status(500).json({ ok: false, error: error.message });
    }
}; 