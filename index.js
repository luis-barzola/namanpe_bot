require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const telegramClint = require('./telegram_client')
const webhookRoutes = require('./webhook')
const scraper = require('./scraper')

const app = express()
app.use(bodyParser.json())
app.use('/webhook', webhookRoutes)

const initWebHook = async () => {
  const res = await telegramClint.setWebhook()
  console.log(res.data)
}

const port = process.env.PORT || 5002
app.listen(port, async () => {
  console.log('🚀 app running on port', port, '🚀')
  // await initWebHook()
  await scraper.checkElement('https://www.zonakids.com/productos/pack-x-25-sobres-de-figuritas-fifa-world-cup-qatar-2022/')
})

// reference
// Building a Telegram Bot with Node.js in 10 minutes -> https://www.youtube.com/watch?v=IlsygSzikOQ
