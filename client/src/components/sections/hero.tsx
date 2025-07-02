import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="relative max-w-7xl w-full">
        {/* Career Journey Path Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg 
            className="w-full h-32 md:h-40"
            viewBox="0 0 800 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Career journey curved path */}
            <path
              id="career-path"
              d="M 50 80 Q 200 40, 350 80 T 750 80"
              fill="none"
              stroke="#88A98F"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="career-journey-path"
            />
            
            {/* Milestone dots */}
            <circle cx="150" cy="65" r="8" fill="#687E35" className="milestone-dot milestone-1" opacity="0" />
            <circle cx="350" cy="80" r="8" fill="#687E35" className="milestone-dot milestone-2" opacity="0" />
            <circle cx="550" cy="75" r="8" fill="#687E35" className="milestone-dot milestone-3" opacity="0" />
            <circle cx="700" cy="80" r="8" fill="#687E35" className="milestone-dot milestone-4" opacity="0" />
            
            {/* Milestone glow rings */}
            <circle cx="150" cy="65" r="15" fill="none" stroke="#687E35" strokeWidth="2" className="milestone-glow glow-1" opacity="0" />
            <circle cx="350" cy="80" r="15" fill="none" stroke="#687E35" strokeWidth="2" className="milestone-glow glow-2" opacity="0" />
            <circle cx="550" cy="75" r="15" fill="none" stroke="#687E35" strokeWidth="2" className="milestone-glow glow-3" opacity="0" />
            <circle cx="700" cy="80" r="15" fill="none" stroke="#687E35" strokeWidth="2" className="milestone-glow glow-4" opacity="0" />
          </svg>
        </div>
      
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Headline Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ 
              color: '#1E3A8A',
              lineHeight: '1.2',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              CareerFrame Finds the Right Roles for You — Then Guides You There
            </h1>
            
            <p className="text-2xl mb-16" style={{ 
              color: '#6B7280',
              lineHeight: '1.4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '500'
            }}>
              Real Progress - Real People, <span className="pulsate-green" style={{ 
                fontWeight: '600'
              }}>6x cheaper</span> than the average career coach.
            </p>
          </motion.div>

          {/* CTA Button - appears after animation */}
          <div className="cta-fade-in" style={{ opacity: 0 }}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="text-white text-lg px-8 py-4 shadow-lg button-hover"
                style={{ backgroundColor: '#88A98F' }}
              >
                Start Your Career Journey — Free
              </Button>
            </div>
            <p className="text-sm mt-3" style={{ color: '#88A98F' }}>
              90-day satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
