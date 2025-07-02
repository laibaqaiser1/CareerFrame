import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="relative max-w-7xl w-full">
      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Clean, Professional Layout */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6" style={{ 
              color: '#1E3A8A',
              lineHeight: '1.3',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              Get Matched. Get Moving.
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto" style={{ 
              color: '#6B7280',
              lineHeight: '1.5',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '400'
            }}>
              Real Progress - Real People, <span className="pulsate-green" style={{ 
                fontWeight: '600'
              }}>6x cheaper</span> than the average career coach.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Button 
                className="text-white px-6 py-3 shadow-lg button-hover"
                style={{ backgroundColor: '#88A98F', fontSize: '16px' }}
              >
                Start Your Career Plan — Free
              </Button>
            </div>
            
            <p className="text-sm" style={{ color: '#88A98F' }}>
              90-day satisfaction guarantee
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
