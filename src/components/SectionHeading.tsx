import type { ReactNode } from 'react'

export function SectionHeading({ number, children }: { number: string; children: ReactNode }) {
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
