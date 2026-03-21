import CtaButton from "@/components/CtaButton";
import PaymentLogos from "@/components/PaymentLogos";

const PricingCtaSection = () => (
  <section id="offer" className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk !pt-4 md:!pt-4 !pb-20 md:!pb-20">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col items-center mb-4">
        <p className="text-cornSilk text-lg mb-4">Você leva tudo isso</p>
        <p className="text-ctaCarrotOrange/90 text-xl mb-4 font-black">HOJE</p>
        <div className="inline-block bg-red-600 text-seaShell px-4 py-1 rounded-full transform -rotate-3 shadow-lg mb-6">
          <span className="text-base font-bold mr-1">DE:</span>
          <span className="font-bold text-lg line-through decoration-white decoration-2 opacity-90">R$ 297,00</span>
        </div>
        <p className="text-cornSilk text-lg mb-2">por apenas:</p>
        <div className="text-7xl md:text-8xl font-black text-cornSilk tracking-tighter drop-shadow-2xl mb-4">
          R$ 97<span className="text-5xl font-bold text-cornSilk/50">,00</span>
        </div>
        <p className="text-ctaTigerOrange text-center text-md md:text-lg font-black tracking-widest">
          À VISTA ou EM ATÉ
          <span className="text-xl md:text-2xl font-bold text-wheat/80">
            <br className="md:hidden" /> 10x de R$ 11,66
          </span>
          <br className="md:hidden" /> NO CARTÃO
        </p>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <CtaButton text="QUERO APROVEITAR" />
      </div>
      <PaymentLogos />
    </div>
  </section>
);

export default PricingCtaSection;
