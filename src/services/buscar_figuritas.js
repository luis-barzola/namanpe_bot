const scraper = require('../clients/scraper')
const telegram = require('../clients/telegram_client')

const shops = [
  {
    vendor: 'ZonaKids',
    url: 'https://www.zonakids.com/productos/pack-x-25-sobres-de-figuritas-fifa-world-cup-qatar-2022/',
    checkStock: async (page) => {
      const value = await page.locator('.js-prod-submit-form').inputValue()
      return value !== 'Sin stock'
    }
  }
]

const checkStock = async () => {
  const { CHAT_ID } = process.env

  for (const shop of shops) {
    const { url, vendor, checkStock } = shop
    const hasStock = await scraper.checkElement(url, checkStock)

    if (hasStock) {
      await telegram.sendMessage(CHAT_ID, `🚀 ${vendor} tiene stock 🚀 \n ${url}`)
    }
  }
}

module.exports = { checkStock }
