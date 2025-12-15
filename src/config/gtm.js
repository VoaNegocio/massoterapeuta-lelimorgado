// Google Tag Manager Configuration
// Substitua GTM-XXXXXXX pelo seu Container ID do Google Tag Manager

export const GTM_ID = 'GTM-XXXXXXX'

// Função helper para enviar eventos ao GTM
export const gtmEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    })
  }
}

// Funções pré-configuradas para eventos comuns
export const gtmTrack = {
  // Rastrear cliques em CTAs
  ctaClick: (ctaName, ctaLocation) => {
    gtmEvent('cta_click', {
      cta_name: ctaName,
      cta_location: ctaLocation
    })
  },

  // Rastrear cliques no WhatsApp
  whatsappClick: (source) => {
    gtmEvent('whatsapp_click', {
      source: source,
      event_category: 'engagement',
      event_label: 'WhatsApp'
    })
  },

  // Rastrear visualização de seção
  sectionView: (sectionName) => {
    gtmEvent('section_view', {
      section_name: sectionName
    })
  },

  // Rastrear cliques em depoimentos
  testimonialClick: (testimonialName) => {
    gtmEvent('testimonial_click', {
      testimonial_name: testimonialName
    })
  },

  // Rastrear cliques em imagens (zoom/modal)
  imageClick: (imageName) => {
    gtmEvent('image_click', {
      image_name: imageName
    })
  },

  // Rastrear scroll até certa porcentagem
  scrollDepth: (percentage) => {
    gtmEvent('scroll_depth', {
      scroll_percentage: percentage
    })
  }
}

