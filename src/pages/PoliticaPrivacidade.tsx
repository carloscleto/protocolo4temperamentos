import { Link } from "react-router-dom";

const PoliticaPrivacidade = () => (
  <div className="min-h-screen bg-offWhite text-nightBlue font-sans antialiased">
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <Link to="/" className="text-digitalBlue hover:underline text-sm mb-8 inline-block">
        ← Voltar ao início
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-prussianBlue mb-8">
        Política de Privacidade
      </h1>
      <p className="text-sm text-grey mb-8">Última atualização: 21 de março de 2026</p>

      <div className="space-y-6 text-nightBlue/90 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">1. Introdução</h2>
          <p>
            O <strong>Clube Premium BR</strong> ("nós", "nosso") valoriza a privacidade dos seus
            usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e
            protegemos as suas informações pessoais quando você acessa nosso site e utiliza nossos
            serviços.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">2. Dados Coletados</h2>
          <p>Podemos coletar os seguintes tipos de dados:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Dados de identificação:</strong> nome, e-mail e telefone fornecidos voluntariamente por você.</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, horário de acesso e dados de cookies.</li>
            <li><strong>Dados de uso:</strong> interações com o conteúdo, cliques e preferências.</li>
          </ul>
          <p className="mt-2">
            <strong>Não coletamos dados de pagamento diretamente.</strong> Todas as transações financeiras
            são processadas pela plataforma <strong>Cakto</strong>, que possui sua própria política de
            privacidade e segurança de dados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">3. Finalidade do Uso dos Dados</h2>
          <p>Utilizamos seus dados para:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Fornecer e melhorar nossos serviços e conteúdos;</li>
            <li>Enviar comunicações relevantes sobre o curso e novidades;</li>
            <li>Personalizar sua experiência no site;</li>
            <li>Cumprir obrigações legais e regulatórias;</li>
            <li>Realizar análises estatísticas e de desempenho do site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">4. Compartilhamento de Dados</h2>
          <p>
            Seus dados pessoais <strong>não são vendidos</strong> a terceiros. Podemos compartilhá-los
            apenas com:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Processadores de pagamento (Cakto) para finalizar transações;</li>
            <li>Ferramentas de análise (como Meta Pixel) para mensuração de campanhas;</li>
            <li>Autoridades competentes, quando exigido por lei.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">5. Armazenamento e Segurança</h2>
          <p>
            Seus dados são armazenados em servidores seguros e adotamos medidas técnicas e
            organizacionais adequadas para proteger suas informações contra acesso não autorizado,
            perda ou destruição.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">6. Seus Direitos (LGPD)</h2>
          <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Confirmar a existência de tratamento de dados;</li>
            <li>Acessar, corrigir ou excluir seus dados pessoais;</li>
            <li>Revogar consentimento a qualquer momento;</li>
            <li>Solicitar a portabilidade dos seus dados;</li>
            <li>Solicitar a anonimização ou eliminação de dados desnecessários.</li>
          </ul>
          <p className="mt-2">
            Para exercer seus direitos, entre em contato pelo e-mail:{" "}
            <a href="mailto:suporte@clubepremiumbr.com.br" className="text-digitalBlue hover:underline font-semibold">
              suporte@clubepremiumbr.com.br
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">7. Alterações nesta Política</h2>
          <p>
            Reservamo-nos o direito de atualizar esta política a qualquer momento. Recomendamos que
            você a revise periodicamente. Alterações significativas serão comunicadas por meio do
            nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">8. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo
            e-mail:{" "}
            <a href="mailto:suporte@clubepremiumbr.com.br" className="text-digitalBlue hover:underline font-semibold">
              suporte@clubepremiumbr.com.br
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default PoliticaPrivacidade;
