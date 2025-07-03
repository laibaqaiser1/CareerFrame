import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Left Side Animated Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ 
              x: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-16 h-16 rounded-lg"
            style={{ backgroundColor: '#88A98F' }}
          />
          <motion.div
            animate={{ 
              x: [0, -15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="w-12 h-12 rounded-full"
            style={{ backgroundColor: '#687E35' }}
          />
          <motion.div
            animate={{ 
              x: [0, 25, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="w-20 h-8 rounded-full"
            style={{ backgroundColor: '#1F3A93', opacity: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Right Side Animated Elements */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ 
              x: [0, -20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.3
            }}
            className="w-14 h-14 rounded-lg"
            style={{ backgroundColor: '#1F3A93' }}
          />
          <motion.div
            animate={{ 
              x: [0, 15, 0],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.8
            }}
            className="w-18 h-6 rounded-full"
            style={{ backgroundColor: '#88A98F', opacity: 0.9 }}
          />
          <motion.div
            animate={{ 
              x: [0, -25, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.2
            }}
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: '#687E35' }}
          />
        </motion.div>
      </div>

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
