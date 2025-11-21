import React from "react";
import skills from "../data/skills"; // make sure the path is correct

export default function Skills() {
  return (
    <section
      id="skills"
      className="container py-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="col-6 col-md-3 mb-3 text-center"
            data-aos="zoom-in"
            data-aos-delay={idx * 150} // stagger animation
            data-aos-duration="800"
          >
            <div
              className="border p-3 rounded shadow-sm d-flex flex-column align-items-center"
              style={{ borderColor: skill.color }}
            >
              <i
                className={`${skill.icon} fa-2x mb-2`}
                style={{ color: skill.color }}
              ></i>
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
