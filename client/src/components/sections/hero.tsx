import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'white' }}>
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          {/* Clean, Professional Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-center" style={{ 
              color: '#1E3A8A',
              lineHeight: '1.4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              Find the Right Role.<br />
              Get There Faster.
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-center" style={{ 
              color: '#6B7280',
              lineHeight: '1.6',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '400'
            }}>
              Real Progress - Real People,<br />
              <span className="pulsate-green text-xl lg:text-2xl" style={{ 
                fontWeight: '600'
              }}>6 x cheaper</span> than the average career coach.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Button 
                className="text-white px-6 py-3 shadow-lg button-hover"
                style={{ backgroundColor: '#88A98F', fontSize: '16px' }}
              >
                Start Your Career Plan — Free
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
