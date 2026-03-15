import { CircleCheckBig, X } from "lucide-react";

const forYou = [
  "Está começando do zero e nunca estudou temperamentos infantis.",
  "Já estudou sobre os 4 Temperamentos, mas não conseguiu aplicar.",
  "Cuida de tudo sozinha e sente que só gritando funciona.",
  "Vê cada filho reagindo diferente e não entende o porquê.",
  "Trabalha o dia todo e volta sem energia para educar.",
  "Já tentou quadros de rotina, combinados e recompensas sem sucesso.",
];

const notForYou = [
  "Quer um milagre sem aplicar nada do material.",
  "Busca diagnóstico clínico ou laudo médico.",
  "Não quer separar 10 minutos por dia para testar.",
  "Espera que a Escola, a Babá ou os Avós resolvam por você.",
];

const ForYouSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-cornSilk md:!pt-16 !pb-20 md:!pb-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-cornSilk mb-4">Será que este Protocolo é para mim?</h2>
        <p className="text-lg text-cornSilk/70 max-w-2xl mx-auto">
          Descubra se você se encaixa no perfil<br className="md:hidden" /> das mães, pais<br className="hidden md:block" /> e educadores<br className="md:hidden" /> que têm resultados.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        <div className="bg-green-500/15 rounded-3xl p-4 md:p-8 border-dashed border-2 border-green-500/50 shadow-lg hover:border-green-500/100 transition-colors duration-300 relative overflow-hidden">
          <h3 className="font-bold text-green-400 mb-8 flex items-center gap-3 text-xl md:text-2xl">
            <div className="p-2 bg-green-500/20 rounded-full shrink-0">
              <CircleCheckBig size={24} strokeWidth={4} className="text-green-400" aria-hidden="true" />
            </div>
            <span className="whitespace-nowrap">É para VOCÊ que:</span>
          </h3>
          <ul className="space-y-6">
            {forYou.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <CircleCheckBig size={20} strokeWidth={3} className="text-green-500 shrink-0 mt-1" aria-hidden="true" />
                <span className="text-lg text-cornSilk font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-racingRed/20 rounded-3xl p-6 md:p-8 border-dashed border-2 border-racingRed/50 shadow-lg hover:border-racingRed/100 transition-colors duration-300 relative overflow-hidden">
          <h3 className="font-bold text-racingRed mb-8 flex items-center gap-3 text-xl md:text-2xl">
            <div className="p-2 bg-racingRed/20 rounded-full shrink-0">
              <X size={24} strokeWidth={4} className="text-racingRed" aria-hidden="true" />
            </div>
            <span className="whitespace-nowrap">NÃO É para VOCÊ que:</span>
          </h3>
          <ul className="space-y-6 opacity-80">
            {notForYou.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <X size={20} strokeWidth={3} className="text-racingRed shrink-0 mt-1" aria-hidden="true" />
                <span className="text-lg text-cornSilk/90 font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ForYouSection;
