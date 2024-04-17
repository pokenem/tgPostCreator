const TELEGRAM_BOT_TOKEN = "7109306231:AAHAh4R7XL1uG3AMchHTdyTJBgQSmiks0b0";
const TELEGRAM_CHAT_ID = "@PostCreator11";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendPost(event) {
    event.preventDefault();
    var text = document.getElementById('floatingTextarea').value;
    var file = document.getElementById('inputGroupFile').files[0];
    const form = new FormData();
    form.append('chat_id', TELEGRAM_CHAT_ID);
    form.append('parse_mode', 'HTML');
    form.append('caption', text);
    try {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      const response = await axios.post(API, form, { headers });
      console.log('Сообщение успешно отправлено в Telegram:', response.data);
    } catch (error) {
      console.error('Ошибка отправки сообщения в Telegram:', error);
    }
  }
