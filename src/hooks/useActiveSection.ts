import { useEffect, useState } from 'react'
import type { PortfolioContent } from '../content'

export function useActiveSection(sections: PortfolioContent['sections']) {
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
  }, [sections])
  return { activeSection, setActiveSection }
}
