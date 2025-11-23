import React from "react";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container py-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-center mb-4">Skills</h2>

      <div className="row justify-content-center g-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="col-6 col-md-4 col-lg-3 text-center"
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <div
              className="skill-card p-4 rounded shadow-sm d-flex flex-column align-items-center"
              style={{
                border: `2px solid ${skill.color}`,
                boxShadow: `0 0 10px ${skill.color}55`,
              }}
            >
              <i
                className={`${skill.icon} fa-3x mb-3`}
                style={{ color: skill.color }}
              ></i>
              <span className="fw-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}