import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col lg={10} xl={9} className="home-header">
              <div className="home-hero-shell">
                <p className="home-eyebrow">Software Developer and UBC Computer Science Student</p>
                <h1 className="heading">
                  Hi, I&apos;m <span className="main-name">James Pham</span>.
                  <span className="home-heading-break"> I build reliable software across web, cloud, and systems.</span>
                </h1>

                <div className="home-type-shell">
                  <Type />
                </div>

                <p className="home-hero-copy">
                  I focus on projects that are useful, technically solid, and enjoyable to use, from React interfaces and Node backends to C++ graphics work and Python ML pipelines.
                </p>

                <div className="home-hero-actions">
                  <Button as={Link} to="/project" variant="primary" className="hero-button">
                    Explore Projects
                  </Button>
                  <Button
                    as={Link}
                    to="/resume"
                    variant="primary"
                    className="hero-button hero-button-secondary"
                  >
                    View Resume
                  </Button>
                </div>

                <div className="home-hero-meta">
                  <div className="home-meta-card">
                    <p className="home-meta-value">Full Stack</p>
                    <p className="home-meta-label">Interfaces, APIs, and data-driven products</p>
                  </div>
                  <div className="home-meta-card">
                    <p className="home-meta-value">Systems</p>
                    <p className="home-meta-label">C++, Java, and performance-minded problem solving</p>
                  </div>
                  <div className="home-meta-card">
                    <p className="home-meta-value">Cloud Ready</p>
                    <p className="home-meta-label">AWS, Docker, PostgreSQL, and CI workflows</p>
                  </div>
                </div>
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
