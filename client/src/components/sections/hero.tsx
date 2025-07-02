import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: 'white' }}>
      {/* Chainmail Square Section - Top Left */}
      <div className="absolute top-20 left-12 w-48 h-48 opacity-90 pointer-events-none">
        <div className="w-full h-full border-2 border-blue-500 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern id="chainmailSquare1" x="0" y="0" width="20" height="18" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="3.5" fill="none" stroke="#2563eb" strokeWidth="1.5" className="electric-ring-fast"/>
                <circle cx="15" cy="5" r="3.5" fill="none" stroke="#2563eb" strokeWidth="1.5" className="electric-ring-fast"/>
                <circle cx="10" cy="14" r="3.5" fill="none" stroke="#2563eb" strokeWidth="1.5" className="electric-ring-fast"/>
                <circle cx="0" cy="14" r="3.5" fill="none" stroke="#3b82f6" strokeWidth="1" className="electric-ring-slow"/>
                <circle cx="20" cy="14" r="3.5" fill="none" stroke="#3b82f6" strokeWidth="1" className="electric-ring-slow"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chainmailSquare1)" opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Chainmail Square Section - Top Center */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-85 pointer-events-none">
        <div className="w-full h-full border-2 border-blue-400 rounded-lg bg-gradient-to-br from-blue-25 to-blue-75 p-3">
          <svg width="100%" height="100%" viewBox="0 0 160 160" className="w-full h-full">
            <defs>
              <pattern id="chainmailSquare2" x="0" y="0" width="18" height="16" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="3" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="electric-ring-medium"/>
                <circle cx="14" cy="4" r="3" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="electric-ring-medium"/>
                <circle cx="9" cy="12" r="3" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="electric-ring-medium"/>
                <circle cx="0" cy="12" r="3" fill="none" stroke="#60a5fa" strokeWidth="1" className="electric-ring-fast"/>
                <circle cx="18" cy="12" r="3" fill="none" stroke="#60a5fa" strokeWidth="1" className="electric-ring-fast"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chainmailSquare2)" opacity="0.7"/>
          </svg>
        </div>
      </div>

      {/* Chainmail Square Section - Bottom Right */}
      <div className="absolute bottom-40 right-12 w-52 h-52 opacity-90 pointer-events-none">
        <div className="w-full h-full border-2 border-blue-600 rounded-lg bg-gradient-to-br from-blue-50 to-blue-200 p-4">
          <svg width="100%" height="100%" viewBox="0 0 220 220" className="w-full h-full">
            <defs>
              <pattern id="chainmailSquare3" x="0" y="0" width="22" height="20" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="4" fill="none" stroke="#1d4ed8" strokeWidth="2" className="electric-ring-slow"/>
                <circle cx="16" cy="6" r="4" fill="none" stroke="#1d4ed8" strokeWidth="2" className="electric-ring-slow"/>
                <circle cx="11" cy="16" r="4" fill="none" stroke="#1d4ed8" strokeWidth="2" className="electric-ring-slow"/>
                <circle cx="0" cy="16" r="4" fill="none" stroke="#2563eb" strokeWidth="1.5" className="electric-ring-medium"/>
                <circle cx="22" cy="16" r="4" fill="none" stroke="#2563eb" strokeWidth="1.5" className="electric-ring-medium"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chainmailSquare3)" opacity="0.8"/>
          </svg>
        </div>
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
