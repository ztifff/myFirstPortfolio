import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import FloatingLogos from "../components/FloatingLogos";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ isDark }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Floating background icons */}
      <FloatingLogos />

      {/* Page Sections */}
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}
