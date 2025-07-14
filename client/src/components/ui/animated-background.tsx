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
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          transform: `translateY(${scrollY * 0.3}px)`,
          zIndex: '-1',
          opacity: '0.4'
        }}
      />
    </div>
  );
}