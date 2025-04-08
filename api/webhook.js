const TelegramBot = require('node-telegram-bot-api');

const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';
const url = 'https://moodern-app-david1780010.vercel.app';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(200).json({ ok: true, message: 'This endpoint is alive' });
        return;
    }

    try {
        const bot = new TelegramBot(token);
        const { body } = req;
        
        if (body.message && body.message.text === '/start') {
            const chatId = body.message.chat.id;
            await bot.sendMessage(chatId, `Привет! Мы — <b>moodern design studio</b> 🎨\n\nМы создаем уникальные дизайны для вашего бизнеса. Нажмите на кнопку ниже, чтобы открыть наше веб-приложение.`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: '🎨 Открыть приложение',
                            web_app: { url }
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
} 