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
            Wake Up Excited for a Career That Fulfills You
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="lg:grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg mb-4 font-medium" style={{ color: '#6B7280' }}>
              CareerFrame is an AI-powered career development platform — not a job board
            </p>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
              Join early adopters shaping the future of personalised career growth — your transformation could start with just 15 minutes a day.
            </p>
            
            <div className="flex flex-col justify-center items-center lg:items-start gap-3 mb-8" style={{ color: '#6B7280' }}>
              <div className="flex items-center text-base">
                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#88A98F' }}></span>
                We're targeting meaningful career progress, including salary growth, by aligning you to roles that match your potential
              </div>
              <div className="flex items-center text-base">
                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#88A98F' }}></span>
                Our AI coach is built to fast-track your journey to a new career
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="text-white text-lg px-8 py-4 shadow-lg button-hover"
                style={{ backgroundColor: '#88A98F' }}
              >
                Start Your Career Plan — Free
              </Button>
            </div>
            <p className="text-sm mt-3 text-center lg:text-left" style={{ color: '#88A98F' }}>
              90-day satisfaction guarantee
            </p>
          </motion.div>

          {/* App Interface Image */}
          <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src={careerFrameApp} 
              alt="CareerFrame App Interface" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
