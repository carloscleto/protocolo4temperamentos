import logoImg from "@/assets/images/Logo.webp";

const FooterSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-cornSilk !pt-10 !pb-24">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="max-w-6xl mx-auto px-4 text-center opacity-80 text-sm">
        <p className="mb-4 flex flex-col items-center gap-4">
          <img alt="Clube Premium" className="w-[150px] h-[150px] object-contain" src={logoImg} />
          <span>
            Copyright ©2026&nbsp;<span className="text-goldenBronze font-semibold opacity-100">Clube Premium BR</span>.<br />
            Todos os direitos reservados.
          </span>
        </p>
        <div className="flex flex-wrap justify-center text-seaShell/70 gap-4 md:gap-6 mb-4">
          <span className="cursor-pointer hover:text-brightGold/100 hover:font-bold transition-colors">Políticas de Privacidade</span>
          <span className="hidden md:inline">|</span>
          <span className="cursor-pointer hover:text-brightGold/100 hover:font-bold transition-colors">Políticas de Cookies</span>
          <span className="hidden md:inline">|</span>
          <span className="cursor-pointer hover:text-brightGold/100 hover:font-bold transition-colors">Termos de Serviço</span>
        </div>
        <p className="text-xs max-w-2xl mx-auto leading-relaxed">
          Este produto não garante a obtenção de resultados.<br />
          Qualquer referência ao desempenho de uma estratégia&nbsp;não deve ser interpretada como uma garantia&nbsp;de&nbsp;resultados.
        </p>
      </div>
    </div>
  </section>
);

export default FooterSection;
