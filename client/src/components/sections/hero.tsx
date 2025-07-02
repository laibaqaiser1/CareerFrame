import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: 'white' }}>
      {/* Chainmail Background Pattern */}
      <div className="absolute top-0 left-0 w-1/2 h-3/4 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 500 400" className="w-full h-full">
          <defs>
            <pattern id="chainmail" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
              {/* Row 1 - Main rings */}
              <circle cx="8" cy="8" r="5" fill="none" stroke="#4A5568" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="22" cy="8" r="5" fill="none" stroke="#4A5568" strokeWidth="1.5" opacity="0.3"/>
              
              {/* Row 2 - Offset interlocking rings */}
              <circle cx="15" cy="21" r="5" fill="none" stroke="#4A5568" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="1" cy="21" r="5" fill="none" stroke="#4A5568" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="29" cy="21" r="5" fill="none" stroke="#4A5568" strokeWidth="1.5" opacity="0.3"/>
              
              {/* Additional connecting rings for density */}
              <circle cx="8" cy="21" r="4" fill="none" stroke="#6B7280" strokeWidth="1" opacity="0.2"/>
              <circle cx="22" cy="21" r="4" fill="none" stroke="#6B7280" strokeWidth="1" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chainmail)"/>
          
          {/* Gradient overlay for fading effect */}
          <defs>
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
              <stop offset="60%" style={{ stopColor: 'white', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#fadeGradient)"/>
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ 
            color: '#1E3A8A',
            lineHeight: '1.2',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.01em'
          }}>
            CareerFrame Finds the Right Roles for You — Then Guides You There
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-2xl mb-8" style={{ 
            color: '#6B7280',
            lineHeight: '1.4',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: '500'
          }}>
            Real Progress - Real People, <span className="pulsate-green" style={{ 
              fontWeight: '600'
            }}>6x cheaper</span> than the average career coach.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="text-white text-lg px-8 py-4 shadow-lg button-hover"
              style={{ backgroundColor: '#88A98F' }}
            >
              Start Your Career Plan — Free
            </Button>
          </div>
          <p className="text-sm mt-3" style={{ color: '#88A98F' }}>
            90-day satisfaction guarantee
          </p>
        </motion.div>
      </div>

    </section>
  );
}
