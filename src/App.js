import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on start
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); 
    }

    // Initialize AOS
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
      mirror: false,   // whether elements should animate out while scrolling past them
    });
  }, []);

  // Re-initialize AOS on theme change (optional, ensures animations still work)
  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`${isDark ? "bg-dark text-light" : "bg-white text-dark"} min-vh-100`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pb-5">
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
        </Routes>
      </main>

      <Footer isDark={isDark}/>
    </div>
  );
}
