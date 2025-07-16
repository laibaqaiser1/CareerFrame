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
          opacity: 0.8,
          filter: scrollY > 0 
          ? `blur(${Math.min(scrollY * 0.08, 35)}px)` 
          : "none",
        }}
      />
    </div>
  );
}
