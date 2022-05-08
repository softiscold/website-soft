import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiWebstorm,
    SiIntellijidea,
    SiDiscord,
    SiReplit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
      </Col>
    </Row>
  );
}

export default Toolstack;
