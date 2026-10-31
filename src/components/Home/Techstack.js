import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
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
import {
  SiGooglecloud,
  SiJavascript,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import Reveal from "../Reveal";

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
        <Reveal as={Col} xs={6} md={4} lg={3} className="techstack-card-col" key={name}>
          <div className="tech-card">
            <p className="tech-card-category">{category}</p>
            <div className="tech-card-icons" aria-hidden="true">
              {icons.map((Icon, index) => (
                <Icon key={`${name}-${index}`} className="tech-card-icon" />
              ))}
            </div>
            <p className="tech-card-name">{name}</p>
          </div>
        </Reveal>
      ))}
    </Row>
  );
}

export default Techstack;
