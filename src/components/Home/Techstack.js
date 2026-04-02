import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import {
  SiDotnet,
  SiGooglecloud,
  SiJavascript,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  {
    name: "JavaScript / TypeScript",
    category: "Languages",
    icons: [SiJavascript, SiTypescript],
  },
  {
    name: "Python",
    category: "Languages",
    icons: [FaPython],
  },
  {
    name: "C#",
    category: "Languages",
    icons: [TbBrandCSharp],
  },
  {
    name: "C / C++",
    category: "Languages",
    icons: [CgCPlusPlus],
  },
  {
    name: "Java",
    category: "Languages",
    icons: [FaJava],
  },
  {
    name: "React",
    category: "Frontend",
    icons: [FaReact],
  },
  {
    name: "React Native",
    category: "Mobile",
    icons: [TbBrandReactNative],
  },
  {
    name: "HTML / CSS",
    category: "Frontend",
    icons: [FaHtml5, FaCss3Alt],
  },
  {
    name: "Node.js",
    category: "Backend",
    icons: [FaNodeJs],
  },
  {
    name: ".NET",
    category: "Backend",
    icons: [SiDotnet],
  },
  {
    name: "SQL",
    category: "Data",
    icons: [FaDatabase],
  },
  {
    name: "PostgreSQL",
    category: "Data",
    icons: [SiPostgresql],
  },
  {
    name: "AWS",
    category: "Cloud",
    icons: [FaAws],
  },
  {
    name: "GCP",
    category: "Cloud",
    icons: [SiGooglecloud],
  },
  {
    name: "Docker",
    category: "DevOps",
    icons: [FaDocker],
  },
  {
    name: "Jenkins",
    category: "DevOps",
    icons: [FaJenkins],
  },
];

function Techstack() {
  return (
    <Row className="techstack-grid">
      {technologies.map(({ name, category, icons }) => (
        <Col xs={6} md={4} lg={3} className="techstack-card-col" key={name}>
          <div className="tech-card">
            <p className="tech-card-category">{category}</p>
            <div className="tech-card-icons" aria-hidden="true">
              {icons.map((Icon, index) => (
                <Icon key={`${name}-${index}`} className="tech-card-icon" />
              ))}
            </div>
            <p className="tech-card-name">{name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
