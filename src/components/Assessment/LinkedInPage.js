import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import linkedInHeadline from "../../Assets/linkedin-headline.png";
import linkedInAbout from "../../Assets/linkedin-about.png";
import { linkedInProfile } from "../../content/assessmentContent";

function LinkedInPage() {
  return (
    <Container fluid className="assessment-section">
      <Particle />
      <Container>
        <h1 className="assessment-title">
          LinkedIn <strong className="purple">Brand</strong>
        </h1>
        <p className="assessment-subtitle">
          Assessed elements: profile photo, headline, and About section.
        </p>

        <Card className="assessment-card">
          <Card.Body>
            <h4>Live LinkedIn Profile</h4>
            <a
              href={linkedInProfile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="linkedin-profile-link"
            >
              Open LinkedIn Profile
            </a>
          </Card.Body>
        </Card>

        <Row>
          <Col md={12}>
            <Card className="assessment-card">
              <Card.Body>
                <h4>Profile Photo and Headline (Screenshot)</h4>
                <img
                  src={linkedInHeadline}
                  alt="LinkedIn profile and headline section"
                  className="img-fluid linkedin-screenshot"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="assessment-card">
              <Card.Body>
                <h4>About Section (Screenshot)</h4>
                <img
                  src={linkedInAbout}
                  alt="LinkedIn About section"
                  className="img-fluid linkedin-screenshot"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LinkedInPage;
