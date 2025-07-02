import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: 'white' }}>
      {/* Chainmail Border - Top Left */}
      <div className="absolute top-16 left-8 w-96 h-32 opacity-80 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 400 130" className="w-full h-full">
          <defs>
            <pattern id="chainmailTopLeft" x="0" y="0" width="24" height="20" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="4" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.7" className="electric-ring"/>
              <circle cx="18" cy="6" r="4" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.7" className="electric-ring"/>
              <circle cx="12" cy="16" r="4" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.7" className="electric-ring"/>
              <circle cx="0" cy="16" r="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="electric-ring"/>
              <circle cx="24" cy="16" r="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="electric-ring"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chainmailTopLeft)"/>
        </svg>
      </div>

      {/* Chainmail Border - Bottom Right */}
      <div className="absolute bottom-32 right-8 w-96 h-32 opacity-80 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 400 130" className="w-full h-full">
          <defs>
            <pattern id="chainmailBottomRight" x="0" y="0" width="24" height="20" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="4" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.7" className="electric-ring"/>
              <circle cx="18" cy="6" r="4" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.7" className="electric-ring"/>
              <circle cx="12" cy="16" r="4" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.7" className="electric-ring"/>
              <circle cx="0" cy="16" r="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="electric-ring"/>
              <circle cx="24" cy="16" r="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" className="electric-ring"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chainmailBottomRight)"/>
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
