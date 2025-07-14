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
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Shaded background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Test pattern - simple dots to verify it's working */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #88A98F 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          backgroundRepeat: 'repeat',
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: '0.4'
        }}
      />
      
      {/* CareerFrame Logo Pattern Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/careerframe-pattern.svg)',
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat',
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: '0.6'
        }}
      />
      
      {/* Diagonal stripe pattern */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #88A98F 0px,
            #88A98F 1px,
            transparent 1px,
            transparent 15px
          )`,
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: '0.2'
        }}
      />
    </div>
  );
}