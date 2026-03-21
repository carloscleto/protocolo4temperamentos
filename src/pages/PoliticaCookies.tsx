import { Link } from "react-router-dom";

const PoliticaCookies = () => (
  <div className="min-h-screen bg-offWhite text-nightBlue font-sans antialiased">
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <Link to="/" className="text-digitalBlue hover:underline text-sm mb-8 inline-block">
        ← Voltar ao início
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-prussianBlue mb-8">
        Política de Cookies
      </h1>
      <p className="text-sm text-grey mb-8">Última atualização: 21 de março de 2026</p>

      <div className="space-y-6 text-nightBlue/90 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador,
            celular ou tablet) quando você visita um site. Eles permitem que o site reconheça o
            seu navegador e armazene informações sobre suas preferências e interações.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">2. Tipos de Cookies Utilizados</h2>
          <ul className="space-y-3">
            <li>
              <strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site,
              como navegação entre páginas e acesso a áreas seguras.
            </li>
            <li>
              <strong>Cookies de desempenho:</strong> coletam informações sobre como você usa o site
              (páginas visitadas, erros encontrados), ajudando-nos a melhorar a experiência.
            </li>
            <li>
              <strong>Cookies de marketing:</strong> utilizados para exibir anúncios relevantes e
              medir a eficácia de campanhas publicitárias. Incluímos o <strong>Meta Pixel
              (Facebook)</strong> para rastreamento de conversões e remarketing.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">3. Cookies de Terceiros</h2>
          <p>Nosso site pode utilizar cookies de terceiros, incluindo:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Meta (Facebook) Pixel:</strong> para análise de tráfego e remarketing;</li>
            <li><strong>Cakto:</strong> processamento de pagamentos na página de checkout.</li>
          </ul>
          <p className="mt-2">
            Cada terceiro possui sua própria política de cookies e privacidade, que recomendamos
            que você consulte.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">4. Como Gerenciar Cookies</h2>
          <p>
            Você pode controlar e/ou excluir cookies através das configurações do seu navegador.
            A maioria dos navegadores permite:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Visualizar quais cookies estão armazenados;</li>
            <li>Excluir cookies individualmente ou em massa;</li>
            <li>Bloquear cookies de terceiros;</li>
            <li>Bloquear todos os cookies (pode afetar a funcionalidade do site).</li>
          </ul>
          <p className="mt-2">
            <strong>Atenção:</strong> desativar cookies essenciais pode impactar o funcionamento
            correto do site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">5. Consentimento</h2>
          <p>
            Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme
            descrito nesta política. Você pode retirar seu consentimento a qualquer momento
            através das configurações do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">6. Alterações nesta Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte
            regularmente para estar ciente de eventuais alterações.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-prussianBlue mb-3">7. Contato</h2>
          <p>
            Em caso de dúvidas sobre o uso de cookies, entre em contato pelo e-mail:{" "}
            <a href="mailto:suporte@clubepremiumbr.com.br" className="text-digitalBlue hover:underline font-semibold">
              suporte@clubepremiumbr.com.br
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default PoliticaCookies;
