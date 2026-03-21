import { Link } from "react-router-dom";

const TermosServico = () => (
  <div className="min-h-screen bg-offWhite text-nightBlue font-sans antialiased">
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <Link to="/" className="text-digitalBlue hover:underline text-sm mb-8 inline-block">
        ← Voltar ao início
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-prussianBlue mb-8">
        Termos de Serviço
      </h1>
      <p className="text-sm text-grey mb-8">Última atualização: 21 de março de 2026</p>

      <div className="space-y-6 text-nightBlue/90 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site e os serviços do <strong>Clube Premium BR</strong>, você
            concorda integralmente com estes Termos de Serviço. Caso não concorde com qualquer
            disposição, solicitamos que não utilize nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">2. Descrição do Serviço</h2>
          <p>
            O Clube Premium BR oferece o curso digital{" "}
            <strong>"Protocolo dos 4 Temperamentos"</strong>, composto por videoaulas e materiais
            complementares voltados para pais e mães que desejam melhorar a comunicação com seus
            filhos. O acesso ao conteúdo é realizado integralmente de forma online.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">3. Cadastro e Acesso</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>O acesso ao conteúdo requer a realização de compra pela plataforma Cakto;</li>
            <li>Você é responsável por manter a confidencialidade dos seus dados de acesso;</li>
            <li>O compartilhamento de login ou conteúdo com terceiros é proibido.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">4. Pagamento e Reembolso</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Os pagamentos são processados exclusivamente pela plataforma <strong>Cakto</strong>;</li>
            <li>Aceitamos pagamento via PIX, cartão de crédito (Visa e Mastercard);</li>
            <li>
              Em conformidade com o Código de Defesa do Consumidor (Art. 49), você tem o direito
              de solicitar reembolso em até <strong>7 dias corridos</strong> após a compra,
              sem necessidade de justificativa;
            </li>
            <li>Para solicitar reembolso, entre em contato pelo e-mail indicado na seção de Contato.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo disponibilizado no curso — incluindo vídeos, textos, imagens, materiais
            e marca — é de propriedade exclusiva do <strong>Clube Premium BR</strong> e está
            protegido pela legislação de direitos autorais. É proibido:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Reproduzir, distribuir ou compartilhar o conteúdo sem autorização;</li>
            <li>Gravar, baixar ou capturar telas das aulas;</li>
            <li>Utilizar o conteúdo para fins comerciais sem permissão expressa.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">6. Responsabilidades do Usuário</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fornecer informações verdadeiras e atualizadas no momento da compra;</li>
            <li>Utilizar o conteúdo para uso pessoal e educacional;</li>
            <li>Não utilizar o site para fins ilícitos ou que violem direitos de terceiros.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">7. Limitação de Responsabilidade</h2>
          <p>
            O Clube Premium BR não garante a obtenção de resultados específicos com o uso do
            conteúdo. As informações fornecidas têm caráter educacional e não substituem
            acompanhamento profissional especializado. Qualquer referência ao desempenho de uma
            estratégia não deve ser interpretada como garantia de resultados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">8. Disponibilidade do Serviço</h2>
          <p>
            Nos esforçamos para manter o site e o conteúdo disponíveis 24 horas por dia. No
            entanto, não garantimos disponibilidade ininterrupta, podendo ocorrer manutenções
            programadas ou interrupções por motivos técnicos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">9. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos de Serviço a qualquer momento. As
            alterações entram em vigor imediatamente após a publicação no site. O uso continuado
            dos serviços após as alterações constitui aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">10. Legislação Aplicável</h2>
          <p>
            Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Para
            a resolução de quaisquer controvérsias, fica eleito o foro da comarca do domicílio do
            consumidor, conforme previsto no Código de Defesa do Consumidor.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">11. Contato</h2>
          <p>
            Em caso de dúvidas sobre estes Termos de Serviço, entre em contato pelo e-mail:{" "}
            <a href="mailto:suporte@clubepremiumbr.com.br" className="text-digitalBlue hover:underline font-semibold">
              suporte@clubepremiumbr.com.br
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default TermosServico;
