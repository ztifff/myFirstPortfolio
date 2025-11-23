import React from "react";
import projects from "../data/projects";

export default function Projects({ isDark }) {
  return (
    <section
      id="projects"
      className={`container py-5 ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ background: "transparent", transition: "background-color 0.3s, color 0.3s" }}
      data-aos="fade-up"          // animate entire section
      data-aos-duration="1000"
    >
      <h2
        className="text-center mb-4"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        Projects
      </h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="col-md-6 mb-4"
            data-aos="zoom-in"            // individual card animation
            data-aos-delay={idx * 150}   // stagger effect
            data-aos-duration="800"
          >
            <div className={`card shadow-sm ${isDark ? "bg-secondary text-light" : ""}`}>
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
