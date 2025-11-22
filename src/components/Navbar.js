import React from "react";

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top shadow-sm`}
    >
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#home"
          style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          <i
            className="fa-solid fa-code me-2"
            style={{ color: isDark ? "#FFD700" : "#0d6efd" }}
          ></i>
          Ztifedz
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a className="nav-link" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}

            {/* Theme Toggle */}
            <li className="nav-item ms-3">
              <button
                className={`btn ${isDark ? "btn-outline-light" : "btn-outline-dark"}`}
                onClick={toggleTheme}
                title="Toggle Theme"
              >
                {isDark ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
