import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedCornerLogosProps {
  logoSrc?: string;
  className?: string;
}

export const AnimatedCornerLogos: React.FC<AnimatedCornerLogosProps> = ({
  logoSrc = '/TopLeftCornerFrame.png',
  className = ''
}) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Transform scroll progress to rotation and scale values
  const rotate1 = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1.1, 0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 0.6, 0.4, 0.2]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const logoVariants = {
    initial: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    animate: { 
      opacity: 0.6, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotate: 180,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Top Left Corner Logo */}
      <motion.div
        className="absolute top-8 left-8 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        variants={logoVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        style={{ 
          rotate: rotate1,
          scale,
          opacity
        }}
      >
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(${logoSrc})`,
            filter: 'brightness(1.2) contrast(0.8)'
          }}
        />
      </motion.div>

      {/* Top Right Corner Logo */}
      <motion.div
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
        variants={logoVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        style={{ 
          rotate: rotate2,
          scale,
          opacity: useTransform(opacity, [0, 1], [0, 0.3])
        }}
      >
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center transform rotate-45"
          style={{ 
            backgroundImage: `url(${logoSrc})`,
            filter: 'brightness(1.1) contrast(0.7)'
          }}
        />
      </motion.div>

      {/* Bottom Left Corner Logo */}
      <motion.div
        className="absolute bottom-16 left-16 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        variants={logoVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        style={{ 
          rotate: useTransform(rotate1, [0, 180], [0, -90]),
          scale: useTransform(scale, [0.5, 1.5], [0.7, 1.1]),
          opacity: useTransform(opacity, [0, 1], [0, 0.25])
        }}
      >
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center transform -rotate-12"
          style={{ 
            backgroundImage: `url(${logoSrc})`,
            filter: 'brightness(1.3) contrast(0.6)'
          }}
        />
      </motion.div>

      {/* Bottom Right Corner Logo */}
      <motion.div
        className="absolute bottom-8 right-12 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
        variants={logoVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        style={{ 
          rotate: useTransform(rotate2, [0, -180], [0, 90]),
          scale: useTransform(scale, [0.5, 1.5], [0.8, 1.2]),
          opacity: useTransform(opacity, [0, 1], [0, 0.4])
        }}
      >
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center transform rotate-12"
          style={{ 
            backgroundImage: `url(/BottomRightCornerFrame.png)`,
            filter: 'brightness(1.1) contrast(0.8)'
          }}
        />
      </motion.div>

      {/* Additional floating logos for depth */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 md:w-20 md:h-20"
        variants={logoVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        style={{ 
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          scale: useTransform(scale, [0.5, 1.5], [0.5, 0.8]),
          opacity: useTransform(opacity, [0, 1], [0, 0.2])
        }}
      >
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(${logoSrc})`,
            filter: 'brightness(1.4) contrast(0.5)'
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-12 h-12 md:w-16 md:h-16"
        variants={logoVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        style={{ 
          rotate: useTransform(scrollYProgress, [0, 1], [0, -270]),
          scale: useTransform(scale, [0.5, 1.5], [0.6, 0.9]),
          opacity: useTransform(opacity, [0, 1], [0, 0.22])
        }}
      >
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(${logoSrc})`,
            filter: 'brightness(1.2) contrast(0.6)'
          }}
        />
      </motion.div>
    </div>
  );
};