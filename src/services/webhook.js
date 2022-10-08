const telegramClint = require('../clients/telegram_client')

const initWebHook = async () => {
  const res = await telegramClint.setWebhook()
  console.log(res.data)
}

module.exports = { initWebHook }
