import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingLogos from "./components/FloatingLogos";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// AOS Animation Library
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize Theme + AOS
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const darkModeEnabled = savedTheme === "dark";
    setIsDark(darkModeEnabled);

    document.documentElement.classList.toggle("dark", darkModeEnabled);

    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  // Toggle Light / Dark Theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div
      className={`
        ${isDark ? "bg-dark text-light" : "bg-white text-dark"}
        min-vh-100
      `}
      style={{ position: "relative" }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <FloatingLogos />

      <main className="pb-5">
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
        </Routes>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
