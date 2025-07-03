import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Career Journey Road - Exact recreation of your image */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1400 900"
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Main Road Path - S-curve around text */}
          <motion.path
            d="M 150 800 Q 180 700 220 600 Q 260 500 320 450 Q 380 400 450 380 Q 520 360 600 370 Q 680 380 750 400 Q 820 420 880 460 Q 940 500 980 560 Q 1020 620 1040 680 Q 1060 740 1080 800"
            stroke="#A4B578"
            strokeWidth="90"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.3 }}
          />
          
          {/* Road Center Line - Properly spaced dashes */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            {/* Bottom left curve */}
            <motion.rect
              x="165" y="770" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-25 175 773)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7 }}
            />
            <motion.rect
              x="190" y="735" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-35 200 738)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9 }}
            />
            <motion.rect
              x="215" y="695" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-45 225 698)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.1 }}
            />
            <motion.rect
              x="240" y="650" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-55 250 653)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3 }}
            />
            <motion.rect
              x="270" y="610" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-65 280 613)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            />
            
            {/* Top curve */}
            <motion.rect
              x="310" y="470" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-20 320 473)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7 }}
            />
            <motion.rect
              x="360" y="410" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(-10 370 413)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9 }}
            />
            <motion.rect
              x="420" y="385" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(0 430 388)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1 }}
            />
            <motion.rect
              x="480" y="375" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(5 490 378)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.3 }}
            />
            <motion.rect
              x="540" y="375" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(8 550 378)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5 }}
            />
            <motion.rect
              x="600" y="380" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(12 610 383)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.7 }}
            />
            <motion.rect
              x="660" y="390" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(15 670 393)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.9 }}
            />
            <motion.rect
              x="720" y="405" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(20 730 408)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.1 }}
            />
            
            {/* Right curve */}
            <motion.rect
              x="780" y="430" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(25 790 433)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.3 }}
            />
            <motion.rect
              x="830" y="465" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(35 840 468)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5 }}
            />
            <motion.rect
              x="875" y="510" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(45 885 513)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.7 }}
            />
            <motion.rect
              x="915" y="560" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(55 925 563)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.9 }}
            />
            <motion.rect
              x="950" y="615" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(65 960 618)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.1 }}
            />
            <motion.rect
              x="980" y="670" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(70 990 673)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.3 }}
            />
            <motion.rect
              x="1005" y="725" width="20" height="6" rx="3"
              fill="white"
              transform="rotate(75 1015 728)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5 }}
            />
          </motion.g>
          
          {/* Milestone Markers */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 4.0 }}
          >
            <circle cx="250" cy="580" r="12" fill="#1F3A93" stroke="white" strokeWidth="3" />
          </motion.g>
          
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 5.0 }}
          >
            <circle cx="600" cy="370" r="12" fill="#1F3A93" stroke="white" strokeWidth="3" />
          </motion.g>
          
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 6.0 }}
          >
            <circle cx="950" cy="580" r="12" fill="#1F3A93" stroke="white" strokeWidth="3" />
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
