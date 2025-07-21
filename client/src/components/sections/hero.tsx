import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import { SoundButton } from "@/components/SoundButton";

export function HeroSection() {
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding" style={{ backgroundColor: 'var(--background-white)', paddingTop: '6rem' }}>

      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center">
          {/* Clean, Professional Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-center element-spacing" style={{ color: 'var(--primary-navy)' }}>
              Your Potential Is Bigger Than <br />Your Job Title — Let's Prove It
            </h1>
            
            <p className="text-lg text-center max-w-3xl mx-auto element-spacing" style={{ color: 'var(--text-secondary)' }}>
              Real Progress - Real People, <span className="pulsate-green text-xl lg:text-2xl" style={{ 
                fontWeight: '600'
              }}>6 x cheaper</span><br />
              than the average career coach
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <SoundButton 
                soundType="submit"
                onClick={openPopup}
                className="btn-primary"
              >
                Start for Free
              </SoundButton>
              <SoundButton 
                onClick={openPopup}
                className="btn-secondary"
              >
                Subscribe
              </SoundButton>
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
