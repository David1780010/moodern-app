const TelegramBot = require('node-telegram-bot-api');

const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';
const bot = new TelegramBot(token);

module.exports = async (req, res) => {
  try {
    const { body } = req;
    
    if (body.message) {
      const { chat: { id }, text } = body.message;
      
      if (text === '/start') {
        const message = `Привет! 👋\n\nДобро пожаловать в moodern design studio!\n\nМы предлагаем следующие услуги:\n• *UI/UX-дизайн*\n• *Аватарки*\n• *Баннеры*\n• *Стикеры и эмодзи*`;
        
        const opts = {
          parse_mode: 'Markdown',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Open App', url: 'https://t.me/moodern_app/app' }]
            ]
          }
        };
        
        await bot.sendMessage(id, message, opts);
      }
    }
    
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    res.status(500).json({ error: 'Failed to process update' });
  }
}; 