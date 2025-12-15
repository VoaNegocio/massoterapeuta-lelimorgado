/**
 * Configuração centralizada do WhatsApp
 * 
 * Para atualizar o número ou mensagens, edite apenas este arquivo.
 */

export const WHATSAPP_CONFIG = {
  // Número do WhatsApp (formato: 5516993962305 - sem espaços, parênteses ou hífens)
  number: '5516993962305', // ✅ Número real da Leli Morgado
  
  // Mensagens pré-formatadas para diferentes contextos
  messages: {
    default: 'Olá! Quero agendar uma sessão personalizada!',
    hero: 'Olá! Quero agendar uma sessão personalizada!',
    comoFunciona: 'Olá! Quero agendar uma sessão personalizada!',
    beneficios: 'Olá! Quero agendar uma sessão personalizada!',
    ctaFinal: 'Olá! Quero agendar uma sessão personalizada agora mesmo!',
    footer: 'Olá! Gostaria de mais informações.',
  },
}

/**
 * Gera URL do WhatsApp com mensagem pré-formatada
 * @param {string} context - Contexto da mensagem (default, hero, comoFunciona, etc.)
 * @returns {string} URL completa do WhatsApp
 */
export function getWhatsAppUrl(context = 'default') {
  const message = WHATSAPP_CONFIG.messages[context] || WHATSAPP_CONFIG.messages.default
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`
}

/**
 * Retorna apenas o número formatado para exibição
 * @returns {string} Número formatado (ex: (11) 99999-9999)
 */
export function getFormattedNumber() {
  const num = WHATSAPP_CONFIG.number
  // Remove código do país (55) se presente
  const localNumber = num.startsWith('55') ? num.slice(2) : num
  // Formata: (XX) XXXXX-XXXX
  if (localNumber.length === 11) {
    return `(${localNumber.slice(0, 2)}) ${localNumber.slice(2, 7)}-${localNumber.slice(7)}`
  }
  return localNumber
}

