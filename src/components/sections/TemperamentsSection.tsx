import { Wind, Flame, Mountain, Droplets } from "lucide-react";

const temperaments = [
  { name: "Sanguíneo", desc: "Ar • Leve, sociável, divertido, distraído.", color: "rgb(255, 193, 7)", bgColor: "rgba(255, 193, 7, 0.376)", Icon: Wind },
  { name: "Colérico", desc: "Fogo • Direto, audacioso, desafiador, focado.", color: "rgb(255, 87, 51)", bgColor: "rgba(255, 87, 51, 0.376)", Icon: Flame },
  { name: "Melancólico", desc: "Terra • Organizado, profundo, sensível, analítico.", color: "rgb(128, 185, 24)", bgColor: "rgba(128, 185, 24, 0.376)", Icon: Mountain },
  { name: "Fleumático", desc: "Água • Calmo, observador, lento, pacificador.", color: "rgb(0, 119, 182)", bgColor: "rgba(0, 119, 182, 0.376)", Icon: Droplets },
];

const TemperamentsSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-cornSilk md:!pt-16 !pb-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="text-center mb-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-black mb-4 text-cornSilk">Os 4 Elementos</h2>
        <p className="text-cornSilk text-lg">Entenda o temperamento do seu filho.</p>
      </div>
      <div className="grid gap-4 max-w-3xl self-center">
        {temperaments.map((t, i) => (
          <div key={i} className="p-4 rounded-2xl border-2 flex items-center gap-4 transition-transform hover:scale-105 duration-300" style={{ backgroundColor: t.bgColor, borderColor: t.color }}>
            <div className="p-3 rounded-full text-white shadow-sm shrink-0" style={{ backgroundColor: t.color }}>
              <t.Icon size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight" style={{ color: t.color }}>{t.name}</h3>
              <p className="text-sm font-medium text-cornSilk">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TemperamentsSection;
