import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Career Journey Road - CSS/HTML approach */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Road segments using CSS borders and positioning */}
        <motion.div
          className="absolute"
          style={{
            left: '8%',
            bottom: '15%',
            width: '200px',
            height: '200px',
            borderRadius: '50% 50% 50% 50%',
            border: '40px solid #9CB98A',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            transform: 'rotate(45deg)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.div
          className="absolute"
          style={{
            left: '30%',
            top: '35%',
            width: '300px',
            height: '100px',
            borderRadius: '50px',
            backgroundColor: '#9CB98A',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        
        <motion.div
          className="absolute"
          style={{
            right: '12%',
            top: '25%',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '40px solid #9CB98A',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            transform: 'rotate(-45deg)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />

        {/* White dashed lines overlay */}
        <motion.div
          className="absolute"
          style={{
            left: '12%',
            bottom: '25%',
            width: '20px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transform: 'rotate(45deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />
        
        <motion.div
          className="absolute"
          style={{
            left: '16%',
            bottom: '35%',
            width: '20px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transform: 'rotate(35deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        />

        <motion.div
          className="absolute"
          style={{
            left: '45%',
            top: '40%',
            width: '25px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '2px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        />

        <motion.div
          className="absolute"
          style={{
            left: '55%',
            top: '39%',
            width: '25px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '2px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        />

        <motion.div
          className="absolute"
          style={{
            right: '20%',
            top: '40%',
            width: '20px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transform: 'rotate(-35deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        />

        <motion.div
          className="absolute"
          style={{
            right: '16%',
            top: '50%',
            width: '20px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transform: 'rotate(-45deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        />

        {/* Milestone markers */}
        <motion.div
          className="absolute"
          style={{
            left: '22%',
            bottom: '45%',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: '#1F3A93',
            border: '3px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
        />

        <motion.div
          className="absolute"
          style={{
            left: '50%',
            top: '35%',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: '#1F3A93',
            border: '3px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.4 }}
        />

        <motion.div
          className="absolute"
          style={{
            right: '22%',
            top: '45%',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: '#1F3A93',
            border: '3px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.6 }}
        />
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
