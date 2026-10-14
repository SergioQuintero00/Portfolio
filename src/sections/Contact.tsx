import { useEffect, useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, Check, Copy } from 'lucide-react'
import { sharedProfile } from '../content'
import type { PortfolioContent } from '../content'
import { SectionHeading } from '../components/SectionHeading'

export function Contact({ content }: { content: PortfolioContent }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  useEffect(() => {
    if (copyState !== 'copied') return
    const timer = window.setTimeout(() => setCopyState('idle'), 2500)
    return () => window.clearTimeout(timer)
  }, [copyState])
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(sharedProfile.email)
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
          href={`mailto:${sharedProfile.email}`}
          className="contact-email font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl"
        >
          {sharedProfile.email}
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
      <a className="text-link mt-2" href={sharedProfile.phoneHref}>
        {sharedProfile.phone}
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <div className="mt-8 flex flex-wrap gap-6">
        <a
          className="text-link"
          href={sharedProfile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          className="text-link"
          href={sharedProfile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a className="text-link" href={content.profile.cv} download>
          {content.ui.download}
          <ArrowDownToLine size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
