import React from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineArrowLeft } from "react-icons/ai";

import { projectsData } from "../../data/projectsData";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const { theme } = React.useContext(ThemeContext);
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div
        style={{
          color: theme.tertiary,
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        Project not found.
        <br />
        <Link
          to="/projects"
          style={{ color: theme.tertiary, textDecoration: "underline" }}
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      className="projectDetails"
      style={{ backgroundColor: theme.secondary }}
    >
      <Link to="/">
        <AiOutlineHome
          style={{ color: theme.tertiary, fontSize: "2rem", margin: "1rem" }}
        />
      </Link>

      <div
        className="projectDetails-container"
        style={{ color: theme.tertiary }}
      >
        <h1>{project.projectName}</h1>
        <img
          src={project.image}
          alt={project.projectName}
          className="projectDetails-image"
        />
        <p>{project.projectDesc}</p>

        <h3>Tags:</h3>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="projectDetails-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer">
              Source Code
            </a>
          )}
        </div>

        {/* ✅ Back to Projects Link */}
        <Link
          to="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginTop: "2rem",
            color: theme.tertiary,
            fontWeight: "500",
            fontSize: "1rem",
            textDecoration: "none",
            gap: "0.5rem",
          }}
        >
          <AiOutlineArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;
