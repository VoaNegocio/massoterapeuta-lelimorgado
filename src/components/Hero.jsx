import { getWhatsAppUrl } from '../config/whatsapp'
import { gtmTrack } from '../config/gtm'

function Hero() {
  const whatsappUrl = getWhatsAppUrl('hero')

  const handleCTAClick = () => {
    gtmTrack.ctaClick('Agendar Sessão', 'Hero')
    gtmTrack.whatsappClick('hero')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/40 via-white to-green-50/20 md:bg-gradient-to-br md:from-emerald-50/40 md:via-white md:to-green-50/20 pt-20 md:pt-28 lg:pt-32 xl:pt-36 overflow-hidden">
      {/* Background Image - Mobile Only */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/leli-heromobile.jpg)' }}
      >
        {/* Overlay escuro premium para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/75 via-neutral-900/65 to-neutral-900/75 backdrop-blur-sm"></div>
      </div>

      {/* Decorative elements - Desktop Only - Premium */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 lg:left-20 xl:left-32 2xl:left-40 w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] bg-gradient-to-br from-green-300/25 to-emerald-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 lg:right-20 xl:right-32 2xl:right-40 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] bg-gradient-to-br from-emerald-300/25 to-green-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] bg-gradient-to-br from-green-200/15 to-emerald-200/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
        {/* Mobile: Layout em Coluna (Mantido Intacto) */}
        <div className="md:hidden text-center space-y-6">
          {/* Headline Principal */}
          <h1 className="text-4xl font-light tracking-wider text-white leading-[1.1] max-w-6xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Alivie Suas Dores Crônicas em Apenas{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,197,94,0.5)]">
              1 Sessão
            </span>{' '}
            com Quem Realmente Entende do Seu Corpo
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/95 max-w-4xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Se você sofre com dores nas costas, pescoço ou lombar, aqui você encontra um plano terapêutico exclusivo. Tratamento feito por uma fisioterapeuta, combinando massoterapia e terapias complementares para resultados duradouros.
          </p>

          {/* CTA Principal - Design 3D Premium */}
          <div className="pt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 py-4 rounded-3xl font-light tracking-wider text-base shadow-[0_8px_32px_rgba(34,197,94,0.5),0_4px_16px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.6),0_6px_24px_rgba(34,197,94,0.5),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:scale-110 hover:-translate-y-0.5 active:scale-[0.96] active:translate-y-[2px] active:shadow-[0_4px_16px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out relative overflow-hidden border-t-2 border-white/40 border-b border-white/10 animate-pulse-slow hover:[transform:perspective(1000px)_rotateX(-2deg)]"
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
                className="w-6 h-6 relative z-10 drop-shadow-lg animate-bounce-slow"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10 drop-shadow-lg font-light tracking-wider">Quero agendar uma sessão personalizada!</span>
            </a>
          </div>
        </div>

        {/* Desktop: Layout em Row 50/50 - Texto à Esquerda, Imagem à Direita */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda: Texto e CTA */}
          <div className="space-y-5 md:space-y-6 text-left">
            {/* Headline Principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-neutral-900 leading-tight">
              Alivie Suas Dores Crônicas em Apenas{' '}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                1 Sessão
              </span>{' '}
              com Quem Realmente Entende do Seu Corpo
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed font-light">
              Se você sofre com dores nas costas, pescoço ou lombar, aqui você encontra um plano terapêutico exclusivo. Tratamento feito por uma fisioterapeuta, combinando massoterapia e terapias complementares para resultados duradouros.
            </p>

            {/* CTA Principal - Design 3D Premium */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-light tracking-wider text-base md:text-lg shadow-[0_8px_32px_rgba(34,197,94,0.5),0_4px_16px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.6),0_6px_24px_rgba(34,197,94,0.5),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:scale-110 hover:-translate-y-0.5 active:scale-[0.96] active:translate-y-[2px] active:shadow-[0_4px_16px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out relative overflow-hidden border-t-2 border-white/40 border-b border-white/10 animate-pulse-slow hover:[transform:perspective(1000px)_rotateX(-2deg)]"
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
                  className="w-5 h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg animate-bounce-slow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="relative z-10 drop-shadow-lg">Quero agendar uma sessão personalizada!</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Imagem */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 group hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/leli-heromobile.jpg"
                alt="Leli Morgado - Massoterapeuta e Fisioterapeuta especializada em tratamento de dores crônicas"
                className="w-full h-auto object-cover rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

