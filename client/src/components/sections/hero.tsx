import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Animated Road Path - From Bottom Left Leading to Header */}
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
          {/* Road Base Path - Stops before header text */}
          <motion.path
            d="M 50 750 Q 200 650 350 550 Q 450 480 500 450 Q 520 440 540 435"
            stroke="#9CB98A"
            strokeWidth="80"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Road Edges - Darker green */}
          <motion.path
            d="M 50 750 Q 200 650 350 550 Q 450 480 500 450 Q 520 440 540 435"
            stroke="#7A9471"
            strokeWidth="84"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
          />
          
          {/* Road Center Dashed Lines - Individual dashes with gaps like real road */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            {/* Individual dash segments following the curve */}
            <motion.path
              d="M 80 735 L 100 730"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            />
            <motion.path
              d="M 130 720 L 150 715"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            />
            <motion.path
              d="M 180 700 L 200 692"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            />
            <motion.path
              d="M 230 680 L 250 670"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            />
            <motion.path
              d="M 280 650 L 300 638"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
            />
            <motion.path
              d="M 330 615 L 350 602"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            />
            <motion.path
              d="M 380 580 L 400 568"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
            />
            <motion.path
              d="M 430 540 L 450 530"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.6 }}
            />
            <motion.path
              d="M 475 505 L 490 498"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
            />
            <motion.path
              d="M 510 470 L 525 463"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.0 }}
            />
          </motion.g>
          
          {/* Milestone Points along the road */}
          <motion.circle
            cx="200"
            cy="690"
            r="10"
            fill="#1F3A93"
            stroke="white"
            strokeWidth="3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          />
          
          <motion.circle
            cx="350"
            cy="600"
            r="10"
            fill="#1F3A93"
            stroke="white"
            strokeWidth="3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
          />
          
          {/* Journey Starting Point */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <circle cx="50" cy="750" r="18" fill="#687E35" stroke="white" strokeWidth="4" />
            <text x="80" y="780" fontSize="16" fill="#687E35" fontWeight="700">
              Your Journey Starts Here
            </text>
          </motion.g>
        </svg>
      </motion.div>

      {/* Future Road Path (Right Side) - Subtle preview */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.5, delay: 4.5 }}
      >
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Future path continues from where current road ends */}
          <motion.path
            d="M 650 435 Q 750 420 850 380 Q 950 340 1050 280 Q 1100 260 1150 240"
            stroke="#9CB98A"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
            strokeOpacity="0.4"
            strokeDasharray="80 60"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 5 }}
          />
          
          {/* Success Destination */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 0.8, delay: 6 }}
          >
            <circle cx="1150" cy="240" r="25" fill="#687E35" stroke="white" strokeWidth="4" />
            <text x="980" y="220" fontSize="16" fill="#687E35" fontWeight="700">
              Career Success Awaits
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
