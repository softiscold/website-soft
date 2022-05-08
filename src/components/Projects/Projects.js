import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kitten from "../../Assets/Projects/kitten.png";
import bdplugin from "../../Assets/Projects/bdplugin.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitten}
              isBlog={false}
              title="Soft's Kitten"
              description="A Discord bot that is made for my discord server."
              link="https://github.com/softiscold/minion-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bdplugin}
              isBlog={false}
              title="Cloaks+ Image Utilities"
              description="Adds a few more Utilities to help enhance the cape verification process."
              link="https://github.com/softiscold/plugins"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ytimg.com/vi/OVSdB6I7VW8/maxresdefault.jpg"
              isBlog={false}
              title="ore-level-display"
              description="an 1.18 minecraft mod that displays the ore that is most found in the players y level and displays it in a chat message. still under huge development."
              link="https://github.com/softiscold/ore-level-display"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ytimg.com/vi/OVSdB6I7VW8/maxresdefault.jpg"
              isBlog={false}
              title="SOFT CLIENT"
              description="A  minecraft client that has been made for people to play with. it was scrapped due to a sound error i could not find the cause of."
              link="https://github.com/softiscold/softclient"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
