import React from "react";
import Card from "./Card";
import PlanImgB from "./product-img/plano-basico.png"
import PlanImgI from "./product-img/plano-intermediario.png"
import PlanImgP from "./product-img/plano-premium.png"

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products-header">
        <h1>Pronto para transformar sua presença nas redes sociais?</h1>
      </div>
      <div className="card-section">
        <div className="cards">
          <Card
            logo={PlanImgB}
            header="Plano Básico"
            paragraph="Inicie sua jornada digital conosco. Gerenciamos sua presença online, criamos conteúdo relevante e monitoramos o desempenho. Nosso objetivo? Ajudá-lo a vender mais!"
            price="R$ 1200,00/mês"
            alert="Contrato de 12 meses"
            button="Assine agora!" 
            route="https://wa.me/5519998602083/?text=Quero%20saber%20mais%20sobre%20o%20plano%20basico"
          />
        </div>
        <div className="cards">
          <Card
            logo={PlanImgI}
            header="Plano Intermediário"
            paragraph="Leve seu negócio ao próximo nível. Com gestão de CRM, criação de landing pages, campanhas sazonais e mais, nosso objetivo é ajudá-lo a fidelizar mais clientes."
            price="R$ 2400,00/mês"
            alert="Contrato de 12 meses"
            button="Assine agora!"
            route="https://wa.me/5519998602083?text=Quero%20saber%20mais%20sobre%20o%20plano%20intermediario"
          />
        </div>
        <div className="cards">
          <Card
            logo={PlanImgP}
            header="Plano Premium"
            paragraph="Para líderes de mercado, oferecemos um pacote completo: site React, blog ou canal no YouTube, organização de eventos ou webinars. Nosso objetivo? Fazer de você uma autoridade no seu mercado!"
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
