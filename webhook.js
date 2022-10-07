const express = require('express')
const router = express.Router()
const telegramClint = require('./telegram_client')

const { TOKEN } = process.env
const URI = `/${TOKEN}`

router.post(URI, async (req, res) => {
  console.log(req.body)
  const chatId = req.body.message.chat.id
  const text = req.body.message.text

  await telegramClint.sendMessage(chatId, text)

  return res.send()
})

module.exports = router
