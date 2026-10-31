import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Reveal from "../Reveal";

const projects = [
  {
    title: "CheetCode",
    description: "A room-based multiplayer coding game where players solve algorithmic problems in real-time, built with React, WebSockets, and Docker for seamless gameplay and deployment.",
    ghLink: "https://github.com/AVEDtek/CheetCode",
    appLink: "https://playcheetcode.vercel.app/",
    stack: ["React", "WebSockets", "Docker"],
  },
  {
    title: "Maze Generator and Solver",
    description: "An interactive maze visualizer that generates and solves mazes using multiple algorithms with real-time animation, including DFS, Prim's, Kruskal's, BFS, A*, greedy best-first search, and wall-following strategies.",
    ghLink: "https://github.com/jamespham0317/Maze-Generator-and-Solver",
    stack: ["C++", "Algorithms", "raylib"],
  },
  {
    title: "Tumor Classification via CNN",
    description: "A convolutional neural network built with TensorFlow and Keras to classify histopathology images as benign or malignant, with training insights visualized using Matplotlib.",
    ghLink: "https://github.com/jamespham0317/Tumor-Classifier",
    stack: ["Python", "TensorFlow", "Keras", "Matplotlib"],
  }
];

function Projects() {
  return (
    <Container fluid as="section" className="project-section" id="projects">
      <Container>
        <div className="project-intro">
          <Reveal as="p" className="section-eyebrow">Selected Work</Reveal>
          <Reveal as="h1" className="project-heading">
            Projects that blend <strong className="green">product thinking</strong> with engineering depth.
          </Reveal>
          <Reveal as="p" className="project-subheading">
            Here are a few projects I&apos;ve worked on recently across web, cloud, systems, and machine learning.
          </Reveal>
        </div>

        <Row className="project-grid">
          {projects.map((project) => (
            <Reveal as={Col} md={6} xl={4} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
