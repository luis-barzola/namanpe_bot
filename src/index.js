require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const webhookRoutes = require('./routes/webhook')
const cron = require('./services/cron')

const app = express()
app.use(bodyParser.json())
app.use('/webhook', webhookRoutes)

const port = process.env.PORT || 5002
app.listen(port, async () => {
  console.log('🚀 app running on port', port, '🚀')
  cron.init()
})

// reference
// Building a Telegram Bot with Node.js in 10 minutes -> https://www.youtube.com/watch?v=IlsygSzikOQ
