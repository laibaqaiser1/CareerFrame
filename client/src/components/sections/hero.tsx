import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="pt-20 pb-20 overflow-hidden" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: '#1E3A8A' }}>
            CareerFrame Finds the Right Roles for You — Then Helps You Get There
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
            CareerFrame helps real people make real progress. Forget endless job boards — we map your potential to opportunity and support you every step of the way — at a price that's 6x cheaper than the average career coach.
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
          <p className="text-sm mt-3 text-center" style={{ color: '#88A98F' }}>
            90-day satisfaction guarantee
          </p>
        </motion.div>
      </div>

    </section>
  );
}
