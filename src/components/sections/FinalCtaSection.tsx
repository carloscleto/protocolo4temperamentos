import { ShieldCheck, Star } from "lucide-react";
import CtaButton from "@/components/CtaButton";

const FinalCtaSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlueDark text-cornSilk !pt-16 space-y-12">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-black text-cornSilk leading-relaxed md:leading-[3rem] mb-8">
          Sua chance de mudar o clima da sua casa<br className="hidden md:block" /> por menos de R$&nbsp;3,50 por dia.
        </h2>
        <div className="flex flex-col items-center mb-8">
          <p className="text-cornSilk/80 text-lg mb-4 font-medium">
            Você leva o Protocolo<br className="md:hidden" /> + Todos os Bônus
          </p>
          <p className="text-ctaCarrotOrange/90 text-xl mb-4 font-black">HOJE</p>
          <div className="inline-block bg-racingRed text-cornSilk px-6 py-2 rounded-full transform -rotate-2 shadow-xl mb-6">
            <span className="text-base font-bold mr-2">DE:</span>
            <span className="font-bold text-xl line-through decoration-white decoration-[3px] opacity-90">R$ 297,00</span>
          </div>
          <p className="text-cornSilk text-xl mb-2 font-semibold">por apenas:</p>
          <div className="text-7xl md:text-8xl font-black text-cornSilk tracking-tighter drop-shadow-2xl mb-4">
            R$ 97<span className="text-4xl font-bold text-cornSilk/50">,00</span>
          </div>
          <p className="text-ctaTigerOrange text-md md:text-lg font-black tracking-widest">
            À VISTA ou EM ATÉ
            <span className="text-xl md:text-2xl font-bold text-wheat/80">
              <br className="md:hidden" /> 10x de R$ 11,66
            </span>
            <br className="md:hidden" /> NO CARTÃO
          </p>
        </div>
        <div className="w-full max-w-xl mx-auto">
          <CtaButton text="QUERO MEU ACESSO" href="https://pay.cakto.com.br/3d2bb4x_811174" extraClasses="shadow-2xl" onClick={() => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event', 'cta_click', { event_category: 'conversao', event_label: 'final_quero_meu_acesso' }); } }} />
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4 opacity-60 text-cornSilk/80 text-base">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-green-500" aria-hidden="true" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="hidden md:block">•</div>
          <div className="flex items-center gap-2">
            <Star size={20} className="text-sanguine fill-sanguine" aria-hidden="true" />
            <span>7 Dias de Garantia Incondicional</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
