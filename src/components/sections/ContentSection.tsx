import { BookOpen, Flame, Wind, Mountain, Droplets, CircleCheckBig, ShieldCheck } from "lucide-react";

const lessons = [
  { title: "Aula 1 : A Chave Mestra", desc: "Entenda seu filho em minutos e reduza brigas hoje.", color: "rgb(10, 104, 255)", Icon: BookOpen, bgClass: "bg-digitalBlue" },
  { title: "Aula 2 : Sanguíneo Com Foco", desc: "Torne tarefas um jogo e acelere a sua manhã.", color: "rgb(255, 193, 7)", Icon: Wind, bgClass: "bg-sanguine" },
  { title: "Aula 3 : Colérico Sem Embate", desc: "Acabe com disputas de poder em 5 minutos, sem gritar.", color: "rgb(255, 87, 51)", Icon: Flame, bgClass: "bg-choleric" },
  { title: "Aula 4 : Melancólico Acolhido", desc: "Evite crises de choro com 3 frases simples e previsíveis.", color: "rgb(128, 185, 24)", Icon: Mountain, bgClass: "bg-melancholic" },
  { title: "Aula 5 : Fleumático Ativo", desc: "Faça seu filho colaborar em transições sem estresse.", color: "rgb(0, 119, 182)", Icon: Droplets, bgClass: "bg-phlegmatic" },
];

const ContentSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk md:!pt-16 !pb-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <h2 className="text-3xl font-black text-center mb-8">Veja Tudo que Você Recebe</h2>
      <div className="space-y-4 self-center">
        {lessons.map((l, i) => (
          <div key={i} className="!bg-cornSilk text-prussianBlue rounded-3xl p-6 shadow-xl border-4" style={{ borderColor: l.color }}>
            <div className="flex gap-3">
              <div className={`${l.bgClass} text-seaShell p-2 rounded-lg h-fit shrink-0`}>
                <l.Icon size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-prussianBlue">{l.title}</h4>
                <p className="text-base text-gray-600 mt-1">{l.desc}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="pt-6">
          <div className="inline-block bg-pumpkinSpice text-seaShell px-4 py-1 rounded-full text-base font-bold mb-4">🎁 3 BÔNUS EXCLUSIVOS</div>
          <div className="space-y-3">
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3">
              <CircleCheckBig className="text-ctaTigerOrange shrink-0" size={24} aria-hidden="true" />
              <div>
                <h5 className="font-bold text-prussianBlue text-base">Checklist de Identificação</h5>
                <p className="text-sm text-gray-600">Descubra o temperamento dos seus filhos em minutos.</p>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3">
              <BookOpen className="text-ctaTigerOrange shrink-0" size={24} aria-hidden="true" />
              <div>
                <h5 className="font-bold text-prussianBlue text-base">Cards de Pronto-Socorro</h5>
                <p className="text-sm text-gray-600">Salve os Cards de técnicas para usar na hora da birra.</p>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3">
              <ShieldCheck className="text-ctaTigerOrange shrink-0" size={24} aria-hidden="true" />
              <div>
                <h5 className="font-bold text-prussianBlue text-base">Guia de Sobrevivência</h5>
                <p className="text-sm text-gray-600">Resolva conflitos entre irmãos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSection;
