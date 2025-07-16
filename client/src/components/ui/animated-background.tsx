import React, { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Custom background with corner gradients - green in top-left and bottom-right corners */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
              rgba(130, 147, 64, 0.4) 0%, 
              rgba(130, 147, 64, 0.2) 15%, 
              rgba(255, 255, 255, 0.95) 35%, 
              rgba(255, 255, 255, 0.95) 65%, 
              rgba(130, 147, 64, 0.2) 85%, 
              rgba(130, 147, 64, 0.4) 100%
            )`,
        }}
      />

      {/* Single large logo - positioned exactly in top-right corner, facing downwards diagonally */}
      <div
        className="absolute"
        style={{
          width: "800px",
          height: "1000px",
          top: "-320px",
          right: "-220px",
          backgroundImage: "url(/careerframe-pattern.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: `rotate(2deg) translate(${scrollY * 0.3}px, ${-scrollY * 0.7}px)`,
          opacity: Math.max(0.6, 0.8 - scrollY * 0.0002),
          filter: scrollY > 0 
          ? `blur(${Math.min(scrollY * 0.05, 30)}px)` 
          : "none",
        }}
      />
    </div>
  );
}
