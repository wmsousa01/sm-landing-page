import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="products" id="home">
      <div className="products-header">
        <h1>Pronto para transformar sua presença nas redes sociais?</h1>
      </div>
      <div className="card-section">
        <Card
          header="Plano Básico"
          paragraph="Criação de um site de alta qualidade, gerenciamento de mídias sociais, criação de conteúdo de marketing, SEO e otimização de conversões."
          price="R$ 1200,00/mês"
          alert="Contrato de 12 meses"
          button="Assine agora!"
        />
        <Card
          header="Plano Intermediário"
          paragraph="Tudo o que o Plano Básico oferece, além de campanhas de marketing por e-mail, publicidade paga, marketing de influência, marketing de conteúdo e análise de dados."
          price="R$ 2400,00"
          alert="Contrato de 12 meses"
          button="Assine agora!"
        />
        <Card
          header="Plano Premium"
          paragraph="Tudo o que o Plano Intermediário oferece, além de desenvolvimento de aplicativos móveis, criação de vídeos, design gráfico, serviços de atendimento ao cliente, assessoria de imprensa e participação em eventos da indústria ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="R$ 4800/mês"
          button="Assine agora!"
        />
      </div>
    </div>
  );
};

export default Products;
