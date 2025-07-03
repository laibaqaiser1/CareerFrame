import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Animated Road Path - Part 1: Bottom Left to Center */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Road Path */}
          <motion.path
            d="M 50 750 Q 200 600 350 500 Q 450 450 550 400 Q 600 380 650 370"
            stroke="#88A98F"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Road Dashed Lines */}
          <motion.path
            d="M 50 750 Q 200 600 350 500 Q 450 450 550 400 Q 600 380 650 370"
            stroke="white"
            strokeWidth="4"
            strokeDasharray="20 15"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Milestone Points */}
          <motion.circle
            cx="200"
            cy="600"
            r="8"
            fill="#1F3A93"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          
          <motion.circle
            cx="450"
            cy="450"
            r="8"
            fill="#1F3A93"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
          
          {/* Journey Starting Point */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <circle cx="50" cy="750" r="15" fill="#687E35" />
            <text x="70" y="770" fontSize="14" fill="#687E35" fontWeight="600">
              Your Journey Starts Here
            </text>
          </motion.g>
        </svg>
      </motion.div>

      {/* Road Continuation (Right Side) - Appears after signup */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Future Path (Preview) */}
          <motion.path
            d="M 750 370 Q 850 360 950 320 Q 1050 280 1150 200"
            stroke="#88A98F"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
            strokeOpacity="0.3"
            strokeDasharray="60 40"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 4 }}
          />
          
          {/* Success Destination */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 5 }}
          >
            <circle cx="1150" cy="200" r="20" fill="#687E35" strokeWidth="3" stroke="white" />
            <text x="1000" y="180" fontSize="14" fill="#687E35" fontWeight="600">
              Career Success
            </text>
          </motion.g>
        </svg>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Clean, Professional Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold mb-4 text-center" style={{ 
              color: '#1E3A8A',
              fontSize: 'clamp(48px, 5vw, 56px)',
              fontWeight: '700',
              letterSpacing: 'normal',
              lineHeight: '110%',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Find the Right Role<br />
              Get There Faster
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-center" style={{ 
              color: '#6B7280',
              lineHeight: '1.3',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '400'
            }}>
              Real Progress - Real People, <span className="pulsate-green text-xl lg:text-2xl" style={{ 
                fontWeight: '600'
              }}>6 x cheaper</span><br />
              than the average career coach
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Button 
                className="text-white px-6 py-3 shadow-lg button-hover"
                style={{ backgroundColor: '#88A98F', fontSize: '16px' }}
              >
                Start for Free
              </Button>
              <Button 
                variant="outline"
                className="px-6 py-3 shadow-lg button-hover border-2"
                style={{ 
                  borderColor: '#88A98F', 
                  color: '#88A98F',
                  fontSize: '16px'
                }}
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-center" style={{ color: '#88A98F' }}>
              90-day satisfaction guarantee
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
