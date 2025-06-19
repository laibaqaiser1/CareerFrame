import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollower = (e: MouseEvent) => {
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, [role="button"], input, textarea, select')) {
        setIsHoveringInteractive(true);
        setIsHoveringText(false);
      } else if (target.matches('p, h1, h2, h3, h4, h5, h6, span, div')) {
        setIsHoveringText(true);
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHoveringInteractive(false);
      setIsHoveringText(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousemove', updateFollower);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousemove', updateFollower);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${isHoveringInteractive ? 'hover-interactive' : ''} ${isHoveringText ? 'hover-text' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-follower ${isHoveringInteractive ? 'hover-interactive' : ''}`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      />
    </>
  );
}