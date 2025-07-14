import React, { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shaded background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* CareerFrame Logo Pattern Background */}
      <div 
        className="background-pattern"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '150%',
          backgroundImage: 'url(/careerframe-pattern.svg)',
          backgroundSize: '150px 150px',
          backgroundRepeat: 'repeat',
          transform: `translateY(${scrollY * 0.3}px)`,
          zIndex: '-1',
          opacity: '0.8'
        }}
      />
      
      {/* Fallback pattern if SVG doesn't load */}
      <div 
        className="absolute top-0 left-0 w-full h-[150%] opacity-30 z-[-2]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #88A98F 0px,
            #88A98F 2px,
            transparent 2px,
            transparent 20px
          ), repeating-linear-gradient(
            -45deg,
            #88A98F 0px,
            #88A98F 2px,
            transparent 2px,
            transparent 20px
          )`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
    </div>
  );
}