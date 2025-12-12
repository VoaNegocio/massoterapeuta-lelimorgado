import { getWhatsAppUrl } from '../config/whatsapp'

function CTAFinal() {
  const whatsappUrl = getWhatsAppUrl('ctaFinal')

  return (
    <section id="cta-final" className="py-20 md:py-32 px-4 bg-gradient-to-br from-green-50/80 via-emerald-50/60 to-green-100/40 relative overflow-hidden">
      {/* Decorative elements - Premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-300/30 to-emerald-300/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/30 to-green-300/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-200/20 to-emerald-200/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-8 tracking-tight">
          Não Espere Mais! Comece a Tratar Suas Dores Agora!
        </h2>

        {/* Texto */}
        <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-12 max-w-4xl mx-auto font-light">
          Se você está cansada de conviver com dores constantes e deseja uma solução eficaz, a Leli é a escolha certa. Agende sua avaliação agora e comece a sentir os benefícios de um atendimento humanizado e terapias integrativas.
        </p>

        {/* Foto da Leli */}
        <div className="mb-12 md:mb-16">
          <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-neutral-300/50">
            <img
              src="/fotoleli2.jpg"
              alt="Leli Morgado - Massoterapeuta e Fisioterapeuta especializada em tratamento de dores crônicas"
              className="w-full h-auto object-contain rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA Final */}
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-12 py-6 md:px-16 md:py-7 rounded-3xl font-bold text-xl md:text-2xl shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-110 transition-all duration-500 relative overflow-hidden border-2 border-white/20"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            <svg
              className="w-8 h-8 relative z-10 drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10 drop-shadow-lg">Agende sua sessão personalizada agora mesmo!</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTAFinal

