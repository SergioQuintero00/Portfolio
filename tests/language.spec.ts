import { expect, test } from '@playwright/test'

for (const { browserLocale, expectedLanguage } of [
  { browserLocale: 'es', expectedLanguage: 'es' },
  { browserLocale: 'es-ES', expectedLanguage: 'es' },
  { browserLocale: 'es-MX', expectedLanguage: 'es' },
  { browserLocale: 'en-GB', expectedLanguage: 'en' },
  { browserLocale: 'fr-FR', expectedLanguage: 'en' },
]) {
  test.describe(`Browser language: ${browserLocale}`, () => {
    test.use({ locale: browserLocale })

    test('opens the matching page and offers the corresponding PDF', async ({ page, request }) => {
      await page.goto('/')
      await expect(page.locator('html')).toHaveAttribute('lang', expectedLanguage)
      await expect(page.locator('.language-switch [aria-current="page"]')).toHaveText(
        expectedLanguage.toUpperCase(),
      )
      const cv = `/documentos/Sergio_Quintero_Mena_CV${expectedLanguage === 'en' ? '_EN' : ''}.pdf`
      const downloads = page.locator('a[download]')
      await expect(downloads).toHaveCount(3)
      for (const link of await downloads.all()) await expect(link).toHaveAttribute('href', cv)
      const pdf = await request.get(cv)
      expect(pdf.ok()).toBeTruthy()
      expect(pdf.headers()['content-type']).toContain('application/pdf')
      expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-')
    })
  })
}

test('manual selection survives reload; a new root visit detects the browser again', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'en'] })
  })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await page.getByRole('link', { name: 'Read in English', exact: true }).click()
  await expect(page).toHaveURL('/?lang=en')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await page.getByRole('link', { name: 'Leer en español', exact: true }).click()
  await expect(page).toHaveURL('/es/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await page.goto('/?lang=en')
  await page.goto('/')
  await expect(page).toHaveURL('/es/')
})

test('explicit Spanish preserves the other parameters and section anchor', async ({ page }) => {
  await page.goto('/?lang=es&source=github#contacto')
  await expect(page).toHaveURL('/es/?source=github#contacto')
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
})

test('automatic Spanish redirect preserves parameters and section anchor', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'languages', { get: () => ['es-419'] })
  })
  await page.goto('/?source=github#contacto')
  await expect(page).toHaveURL('/es/?source=github#contacto')
})

for (const { name, languages, language, expected } of [
  {
    name: 'only the primary preference is used',
    languages: ['en-GB', 'es'],
    language: 'es',
    expected: 'en',
  },
  { name: 'navigator.language is the fallback', languages: [], language: 'es-MX', expected: 'es' },
  {
    name: 'unavailable preferences fall back to English',
    languages: [],
    language: '',
    expected: 'en',
  },
]) {
  test(name, async ({ page }) => {
    await page.addInitScript(
      ({ languages, language }) => {
        Object.defineProperty(navigator, 'languages', { get: () => languages })
        Object.defineProperty(navigator, 'language', { get: () => language })
      },
      { languages, language },
    )
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', expected)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Sergio')
  })
}

test.describe('Without JavaScript', () => {
  test.use({ javaScriptEnabled: false, locale: 'es-ES' })

  test('keeps both fallback pages, contact links and CVs accessible', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      /_EN\.pdf$/,
    )
    await page.getByRole('link', { name: 'Leer en español' }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
    await expect(page.getByRole('link', { name: 'Descargar CV' })).toHaveAttribute(
      'href',
      /_CV\.pdf$/,
    )
    await expect(page.getByRole('link', { name: 'sqmena@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:sqmena@gmail.com',
    )
    await page.getByRole('link', { name: 'Read in English' }).click()
    await expect(page).toHaveURL('/?lang=en')
  })
})
