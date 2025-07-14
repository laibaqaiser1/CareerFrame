import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large geometric diamond/arrow patterns */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        {/* Large diamond shape 1 */}
        <motion.div
          className="absolute top-[-10%] right-[10%] w-[600px] h-[600px]"
          animate={{
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 600 600" className="w-full h-full">
            <path
              d="M300,50 L500,300 L300,550 L100,300 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              opacity="0.8"
            />
            <path
              d="M300,100 L450,300 L300,500 L150,300 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Large diamond shape 2 */}
        <motion.div
          className="absolute top-[40%] left-[-5%] w-[500px] h-[500px]"
          animate={{
            rotate: [0, -360],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <path
              d="M250,50 L400,250 L250,450 L100,250 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              opacity="0.7"
            />
            <path
              d="M250,80 L370,250 L250,420 L130,250 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Large arrow-like pattern */}
        <motion.div
          className="absolute top-[10%] left-[50%] w-[400px] h-[400px]"
          animate={{
            rotate: [0, 180],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200,50 L350,200 L200,350 L200,250 L50,250 L50,150 L200,150 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M200,80 L320,200 L200,320 L200,230 L80,230 L80,170 L200,170 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        {/* Additional geometric patterns */}
        <motion.div
          className="absolute top-[60%] right-[20%] w-[300px] h-[300px]"
          animate={{
            rotate: [0, 270],
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              d="M150,30 L270,150 L150,270 L30,150 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              opacity="0.5"
            />
            <path
              d="M150,60 L240,150 L150,240 L60,150 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Subtle angular lines */}
        <motion.div
          className="absolute top-[20%] left-[20%] w-[200px] h-[200px]"
          animate={{
            rotate: [0, 90],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M20,100 L100,20 L180,100 L100,180 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-[70%] left-[60%] w-[150px] h-[150px]"
          animate={{
            rotate: [0, -120],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <path
              d="M75,15 L135,75 L75,135 L15,75 Z"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}