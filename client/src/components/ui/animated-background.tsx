import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        {/* Large flowing line 1 */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[60%]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <path
              d="M-100,200 Q200,50 400,200 T800,200"
              stroke="#88A98F"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M-100,220 Q200,70 400,220 T800,220"
              stroke="#88A98F"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        {/* Large flowing line 2 */}
        <motion.div
          className="absolute top-[30%] right-[-10%] w-[120%] h-[60%]"
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <path
              d="M-100,150 Q200,300 400,150 T800,150"
              stroke="#1E3A8A"
              strokeWidth="3"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M-100,170 Q200,320 400,170 T800,170"
              stroke="#1E3A8A"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-12 h-12 bg-fresh-green rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.2 }}
        />

        <motion.div
          className="absolute top-[60%] right-[15%] w-10 h-10 bg-navy rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.15 }}
        />

        <motion.div
          className="absolute top-[40%] left-[20%] w-8 h-8 bg-fresh-green rotate-45"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.12 }}
        />

        <motion.div
          className="absolute top-[80%] left-[60%] w-8 h-8 bg-navy rotate-45"
          animate={{
            y: [0, 12, 0],
            x: [0, -6, 0],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.1 }}
        />

        {/* Subtle grid pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#88A98F" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fresh-green rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}