import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <p>Da configuração a otimização! Esse é o #social o plano pensado para facilitar o
                dia a dia da comunicação nas redes sociais  da sua empresa!</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx2 wow zoomIn">
              <p id="corel1">Usamos nossas experiências dos últimos 2 anos e mais de 30 empresas testadas para 
                criar um serviço que realmente funciona de acordo com a necessidade da sua empresa.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx2 wow zoomIn">
              <p id="corel1">O controle nas suas mãos! Elaboramos os relatórios de todo o processo, com definição 
                de metas com foco em resultados.</p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
