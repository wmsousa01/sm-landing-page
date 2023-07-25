import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products-header">
        <h1>Pronto para transformar sua presença nas redes sociais?</h1>
      </div>
      <div className="card-section">
        <div className="cards">
          <Card
            header="Plano Básico"
            paragraph="Criação de um site de alta qualidade, gerenciamento de mídias sociais, criação de conteúdo de marketing, SEO e otimização de conversões."
            price="R$ 1200,00/mês"
            alert="Contrato de 12 meses"
            button="Assine agora!" 
            route="https://wa.me/5519998602083/?text=Quero%20saber%20mais%20sobre%20o%20plano%20basico"
          />
        </div>
        <div className="cards">
          <Card
            header="Plano Intermediário"
            paragraph="Tudo o que o Plano Básico oferece, além de campanhas de marketing por e-mail, publicidade paga, marketing de influência, marketing de conteúdo e análise de dados."
            price="R$ 2400,00/mês"
            alert="Contrato de 12 meses"
            button="Assine agora!"
            route="https://wa.me/5519998602083?text=Quero%20saber%20mais%20sobre%20o%20plano%20intermediario"
          />
        </div>
        <div className="cards">
          <Card
            header="Plano Premium"
            paragraph="O Plano Básico oferece tudo, incluindo campanhas de marketing por e-mail, publicidade paga, marketing de influência e análise de dados."
            price="R$ 4800/mês"
            alert="Contrato de 12 meses"
            button="Assine agora!"
            route="https://wa.me/5519998602083?text=Quero%20saber%20mais%20sobre%20o%20plano%20premium"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
