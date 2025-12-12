import { useState } from 'react'

function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Depoimentos em vídeo
  const depoimentos = [
    {
      nome: 'Bruna Carvalho',
      video: '/videos/video1.mp4',
      avaliacao: 5,
    },
    {
      nome: 'Victoria Pontes',
      video: '/videos/video2.mp4',
      avaliacao: 5,
    },
    {
      nome: 'Cliente 3',
      video: '/videos/video3.mp4',
      avaliacao: 5,
    },
  ]

  // Detectar scroll para atualizar indicadores
  const handleScroll = (e) => {
    const container = e.target
    const scrollLeft = container.scrollLeft
    const cardWidth = container.querySelector('[data-index]')?.offsetWidth || 0
    const gap = 16 // gap-4 = 1rem = 16px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap))
    setCurrentIndex(Math.min(newIndex, depoimentos.length - 1))
  }

  return (
    <section id="depoimentos" className="py-20 md:py-32 px-4 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6 tracking-tight">
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
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={handleScroll}
            >
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {depoimentos.map((depoimento, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className="group bg-white/95 backdrop-blur-md rounded-2xl border-2 border-neutral-200/60 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 flex-shrink-0 w-[75vw] max-w-[320px] snap-center overflow-hidden transition-all duration-500"
                  >
                    {/* Gradiente sutil no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/30 group-hover:to-emerald-50/30 transition-all duration-500 rounded-2xl z-10 pointer-events-none"></div>
                    
                    <div className="relative z-20 p-4">
                      {/* Vídeo Vertical 9:16 */}
                      <div className="relative w-full mx-auto rounded-xl overflow-hidden mb-4 bg-neutral-100" style={{ aspectRatio: '9/16', maxWidth: '280px' }}>
                        <video
                          src={depoimento.video}
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                          playsInline
                        >
                          Seu navegador não suporta vídeos HTML5.
                        </video>
                      </div>

                      {/* Avaliação com estrelas */}
                      <div className="flex gap-1 mb-3 justify-center">
                        {[...Array(depoimento.avaliacao)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Nome da cliente */}
                      <p className="text-neutral-900 font-bold text-sm text-center">
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
                className="group bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl border-2 border-neutral-200/60 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Gradiente sutil no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/30 group-hover:to-emerald-50/30 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Vídeo Vertical 9:16 */}
                  <div className="relative w-full mx-auto rounded-xl overflow-hidden mb-6 bg-neutral-100" style={{ aspectRatio: '9/16', maxWidth: '320px' }}>
                    <video
                      src={depoimento.video}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                      playsInline
                    >
                      Seu navegador não suporta vídeos HTML5.
                    </video>
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
                  <p className="text-neutral-900 font-bold text-base text-center">
                    — {depoimento.nome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Depoimentos

