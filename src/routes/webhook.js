const express = require('express')
const router = express.Router()
const telegramClint = require('../clients/telegram_client')

const { TELEGRAM_TOKEN } = process.env
const URI = `/${TELEGRAM_TOKEN}`

router.post(URI, async (req, res) => {
  console.log(req.body)
  const chatId = req.body.message.chat.id
  const text = req.body.message.text

  await telegramClint.sendMessage(chatId, text)

  return res.send()
})

module.exports = router
