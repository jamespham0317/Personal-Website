import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import Reveal from "../Reveal";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col lg={10} xl={9} className="home-header">
              <div className="home-hero-shell">
                <Reveal as="p" className="home-eyebrow">Software Developer and UBC Computer Science Student</Reveal>
                <Reveal as="h1" className="heading">
                  Hi, I&apos;m <span className="main-name">James Pham</span>.
                </Reveal>

                <Reveal className="home-type-shell">
                  <Type />
                </Reveal>

                <Reveal as="p" className="home-hero-copy">
                  I’m an aspiring software developer passionate about building innovative software, solving challenging problems, and creating technology that makes a meaningful impact.
                </Reveal>

                <Reveal className="home-hero-actions">
                  <Button href="#projects" variant="primary" className="hero-button">
                    Explore Projects
                  </Button>
                  <Button
                    href="#resume"
                    variant="primary"
                    className="hero-button hero-button-secondary"
                  >
                    View Resume
                  </Button>
                </Reveal>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
