import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Reveal from "../Reveal";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9} className="home-about-description">
            <div className="home-about-shell">
              <Reveal as="p" className="section-eyebrow">About Me</Reveal>
              <Reveal as="h2" className="section-title">
                Curious by nature, driven by challenges, and passionate about building technology that makes a difference.
              </Reveal>

              <Reveal as="p" className="home-about-body">
                Hi! I&apos;m James Pham, a <strong className="green">Computer Science</strong> student at the <strong className="green">University of British Columbia</strong> with a passion for <strong className="green">software engineering</strong> and building impactful technology
                <br />
                <br />
                I enjoy tackling <strong className="green">challenging problems</strong>, exploring emerging technologies, and turning ideas into <strong className="green">practical solutions</strong> through hands-on projects. 
                <br />
                <br />
                I’m always looking to grow as an engineer and am currently seeking <strong className="green">internship opportunities</strong> where I can contribute, learn, and collaborate with talented teams.
              </Reveal>

              <div className="home-about-stack-section">
                <Reveal as="p" className="home-about-stack-kicker">Core Technologies</Reveal>
                <Reveal as="h2" className="home-about-stack-title">
                  The tools I use to build across web, mobile, cloud, data, and systems work.
                </Reveal>
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
