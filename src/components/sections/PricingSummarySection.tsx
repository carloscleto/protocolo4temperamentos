const items = [
  { name: "Protocolo dos 4 Temperamentos Completo ( 5 Aulas )", price: "R$ 197" },
  { name: "Cards de Pronto-Socorro", price: "R$ 26" },
  { name: "Bônus ( Checklist de Identificação )", price: "R$ 37" },
  { name: "Bônus ( Guia de Sobrevivência )", price: "R$ 37" },
];

const PricingSummarySection = () => (
  <section id="pricing" className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk !pt-20 !pb-0 md:!pb-0">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
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
