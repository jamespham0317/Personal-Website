import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I’m James Pham — a 
              <i>
                <b className="green"> Computer Science </b>
              </i>
              student at the University of British Columbia with a 
              <i>
                <b className="green"> passion </b>
              </i> 
              or building things that are both 
              <i>
                <b className="green"> useful and fun. </b>
              </i>

              <br />
              <br />

              I enjoy exploring all areas of 
              <i>
                <b className="green"> Software Development, </b>
              </i>
              from full-stack web apps to games.

              <br />
              <br />

              Right now, I’m looking for 
              <i>
                <b className="green"> internship </b>
              </i>
              opportunities where I can grow as a developer, learn from others, and contribute to 
              <i>
                <b className="green"> meaningful projects. </b>
              </i>
              Feel free to check out my work, reach out, or just say hi!
            </p>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={4} className="techstack">
            <Techstack />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jamespham0317"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/james-pham-6588182aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:jamespham2000@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
