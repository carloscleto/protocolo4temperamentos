const steps = [
  { num: "1", title: "Identifique Rápido", desc: "Assista a Aula 1. Use o Checklist e entenda o temperamento em minutos." },
  { num: "2", title: "Cards de Pronto-Socorro", desc: "Assista à aula específica do seu filho. Salve os Cards de técnicas claras para usar agora." },
  { num: "3", title: "Fim dos Gritos", desc: "Use uma técnica hoje. O\u00A0ambiente acalma e você retoma a liderança sem surtar." },
];

const StepsSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk !pb-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <h2 className="text-3xl font-black text-center mb-3">
        Funciona em<br />
        <span className="text-ctaTigerOrange">3 Passos Simples</span>
      </h2>
      <div className="space-y-8 relative max-w-4xl mx-auto">
        <div className="absolute left-5 top-8 bottom-1.5 w-1 bg-seaShell/20 rounded-full"></div>
        {steps.map((step, i) => (
          <div key={i} className="relative pl-16 group">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-pumpkinSpice rounded-full flex items-center justify-center font-black text-xl text-seaShell shadow-lg border-4 border-nightBlue z-10 group-hover:scale-110 transition-transform duration-300 leading-none pt-[1px] pr-[2px]">
              {step.num}
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <h3 className="font-bold text-xl text-seaShell mb-2">{step.title}</h3>
              <p className="text-cornSilk/80 text-base leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
