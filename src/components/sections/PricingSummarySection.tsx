const items = [
  { name: "Protocolo dos 4 Temperamentos Completo ( 5 Aulas )", price: "R$ 197" },
  { name: "Bônus ( Checklist de Identificação )", price: "R$ 37" },
  { name: "Bônus ( Cards de Pronto-Socorro )", price: "R$ 26" },
  { name: "Bônus ( Guia de Sobrevivência )", price: "R$ 37" },
];

const PricingSummarySection = () => (
  <section id="pricing" className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk !pt-20 !pb-0 md:!pb-0">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="max-w-2xl mx-auto space-y-5 mb-8 text-center">
        <p className="text-base md:text-lg text-cornSilk/90 leading-relaxed">
          <span className="md:hidden">O Preço Médio hoje no Brasil é de<br /><span className="font-bold text-seaShell">R$250,00</span> por 1 Sessão de Terapia Infantil.</span>
          <span className="hidden md:inline">O Preço Médio hoje no Brasil é de <span className="font-bold text-seaShell">R$250,00</span> por 1 Sessão de Terapia Infantil.</span>
        </p>
        <p className="text-base md:text-lg text-cornSilk/90 leading-relaxed">
          <span className="md:hidden">Se você for fazer um pacote de Sessões<br />não vai sair menos que <span className="font-bold text-seaShell">R$1.500,00</span>.</span>
          <span className="hidden md:inline">Se você for fazer um pacote de Sessões não vai sair menos que <span className="font-bold text-seaShell">R$1.500,00</span>.</span>
        </p>
        <p className="text-base md:text-lg text-cornSilk/90 leading-relaxed">
          <span className="md:hidden">Mas pior que isso são os <span className="font-bold text-seaShell">anos de brigas e<br />traumas emocionais</span> gerados pelas<br />falhas de comunicação com seus filhos.</span>
          <span className="hidden md:inline">Mas pior que isso são os <span className="font-bold text-seaShell">anos de brigas e traumas emocionais</span> gerados pelas falhas de comunicação com seus filhos.</span>
        </p>
        <p className="text-base md:text-lg font-bold text-seaShell leading-relaxed">
          <span className="md:hidden">Com o Protocolo dos 4 Temperamentos<br />você vai entender e conseguir se comunicar<br />com o seu filho em menos de 10 minutos e<br />começar a ter a relação tranquila que<br />você sempre sonhou em casa!</span>
          <span className="hidden md:inline">Com o Protocolo dos 4 Temperamentos você vai entender e conseguir se comunicar com o seu filho em menos de 10 minutos e começar a ter a relação tranquila que você sempre sonhou em casa!</span>
        </p>
      </div>
      <div className="relative z-10 text-center">
        <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border-2 border-dashed border-cornSilk/80 text-left space-y-6 mb-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4 text-gray-300 text-sm md:text-lg">
                <span className="text-left">{item.name}</span>
                <span className="shrink-0 text-right text-base md:text-lg line-through decoration-racingRed decoration-2 opacity-80">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 pt-4 flex justify-between items-center gap-4 font-bold text-seaShell text-lg md:text-xl">
            <span>Valor Total</span>
            <span className="shrink-0 line-through decoration-racingRed decoration-2">R$ 297</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSummarySection;
