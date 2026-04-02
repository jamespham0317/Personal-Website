import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, ghLink, demoLink, stack = [] }) {
  return (
    <Card className="project-card-view">
      <Card.Body className="project-card-body">
        <div className="project-card-header">
          <p className="project-card-kicker">Featured Project</p>
          <Card.Title>{title}</Card.Title>
        </div>

        <Card.Text className="project-card-copy">{description}</Card.Text>

        {stack.length > 0 && (
          <div className="project-card-tags">
            {stack.map((item) => (
              <span className="project-card-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          <Button variant="primary" href={ghLink} target="_blank" rel="noreferrer">
            <BsGithub /> &nbsp;
            GitHub
          </Button>

          {demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-action-button"
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
