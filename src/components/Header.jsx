function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/80 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-neutral-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-center h-16 md:h-24">
          {/* Logo/Nome - Clicável para topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105"
            aria-label="Ir para o topo da página"
          >
            <div className="text-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-neutral-900 leading-tight tracking-tight group-hover:text-green-600 transition-colors duration-300">
                LELI MORGADO
              </h1>
              <span className="text-xs md:text-sm lg:text-base font-light text-neutral-600 tracking-wider group-hover:text-green-700 transition-colors duration-300">
                MASSOTERAPEUTA
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

