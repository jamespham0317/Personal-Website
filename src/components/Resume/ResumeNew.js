import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Reveal from "../Reveal";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section id="resume">
      <Container fluid className="resume-section">
        <Container className="resume-shell">
          <Row className="justify-content-center">
            <div className="resume-intro">
              <Reveal as="p" className="section-eyebrow">Resume</Reveal>
              <Reveal as="h1" className="project-heading resume-heading">Experience, coursework, and project work at a glance.</Reveal>
              <Reveal as="p" className="resume-copy">
                You can preview my latest resume below or open the PDF directly for a full-sized version.
              </Reveal>
              <Reveal>
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
              </Reveal>
            </div>
          </Row>

          <Row className="resume">
            <Reveal className="resume-frame">
              <Document file={pdf} className="resume-document d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Reveal>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ResumeNew;
