import React from "react";

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          MyPortfolio
        </a>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            {/* Theme Toggle */}
            <li className="nav-item ms-3">
            <button
            className={`btn ${isDark ? "btn-outline-light" : "btn-outline-dark"}`}
             onClick={toggleTheme}
                title="Toggle Theme"
            >
                {isDark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
