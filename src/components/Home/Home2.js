import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9} className="home-about-description">
            <div className="home-about-shell">
              <p className="section-eyebrow">About Me</p>
              <h2 className="section-title">
                I enjoy turning ideas into software that is practical, thoughtful, and fun to use.
              </h2>

              <p className="home-about-body">
                Hi! I&apos;m James Pham, a <span className="green">Computer Science</span> student at the University of British Columbia with a strong interest in building polished software end to end.
                <br />
                <br />
                I enjoy exploring different parts of <span className="green">software development</span>, from full-stack web apps and cloud-backed tools to games, algorithms, and machine learning projects.
                <br />
                <br />
                Right now, I&apos;m looking for <span className="green">internship opportunities</span> where I can keep raising my technical bar, learn from experienced engineers, and contribute to meaningful products.
              </p>

              <div className="home-about-stack-section">
                <p className="home-about-stack-kicker">Core Technologies</p>
                <h2 className="home-about-stack-title">
                  The tools I use to build across web, mobile, cloud, data, and systems work.
                </h2>
                <Techstack />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
