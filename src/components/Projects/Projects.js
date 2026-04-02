import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    title: "CheatCode",
    description: "A room-based multiplayer coding game where players solve algorithmic problems in real-time, built with React, WebSockets, and Docker for seamless gameplay and deployment.",
    ghLink: "https://github.com/AVEDtek/CheatCode",
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
  },
  {
    title: "Thyme Saver",
    description: "A smart cooking assistant that uses Gemini Vision to identify dishes from uploaded images, suggest ingredients, and generate instructions. It includes user authentication with BCrypt, PostgreSQL-backed accounts, and AWS deployment.",
    ghLink: "https://github.com/jamespham0317/Thyme-Saver",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Space Invaders Clone",
    description: "A modern reimagining of Space Invaders with wave-based enemies, responsive controls, collision systems, persistent scoring, and gameplay polish implemented using raylib.",
    ghLink: "https://github.com/jamespham0317/Space-Invaders",
    stack: ["C++", "Game Development", "raylib"],
  },
  {
    title: "Recycle Radar",
    description: "A recycling assistant that uses Gemini Vision for material identification and pairs it with a map of nearby recycling depots plus a feed of relevant articles and community events.",
    ghLink: "https://github.com/jamespham0317/nwhacks2025",
    stack: ["React", "Maps API", "Gemini Vision"],
  },
  {
    title: "Sleep Tracker",
    description: "A Java desktop application for tracking sleep sessions, average sleep duration, and sleep quality through a simple interface, with JUnit-backed testing and a demo video.",
    ghLink: "https://github.com/jamespham0317/Sleep-Tracker",
    demoLink: "https://youtu.be/UwbJ_I7ReZ8",
    stack: ["Java", "Swing", "JUnit"],
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-intro">
          <p className="section-eyebrow">Selected Work</p>
          <h1 className="project-heading">
            Projects that blend <strong className="green">product thinking</strong> with engineering depth.
          </h1>
          <p className="project-subheading">
            Here are a few projects I&apos;ve worked on recently across web, cloud, systems, and machine learning.
          </p>
        </div>

        <Row className="project-grid">
          {projects.map((project) => (
            <Col md={6} xl={4} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
