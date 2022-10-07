const { chromium } = require('playwright')

const bowser = async (command) => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await command(page)
  await browser.close()
}

const screenshot = async (url) => {
  await bowser(
    async (page) => {
      await page.goto(url)
      await page.screenshot({ path: 'page.png' })
    }
  )
}

const checkElement = async (url) => {
  await bowser(
    async (page) => {
      await page.goto(url)
      const value = await page.locator('.js-prod-submit-form').inputValue()
      return value !== 'Sin stock'
    }
  )
}

module.exports = { screenshot, checkElement }
