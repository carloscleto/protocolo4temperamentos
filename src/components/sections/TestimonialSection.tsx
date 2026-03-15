import familyImg from "@/assets/images/Mockup_Familia.webp";

const TestimonialSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-cornSilk md:!pt-16">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-8">"Eu sei como é tentar dar conta de&nbsp;tudo e se culpar."</h2>
        <div className="text-cornSilk mb-8 italic max-w-2xl mx-auto">
          <ul className="space-y-3 md:space-y-4 text-lg md:text-xl leading-relaxed md:leading-normal">
            <li>"A rotina aperta.</li>
            <li>Parece que tudo só funciona se&nbsp;você&nbsp;grita.</li>
            <li>Você acha que falhou e que os outros&nbsp;te&nbsp;julgam.</li>
            <li>Eu já passei por isso.</li>
            <li>Já gritei. Já chorei no banheiro.</li>
            <li>Já perdi o sono perguntando:<br className="md:hidden" /> "Por que não me escutam?"</li>
            <li>Por isso criei o<br className="md:hidden" /> <span className="font-bold">Protocolo dos 4 Temperamentos</span></li>
            <li>Coloquei o que usei em casa,<br className="md:hidden" /> simples e direto.</li>
            <li>E funciona porque você entende o&nbsp;temperamento de<span className="md:hidden">&nbsp;cada&nbsp;um</span></li>
            <li><span className="hidden md:inline">cada&nbsp;um&nbsp;</span>e fala do jeito que seu filho entende.</li>
            <li>Você aplica no mesmo dia e sente alívio.</li>
            <li>Você não está sozinha. Respira.</li>
            <li>Existe um jeito mais leve."</li>
          </ul>
        </div>
        <img
          alt="Família Feliz"
          loading="lazy"
          width="500"
          height="350"
          className="mt-8 object-cover object-[50%_35%] rounded-2xl shadow-2xl border-4 border-white/10 w-full h-[350px] md:w-1/3"
          src={familyImg}
        />
      </div>
    </div>
  </section>
);

export default TestimonialSection;
