import { ArrowUpRight, ChevronDown, ExternalLink, Play } from 'lucide-react'
import { project } from '../content'
import type { PortfolioContent } from '../content'
import { ProjectFlow } from '../components/ProjectFlow'
import { SectionHeading } from '../components/SectionHeading'
import { Tags } from '../components/Tags'

export function Project({ content }: { content: PortfolioContent }) {
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
      <ProjectFlow copy={content.project} />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <Tags items={project.stack} label={content.ui.technologies} />
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
