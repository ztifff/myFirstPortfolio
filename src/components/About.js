import React from "react";
import aboutData from "../data/about";

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`container py-5 ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ transition: "background-color 0.3s, color 0.3s" }}
      data-aos="fade-up"        // valid AOS animation
      data-aos-duration="1000"
    >
      <h2
        className="text-center mb-4"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        About Me
      </h2>
      <p
        className="text-center fs-5"
        data-aos="fade"
        data-aos-duration="1500"
      >
        {aboutData.description}
      </p>
    </section>
  );
}
