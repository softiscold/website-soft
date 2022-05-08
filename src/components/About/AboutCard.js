import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Soft is cold  </span>
            from <span className="purple">Australia.</span>
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring abandoned places
            </li>
          </ul>

          <p style={{ color: "rgb(129 129 129)" }}>
            "I like men."{" "}
          </p>
          <footer className="blockquote-footer">Soft</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
