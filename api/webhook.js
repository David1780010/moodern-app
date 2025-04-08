const https = require('https');

const token = '7921918870:AAHbjorqQVBybUWqEs17ODhVznHhcSLm83w';

async function sendTelegramMessage(chatId, text, options = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      chat_id: chatId,
      text: text,
      ...options
    });

    const requestOptions = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${token}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(requestOptions, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(responseData));
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

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
        
        const options = {
          parse_mode: 'Markdown',
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Open App', url: 'https://t.me/moodern_app/app' }]
            ]
          })
        };
        
        try {
          console.log('Sending message to chat:', id);
          const result = await sendTelegramMessage(id, message, options);
          console.log('Message sent successfully:', result);
        } catch (sendError) {
          console.error('Error sending message:', sendError);
          throw sendError;
        }
      }
    }
    
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return res.status(500).json({ 
      ok: false,
      error: error.message || 'Failed to process update',
      stack: error.stack
    });
  }
}; 