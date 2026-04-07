const HeroSection = () => (
  <section id="hero" className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-almondCream overflow-hidden pt-6 md:!pt-10 md:!pb-24">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex justify-center mb-2">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/M_LOGO_270px.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/assets/D_LOGO_150px.webp"
            type="image/webp"
          />
          <img
            src="/assets/D_LOGO_150px.webp"
            alt="Logo Clube Premium BR"
            width={150}
            height={150}
            fetchPriority="high"
            decoding="async"
            className="w-[150px] h-[150px] object-contain"
            style={{ display: 'block' }}
          />
        </picture>
      </div>
      <div className="text-center space-y-6">
        <p className="text-xl md:text-2xl font-bold leading-snug md:leading-[2rem] text-cornSilk">
          <span className="md:hidden">O Guia Prático para Identificar<br />o Temperamento do seu Filho<br />e Acabar com os Gritos em Casa<br /><span className="text-2xl">em 7 Dias</span><br /><span className="text-base">(Mesmo que Você já tenha Tentado de Tudo)</span></span>
          <span className="hidden md:inline text-[#fefae1]">O Guia Prático para Identificar o Temperamento do seu Filho<br />e Acabar com os Gritos em Casa em 7 Dias<br />(Mesmo que Você já tenha Tentado de Tudo)</span>
        </p>
      </div>
      <div className="flex justify-center">
        <span className="inline-block px-3 py-1 rounded-full bg-ctaCarrotOrange/20 text-ctaCarrotOrange text-xs font-bold tracking-wide border border-ctaCarrotOrange">
          MÉTODO EXCLUSIVO
        </span>
      </div>
      <div className="text-center space-y-12">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 md:mb-12">
          Protocolo dos 4&nbsp;
          <span className="text-sanguine">Tem</span>
          <span className="text-choleric">pera</span>
          <span className="text-melancholic">men</span>
          <span className="text-phlegmatic">tos</span>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto text-center space-y-16">
        <div className="space-y-10 md:space-y-12">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed md:leading-[2.5rem] mt-0">
            <span className="md:hidden">5 Aulas para se<br />Comunicar Assertivamente<br />com os Seus Filhos.</span>
            <span className="hidden md:inline">5 Aulas para se Comunicar Assertivamente<br />com os Seus Filhos.</span>
          </p>
          <p className="text-center text-xl md:text-2xl font-bold leading-relaxed md:leading-[2.5rem] mb-8">
            Comunique-se com cada<br className="md:hidden" /> temperamento hoje<br />
            <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">sem</span>&nbsp;
            <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">gritar</span>,&nbsp;
            <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">nem</span>&nbsp;
            <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">castigar</span>.
          </p>
          <div className="inline-block bg-cornSilk rounded-lg p-3 backdrop-blur-sm border border-wheat/70">
            <p className="text-lg font-bold tracking-wide">
              <span className="text-sanguine">Identifique </span>
              <span className="text-choleric">o temperamento </span>
              <span className="text-melancholic">dos seus filhos </span>
              <span className="text-phlegmatic">em minutos.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
