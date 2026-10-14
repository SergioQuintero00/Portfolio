import { ArrowDownToLine } from 'lucide-react'
import type { PortfolioContent } from '../content'
import { SectionHeading } from '../components/SectionHeading'
import { Tags } from '../components/Tags'

export function Experience({ content }: { content: PortfolioContent }) {
  return (
    <section id="experiencia" className="page-section">
      <SectionHeading number="02">{content.sections[1].label}</SectionHeading>
      <div className="space-y-11">
        {content.experience.map((job, index) => (
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
              <Tags items={job.stack} label={content.ui.technologies} />
            </div>
          </article>
        ))}
      </div>
      <a href={content.profile.cv} download className="text-link mt-8 ml-6 sm:ml-8">
        {content.ui.downloadFull}
        <ArrowDownToLine size={15} aria-hidden="true" />
      </a>
    </section>
  )
}
