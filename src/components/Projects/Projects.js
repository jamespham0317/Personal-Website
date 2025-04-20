import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spaceinvadersclone from "../../Assets/Projects/SpaceInvadersClone.png";
import recycleradar from "../../Assets/Projects/RecycleRadar.png";
import sleeptracker from "../../Assets/Projects/SleepTracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Thyme Saver"
              description="A smart cooking assistant to help you make your favourite foods. Provides the required ingredients and instructions for the food in the user-uploaded image using the Google Gemini Vision API. Allows for user registration and login, encrypted using BCrypt and stored in a PostgreSQL database. Developed using React and node.js, and deployed on Railway."
              ghLink="https://github.com/jamespham0317/Recipe-Finder"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Maze Generator and Solver"
              description="An interactive maze generator and visual pathfinding tool. Generates and solves mazes using a variety of algorithms with real-time animation. Generators include DFS, Prim's algorithm, and Kruskal's algorithm. Solvers include DFS, BFS, A* search, greedy best-first search, wall follower (left and right hand), and dead-end filler."
              ghLink="https://github.com/jamespham0317/Maze-Generator-and-Solver"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={spaceinvadersclone}
              isBlog={false}
              title="Space Invaders Clone"
              description="A modern reimagining of the classic Space Invaders arcade game. Features wave-based enemy mechanics, smooth player movement and laser firing, collision detection between lasers, enemies, and obstacles, game over condition, and scoring and persistent high-score tracking. Developed using C++ and the raylib graphics library."
              ghLink="https://github.com/jamespham0317/Space-Invaders"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={recycleradar}
              isBlog={false}
              title="Recycle Radar"
              description="A smart recycling assistant to make all things recycling easy. Determines the recyclability of the material in the user-uploaded image using the Google Gemini Vision API. Features an interactive map showing nearby recycling depots filtered by material type using the Google Maps API and a news feed displaying relevant articles and community events. Developed using React."
              ghLink="https://github.com/jamespham0317/nwhacks2025"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={sleeptracker}
              isBlog={false}
              title="Sleep Tracker"
              description="A sleep tracker to help you hit your sleep goals. Displays sleep sessions along with average time asleep and average quality of sleep based on user-entered data. Developed using Java and Java Swing and tested using JUnit."
              ghLink="https://github.com/jamespham0317/Sleep-Tracker"
              demoLink="https://youtu.be/UwbJ_I7ReZ8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
