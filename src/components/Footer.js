import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Container className="footer-shell">
        <Row className="align-items-center">
          <Col lg="4" className="footer-copywright">
            <p className="footer-kicker">James Pham</p>
            <h3>Designed and built with React.</h3>
          </Col>
          <Col lg="4" className="footer-copywright">
            <p className="footer-kicker">Current Focus</p>
            <h3>Full-stack applications, cloud systems, and practical machine learning.</h3>
          </Col>
          <Col lg="4" className="footer-body">
            <p className="footer-kicker">Connect</p>
            <ul className="footer-icons">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li className="social-icons" key={label}>
                  <a
                    href={href}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer-copy">Copyright © {year}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
