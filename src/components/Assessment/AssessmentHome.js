import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { brandAttributes } from "../../content/assessmentContent";

function AssessmentHome() {
  return (
    <Container fluid className="assessment-section">
      <Particle />
      <Container>
        <h1 className="assessment-title">
          MQBS2010 <strong className="purple">Job Application Portfolio</strong>
        </h1>
        <p className="assessment-subtitle">
          This section presents all required assessment elements in one
          multi-page experience with consistent personal branding.
        </p>

        <Row>
          <Col md={6}>
            <Card className="assessment-card">
              <Card.Body>
                <h4>Deliverables</h4>
                <ul className="assessment-list">
                  <li>
                    <Link to="/cover-letter">Cover Letter</Link> (teamwork
                    criterion)
                  </li>
                  <li>
                    <Link to="/linkedin-brand">LinkedIn Brand</Link> (photo,
                    headline, About)
                  </li>
                  <li>
                    <Link to="/cv">1-page CV</Link> (summary, quantified
                    impact, reverse chronology)
                  </li>
                  <li>
                    <Link to="/video-response">Video Response</Link>{" "}
                    (time-management interview)
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="assessment-card">
              <Card.Body>
                <h4>Personal Brand Themes</h4>
                <ul className="assessment-list">
                  {brandAttributes.map((attribute) => (
                    <li key={attribute}>{attribute}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AssessmentHome;
