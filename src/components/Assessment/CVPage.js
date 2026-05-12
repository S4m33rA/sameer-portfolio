import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { AiOutlineFileText } from "react-icons/ai";
import Particle from "../Particle";

function CVPage() {
  return (
    <Container fluid className="assessment-section">
      <Particle />
      <Container>
        <h1 className="assessment-title">
          1-Page <strong className="purple">CV</strong>
        </h1>
        <p className="assessment-subtitle">
          Reverse-chronological experience with quantified outcomes and clear
          professional branding.
        </p>

        <Card className="assessment-card">
          <Card.Body>
            <p className="assessment-subtitle mb-3">
              The CV is displayed as a document preview.
            </p>
            <iframe
              title="CV Document"
              src="/documents/cv.pdf"
              className="document-frame"
            />
            <Button
              variant="primary"
              href="/documents/cv.pdf"
              target="_blank"
              className="mt-3"
            >
              <AiOutlineFileText /> &nbsp;Open CV PDF
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default CVPage;
