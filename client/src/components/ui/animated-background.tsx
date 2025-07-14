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
      {/* Custom background with corner gradients - green in top-left and bottom-right corners */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `
            linear-gradient(135deg, 
              rgba(130, 147, 64, 0.4) 0%, 
              rgba(130, 147, 64, 0.2) 15%, 
              rgba(255, 255, 255, 0.95) 35%, 
              rgba(255, 255, 255, 0.95) 65%, 
              rgba(130, 147, 64, 0.2) 85%, 
              rgba(130, 147, 64, 0.4) 100%
            )
          ` 
        }} 
      />
      
      {/* Single large logo - fades into top-right corner on scroll */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px]"
        style={{
          backgroundImage: 'url(/careerframe-pattern.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: `rotate(15deg) translate(${scrollY * 0.4}px, ${-scrollY * 0.4}px)`,
          opacity: Math.max(0.05, 0.25 - (scrollY * 0.0005)),
        }}
      />
    </div>
  );
}