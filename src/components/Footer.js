import React from "react";
import socials from "../data/socials";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`text-center py-4 ${isDark ? "bg-dark text-light" : "bg-light text-dark"} shadow-sm`}
      style={{ transition: "background-color 0.3s, color 0.3s" }}
    >
      <p>© 2025 MyPortfolio</p>
      <div className="d-flex justify-content-center gap-3">
        {socials.map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
            <i className={`${social.icon} fa-lg`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}
