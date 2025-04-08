const TelegramBot = require('node-telegram-bot-api');

const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';
const bot = new TelegramBot(token);

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'Webhook is active' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { body } = req;
    console.log('Received update:', JSON.stringify(body, null, 2));
    
    if (body.message) {
      const { chat: { id }, text } = body.message;
      console.log('Received message:', text, 'from chat:', id);
      
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
        
        console.log('Sending message to chat:', id);
        await bot.sendMessage(id, message, opts);
        console.log('Message sent successfully');
      }
    }
    
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return res.status(500).json({ error: 'Failed to process update' });
  }
}; 