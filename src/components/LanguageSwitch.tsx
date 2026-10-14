import type { Locale, PortfolioContent } from '../content'

export function LanguageSwitch({ locale, ui }: { locale: Locale; ui: PortfolioContent['ui'] }) {
  return (
    <nav
      aria-label={ui.language}
      className="language-switch flex rounded-full border border-line p-1 text-xs font-semibold"
    >
      {(
        [
          { code: 'en', href: '/?lang=en', label: ui.english },
          { code: 'es', href: '/es/', label: ui.spanish },
        ] as const
      ).map((option) => (
        <a
          key={option.code}
          href={option.href}
          hrefLang={option.code}
          lang={option.code}
          aria-label={option.label}
          aria-current={locale === option.code ? 'page' : undefined}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${locale === option.code ? 'bg-accent text-page' : 'text-muted hover:text-ink'}`}
        >
          {option.code.toUpperCase()}
        </a>
      ))}
    </nav>
  )
}
