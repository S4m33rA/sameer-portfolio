import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { AiOutlineFileText } from "react-icons/ai";
import Particle from "../Particle";
import {
  coverLetter,
  coverLetterWordCounts,
} from "../../content/assessmentContent";

function CoverLetterPage() {
  return (
    <Container fluid className="assessment-section">
      <Particle />
      <Container>
        <h1 className="assessment-title">
          Cover <strong className="purple">Letter</strong>
        </h1>
        <p className="assessment-subtitle">
          Selection criterion focus: {coverLetter.criterionStatement}
        </p>

        <div>
          <span className="word-count-badge">
            Opening: {coverLetterWordCounts.opening} words
          </span>
          <span className="word-count-badge">
            Criterion response: {coverLetterWordCounts.criterionResponse} words
          </span>
          <span className="word-count-badge">
            MQBS2010 reflection: {coverLetterWordCounts.mqbsReflection} words
          </span>
          <span className="word-count-badge">
            Closing: {coverLetterWordCounts.closing} words
          </span>
          <span className="word-count-badge">
            Total: {coverLetterWordCounts.total} words
          </span>
        </div>

        <Card className="assessment-card mt-3">
          <Card.Body>
            <p className="assessment-subtitle mb-3">
              The cover letter is displayed as a document preview.
            </p>
            <iframe
              title="Cover Letter Document"
              src="/documents/cover-letter.pdf"
              className="document-frame"
            />
            <Button
              variant="primary"
              href="/documents/cover-letter.pdf"
              target="_blank"
              className="mt-3"
            >
              <AiOutlineFileText /> &nbsp;Open Cover Letter PDF
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default CoverLetterPage;
