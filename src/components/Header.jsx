function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Mobile Header - Mantido intacto */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        {/* Blur e Background Branco */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border-b border-neutral-200/50"></div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="flex items-center justify-center h-20">
            {/* Logo - Clicável para topo */}
            <button
              onClick={scrollToTop}
              className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105"
              aria-label="Ir para o topo da página"
            >
              <img
                src="/logo-da-leli.png"
                alt="Leli Morgado Massoterapeuta"
                className="h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Header - Premium */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50">
        {/* Glassmorphism Premium */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl border-b border-neutral-200/60 shadow-lg shadow-neutral-900/5"></div>

        <div className="relative max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between h-28 lg:h-32 xl:h-36 2xl:h-40">
            {/* Logo - Clicável para topo */}
            <button
              onClick={scrollToTop}
              className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105"
              aria-label="Ir para o topo da página"
            >
              <img
                src="/logo-da-leli.png"
                alt="Leli Morgado Massoterapeuta"
                className="h-24 lg:h-28 xl:h-32 2xl:h-36 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </button>

            {/* Navegação Desktop */}
            <nav className="flex items-center gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-neutral-700 hover:text-green-600 font-light tracking-wide text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-colors duration-300 relative group"
                aria-label="Ir para início"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-neutral-700 hover:text-green-600 font-light tracking-wide text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-colors duration-300 relative group"
                aria-label="Ir para Como Funciona"
              >
                Como Funciona
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="text-neutral-700 hover:text-green-600 font-light tracking-wide text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-colors duration-300 relative group"
                aria-label="Ir para Benefícios"
              >
                Benefícios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-neutral-700 hover:text-green-600 font-light tracking-wide text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-colors duration-300 relative group"
                aria-label="Ir para Depoimentos"
              >
                Depoimentos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('cta-final')}
                className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 lg:px-10 xl:px-12 2xl:px-14 py-3 lg:py-3.5 xl:py-4 2xl:py-5 rounded-2xl font-light tracking-wide text-base lg:text-lg xl:text-xl 2xl:text-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                aria-label="Agendar sessão"
              >
                Agendar
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

