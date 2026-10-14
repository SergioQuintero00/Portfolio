import { expect, test } from '@playwright/test'

for (const initialTheme of ['light', 'dark'] as const) {
  test.describe(`System theme: ${initialTheme}`, () => {
    test.use({ colorScheme: initialTheme })

    test('uses the system preference and persists the manual choice across pages', async ({
      page,
    }) => {
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      await page.goto('/?lang=en')
      await expect(page.locator('html')).toHaveAttribute('data-theme', initialTheme)
      await page.getByRole('button', { name: `Switch to ${targetTheme} theme` }).click()
      await expect(page.locator('html')).toHaveAttribute('data-theme', targetTheme)
      await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
        'content',
        targetTheme === 'dark' ? '#101f24' : '#f5f3ee',
      )
      await page.reload()
      await expect(page.locator('html')).toHaveAttribute('data-theme', targetTheme)
      await page.getByRole('link', { name: 'Leer en español', exact: true }).click()
      await expect(page.locator('html')).toHaveAttribute('data-theme', targetTheme)
    })
  })
}

test('theme toggle still works when browser storage is blocked', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new DOMException('Blocked', 'SecurityError')
    }
    Storage.prototype.setItem = () => {
      throw new DOMException('Blocked', 'SecurityError')
    }
  })
  await page.goto('/?lang=en')
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('copies the email, announces success and clears the confirmation', async ({ page }) => {
  // Isolate the clipboard boundary so the test never overwrites the user's clipboard.
  await page.addInitScript(() => {
    let clipboardText = ''
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async (value: string) => {
          clipboardText = value
        },
        readText: async () => clipboardText,
      },
    })
  })
  await page.goto('/?lang=en')
  await page.getByRole('button', { name: 'Copy email address' }).click()
  await expect(page.getByRole('status')).toHaveText('Email copied.')
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('sqmena@gmail.com')
  await expect(page.getByRole('status')).toBeEmpty()
  await expect(page.getByRole('button', { name: 'Copy email address' })).toBeVisible()
})

test('clipboard failure leaves a usable email link and explains the fallback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async () => {
          throw new DOMException('Denied', 'NotAllowedError')
        },
      },
    })
  })
  await page.goto('/?lang=en')
  await page.getByRole('button', { name: 'Copy email address' }).click()
  await expect(page.getByRole('status')).toContainText('copy')
  await expect(page.getByRole('status')).not.toHaveText('Email copied.')
  await expect(page.getByRole('link', { name: 'sqmena@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:sqmena@gmail.com',
  )
})

test('project details open with a keyboard and no unavailable demo is advertised', async ({
  page,
}) => {
  await page.goto('/?lang=en')
  const summary = page.locator('summary')
  await summary.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('details')).toHaveAttribute('open', '')
  await expect(page.locator('details img')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Try the application' })).toHaveCount(0)
  await expect(page.getByRole('link', { name: 'Watch project video' })).toHaveAttribute(
    'href',
    'https://youtu.be/McU3I_yYk_A',
  )
})

test('section navigation follows clicks and scrolling', async ({ page }) => {
  await page.goto('/?lang=en')
  const navigation = page.getByRole('navigation', { name: 'Portfolio sections' })
  await navigation.getByRole('link', { name: 'Experience', exact: true }).click()
  await expect(page).toHaveURL('/?lang=en#experiencia')
  await expect(navigation.getByRole('link', { name: 'Experience', exact: true })).toHaveAttribute(
    'aria-current',
    'location',
  )
  await page.locator('#sobre-mi').scrollIntoViewIfNeeded()
  await expect(navigation.getByRole('link', { name: 'About', exact: true })).toHaveAttribute(
    'aria-current',
    'location',
  )
})

test('keeps the old contact address working', async ({ page }) => {
  await page.goto('/contacto.html')
  await expect(page).toHaveURL('/es/#contacto')
  await expect(page.getByRole('link', { name: 'sqmena@gmail.com' })).toBeVisible()
})
