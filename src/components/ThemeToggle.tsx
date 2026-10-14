import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import type { PortfolioContent } from '../content'

type Theme = 'light' | 'dark'

export function ThemeToggle({ ui }: { ui: PortfolioContent['ui'] }) {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'dark' ? '#101f24' : '#f5f3ee'
    try {
      localStorage.setItem('sergio-portfolio-theme', theme)
    } catch {
      /* El tema funciona aunque el navegador bloquee el almacenamiento. */
    }
  }, [theme])
  const target = theme === 'dark' ? ui.light : ui.dark
  const label = theme === 'dark' ? ui.switchLight : ui.switchDark
  return (
    <button
      className="theme-toggle inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-ink"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? (
        <Sun size={15} aria-hidden="true" />
      ) : (
        <Moon size={15} aria-hidden="true" />
      )}
      <span>{target}</span>
    </button>
  )
}
