import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";
import { LaunchCounter } from "@/components/ui/launch-counter";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      
      {/* Launch Announcement - Higher and Wider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full text-center pt-20 pb-12"
      >
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-4xl lg:text-6xl font-bold text-center" style={{ 
            color: '#1E3A8A',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Launch day is soon approaching — <span style={{ color: '#88A98F' }}>we're letting in 500 people first.</span><br />
            You'll want to be one of them!
          </p>
        </div>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto relative z-10 flex-1 flex items-center">
        <div className="text-center w-full">
          
          {/* Clean, Professional Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button 
                  className="text-white px-8 py-4 shadow-lg button-hover text-lg font-semibold"
                  style={{ backgroundColor: '#88A98F', fontSize: '18px' }}
                  onClick={() => {
                    const newsletterSection = document.getElementById('newsletter');
                    if (newsletterSection) {
                      newsletterSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Join the Waitlist
                </Button>
              </motion.div>
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
      
      {/* Launch Counter - positioned in the space below main content */}
      <div className="w-full pb-16">
        <LaunchCounter />
      </div>
    </section>
  );
}
