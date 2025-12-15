# Configuração do Google Tag Manager

## 🚀 Setup Inicial

### 1. Obter o Container ID do GTM
1. Acesse o [Google Tag Manager](https://tagmanager.google.com/)
2. Selecione ou crie um container
3. Copie o Container ID (formato: `GTM-XXXXXXX`)

### 2. Configurar no Projeto

#### Opção A: Via index.html (Já configurado)
Substitua `GTM-XXXXXXX` em dois locais no arquivo `index.html`:
- No script do `<head>` (linha ~8)
- No `<noscript>` do `<body>` (linha ~38)

#### Opção B: Via arquivo de configuração (Recomendado)
Edite o arquivo `src/config/gtm.js` e substitua:
```javascript
export const GTM_ID = 'GTM-XXXXXXX' // Substitua pelo seu ID
```

## 📊 Eventos Pré-configurados

### Eventos Automáticos

#### 1. **Page View**
- Rastreia automaticamente visualizações de página
- Configurado em `src/App.jsx`

#### 2. **Scroll Depth**
- Rastreia profundidade de scroll (25%, 50%, 75%, 90%, 100%)
- Configurado em `src/hooks/useGTM.js`

#### 3. **Section View**
- Rastreia quando seções entram na viewport
- Usar o hook `useSectionView(sectionId, sectionName)`

### Eventos Manuais

#### CTA Click
```javascript
import { gtmTrack } from '../config/gtm'

gtmTrack.ctaClick('Nome do CTA', 'Localização')
```

#### WhatsApp Click
```javascript
gtmTrack.whatsappClick('fonte') // Ex: 'hero', 'footer', 'cta-final'
```

#### Testimonial Click
```javascript
gtmTrack.testimonialClick('Nome da Cliente')
```

#### Image Click (Zoom/Modal)
```javascript
gtmTrack.imageClick('Nome da Imagem')
```

## 📝 Exemplo de Uso

```javascript
import { gtmTrack } from '../config/gtm'

function MeuComponente() {
  const handleWhatsAppClick = () => {
    gtmTrack.whatsappClick('botao-footer')
    // ... resto do código
  }

  return (
    <button onClick={handleWhatsAppClick}>
      Falar no WhatsApp
    </button>
  )
}
```

## 🎯 Variáveis no GTM

As seguintes variáveis são enviadas automaticamente:

### Evento: `cta_click`
- `cta_name`: Nome do CTA clicado
- `cta_location`: Localização do CTA (ex: 'hero', 'footer')

### Evento: `whatsapp_click`
- `source`: Origem do clique
- `event_category`: 'engagement'
- `event_label`: 'WhatsApp'

### Evento: `section_view`
- `section_name`: Nome da seção visualizada

### Evento: `scroll_depth`
- `scroll_percentage`: Percentual de scroll (25, 50, 75, 90, 100)

### Evento: `testimonial_click`
- `testimonial_name`: Nome da cliente do depoimento

### Evento: `image_click`
- `image_name`: Nome/identificação da imagem

## 🔧 Configuração no GTM

### 1. Criar Tags
No GTM, crie tags para cada evento que deseja rastrear:

**Exemplo: Tag para CTA Click**
- Tipo: Google Analytics: Universal Analytics ou GA4
- Evento: `cta_click`
- Parâmetros: `cta_name`, `cta_location`

### 2. Criar Triggers
- **Page View**: Trigger tipo "Page View"
- **Scroll Depth**: Trigger tipo "Scroll Depth" (25%, 50%, 75%, 90%, 100%)
- **CTA Click**: Trigger tipo "Click" → Variável "Event" = `cta_click`
- **WhatsApp Click**: Trigger tipo "Click" → Variável "Event" = `whatsapp_click`

### 3. Criar Variáveis
- Variáveis de Data Layer para capturar os parâmetros enviados

## ✅ Checklist

- [ ] Substituir `GTM-XXXXXXX` no `index.html` (2 locais)
- [ ] Substituir `GTM-XXXXXXX` no `src/config/gtm.js`
- [ ] Configurar tags no GTM
- [ ] Configurar triggers no GTM
- [ ] Testar eventos no modo Preview do GTM
- [ ] Verificar eventos no Google Analytics (se aplicável)

## 🧪 Testando

### Modo Preview do GTM
1. Publique o container no GTM
2. Acesse o site
3. Abra o GTM Preview Mode
4. Teste os eventos clicando nos elementos

### Verificar no Console
Abra o console do navegador e digite:
```javascript
window.dataLayer
```
Você verá todos os eventos enviados ao GTM.

## 📚 Documentação
- [Google Tag Manager](https://support.google.com/tagmanager)
- [Data Layer](https://developers.google.com/tag-manager/devguide)

