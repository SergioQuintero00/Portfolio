import { ArrowUpRight } from 'lucide-react'
import { localizedContent } from './content'
import type { Locale } from './content'
import { Header } from './components/Header'
import { Project } from './sections/Project'
import { Experience } from './sections/Experience'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { useActiveSection } from './hooks/useActiveSection'

export default function App({ locale }: { locale: Locale }) {
  const content = localizedContent[locale]
  const { activeSection, setActiveSection } = useActiveSection(content.sections)
  return (
    <>
      <a className="skip-link" href="#contenido">
        {content.ui.skip}
      </a>
      <div className="site-shell mx-auto max-w-[1330px] px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(290px,0.85fr)_minmax(0,1.35fr)] lg:gap-16 lg:px-14 xl:gap-24 xl:px-20">
        <Header
          locale={locale}
          content={content}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main id="contenido" className="min-w-0 lg:pt-14">
          <Project content={content} />
          <Experience content={content} />
          <About content={content} />
          <Contact content={content} />
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
