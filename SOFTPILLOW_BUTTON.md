# SoftPillowButton - Botão 3D com Estilo Orgânico

## 🎨 Descrição

Componente de botão 3D com estilo "soft" e orgânico, que parece macio como uma almofada. Perfeito para sites de massoterapia e bem-estar, transmite sensação de conforto e toque suave.

## ✨ Características

- **Gradiente Vertical Sutil**: Simula luz vinda de cima para criar profundidade
- **Reflexo de Luz Superior**: Borda superior clara (`border-t border-white/30`) simula reflexo
- **Sombra Interna**: Sombra sutil na parte inferior para criar volume
- **Sombra Externa Colorida**: Sombra difusa e colorida (não preta) para efeito de flutuação
- **Efeito Active**: Ao clicar, encolhe ligeiramente (`scale-[0.98]`) e a sombra diminui
- **Transições Suaves**: Animações de 200ms para feedback visual natural

## 📦 Instalação

O componente já está disponível em `src/components/SoftPillowButton.jsx`.

## 🚀 Uso Básico

```jsx
import SoftPillowButton from './components/SoftPillowButton'

// Botão simples
<SoftPillowButton onClick={() => console.log('Clicado!')}>
  Agendar Sessão
</SoftPillowButton>

// Botão como link (WhatsApp)
<SoftPillowButton 
  href="https://wa.me/5516993962305?text=Olá!"
  variant="primary"
  size="lg"
>
  Falar no WhatsApp
</SoftPillowButton>
```

## 🎛️ Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `ReactNode` | **obrigatório** | Conteúdo do botão (texto ou elementos) |
| `href` | `string` | `undefined` | Se fornecido, renderiza como `<a>` ao invés de `<button>` |
| `onClick` | `function` | `undefined` | Função de callback ao clicar |
| `variant` | `'primary' \| 'secondary' \| 'soft'` | `'primary'` | Variante de cor |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamanho do botão |
| `fullWidth` | `boolean` | `false` | Se o botão deve ocupar toda a largura |
| `className` | `string` | `''` | Classes CSS adicionais |

## 🎨 Variantes de Cor

### Primary (Padrão)
- Gradiente: `from-green-400 to-green-500`
- Sombra: `shadow-green-500/30`
- Ideal para CTAs principais

### Secondary
- Gradiente: `from-emerald-400 to-emerald-500`
- Sombra: `shadow-emerald-500/30`
- Alternativa elegante

### Soft
- Gradiente: `from-green-300 to-green-400`
- Sombra: `shadow-green-400/25`
- Mais suave e delicado

## 📏 Tamanhos

| Tamanho | Padding | Texto | Border Radius |
|---------|---------|-------|---------------|
| `sm` | `px-4 py-2.5` | `text-sm` | `rounded-2xl` |
| `md` | `px-6 py-3.5` | `text-base` | `rounded-2xl` |
| `lg` | `px-8 py-4.5` | `text-lg` | `rounded-3xl` |
| `xl` | `px-10 py-5.5` | `text-xl` | `rounded-3xl` |

## 💡 Exemplos de Uso

### Botão com Ícone (WhatsApp)
```jsx
<SoftPillowButton 
  href="https://wa.me/5516993962305"
  variant="primary"
  size="lg"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    {/* SVG do WhatsApp */}
  </svg>
  <span>Quero agendar uma sessão!</span>
</SoftPillowButton>
```

### Botão Full-Width
```jsx
<SoftPillowButton 
  onClick={handleClick}
  variant="primary"
  size="lg"
  fullWidth
>
  Agendar Agora
</SoftPillowButton>
```

### Botão Pequeno
```jsx
<SoftPillowButton 
  onClick={handleClick}
  variant="soft"
  size="sm"
>
  Saiba Mais
</SoftPillowButton>
```

## 🎯 Classes CSS Aplicadas

### Estrutura Visual
- **Gradiente Vertical**: `bg-gradient-to-b from-{color}-400 to-{color}-500`
- **Borda Superior (Reflexo)**: `border-t border-white/30`
- **Sombra Externa**: `shadow-lg shadow-{color}-500/30`
- **Sombra Interna**: `shadow-inner shadow-black/10`

### Interações
- **Hover**: `hover:shadow-xl` (sombra aumenta)
- **Active**: `active:scale-[0.98] active:translate-y-[1px]` (encolhe e desce)
- **Transição**: `transition-all duration-200 ease-out`

### Elementos Visuais Internos
- **Reflexo Superior**: Gradiente branco transparente no topo 1/3
- **Sombra Interna Inferior**: Gradiente preto transparente na base 1/4

## 🔧 Personalização

### Classes Adicionais
Você pode adicionar classes customizadas via prop `className`:

```jsx
<SoftPillowButton 
  onClick={handleClick}
  className="mt-4 mb-2"
>
  Botão Customizado
</SoftPillowButton>
```

### Cores Customizadas
Para cores diferentes, você pode sobrescrever usando classes do Tailwind:

```jsx
<SoftPillowButton 
  onClick={handleClick}
  className="bg-gradient-to-b from-purple-400 to-purple-500 shadow-purple-500/30"
>
  Botão Roxo
</SoftPillowButton>
```

## 🎨 Princípios de Design

### Sensação de "Macio"
1. **Gradiente vertical sutil** cria ilusão de profundidade
2. **Bordas arredondadas** (`rounded-2xl` ou `rounded-3xl`) são mais orgânicas
3. **Sombras coloridas** (não pretas) criam sensação de suavidade
4. **Transições suaves** (200ms) não são abruptas

### Feedback Visual
1. **Hover**: Sombra aumenta (parece que eleva)
2. **Active**: Scale diminui e desce ligeiramente (parece pressionar)
3. **Reflexo de luz**: Simula material macio sendo iluminado

### Acessibilidade
- Funciona como `<button>` ou `<a>` conforme necessário
- Mantém estados de hover e focus visíveis
- Transições suaves não causam problemas de movimento

## 🚀 Integração com Projeto Existente

Para usar nos componentes existentes, substitua os botões atuais:

```jsx
// ANTES
<a
  href={whatsappUrl}
  className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 ..."
>
  Agendar Sessão
</a>

// DEPOIS
<SoftPillowButton
  href={whatsappUrl}
  variant="primary"
  size="lg"
>
  Agendar Sessão
</SoftPillowButton>
```

## 📝 Notas Técnicas

- O componente usa apenas classes do Tailwind CSS
- Não requer dependências externas
- Funciona com React 19+
- Compatível com SSR (Server-Side Rendering)
- Acessível por padrão (semântico HTML)

## 🎯 Melhores Práticas

1. **Use `variant="primary"`** para CTAs principais
2. **Use `size="lg"` ou `size="xl"`** para botões importantes
3. **Adicione ícones** para melhor comunicação visual
4. **Mantenha texto curto** para melhor legibilidade
5. **Use `fullWidth`** apenas quando necessário (forms, mobile)

## 🔄 Comparação com Botões Existentes

| Aspecto | Botão Atual | SoftPillowButton |
|---------|-------------|------------------|
| Estilo | Gradiente horizontal brilhante | Gradiente vertical suave |
| Sombra | Preta/escura | Colorida (verde) |
| Sensação | Energético/dinâmico | Macio/confortável |
| Uso Ideal | Ação rápida | Bem-estar/relaxamento |

## ✅ Checklist de Implementação

- [x] Componente criado com gradiente vertical
- [x] Reflexo de luz superior implementado
- [x] Sombra interna e externa configuradas
- [x] Efeito active (scale e translate) funcionando
- [x] Variantes de cor (primary, secondary, soft)
- [x] Tamanhos responsivos (sm, md, lg, xl)
- [x] Suporte para link e button
- [x] Documentação completa
- [x] Exemplos de uso criados

---

**Criado para:** Leli Morgado Massoterapeuta  
**Data:** 2024  
**Versão:** 1.0.0

