import { getWhatsAppUrl } from '../config/whatsapp'

function Hero() {
  const whatsappUrl = getWhatsAppUrl('hero')

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/40 via-white to-green-50/20 md:bg-gradient-to-br md:from-emerald-50/40 md:via-white md:to-green-50/20 pt-16 md:pt-24 overflow-hidden">
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-300/25 to-emerald-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/25 to-green-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-200/15 to-emerald-200/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 py-12 md:py-24 relative z-10">
        <div className="text-center space-y-6 md:space-y-12">
          {/* Headline Principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white md:text-neutral-900 leading-[1.1] max-w-6xl mx-auto tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] md:drop-shadow-none">
            Alivie Suas Dores Crônicas em Apenas{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 md:from-green-600 md:via-emerald-600 md:to-green-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,197,94,0.5)] md:drop-shadow-none">
              1 Sessão
            </span>{' '}
            com Quem Realmente Entende do Seu Corpo
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 md:text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] md:drop-shadow-none">
            Se você sofre com dores nas costas, pescoço ou lombar, aqui você encontra um plano terapêutico exclusivo. Tratamento feito por uma fisioterapeuta, combinando massoterapia e terapias complementares para resultados duradouros.
          </p>

          {/* CTA Principal - Premium */}
          <div className="pt-6 md:pt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 py-4 md:px-12 md:py-6 rounded-3xl font-bold text-base md:text-xl shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-110 transition-all duration-500 relative overflow-hidden border-2 border-white/20"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
              <svg
                className="w-6 h-6 md:w-7 md:h-7 relative z-10 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10 drop-shadow-lg">Quero agendar uma sessão personalizada!</span>
            </a>
          </div>

          {/* Espaço para imagem sugerida - Desktop Only */}
          <div className="hidden md:block pt-12 md:pt-16">
            {/* Placeholder para imagem - substituir por imagem real */}
            <div className="w-full max-w-5xl mx-auto h-72 md:h-[500px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl flex items-center justify-center shadow-2xl border border-neutral-300/50 overflow-hidden">
              <p className="text-neutral-400 text-sm md:text-base font-medium">
                [Imagem sugerida para primeira dobra]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

