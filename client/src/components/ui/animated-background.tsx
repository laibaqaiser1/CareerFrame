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
      {/* Custom background with gradient */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(135deg, #82934033 0%, #82934020 50%, #82934033 100%)` 
        }} 
      />
      
      {/* Single large logo in top right corner diagonally */}
      <div 
        className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-12"
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