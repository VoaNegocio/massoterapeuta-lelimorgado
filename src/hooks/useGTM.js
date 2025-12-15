import { useEffect } from 'react'
import { gtmTrack } from '../config/gtm'

// Hook para rastrear scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    const trackedDepths = new Set()
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercentage = Math.round((scrollTop / maxScroll) * 100)
      
      // Rastrear em intervalos de 25%
      const depths = [25, 50, 75, 90, 100]
      depths.forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          gtmTrack.scrollDepth(depth)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

// Hook para rastrear visualização de seções
export const useSectionView = (sectionId, sectionName) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gtmTrack.sectionView(sectionName)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(sectionId)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [sectionId, sectionName])
}

