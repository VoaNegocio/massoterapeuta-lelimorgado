import { useState, useEffect } from 'react'

function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null)

  // Depoimentos em vídeo
  const depoimentos = [
    {
      nome: 'Bruna Carvalho',
      video: '/videos/video1.mp4',
      foto: '/brunacaravalho-img1.jpg', // Foto da cliente como preview
      avaliacao: 5,
    },
    {
      nome: 'Victoria Pontes',
      video: '/videos/video2.mp4',
      foto: '/victoriapontes-img1.jpg', // Foto da cliente como preview
      avaliacao: 5,
    },
    {
      nome: 'Vanessa Fradique',
      video: '/videos/video3.mp4',
      foto: '/maria-isabel-img1.jpg', // Foto da cliente como preview
      avaliacao: 5,
    },
  ]

  // Fechar modal com tecla ESC e bloquear scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedVideoIndex !== null) {
        setSelectedVideoIndex(null)
      }
    }

    if (selectedVideoIndex !== null) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Previne scroll quando modal está aberto
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideoIndex])

  // Detectar scroll para atualizar indicadores
  const handleScroll = (e) => {
    const container = e.target
    const scrollLeft = container.scrollLeft
    const cardWidth = container.querySelector('[data-index]')?.offsetWidth || 0
    const gap = 12 // gap-3 = 0.75rem = 12px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap))
    setCurrentIndex(Math.min(newIndex, depoimentos.length - 1))
  }

  return (
    <section id="depoimentos" className="py-16 md:py-32 px-3 md:px-4 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-neutral-900 mb-6">
            O Que Nossas Pacientes Dizem Sobre a Leli
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Depoimentos - Carrossel Horizontal Mobile / Grid Desktop */}
        <div>
          {/* Mobile: Carrossel Horizontal */}
          <div className="md:hidden relative">
            <div 
              id="depoimentos-carousel"
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-3 px-3" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={handleScroll}
            >
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                {depoimentos.map((depoimento, index) => (
                  <div
                    key={index}
                    data-index={index}
                    onClick={() => setSelectedVideoIndex(index)}
                    className="group bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-white/40 shadow-2xl hover:shadow-green-500/30 flex-shrink-0 w-[85vw] max-w-[320px] snap-center overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.02]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedVideoIndex(index)
                      }
                    }}
                    aria-label={`Assistir depoimento de ${depoimento.nome}`}
                  >
                    {/* Gradiente premium no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-emerald-50/0 to-green-50/0 group-hover:from-green-50/40 group-hover:via-emerald-50/30 group-hover:to-green-50/40 transition-all duration-500 rounded-3xl z-10 pointer-events-none"></div>
                    
                    <div className="relative z-20 p-4">
                      {/* Preview da Cliente com Overlay e Play Button */}
                      <div className="relative w-full mx-auto rounded-2xl overflow-hidden mb-4 bg-neutral-900 shadow-xl" style={{ aspectRatio: '9/16', maxWidth: '260px' }}>
                        {/* Foto da Cliente como Preview */}
                        <img
                          src={depoimento.foto}
                          alt={`Foto de ${depoimento.nome}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        
                        {/* Overlay escuro para legibilidade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                        
                        {/* Ícone de Play Premium */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/95 backdrop-blur-md rounded-full p-4 md:p-5 shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/60">
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 text-green-600 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Avaliação com estrelas */}
                      <div className="flex gap-1 mb-3 justify-center">
                        {[...Array(depoimento.avaliacao)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3.5 h-3.5 text-yellow-400 fill-current drop-shadow-sm"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Nome da cliente */}
                      <p className="text-neutral-900 font-light tracking-wide text-xs text-center">
                        — {depoimento.nome}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicadores Mobile */}
            <div className="flex justify-center gap-2 mt-6">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = document.querySelector('#depoimentos-carousel')
                    const card = container?.querySelector(`[data-index="${index}"]`)
                    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-green-600 w-8'
                      : 'bg-neutral-300 w-2'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideoIndex(index)}
                className="group bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border-2 border-white/40 shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedVideoIndex(index)
                  }
                }}
                aria-label={`Assistir depoimento de ${depoimento.nome}`}
              >
                {/* Gradiente premium no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-emerald-50/0 to-green-50/0 group-hover:from-green-50/40 group-hover:via-emerald-50/30 group-hover:to-green-50/40 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Preview da Cliente com Overlay e Play Button */}
                  <div className="relative w-full mx-auto rounded-2xl overflow-hidden mb-6 bg-neutral-900 shadow-xl" style={{ aspectRatio: '9/16', maxWidth: '320px' }}>
                    {/* Foto da Cliente como Preview */}
                    <img
                      src={depoimento.foto}
                      alt={`Foto de ${depoimento.nome}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Overlay escuro para legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    
                    {/* Ícone de Play Premium */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/95 backdrop-blur-md rounded-full p-5 md:p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/60">
                        <svg
                          className="w-10 h-10 md:w-12 md:h-12 text-green-600 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Avaliação com estrelas */}
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Nome da cliente */}
                  <p className="text-neutral-900 font-light tracking-wide text-base text-center">
                    — {depoimento.nome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de Vídeo Premium */}
        {selectedVideoIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 cursor-pointer animate-fade-in-up"
            onClick={() => setSelectedVideoIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização do depoimento em vídeo"
          >
            {/* Overlay com feedback visual no hover */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
            
            {/* Container do modal */}
            <div 
              className="relative max-w-4xl w-full cursor-default animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
              style={{ animationDelay: '0.1s' }}
            >
              {/* Container do vídeo */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-4 md:p-6 relative">
                {/* Botão fechar - Dentro do modal */}
                <button
                  onClick={() => setSelectedVideoIndex(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-green-400 transition-all duration-300 p-2 md:p-2.5 rounded-full hover:bg-white/20 bg-black/40 backdrop-blur-sm z-20 shadow-lg hover:scale-110"
                  aria-label="Fechar modal"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Nome da cliente */}
                <div className="mb-4 text-center">
                  <p className="text-white font-light tracking-wide text-lg md:text-xl">
                    — {depoimentos[selectedVideoIndex].nome}
                  </p>
                  {/* Estrelas */}
                  <div className="flex gap-1 justify-center mt-2">
                    {[...Array(depoimentos[selectedVideoIndex].avaliacao)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current drop-shadow-sm"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Vídeo */}
                <div className="relative w-full mx-auto rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl" style={{ aspectRatio: '9/16', maxWidth: '400px' }}>
                  <video
                    src={depoimentos[selectedVideoIndex].video}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    preload="auto"
                    playsInline
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Depoimentos

