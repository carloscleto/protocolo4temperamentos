import { Heart } from "lucide-react";
import creatorImg from "@/assets/images/Creator_Round.webp";

const facts = [
  "Mãe de 3 em Tempo Integral",
  <>Criadora do <span className="font-bold">Protocolo dos 4&nbsp;Temperamentos</span></>,
  "+1000 Fraldas Trocadas com\u00A0Sucesso",
  "+200 Noites Mal Dormidas Cuidando\u00A0de\u00A0Tudo",
  "+100 Crises de Choro Acalmadas no\u00A0Meu\u00A0Colo",
  '+400 Roupas Trocadas Porquê "Não\u00A0Quero Sair com Essa Roupaaa!"',
  "+300 Horas Sentada no Chão com Dor\u00A0nas\u00A0Costas e Brincando",
  "+1000 Horas Me Sentindo Culpada Porquê Briguei por Estar Exausta",
];

const CreatorSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk md:!pb-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cta shadow-2xl relative group">
            <img alt="Adriele Marques" loading="lazy" width="400" height="400" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src={creatorImg} />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="!bg-cornSilk/90 text-prussianBlue rounded-3xl p-6 shadow-2xl border-2 border-dashed w-full" style={{ borderColor: 'rgb(247, 152, 36)' }}>
            <h3 className="font-black text-xl mb-6 text-left text-ctaTigerOrange">
              Quem é <span className="text-2xl">Adriele Marques?</span>
            </h3>
            <ul className="text-left text-base text-prussianBlue/80 divide-y divide-prussianBlue/10">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 py-3 hover:bg-seaShell/50 hover:italic transition-colors rounded-lg px-2 -mx-2">
                  <Heart size={18} className="text-ctaTigerOrange shrink-0 mt-[3px]" aria-hidden="true" />
                  <span className="leading-snug font-medium">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CreatorSection;
