import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Curved Road Animation - Flowing Around Header Text */}
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
          {/* Main Curved Road Path - Flows around the text */}
          <motion.path
            d="M 100 700 Q 180 600 200 500 Q 220 400 300 350 Q 400 300 500 320 Q 600 340 700 350 Q 800 360 900 400 Q 980 440 1050 520 Q 1100 580 1080 650"
            stroke="#9CB98A"
            strokeWidth="70"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Road Center Dashed Lines */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            {/* Left curve dashes */}
            <motion.path
              d="M 120 680 L 135 670"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            />
            <motion.path
              d="M 150 640 L 165 625"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            />
            <motion.path
              d="M 175 580 L 185 560"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
            />
            <motion.path
              d="M 190 520 L 200 500"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            />
            <motion.path
              d="M 210 460 L 225 445"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
            />
            
            {/* Top curve dashes */}
            <motion.path
              d="M 280 365 L 300 360"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.6 }}
            />
            <motion.path
              d="M 340 350 L 360 352"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
            />
            <motion.path
              d="M 420 340 L 440 342"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.0 }}
            />
            <motion.path
              d="M 500 345 L 520 348"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2 }}
            />
            <motion.path
              d="M 580 352 L 600 355"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.4 }}
            />
            <motion.path
              d="M 660 360 L 680 365"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6 }}
            />
            
            {/* Right curve dashes */}
            <motion.path
              d="M 740 375 L 755 382"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.8 }}
            />
            <motion.path
              d="M 820 405 L 835 415"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.0 }}
            />
            <motion.path
              d="M 880 450 L 890 465"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.2 }}
            />
            <motion.path
              d="M 920 500 L 930 520"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.4 }}
            />
            <motion.path
              d="M 950 560 L 955 580"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.6 }}
            />
          </motion.g>
          
          {/* Milestone Points */}
          <motion.circle
            cx="180"
            cy="600"
            r="8"
            fill="#1F3A93"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.5 }}
          />
          
          <motion.circle
            cx="600"
            cy="340"
            r="8"
            fill="#1F3A93"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.5 }}
          />
          
          <motion.circle
            cx="1000"
            cy="540"
            r="8"
            fill="#1F3A93"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 5.5 }}
          />
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
