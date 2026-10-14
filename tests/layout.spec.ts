import { expect, test } from '@playwright/test'

for (const language of ['en', 'es']) {
  for (const colorScheme of ['light', 'dark'] as const) {
    test.describe(`${language} / ${colorScheme}`, () => {
      test.use({ colorScheme })

      test('renders all sections and images without horizontal overflow or page errors', async ({
        page,
      }, testInfo) => {
        const errors: string[] = []
        page.on('pageerror', (error) => errors.push(error.message))
        await page.goto(language === 'es' ? '/es/' : '/?lang=en')
        await expect(page.getByRole('heading', { level: 1 })).toContainText('Sergio')
        await expect(page.locator('main > section')).toHaveCount(4)
        await page.locator('summary').click()
        for (const image of await page.locator('#root img').all()) {
          await image.scrollIntoViewIfNeeded()
          await expect(image).toBeVisible()
          await expect
            .poll(() => image.evaluate((node: HTMLImageElement) => node.naturalWidth))
            .toBeGreaterThan(0)
        }
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        ).toBe(true)
        expect(errors).toEqual([])
        await page.locator('summary').click()
        await page.evaluate(() => window.scrollTo(0, 0))
        await page.evaluate(() => document.fonts.ready)
        const screenshot = await page.screenshot({ fullPage: true })
        await testInfo.attach(`${language}-${colorScheme}`, {
          body: screenshot,
          contentType: 'image/png',
        })
      })
    })
  }
}
