const telegramClint = require('../clients/telegram_client')

const init = async () => {
  const res = await telegramClint.setWebhook()
  console.log(res.data)
}

module.exports = { init }
