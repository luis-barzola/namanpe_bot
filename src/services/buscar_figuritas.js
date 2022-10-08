const scraper = require('../clients/scraper')
const telegram = require('../clients/telegram_client')

const hasStock = async () => {
  return await scraper.checkElement(
    'https://www.zonakids.com/productos/pack-x-25-sobres-de-figuritas-fifa-world-cup-qatar-2022/',
    async (page) => {
      const value = await page.locator('.js-prod-submit-form').inputValue()
      return value !== 'Sin stock'
    }
  )
}

const init = async () => {
  const { CHAT_ID } = process.env

  if (await hasStock()) {
    await telegram.sendMessage(CHAT_ID, '🚀 Hay Stock')
  }
}

module.exports = { init }
