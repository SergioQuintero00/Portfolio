import { ArrowDown, ArrowDownToLine, MapPin, Trophy } from 'lucide-react'
import { sharedProfile } from '../content'
import type { Locale, PortfolioContent } from '../content'
import { Github, Linkedin } from './BrandIcons'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeToggle } from './ThemeToggle'

type HeaderProps = {
  locale: Locale
  content: PortfolioContent
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Header({ locale, content, activeSection, onSectionChange }: HeaderProps) {
  const profile = { ...sharedProfile, ...content.profile }
  return (
    <header className="pt-8 pb-12 lg:sticky lg:top-0 lg:flex lg:max-h-[100svh] lg:flex-col lg:py-12">
      <div className="mb-10 flex items-center justify-between gap-3 lg:mb-8">
        <a
          href="#"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          aria-label={content.ui.home}
        >
          <img
            src={profile.logo}
            alt=""
            width="48"
            height="48"
            className="h-full w-full object-contain"
          />
        </a>
        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} ui={content.ui} />
          <ThemeToggle ui={content.ui} />
        </div>
      </div>
      <div className="flex items-start gap-4 sm:gap-5">
        {profile.portrait && (
          <img
            className="h-auto w-20 shrink-0 rounded-xl border border-line sm:w-24"
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(min-width: 640px) 96px, 80px"
            alt={profile.portraitAlt}
            width="1158"
            height="1358"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.12em] uppercase text-accent">
            {profile.role}
          </p>
          <h1 className="font-display text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.055em] text-ink sm:text-[2.7rem] lg:text-[2.25rem] xl:text-[2.5rem]">
            Sergio
            <br />
            Quintero Mena<span className="text-accent">.</span>
          </h1>
        </div>
      </div>
      <p className="mt-6 max-w-[340px] text-[15px] leading-relaxed text-muted">{profile.intro}</p>
      <p className="mt-4 text-xs font-medium text-accent">{profile.focus}</p>
      <a
        href="#sobre-mi"
        className="mt-4 inline-flex items-start gap-2 text-xs leading-relaxed text-accent hover:underline"
      >
        <Trophy size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
        {profile.award}
      </a>
      <p className="mt-5 flex items-center gap-2 text-xs text-muted">
        <MapPin size={13} aria-hidden="true" />
        {profile.location}
      </p>
      <nav aria-label={content.ui.nav} className="mt-8 lg:mt-10">
        <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:block lg:space-y-3">
          {content.sections.map((section) => (
            <li key={section.id}>
              <a
                className={`nav-link group flex items-center gap-3 py-1 text-xs ${activeSection === section.id ? 'is-active' : ''}`}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? 'location' : undefined}
                onClick={() => onSectionChange(section.id)}
              >
                <span
                  className="nav-line hidden h-px w-5 bg-line transition-all lg:block"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] text-accent" aria-hidden="true">
                  {section.number}
                </span>
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 pt-3 lg:mt-auto lg:pt-9">
        <div className="flex items-center gap-5">
          <a
            className="social-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.ui.linkedin}
          >
            <Linkedin size={19} strokeWidth={1.6} />
          </a>
          <a
            className="social-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.ui.github}
          >
            <Github size={20} strokeWidth={1.6} />
          </a>
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <a href={profile.cv} download className="text-link text-xs">
            {content.ui.download}
            <ArrowDownToLine size={14} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-5 hidden text-[10px] tracking-[0.12em] uppercase text-muted lg:block">
          Portfolio · 2026
        </p>
      </div>
      <a
        href="#proyecto"
        className="mt-8 inline-flex items-center gap-2 text-xs text-accent lg:hidden"
      >
        {content.ui.explore}
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </header>
  )
}
