function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Liquid Glass - Estilo Apple */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/8 to-white/10 backdrop-blur-3xl border-b border-white/5 shadow-lg shadow-black/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-center h-20 md:h-28">
          {/* Logo - Clicável para topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105"
            aria-label="Ir para o topo da página"
          >
            <img
              src="/logo-da-leli.png"
              alt="Leli Morgado Massoterapeuta"
              className="h-14 md:h-20 lg:h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

