import React from 'react';
import { motion } from 'framer-motion';

interface GeometricPatternProps {
  className?: string;
  opacity?: number;
}

export const GeometricPattern: React.FC<GeometricPatternProps> = ({
  className = '',
  opacity = 0.4
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="geometric-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Hexagonal shapes */}
            <polygon
              points="30,5 45,15 45,35 30,45 15,35 15,15"
              fill="none"
              stroke="#829340"
              strokeWidth="0.5"
              opacity={opacity * 0.6}
            />
            <circle
              cx="30"
              cy="30"
              r="3"
              fill="#1E3A8A"
              opacity={opacity * 0.4}
            />
          </pattern>
          
          <pattern
            id="geometric-lines"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Diagonal lines */}
            <line
              x1="0"
              y1="0"
              x2="120"
              y2="120"
              stroke="#829340"
              strokeWidth="0.3"
              opacity={opacity * 0.3}
            />
            <line
              x1="120"
              y1="0"
              x2="0"
              y2="120"
              stroke="#1E3A8A"
              strokeWidth="0.3"
              opacity={opacity * 0.2}
            />
          </pattern>

          <linearGradient
            id="pattern-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F1F5F9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Background gradient */}
        <rect
          width="100%"
          height="100%"
          fill="url(#pattern-gradient)"
        />

        {/* Geometric patterns overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#geometric-pattern)"
        />
        
        <rect
          width="100%"
          height="100%"
          fill="url(#geometric-lines)"
        />

        {/* Animated geometric shapes */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity * 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Large hexagons in corners */}
          <polygon
            points="100,50 150,80 150,140 100,170 50,140 50,80"
            fill="none"
            stroke="#829340"
            strokeWidth="1"
            opacity={opacity * 0.3}
          />
          
          <polygon
            points="1050,50 1100,80 1100,140 1050,170 1000,140 1000,80"
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="1"
            opacity={opacity * 0.3}
          />

          <polygon
            points="100,630 150,660 150,720 100,750 50,720 50,660"
            fill="none"
            stroke="#829340"
            strokeWidth="1"
            opacity={opacity * 0.2}
          />

          <polygon
            points="1050,630 1100,660 1100,720 1050,750 1000,720 1000,660"
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="1"
            opacity={opacity * 0.2}
          />
        </motion.g>

        {/* Floating geometric elements */}
        <motion.g
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <circle
            cx="300"
            cy="200"
            r="4"
            fill="#829340"
            opacity={opacity * 0.4}
          />
          <circle
            cx="900"
            cy="600"
            r="6"
            fill="#1E3A8A"
            opacity={opacity * 0.3}
          />
          <rect
            x="200"
            y="500"
            width="8"
            height="8"
            fill="#829340"
            opacity={opacity * 0.3}
            transform="rotate(45 204 504)"
          />
          <rect
            x="800"
            y="150"
            width="10"
            height="10"
            fill="#1E3A8A"
            opacity={opacity * 0.2}
            transform="rotate(45 805 155)"
          />
        </motion.g>
      </svg>
    </div>
  );
};