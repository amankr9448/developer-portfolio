import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineArrowLeft,
  AiOutlineCheckCircle,
} from "react-icons/ai";
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
        className="projectDetails-container"
        style={{ color: theme.tertiary }}
      >
        <h2>Project not found.</h2>
        <Link to="/projects" style={{ color: theme.primary }}>
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      className="projectDetails"
      style={{
        backgroundColor: theme.secondary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/" className="projectDetails-home">
        <AiOutlineHome
          style={{ color: theme.primary, fontSize: "2rem", margin: "1rem 0" }}
        />
      </Link>

      <div
        className="projectDetails-card"
        style={{
          maxWidth: "900px",
          width: "95%",
          background: theme.primary30,
          borderRadius: "16px",
          boxShadow: "0 6px 24px rgba(0,0,0,.07)",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          margin: "3rem 0",
          padding: "2rem",
        }}
      >
        <img
          src={project.image}
          alt={project.projectName}
          style={{
            flex: "1 0 200px",
            maxWidth: 280,
            borderRadius: "14px",
            boxShadow: "0 3px 8px rgba(0,0,0,.08)",
          }}
        />

        <div style={{ flex: "2 0 350px", color: theme.tertiary }}>
          <h1
            style={{
              color: theme.primary,
              fontSize: "2.1rem",
              fontWeight: "800",
              letterSpacing: "1px",
              marginBottom: "0.5rem",
            }}
          >
            {project.projectName}
          </h1>

          <div style={{ marginBottom: "0.5rem" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-block",
                  background: theme.primary50,
                  color: theme.tertiary,
                  borderRadius: "12px",
                  padding: "0.3em 0.75em",
                  marginRight: "0.5em",
                  fontSize: "0.90em",
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 style={{ marginTop: "1.5rem", fontWeight: "700" }}>
            Description
          </h3>
          <p
            style={{
              fontSize: "1.1em",
              lineHeight: "1.7",
              marginBottom: "1.5em",
              color: theme.tertiary,
            }}
          >
            {project.projectDesc}
          </p>

          <h3 style={{ marginBottom: ".4em", fontWeight: "700" }}>Details</h3>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            {project.projectDetails.map((detail, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "0.8em",
                  lineHeight: 1.7,
                }}
              >
                <AiOutlineCheckCircle
                  style={{
                    color: theme.primary,
                    marginRight: "10px",
                    marginTop: "4px", // slight nudge for baseline
                    flexShrink: 0,
                  }}
                  size={18}
                />
                <span style={{ fontSize: "1.1em" }}>{detail}</span>
              </li>
            ))}
          </ul>

          <div
            style={{ display: "flex", gap: "1em", marginTop: "1.5em" }}
            className="projectDetails-links"
          >
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: theme.primary,
                  color: theme.secondary,
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1em",
                  padding: "0.7em 1.5em",
                  textDecoration: "none",
                  marginRight: "0.5em",
                }}
              >
                Live Demo
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: theme.primary,
                  color: theme.secondary,
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1em",
                  padding: "0.7em 1.5em",
                  textDecoration: "none",
                }}
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      <Link
        to="/projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          margin: "1rem 0 2rem",
          color: theme.primary,
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
  );
}

export default ProjectDetails;
