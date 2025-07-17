import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";

export function HeroSection() {
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>

      <div className="w-full max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 relative z-10">
        <div className="text-center">
          {/* Clean, Professional Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold mb-6 text-center" style={{ 
              color: '#1E3A8A',
              fontSize: 'clamp(64px, 8vw, 96px)',
              fontWeight: '700',
              letterSpacing: 'normal',
              lineHeight: '105%',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Your Potential Is Bigger Than <br />Your Job Title — Let's Prove It
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-center" style={{ 
              color: '#6B7280',
              lineHeight: '1.4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '400'
            }}>
              Real Progress - Real People, <span className="pulsate-green text-xl lg:text-2xl" style={{ 
                fontWeight: '600'
              }}>6 x cheaper</span><br />
              than the average career coach
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
              <Button 
                onClick={openPopup}
                className="text-white px-8 py-4 shadow-lg button-hover"
                style={{ backgroundColor: '#829340', fontSize: '18px' }}
              >
                Start for Free
              </Button>
              <Button 
                onClick={openPopup}
                variant="outline"
                className="px-8 py-4 shadow-lg button-hover border-2"
                style={{ 
                  borderColor: '#829340', 
                  color: '#829340',
                  fontSize: '18px'
                }}
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-center" style={{ color: '#829340' }}>
              90-day satisfaction guarantee
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
