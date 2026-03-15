import { CircleAlert } from "lucide-react";

const reasons = [
  "Você usa a mesma abordagem para\u00A0todos, mas cada filho tem um\u00A0\"elemento\" diferente.",
  "Quando a estratégia não combina, o\u00A0cérebro bloqueia e\u00A0reage.",
  "Seu corpo entra em alerta quando a\u00A0rotina aperta.",
  "Reações automáticas tomam conta, nos\u00A0dois, e não é sua culpa.",
  "Existe conflito de temperamentos entre vocês.",
  "Quando você acelera, ele trava. Não\u00A0é desobediência, é\u00A0incompatibilidade de\u00A0ritmo.",
  "O ambiente sabota a cooperação sem você perceber.",
  "Transições sem aviso, estímulos demais ou\u00A0de menos criam atrito o\u00A0dia inteiro.",
];

const WhySection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-cornSilk">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="mx-auto max-w-4xl p-6 md:p-8 bg-prussianBlueDark rounded-3xl border-2 border-dashed border-digitalBlue shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <CircleAlert size={32} className="text-pumpkinSpice shrink-0" aria-hidden="true" />
          <h3 className="font-bold text-xl md:text-2xl">Por que isso acontece?</h3>
        </div>
        <ul className="space-y-4 text-cornSilk/80">
          {reasons.map((reason, i) => (
            <li key={i} className="flex gap-3 text-base md:text-lg items-start">
              <span className="text-digitalBlue font-bold mt-1 text-xs">●</span>
              <span className="leading-snug">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-4 font-bold text-2xl text-cornSilk max-w-2xl mx-auto">
        Mas existe uma forma simples de resolver isso.
      </div>
    </div>
  </section>
);

export default WhySection;
