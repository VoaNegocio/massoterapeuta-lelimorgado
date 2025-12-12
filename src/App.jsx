import Header from './components/Header'
import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Depoimentos from './components/Depoimentos'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
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
