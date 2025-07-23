import React, { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);
  const maxScroll = 600;
  const clampedScroll = Math.min(scrollY, maxScroll);
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

      {/* Desktop logo pattern */}
      <div
        className="absolute hidden md:block"
        style={{
          width: "800px",
          height: "1000px",
          top: "-320px",
          right: "-220px",
          backgroundImage: "url(/careerframe-pattern.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: `rotate(${2 - scrollY * 0.5}deg) translate(${Math.sin(scrollY * 0.01) * 50}px, ${scrollY * 0.8}px)`,
          opacity: scrollY > 0 ? Math.min(1, 0.8 + scrollY * 0.0005) : 0.8,
          filter: scrollY > 0 ? `blur(${Math.min(scrollY * 0.05, 9)}px)` : "none",
          willChange: "filter, transform",
        }}
      />

      {/* Mobile optimized logo pattern */}
      <div
        className="absolute md:hidden"
        style={{
          width: "400px",
          height: "500px",
          top: "-160px",
          right: "-100px",
          backgroundImage: "url(/careerframe-pattern.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: `rotate(${1 - scrollY * 0.3}deg) translate(${Math.sin(scrollY * 0.008) * 25}px, ${scrollY * 0.4}px)`,
          opacity: scrollY > 0 ? Math.min(1, 0.6 + scrollY * 0.0003) : 0.6,
          filter: scrollY > 0 ? `blur(${Math.min(scrollY * 0.03, 5)}px)` : "none",
          willChange: "filter, transform",
        }}
      />
    </div>
  );
}
