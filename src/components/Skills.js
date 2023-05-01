import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import skillImg from "../assets/img/skill-img.svg";
import TrackVisibility from 'react-on-screen';


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
      <Container>
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
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={skillImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
