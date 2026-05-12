import React from "react";
import { Container, Card } from "react-bootstrap";
import Particle from "../Particle";
import { videoResponse } from "../../content/assessmentContent";

function VideoResponsePage() {
  const toEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  const embedUrl = toEmbedUrl(videoResponse.placeholderVideoUrl);

  return (
    <Container fluid className="assessment-section">
      <Particle />
      <Container>
        <h1 className="assessment-title">
          Video Interview <strong className="purple">Response</strong>
        </h1>

        <Card className="assessment-card">
          <Card.Body>
            <h4>What this video is for</h4>
            <p>
              This video is my MQBS2010 interview response for the{" "}
              {videoResponse.skillArea.toLowerCase()} skill area.
            </p>
            <h4>Question answered</h4>
            <p>{videoResponse.interviewQuestion}</p>

            <h4 className="mt-4">Recorded Response</h4>
            <iframe
              title="MQBS2010 interview response video"
              src={embedUrl}
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: "10px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default VideoResponsePage;
