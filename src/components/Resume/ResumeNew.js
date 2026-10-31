import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Reveal from "../Reveal";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const documentRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(null);

  // Render the page at the frame's width so the text and annotation layers match the canvas
  useEffect(() => {
    const node = documentRef.current;
    if (!node) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setPageWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(node);

    return () => observer.disconnect();
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
              <div ref={documentRef} className="resume-document">
                <Document file={pdf} className="d-flex justify-content-center">
                  {pageWidth && (
                    <Page pageNumber={1} width={Math.min(pageWidth, 1040)} />
                  )}
                </Document>
              </div>
            </Reveal>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ResumeNew;
