import { useEffect, useState } from 'react'
import type { ReactNode, SVGProps } from 'react'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Database,
  ExternalLink,
  Layers3,
  MapPin,
  Monitor,
  Moon,
  Play,
  Smartphone,
  Sun,
  Trophy,
} from 'lucide-react'
import { localizedContent, sharedProfile, project } from './content'
import type { Locale } from './content'

const locale: Locale = document.documentElement.lang === 'es' ? 'es' : 'en'
const content = localizedContent[locale]
const profile = { ...sharedProfile, ...content.profile }
const { education, experience, skillGroups, sections } = content

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number }

function Linkedin({ size = 19, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Github({ size = 20, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.5-3.7 4.9 4.9 0 0 0-.1-3.7S17.5.9 15 2.7a13.1 13.1 0 0 0-6 0C6.5.9 5.3 1.3 5.3 1.3A4.9 4.9 0 0 0 5.2 5a5.3 5.3 0 0 0-1.5 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  )
}

function LanguageSwitch() {
  return (
    <nav
      aria-label={content.ui.language}
      className="language-switch flex rounded-full border border-line p-1 text-xs font-semibold"
    >
      {(
        [
          { code: 'en', href: '/', label: content.ui.english },
          { code: 'es', href: '/es/', label: content.ui.spanish },
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

type Theme = 'light' | 'dark'

function ThemeToggle() {
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
  const target = theme === 'dark' ? content.ui.light : content.ui.dark
  const label = theme === 'dark' ? content.ui.switchLight : content.ui.switchDark
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

function SectionHeading({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-heading mb-8 flex items-center gap-4">
      <span className="font-mono text-xs text-accent" aria-hidden="true">
        {number}
      </span>
      <h2 className="text-xs font-bold tracking-[0.18em] uppercase text-ink">{children}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5" aria-label={content.ui.technologies}>
      {items.map((item) => (
        <li key={item} className="text-xs font-medium text-accent">
          {item}
        </li>
      ))}
    </ul>
  )
}

function ProjectFlow() {
  return (
    <div className="project-visual relative overflow-hidden rounded-xl border border-line p-4 sm:p-8">
      <div className="relative mb-8 flex items-center justify-between gap-3 text-[10px] font-semibold tracking-[0.13em] uppercase text-muted">
        <span>{content.project.name}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {content.project.realTime}
        </span>
      </div>
      <div className="relative grid grid-cols-[1fr_18px_1fr_18px_1fr] items-center gap-1 sm:grid-cols-[1fr_26px_1fr_26px_1fr] sm:gap-3">
        <div className="flow-node">
          <Smartphone size={29} strokeWidth={1.3} aria-hidden="true" />
          <span>{content.project.waiter}</span>
          <small>React</small>
        </div>
        <ArrowRight
          className="w-full text-accent/60"
          size={22}
          strokeWidth={1.3}
          aria-hidden="true"
        />
        <div className="flow-node flow-node-center">
          <Layers3 size={29} strokeWidth={1.3} aria-hidden="true" />
          <span>API</span>
          <small>Node.js</small>
        </div>
        <ArrowRight
          className="w-full text-accent/60"
          size={22}
          strokeWidth={1.3}
          aria-hidden="true"
        />
        <div className="flow-node">
          <Monitor size={29} strokeWidth={1.3} aria-hidden="true" />
          <span>{content.project.kitchen}</span>
          <small>Socket.IO</small>
        </div>
      </div>
      <div className="relative mt-7 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] text-muted">
          <Database size={13} aria-hidden="true" />
          {content.project.database}
        </span>
      </div>
      <p className="relative mt-6 text-center text-[10px] tracking-[0.1em] uppercase text-muted">
        {content.project.diagram}
      </p>
    </div>
  )
}

function Project() {
  return (
    <section id="proyecto" aria-labelledby="project-title" className="page-section">
      <SectionHeading number="01">{content.project.heading}</SectionHeading>
      <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <span>{content.project.context}</span>
        <span aria-hidden="true">/</span>
        <span>2025</span>
      </div>
      <h3
        id="project-title"
        className="font-display text-[2.5rem] leading-[1.12] font-semibold tracking-[-0.055em] text-ink sm:text-5xl"
      >
        {content.project.title}
        <br />
        <span className="text-accent">{content.project.titleAccent}</span>
      </h3>
      <p className="mt-5 mb-7 max-w-xl text-[15px] leading-relaxed text-muted">
        {content.project.intro}
      </p>
      <ProjectFlow />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <Tags items={project.stack} />
        <span className="text-[11px] text-muted">{content.project.individual}</span>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <a
          href={project.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          <Play size={15} aria-hidden="true" />
          {content.project.video}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        {project.demoUrl && (
          <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            {content.project.demo}
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        )}
      </div>
      <details className="project-details group mt-8 border-t border-line">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold text-ink">
          {content.project.details}
          <ChevronDown
            className="transition-transform group-open:rotate-180"
            size={17}
            aria-hidden="true"
          />
        </summary>
        <div className="pb-3 text-sm leading-relaxed text-muted">
          <p>{content.project.explanation}</p>
          <div className="my-6 grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-ink">{content.project.integrationTitle}</h4>
              <p>{content.project.integration}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-ink">{content.project.developmentTitle}</h4>
              <p>{content.project.development}</p>
            </div>
          </div>
          <figure className="mt-6 overflow-hidden rounded-lg border border-line bg-[#fff]">
            <img
              src={project.screenshot}
              alt={content.project.screenshotAlt}
              className="mx-auto h-auto w-full max-w-[445px]"
              width="445"
              height="296"
              loading="lazy"
            />
            <figcaption className="border-t border-[#d7dddf] bg-[#f5f5f5] px-4 py-3 text-xs text-[#46535b]">
              {content.project.caption}
            </figcaption>
          </figure>
        </div>
      </details>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="page-section">
      <SectionHeading number="02">{content.sections[1].label}</SectionHeading>
      <div className="space-y-11">
        {experience.map((job, index) => (
          <article key={job.company} className="relative border-l border-line pl-6 sm:pl-8">
            <span
              className={`absolute top-1 -left-[4px] h-[7px] w-[7px] rounded-full ${index === 0 ? 'bg-accent' : 'bg-muted'}`}
              aria-hidden="true"
            />
            <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
              <span>{job.period}</span>
              <span aria-hidden="true">·</span>
              <span>{job.location}</span>
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink">
              {job.company}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">{job.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{job.description}</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {job.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Tags items={job.stack} />
            </div>
          </article>
        ))}
      </div>
      <a href={profile.cv} download className="text-link mt-8 ml-6 sm:ml-8">
        {content.ui.downloadFull}
        <ArrowDownToLine size={15} aria-hidden="true" />
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="sobre-mi" className="page-section">
      <SectionHeading number="03">{content.about.heading}</SectionHeading>
      <h3 className="font-display text-2xl leading-snug font-semibold tracking-tight text-ink">
        {content.about.title}
        <br />
        {content.about.titleSecond}
      </h3>
      <p className="mt-5 text-[15px] leading-relaxed text-muted">{content.about.intro}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{content.about.practice}</p>
      <div className="my-8 divide-y divide-line border-y border-line">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-2 py-4 sm:grid-cols-[145px_1fr] sm:gap-5">
            <h4 className="text-xs font-semibold text-ink">{group.label}</h4>
            <p className="text-sm text-muted">{group.skills}</p>
          </div>
        ))}
      </div>
      <h3 className="mb-6 text-xs font-bold tracking-[0.14em] uppercase text-ink">
        {content.about.educationHeading}
      </h3>
      <div className="award-block mb-7 flex gap-4 rounded-xl border border-line p-5">
        <Trophy
          size={24}
          className="mt-1 shrink-0 text-accent"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <div>
          <h4 className="font-display text-base font-bold text-ink">{content.about.awardTitle}</h4>
          <p className="mt-1 text-sm text-muted">{content.about.awardResult}</p>
          <p className="mt-2 text-xs text-accent">{content.about.awardTeam}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{content.about.awardDetail}</p>
        </div>
      </div>
      <div className="space-y-6">
        {education.map((item) => (
          <article key={item.title}>
            <p className="mb-1.5 text-[11px] text-muted">{item.period}</p>
            <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
            <p className="mt-1 text-xs text-accent">{item.institution}</p>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  useEffect(() => {
    if (copyState !== 'copied') return
    const timer = window.setTimeout(() => setCopyState('idle'), 2500)
    return () => window.clearTimeout(timer)
  }, [copyState])
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
  }
  return (
    <section id="contacto" className="page-section !border-b-0 !pb-5">
      <SectionHeading number="04">{content.contact.heading}</SectionHeading>
      <h3 className="font-display text-4xl font-semibold tracking-[-0.055em] text-ink sm:text-5xl">
        {content.contact.title}
      </h3>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{content.contact.intro}</p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="contact-email font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl"
        >
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={copyState === 'copied' ? content.contact.copied : content.contact.copy}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {copyState === 'copied' ? (
            <Check size={15} aria-hidden="true" />
          ) : (
            <Copy size={15} aria-hidden="true" />
          )}
        </button>
      </div>
      <p aria-live="polite" role="status" className="min-h-6 pt-1 text-xs text-muted">
        {copyState === 'copied'
          ? content.contact.copied
          : copyState === 'error'
            ? content.contact.copyError
            : ''}
      </p>
      <a className="text-link mt-2" href={profile.phoneHref}>
        {profile.phone}
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <div className="mt-8 flex flex-wrap gap-6">
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a className="text-link" href={profile.cv} download>
          {content.ui.download}
          <ArrowDownToLine size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('proyecto')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-10% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((section) => {
      const node = document.getElementById(section.id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <a className="skip-link" href="#contenido">
        {content.ui.skip}
      </a>
      <div className="site-shell mx-auto max-w-[1330px] px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(290px,0.85fr)_minmax(0,1.35fr)] lg:gap-16 lg:px-14 xl:gap-24 xl:px-20">
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
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-start gap-4 sm:gap-5">
            {profile.portrait && (
              <img
                className="h-auto w-20 shrink-0 rounded-xl border border-line sm:w-24"
                src={profile.portrait.src}
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
          <p className="mt-6 max-w-[340px] text-[15px] leading-relaxed text-muted">
            {profile.intro}
          </p>
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
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    className={`nav-link group flex items-center gap-3 py-1 text-xs ${activeSection === section.id ? 'is-active' : ''}`}
                    href={`#${section.id}`}
                    aria-current={activeSection === section.id ? 'location' : undefined}
                    onClick={() => setActiveSection(section.id)}
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
        <main id="contenido" className="min-w-0 lg:pt-14">
          <Project />
          <Experience />
          <About />
          <Contact />
          <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 pb-9 text-[10px] text-muted">
            <p>© 2026 Sergio Quintero Mena</p>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-accent">
              {content.ui.top}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </footer>
        </main>
      </div>
    </>
  )
}
