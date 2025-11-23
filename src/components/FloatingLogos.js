import React, { useEffect, useState } from "react";

export default function FloatingLogos() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const logoList = [
      { className: "fab fa-react", key: "react" },
      { className: "fab fa-js", key: "js" },
      { className: "fab fa-html5", key: "html" },
      { className: "fab fa-css3-alt", key: "css" },
      { className: "fab fa-node", key: "node" },
      { className: "fab fa-git-alt", key: "git" },
    ];

    const positions = [];
    const MIN_DISTANCE = 25; // bigger minimum distance to avoid crowding
    const MAX_ATTEMPTS = 50; // maximum tries to find a valid position

    const generatePosition = () => {
      let attempts = 0;
      let top, left;
      let valid = false;

      while (!valid && attempts < MAX_ATTEMPTS) {
        top = Math.random() * 80; // avoid edges
        left = Math.random() * 80;

        valid = positions.every(pos => {
          const dx = pos.left - left;
          const dy = pos.top - top;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance > MIN_DISTANCE;
        });

        attempts++;
      }

      positions.push({ top, left });
      return { top: top + "%", left: left + "%" };
    };

    const randomized = logoList.map(logo => {
      const pos = generatePosition();
      return {
        ...logo,
        top: pos.top,
        left: pos.left,
        animationDelay: Math.random() * 8 + "s"
      };
    });

    setLogos(randomized);
  }, []);

  return (
    <div className="floating-logos">
      {logos.map(logo => (
        <i
          key={logo.key}
          className={`logo ${logo.className}`}
          style={{
            top: logo.top,
            left: logo.left,
            animationDelay: logo.animationDelay
          }}
        ></i>
      ))}
    </div>
  );
}
