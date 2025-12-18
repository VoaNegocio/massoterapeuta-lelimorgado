import { useEffect, Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatsAppButton from './components/WhatsAppButton'
import { useScrollTracking } from './hooks/useGTM'
import { gtmEvent } from './config/gtm'

// Lazy loading para componentes abaixo da dobra
const ComoFunciona = lazy(() => import('./components/ComoFunciona'))
const Beneficios = lazy(() => import('./components/Beneficios'))
const Depoimentos = lazy(() => import('./components/Depoimentos'))
const CTAFinal = lazy(() => import('./components/CTAFinal'))
const Footer = lazy(() => import('./components/Footer'))

// Loading Spinner simples
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-20">
    <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
  </div>
)

function App() {
  // Rastrear scroll depth
  useScrollTracking()

  // Rastrear visualização de página
  useEffect(() => {
    gtmEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <ComoFunciona />
          <Beneficios />
          <Depoimentos />
          <CTAFinal />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  )
}

export default App
