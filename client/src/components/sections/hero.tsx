import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'white' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Build Apps 3× Faster. Launch in Weeks
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
            We help start-ups launch high–quality apps and websites faster, at a fraction of the cost.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="text-white text-lg px-8 py-4 shadow-lg button-hover"
              style={{ backgroundColor: '#88A98F' }}
            >
              Start Your Project — Free
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
