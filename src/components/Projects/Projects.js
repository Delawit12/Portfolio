import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appleBootstrap from "../../Assets/Projects/appleBootstrap.jpg";
import evangadiForum from "../../Assets/Projects/evangadiForum.jpg";
import amazon from "../../Assets/Projects/amazon.jpg";
import netflix from "../../Assets/Projects/netflix.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appleBootstrap}
              isBlog={false}
              title="Apple-clone"
              description=""
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evangadiForum}
              isBlog={false}
              title="Evangadi-forum"
              description=""
              ghLink="https://github.com/Delawit12/evangadi-forum-front"
              demoLink="https://evangadi-forum-page.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="amazon-clone"
              description=""
              ghLink="https://github.com/Delawit12/Amazon-clone-frontend"
              demoLink="https://amazon-frontend-clone-new.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="netflix-clone"
              description=""
              ghLink="https://github.com/Delawit12/Netflix-front-Clone"
              demoLink="neflix-page-clone.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
