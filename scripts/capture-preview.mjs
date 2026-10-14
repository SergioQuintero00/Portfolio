import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'
import { preview } from 'vite'

const server = await preview({ preview: { host: '127.0.0.1', port: 4179, strictPort: true } })
let browser
try {
  browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1050 },
    locale: 'en-GB',
    colorScheme: 'light',
    reducedMotion: 'reduce',
    deviceScaleFactor: 1,
  })
  await page.goto('http://127.0.0.1:4179/?lang=en')
  await page.getByRole('heading', { level: 1 }).waitFor()
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all([...document.querySelectorAll('header img')].map((image) => image.decode()))
  })
  const output = new URL('../docs/preview.png', import.meta.url)
  await mkdir(new URL('../docs/', import.meta.url), { recursive: true })
  await page.screenshot({ path: fileURLToPath(output) })
  console.log('Saved docs/preview.png from the local production build.')
} finally {
  await browser?.close()
  await new Promise((resolve, reject) =>
    server.httpServer.close((error) => (error ? reject(error) : resolve())),
  )
}
