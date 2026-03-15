

## Plano: Implementar Landing Page com Imagens Originais

### 1. Copiar imagens para o projeto
Copiar todas as 8 imagens uploaded para `src/assets/images/`:
- `Creator_Round.webp`, `Logo.webp`, `Mastercard_Logo.webp`, `Mockup.webp`, `Mockup_Família.webp`, `PIX_Logo.webp`, `VISA_Logo.webp`, `Woman_Wondering.webp`

### 2. Configuração
- **tailwind.config.ts**: Adicionar cores customizadas (offWhite, seaShell, cornSilk, wheat, almondCream, nightBlue, prussianBlue, prussianBlueDark, digitalBlue, grey, ctaCarrotOrange, ctaTigerOrange, pumpkinSpice, racingRed, darkGoldenrod, goldenBronze, brightGold, sanguine, choleric, melancholic, phlegmatic) e animação `pulse-glow`
- **index.html**: Google Fonts Inter, título e meta tags atualizados
- **src/index.css**: `scroll-behavior: smooth`, body classes

### 3. Componentes reutilizáveis (`src/components/`)
- **CtaButton** — Botão CTA animado com pulse-glow, props para texto/href
- **FaqItem** — Acordeão com toggle open/close
- **PaymentLogos** — PIX, Visa, Mastercard usando imagens reais
- **PriceDisplay** — Preço riscado + atual + parcelamento

### 4. Seções da página (`src/components/sections/`)
15 seções convertidas do HTML original, cada uma como componente React, usando as imagens reais importadas de `src/assets/images/`:
1. HeroSection (Logo.webp, Mockup.webp)
2. HeadVoicesSection (Woman_Wondering.webp)
3. WhySection
4. StepsSection
5. TemperamentsSection
6. ContentSection
7. ForYouSection
8. PricingSummarySection
9. PricingCtaSection
10. TestimonialSection (Mockup_Família.webp)
11. CreatorSection (Creator_Round.webp)
12. FaqSection
13. FinalCtaSection
14. FooterSection (Logo.webp)
15. FloatingCta (visibilidade baseada em scroll)

### 5. Index.tsx
Compor todas as seções na ordem correta, mantendo layout e classes Tailwind idênticos ao HTML original.

