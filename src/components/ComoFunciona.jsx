import { useState, useEffect } from 'react'
import { getWhatsAppUrl } from '../config/whatsapp'

function ComoFunciona() {
  const whatsappUrl = getWhatsAppUrl('comoFunciona')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  
  // Detectar scroll para atualizar indicadores
  const handleScroll = (e) => {
    const container = e.target
    const scrollLeft = container.scrollLeft
    const cardWidth = container.querySelector('[data-index]')?.offsetWidth || 0
    const gap = 16 // gap-4 = 1rem = 16px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap))
    setCurrentIndex(Math.min(newIndex, passos.length - 1))
  }

  // Fechar modal com tecla ESC e bloquear scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isImageModalOpen) {
        setIsImageModalOpen(false)
      }
    }

    if (isImageModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Previne scroll quando modal está aberto
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isImageModalOpen])
  
  const passos = [
    {
      numero: '1',
      titulo: 'Avaliação Inicial',
      descricao: 'Primeira consulta com escuta ativa para entender suas dores e necessidades.',
    },
    {
      numero: '2',
      titulo: 'Plano Terapêutico Personalizado',
      descricao: 'Combinação de massoterapia e terapias complementares como acupuntura, auriculoterapia e aromaterapia de acordo com o seu caso.',
    },
    {
      numero: '3',
      titulo: 'Tratamento Completo',
      descricao: 'Realizamos um atendimento que cuida do seu corpo e mente, buscando alívio duradouro.',
    },
    {
      numero: '4',
      titulo: 'Acompanhamento Pós-Sessão',
      descricao: 'Após cada sessão, um acompanhamento contínuo para garantir a recuperação e o alívio da dor.',
    },
  ]

  return (
    <section id="como-funciona" className="py-16 md:py-20 lg:py-24 px-3 md:px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-neutral-900 mb-6">
            Como Funciona o Atendimento com a Leli?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Imagem do ambiente - Clicável para modal */}
        <div className="mb-12 md:mb-16">
          <div 
            className="w-full max-w-4xl lg:max-w-5xl mx-auto h-64 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-neutral-300/50 cursor-pointer group hover:scale-[1.02] transition-transform duration-300 relative"
            onClick={() => setIsImageModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsImageModalOpen(true)
              }
            }}
            aria-label="Clique para ampliar a imagem do ambiente"
          >
            <img
              src="/lelimesa.jpg"
              alt="Ambiente de massoterapia e relaxamento da Leli Morgado - Sala de atendimento com mesa de massagem, iluminação suave e decoração zen"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
            />
            {/* Overlay sutil no hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Passos - Carrossel Horizontal Mobile / Grid Desktop */}
        <div className="mb-12 md:mb-20">
          {/* Mobile: Carrossel Horizontal */}
          <div className="md:hidden relative">
            <div 
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-3 px-3" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={handleScroll}
            >
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                {passos.map((passo, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className="group relative bg-white p-5 rounded-2xl border border-neutral-200/50 shadow-lg flex-shrink-0 w-[90vw] max-w-sm snap-center"
                  >
                    {/* Gradiente de fundo no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/50 transition-all duration-500 rounded-2xl"></div>
                    
                    {/* Número de fundo */}
                    <div className="absolute top-4 right-4 text-7xl font-extrabold text-neutral-50 group-hover:text-green-50 transition-colors duration-500 leading-none">
                      {passo.numero}
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                        <span className="text-white font-bold text-lg">{passo.numero}</span>
                      </div>
                      <h3 className="text-xl font-light tracking-wide text-neutral-900 mb-3 leading-tight">
                        {passo.titulo}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm">
                        {passo.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicadores Mobile */}
            <div className="flex justify-center gap-2 mt-6">
              {passos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = document.querySelector('.overflow-x-auto')
                    const card = container?.querySelector(`[data-index="${index}"]`)
                    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-green-600 w-8'
                      : 'bg-neutral-300 w-2'
                  }`}
                  aria-label={`Ir para passo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid Premium */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {passos.map((passo, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-neutral-200/60 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradiente de fundo sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/30 transition-all duration-300 rounded-2xl"></div>
                
                {/* Número de fundo */}
                <div className="absolute top-3 right-3 lg:top-4 lg:right-4 text-6xl lg:text-7xl font-extrabold text-neutral-100 group-hover:text-green-50/80 transition-colors duration-300 leading-none pointer-events-none">
                  {passo.numero}
                </div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 lg:mb-5 shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg lg:text-xl">{passo.numero}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-light tracking-wide text-neutral-900 mb-3 lg:mb-4 leading-tight">
                    {passo.titulo}
                  </h3>
                  <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal da Imagem */}
        {isImageModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
            onClick={() => setIsImageModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da imagem do ambiente"
          >
            {/* Container do modal */}
            <div 
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão fechar */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10 z-10"
                aria-label="Fechar modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Imagem ampliada */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lelimesa.jpg"
                  alt="Ambiente de massoterapia e relaxamento da Leli Morgado - Sala de atendimento com mesa de massagem, iluminação suave e decoração zen"
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* CTA - Design 3D Premium */}
              <div className="text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 py-4 md:px-12 md:py-6 lg:px-16 lg:py-8 xl:px-20 xl:py-10 2xl:px-24 2xl:py-12 rounded-3xl font-light tracking-wider text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl shadow-[0_8px_32px_rgba(34,197,94,0.5),0_4px_16px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.6),0_6px_24px_rgba(34,197,94,0.5),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:scale-110 hover:-translate-y-0.5 active:scale-[0.96] active:translate-y-[2px] active:shadow-[0_4px_16px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out relative overflow-hidden border-t-2 border-white/40 border-b border-white/10 animate-pulse-slow hover:[transform:perspective(1000px)_rotateX(-2deg)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Shimmer effect contínuo */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 animate-shimmer pointer-events-none"></span>
                  
                  {/* Glow effect contínuo e intenso */}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-300/0 via-green-300/70 to-green-300/0 opacity-60 animate-pulse blur-2xl pointer-events-none"></span>
                  
                  {/* Glow effect extra no hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/80 to-emerald-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></span>
                  
                  {/* Brilho interno */}
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></span>
                  
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 relative z-10 drop-shadow-lg animate-bounce-slow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="relative z-10 drop-shadow-lg font-light tracking-wider">Quero agendar uma sessão personalizada!</span>
                </a>
              </div>
      </div>
    </section>
  )
}

export default ComoFunciona

