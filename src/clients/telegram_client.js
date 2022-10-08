const { TELEGRAM_TOKEN, SERVER_URL } = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
const URI = `/webhook/${TELEGRAM_TOKEN}`
const WEBHOOK_URL = SERVER_URL + URI
const axios = require('axios')

const setWebhook = () => axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)

const sendMessage = (chatId, text) => axios.post(`${TELEGRAM_API}/sendMessage`, {
  chat_id: chatId, text: text
})

module.exports = {
  setWebhook,
  sendMessage
}
