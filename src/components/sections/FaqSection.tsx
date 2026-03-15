import FaqItem from "@/components/FaqItem";

const faqs = [
  { q: "Como vou receber o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail da plataforma (Kiwify) com seu login e senha." },
  { q: "Como vou acessar e usar o Protocolo?", a: "Você recebe no e-mail o link de acesso imediato. Assiste as aulas, baixa os materiais e usa." },
  { q: "Em quanto tempo vejo resultado?", a: "No mesmo dia. Aplique uma técnica e veja a diferença. Os Cards e o Checklist ajudam na hora." },
  { q: "Serve para qualquer idade?", a: "Sim! O foco principal é de 2 a 12 anos, mas os princípios dos 4 temperamentos se aplicam desde bebês à adolescentes (e até adultos!)." },
  { q: "Funciona pro meu caso?", a: "Sim. Serve de Mães Solos até Profissionais da Educação. Funciona com diferentes tipos de crianças. Você adapta as técnicas ao temperamento." },
  { q: "Posso usar com mais de um filho?", a: "Sim. O protocolo serve para irmãos com temperamentos diferentes. Primeiro use o Checklist para identificar. Depois aplique as técnicas em cada filho." },
  { q: "E se meu filho for mistura de temperamentos?", a: "Normal. Use o Checklist e o Guia de Encontro dos Temperamentos. Combine as técnicas. Teste e ajuste conforme a reação dele." },
  { q: "Preciso de experiência?", a: "Não. Nenhuma experiência anterior é necessária. Você assiste e aplica no mesmo dia." },
  { q: "Por quanto tempo tenho acesso?", a: "O acesso ao curso e a todas as atualizações é válido por 1 Ano (12 meses)." },
  { q: "E se eu não gostar?", a: "Você tem 7 Dias de Garantia Incondicional. Se não gostar, só pedir o Reembolso e ter seu dinheiro de volta. Simples assim." },
];

const FaqSection = () => (
  <section className="w-full px-4 py-16 md:py-20 bg-prussianBlue text-cornSilk !pt-16">
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <h2 className="!text-seaShell text-3xl font-black text-center mb-8">
        FAQ<br />Perguntas Frequentes
      </h2>
      <div className="!bg-nightBlue !text-cornSilk rounded-3xl p-6 shadow-xl border-4 !p-0 overflow-hidden" style={{ borderColor: 'rgb(249, 115, 22)' }}>
        <div className="px-6">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
