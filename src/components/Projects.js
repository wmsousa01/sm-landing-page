import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import colorSharp2 from "../assets/img/project-img4.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Consultaria Ativa",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Mini Site",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Social Media",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Tráfego Pago",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>E hora de conectar o marketing na internet e seu time de vendas com base em dados das ações anteriores e tudo que o sistemas ERP, CRM, e toda a experiência do time de venda oferecem para criar um ambiente omnichannel onde a experiência do cliente é semelhante no online e no presencial.</p>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
