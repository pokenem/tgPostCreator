const TELEGRAM_BOT_TOKEN = "7109306231:AAHAh4R7XL1uG3AMchHTdyTJBgQSmiks0b0";
const TELEGRAM_CHAT_ID = "-1002030954149";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendPost(event) {
    event.preventDefault();
    var text = document.getElementById('floatingTextarea').value;
    var file = document.getElementById('inputGroupFile').files[0];
    var rows = document.querySelectorAll('div[name="buttonRow"]');
    var imaged = document.getElementById('image');
    let arr = new Array(rows.length);
    for(let i = 0; i < rows.length; i++)
    {
      var textButton = rows[i].querySelectorAll('input[name="buttonText"]');
      var urlButton = rows[i].querySelectorAll('input[name="buttonUrl"]');
      let roww = new Array(textButton.length);
      for(let j = 0; j < textButton.length; j++)
      {
          roww[j] = {text: textButton[j].value, url: urlButton[j].value};
      }
      arr[i] = roww;
    } 
   const formData = new FormData();
formData.append('chat_id', TELEGRAM_CHAT_ID);
formData.append('photo','https://alterainvest.ru/upload/resize_cache/iblock/b01/730_520_23b1e49a4dc02bff92a20ae5cf2cd382c/b010c53123be5f7ba753fe09e34f68a0.jpg');
formData.append('caption', text);
formData.append('parse_mode', 'HTML');
formData.append('reply_markup', JSON.stringify({
  inline_keyboard: arr
}));

// Отправляем запрос к API Телеграма
axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
  .then(response => {
    console.log('Сообщение успешно отправлено:', response.data);
  })
  .catch(error => {
    console.error('Ошибка при отправке сообщения:', error);
  });
  }
