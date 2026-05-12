import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Sameer Aleem </span>
            from <span className="purple"> Sydney Australia.</span>
            <br /> I am currently pursuing a Bachelor of Business (IT and
            International Business) at Macquarie University.
            <br />
            I bring experience across internships, freelance development, and
            customer-facing roles where teamwork and communication directly
            impact results.
            <br />
            <br />
            My personal brand is built around being proactive, calm under
            pressure, and focused on structured collaboration.
            <br />
            <br />
            Outside work and study, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem-solving strategy games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching and playing football/soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
