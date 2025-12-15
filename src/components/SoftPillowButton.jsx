/**
 * SoftPillowButton - Componente de Botão 3D com Estilo Orgânico
 * 
 * Um botão com aparência macia e confortável, como uma almofada,
 * perfeito para sites de massoterapia e bem-estar.
 * 
 * @param {string} children - Conteúdo do botão (texto ou elementos)
 * @param {string} href - URL de destino (se for um link)
 * @param {Function} onClick - Função de callback ao clicar
 * @param {string} variant - Variante de cor: 'primary' (verde), 'secondary' (esmeralda), 'soft' (verde suave)
 * @param {string} size - Tamanho: 'sm', 'md', 'lg', 'xl'
 * @param {boolean} fullWidth - Se o botão deve ocupar toda a largura
 * @param {string} className - Classes CSS adicionais
 */

const SoftPillowButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  // Variantes de cor com gradientes premium e efeitos psicologicamente persuasivos
  const variantStyles = {
    primary: {
      gradient: 'bg-gradient-to-b from-green-400 via-green-500 to-green-600',
      shadow: 'shadow-[0_8px_32px_rgba(34,197,94,0.4),0_4px_16px_rgba(34,197,94,0.3),inset_0_2px_4px_rgba(255,255,255,0.2)]',
      shadowHover: 'hover:shadow-[0_12px_48px_rgba(34,197,94,0.5),0_6px_24px_rgba(34,197,94,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)]',
      shadowActive: 'active:shadow-[0_4px_16px_rgba(34,197,94,0.3),inset_0_2px_8px_rgba(0,0,0,0.2)]',
      border: 'border-t-2 border-white/40 border-b border-white/10',
      glow: '',
    },
    secondary: {
      gradient: 'bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600',
      shadow: 'shadow-[0_8px_32px_rgba(16,185,129,0.4),0_4px_16px_rgba(16,185,129,0.3),inset_0_2px_4px_rgba(255,255,255,0.2)]',
      shadowHover: 'hover:shadow-[0_12px_48px_rgba(16,185,129,0.5),0_6px_24px_rgba(16,185,129,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)]',
      shadowActive: 'active:shadow-[0_4px_16px_rgba(16,185,129,0.3),inset_0_2px_8px_rgba(0,0,0,0.2)]',
      border: 'border-t-2 border-white/40 border-b border-white/10',
      glow: '',
    },
    soft: {
      gradient: 'bg-gradient-to-b from-green-300 via-green-400 to-green-500',
      shadow: 'shadow-[0_8px_32px_rgba(34,197,94,0.35),0_4px_16px_rgba(34,197,94,0.25),inset_0_2px_4px_rgba(255,255,255,0.2)]',
      shadowHover: 'hover:shadow-[0_12px_48px_rgba(34,197,94,0.45),0_6px_24px_rgba(34,197,94,0.35),inset_0_2px_4px_rgba(255,255,255,0.3)]',
      shadowActive: 'active:shadow-[0_4px_16px_rgba(34,197,94,0.25),inset_0_2px_8px_rgba(0,0,0,0.15)]',
      border: 'border-t-2 border-white/40 border-b border-white/10',
      glow: '',
    },
  }

  // Tamanhos responsivos
  const sizeStyles = {
    sm: 'px-4 py-2.5 text-sm rounded-2xl',
    md: 'px-6 py-3.5 text-base rounded-2xl',
    lg: 'px-8 py-4.5 text-lg rounded-3xl',
    xl: 'px-10 py-5.5 text-xl rounded-3xl',
  }

  const styles = variantStyles[variant]
  const sizeClasses = sizeStyles[size]

  // Classes base do botão - Design Premium Psicologicamente Persuasivo
  const baseClasses = `
    ${styles.gradient}
    ${styles.shadow}
    ${styles.shadowHover}
    ${styles.shadowActive}
    ${styles.border}
    ${styles.glow}
    ${sizeClasses}
    text-white
    font-semibold
    tracking-wide
    relative
    overflow-hidden
    transition-all
    duration-300
    ease-out
    hover:scale-[1.03]
    hover:-translate-y-0.5
    active:scale-[0.98]
    active:translate-y-[2px]
    group
    cursor-pointer
    ${fullWidth ? 'w-full' : 'inline-flex items-center justify-center'}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  // Elementos visuais premium para persuasão psicológica
  const lightReflection = (
    <span className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/30 via-white/15 to-transparent pointer-events-none rounded-inherit" />
  )

  const innerShadow = (
    <span className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/20 via-black/8 to-transparent pointer-events-none rounded-inherit" />
  )

  // Shimmer effect que se move continuamente
  const shimmerEffect = (
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none rounded-inherit" />
  )

  // Glow pulsante contínuo (fora do botão para não ser cortado)
  const pulseGlow = variant === 'primary' ? (
    <span className="absolute -inset-2 bg-gradient-to-b from-green-400/50 to-emerald-500/50 rounded-inherit opacity-70 blur-2xl animate-pulse pointer-events-none -z-10" />
  ) : variant === 'secondary' ? (
    <span className="absolute -inset-2 bg-gradient-to-b from-emerald-400/50 to-emerald-600/50 rounded-inherit opacity-70 blur-2xl animate-pulse pointer-events-none -z-10" />
  ) : (
    <span className="absolute -inset-2 bg-gradient-to-b from-green-300/50 to-green-500/50 rounded-inherit opacity-70 blur-2xl animate-pulse pointer-events-none -z-10" />
  )

  // Conteúdo do botão com múltiplas camadas de profundidade
  const buttonContent = (
    <>
      {/* Shimmer effect no hover */}
      {shimmerEffect}
      
      {/* Reflexo de luz superior premium */}
      {lightReflection}
      
      {/* Sombra interna inferior */}
      {innerShadow}
      
      {/* Brilho interno sutil */}
      <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-inherit" />
      
      {/* Conteúdo com destaque */}
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-lg">
        {children}
      </span>
    </>
  )

  // Container wrapper para permitir overflow do glow
  const wrapperClasses = `relative inline-block ${fullWidth ? 'w-full' : ''}`

  // Se for um link
  if (href) {
    return (
      <span className={wrapperClasses}>
        {pulseGlow}
        <a
          href={href}
          onClick={onClick}
          className={baseClasses}
          {...props}
        >
          {buttonContent}
        </a>
      </span>
    )
  }

  // Se for um botão
  return (
    <span className={wrapperClasses}>
      {pulseGlow}
      <button
        onClick={onClick}
        className={baseClasses}
        {...props}
      >
        {buttonContent}
      </button>
    </span>
  )
}

export default SoftPillowButton

