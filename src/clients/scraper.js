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

const checkElement = async (url, finder) => {
  await bowser(
    async (page) => {
      await page.goto(url)
      return await finder(page)
    }
  )
}

module.exports = { screenshot, checkElement }
