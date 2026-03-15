import womanImg from "@/assets/images/Woman_Wondering.webp";

const voices = [
  '"Meu filho só me ouve quando eu grito?\u00A0Eu odeio isso."',
  '"Parece que eles me testam de propósito todo\u00A0dia."',
  '"Todo mundo fala baixo e tem obediência. Eu\u00A0só ganho birra."',
  '"Um filho explode, o outro trava.\u00A0E eu fico sem saber o que fazer."',
  '"As outras mães dão um olhar e resolve.\u00A0Eu viro a polícia da casa."',
  '"Existe um jeito simples pra entender os\u00A0temperamentos sem surtar?"',
];

const HeadVoicesSection = () => (
  <section id="headVoices" className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-6">
        Quando a casa silencia,<br />sua cabeça não pára.
      </h2>
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 mb-8 md:mb-0 mx-auto w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
          <img alt="Mente Agitada" className="w-full h-[400px] object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" loading="lazy" width="500" height="400" src={womanImg} />
        </div>
        <div className="md:col-span-3 grid gap-5">
          {voices.map((voice, i) => (
            <div key={i} className="!bg-cornSilk text-prussianBlue rounded-3xl p-6 shadow-xl border-4 !p-4 !rounded-xl border-l-4 shadow-md hover:translate-x-1 transition-transform duration-300 mx-auto w-full overflow-hidden" style={{ borderColor: 'rgb(245, 223, 187)' }}>
              <p className="italic text-base md:text-lg text-prussianBlue font-semibold leading-tight">{voice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeadVoicesSection;
