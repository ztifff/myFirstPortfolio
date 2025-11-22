import React from "react";
import socials from "../data/socials";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`text-center py-4 ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      } shadow-sm`}
      style={{ transition: "background-color 0.3s, color 0.3s" }}
    >
      <p className="mb-1">
        © 2025 Fitzgerald A. Eduarte — All Rights Reserved.
      </p>

      <p
        className="small mb-3"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Passionate web developer dedicated to creating modern, responsive, and user-focused
        interfaces. Thank you for exploring my work, feel free to connect with me anytime.
      </p>

      <div className="d-flex justify-content-center gap-3">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <i className={`${social.icon} fa-lg`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}
