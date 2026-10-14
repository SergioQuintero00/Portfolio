import { ArrowRight, Database, Layers3, Monitor, Smartphone } from 'lucide-react'
import type { PortfolioContent } from '../content'

export function ProjectFlow({ copy }: { copy: PortfolioContent['project'] }) {
  return (
    <div className="project-visual relative overflow-hidden rounded-xl border border-line p-4 sm:p-8">
      <div className="relative mb-8 flex items-center justify-between gap-3 text-[10px] font-semibold tracking-[0.13em] uppercase text-muted">
        <span>{copy.name}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {copy.realTime}
        </span>
      </div>
      <div className="relative grid grid-cols-[1fr_18px_1fr_18px_1fr] items-center gap-1 sm:grid-cols-[1fr_26px_1fr_26px_1fr] sm:gap-3">
        <div className="flow-node">
          <Smartphone size={29} strokeWidth={1.3} aria-hidden="true" />
          <span>{copy.waiter}</span>
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
          <span>{copy.kitchen}</span>
          <small>Socket.IO</small>
        </div>
      </div>
      <div className="relative mt-7 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] text-muted">
          <Database size={13} aria-hidden="true" />
          {copy.database}
        </span>
      </div>
      <p className="relative mt-6 text-center text-[10px] tracking-[0.1em] uppercase text-muted">
        {copy.diagram}
      </p>
    </div>
  )
}
