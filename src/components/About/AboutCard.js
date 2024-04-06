import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Mekdelawit Getu </span>
            from <span className="purple"> Addis Abeba, Ethipopia.</span>
            <br />I am currently student at Jimma University.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mekdelawit 😉 </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
