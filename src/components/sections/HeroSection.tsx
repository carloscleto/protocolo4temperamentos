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
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 text-center md:text-left space-y-16">
          <div className="space-y-10 md:space-y-12">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed md:leading-[2.5rem] mt-0">
              <span className="md:hidden">Pare de Lutar Contra a Natureza<br />do Seu Filho e Aprenda<br />a Linguagem que Ele Entende.</span>
              <span className="hidden md:inline">Pare de Lutar Contra a Natureza do Seu Filho<br />e Aprenda a Linguagem que Ele Entende.</span>
            </p>
            {/* Mobile mockup */}
            <div className="md:hidden relative group cursor-pointer w-full mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-sanguine to-choleric rounded-3xl blur opacity-30 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] bg-gray-900 flex items-center justify-center">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet="/assets/M_Mockup_700px.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/M_Mockup_700px.webp"
                    alt="Protocolo dos 4 Temperamentos - Mockup"
                    width={470}
                    height={700}
                    fetchPriority="high"
                    className="mockup-img absolute inset-0 w-full h-full object-cover opacity-60 transition duration-500"
                  />
                </picture>
              </div>
            </div>
            <p className="text-center md:text-left text-xl md:text-2xl font-bold leading-relaxed md:leading-[2.5rem] mb-8">
              Comunique-se com cada<br className="md:hidden" /> temperamento hoje<br />
              <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">sem</span>&nbsp;
              <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">gritar</span>,&nbsp;
              <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">nem</span>&nbsp;
              <span className="!font-semibold text-racingRed decoration-racingRed line-through decoration-[3px] opacity-80">castigar</span>.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed md:leading-[2.5rem] mt-0 mb-16">
              <span className="font-bold">5 Aulas</span> para se{" "}
              <span className="font-bold">Comunicar Assertivamente</span><br />
              com os <span className="font-bold">Seus Filhos</span>.
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
        {/* Desktop mockup */}
        <div className="hidden md:block md:col-span-2 self-center relative group cursor-pointer w-full mt-8 md:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-sanguine to-choleric rounded-3xl blur opacity-30 transition duration-1000"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/4] bg-gray-900 flex items-center justify-center">
            <picture>
              <source
                media="(min-width: 769px)"
            srcSet="/assets/D_Mockup_672px.webp"
            type="image/webp"
          />
          <img
            src="/assets/D_Mockup_1000px.webp"
                alt="Protocolo dos 4 Temperamentos - Mockup"
                width={671}
                height={672}
                fetchPriority="high"
                className="mockup-img absolute inset-0 w-full h-full object-cover opacity-60 transition duration-500"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
