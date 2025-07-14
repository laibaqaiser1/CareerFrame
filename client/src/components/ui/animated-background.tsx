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
      {/* Custom background color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#F3F7FA' }} />
      
      {/* Single large logo in top right corner diagonally */}
      <div 
        className="absolute -top-20 -right-20 w-80 h-80 opacity-15"
        style={{
          backgroundImage: 'url(/careerframe-pattern.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: `rotate(15deg) translateY(${scrollY * 0.1}px)`,
        }}
      />
    </div>
  );
}