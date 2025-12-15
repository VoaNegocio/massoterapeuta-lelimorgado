import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Depoimentos from './components/Depoimentos'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useScrollTracking } from './hooks/useGTM'
import { gtmEvent } from './config/gtm'

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
        <ComoFunciona />
        <Beneficios />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
