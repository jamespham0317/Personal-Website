import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/James_Pham_s_Resume_2026.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container className="resume-shell">
          <Row className="justify-content-center">
            <div className="resume-intro">
              <p className="section-eyebrow">Resume</p>
              <h1 className="project-heading resume-heading">Experience, coursework, and project work at a glance.</h1>
              <p className="resume-copy">
                You can preview my latest resume below or open the PDF directly for a full-sized version.
              </p>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="resume-download-button"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </div>
          </Row>

          <Row className="resume">
            <div className="resume-frame">
              <Document file={pdf} className="resume-document d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
