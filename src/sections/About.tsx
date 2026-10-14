import { Trophy } from 'lucide-react'
import type { PortfolioContent } from '../content'
import { SectionHeading } from '../components/SectionHeading'

export function About({ content }: { content: PortfolioContent }) {
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
        {content.skillGroups.map((group) => (
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
        {content.education.map((item) => (
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
