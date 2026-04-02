import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const focusAreas = [
  {
    title: "Product-Oriented Development",
    description: "I like building software that solves a real problem and feels deliberate from the first interaction to the final deployment.",
  },
  {
    title: "Systems and Performance",
    description: "I enjoy lower-level work too, especially algorithmic problems, graphics, and systems projects where implementation details matter.",
  },
  {
    title: "Learning Through Shipping",
    description: "Hackathons, personal projects, and coursework are where I test new ideas quickly and turn them into working software.",
  },
];

const socialLinks = [
  {
    href: "https://github.com/jamespham0317",
    label: "GitHub",
    icon: AiFillGithub,
  },
  {
    href: "https://www.linkedin.com/in/james-pham-6588182aa/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "mailto:jamespham2000@gmail.com",
    label: "Email",
    icon: AiFillMail,
  },
];

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

              <Row className="home-highlight-grid">
                {focusAreas.map((item) => (
                  <Col md={4} key={item.title} className="home-highlight-col">
                    <div className="home-highlight-card">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>

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
        <Row className="justify-content-center">
          <Col lg={10} xl={9} className="home-about-social">
            <div className="home-social-panel">
              <p className="section-eyebrow">Connect</p>
              <h3 className="home-social-title">Find me online</h3>
              <p className="home-social-copy">
                Feel free to <span className="green">connect</span> with me.
              </p>
              <ul className="home-about-social-links">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <li className="social-icons" key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label={label}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
