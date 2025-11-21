import React, { useState } from "react";
import heroData from "../data/hero";

export default function Hero({ isDark }) {
  const [hovered, setHovered] = useState(false);

  const getImage = () => {
    if (isDark) return hovered ? heroData.images.darkHover : heroData.images.dark;
    return hovered ? heroData.images.lightHover : heroData.images.light;
  };

  return (
    <section
      id="home"
      className={`d-flex align-items-center justify-content-center text-center vh-100 ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ transition: "background-color 0.3s, color 0.3s" }}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div>
        <img
          src={getImage()}
          alt="Profile"
          className="rounded-circle mb-3"
          width="300"
          style={{ transition: "all 0.3s ease-in-out", cursor: "pointer" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <h1
          className="display-4 fw-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Hello, I'm {heroData.name}
        </h1>
        <p
          className="lead"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          {heroData.title}
        </p>
        <a
          href={heroData.ctaLink}
          className="btn btn-primary btn-lg mt-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
