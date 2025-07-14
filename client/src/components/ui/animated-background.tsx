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
      {/* Green-white shaded background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100" />
      
      {/* Single large logo on the right side */}
      <div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-10"
        style={{
          backgroundImage: 'url(/careerframe-pattern.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.1}px) translateY(-50%)`,
        }}
      />
    </div>
  );
}