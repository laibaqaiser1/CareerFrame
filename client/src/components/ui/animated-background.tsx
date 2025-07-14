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
      {/* Custom background with radial gradient - white center fading to green */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `radial-gradient(circle at center, white 0%, white 30%, #82934033 70%, #82934033 100%)` 
        }} 
      />
      
      {/* Single large logo - starts full visible, moves diagonally on scroll */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-12"
        style={{
          backgroundImage: 'url(/careerframe-pattern.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: `rotate(15deg) translate(${scrollY * 0.3}px, ${-scrollY * 0.3}px)`,
        }}
      />
    </div>
  );
}