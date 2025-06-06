import { Button } from "@/components/ui/button";
import { Play, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/Picture1.jpg";

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Imagine Waking Up Excited for a Career That <span className="text-fresh-green">Truly Fulfils You</span> — We'll Help You Get There
            </h1>
            <p className="text-xl text-soft-grey mb-8 leading-relaxed">
              With CareerFrame's personalized coaching, powerful insights, and a clear roadmap, we'll help you unlock your true potential, bridge skill gaps, and step into a career that inspires and drives you every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-fresh-green hover:bg-green-600 text-white text-lg px-8 py-4 shadow-lg button-hover"
              >
                <Heart className="mr-2 h-5 w-5 fill-red-500 text-red-500" />
                Join For FREE
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white text-lg px-8 py-4 button-hover"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              <img 
                src={heroImage}
                alt="Confident professional with strategic planning materials in urban setting" 
                className="rounded-xl shadow-2xl w-full h-auto animate-float" 
              />
              {/* Overlay elements */}
              <motion.div 
                className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 bg-fresh-green rounded-full mr-2"></div>
                  <span className="font-semibold">Career Aligned</span>
                </div>
              </motion.div>
              <motion.div 
                className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <div className="text-xs text-soft-grey">Fulfillment Score</div>
                <div className="text-lg font-bold text-navy">98%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Problem/Solution Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                😔
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Feeling Stuck</h3>
              <p className="text-soft-grey">
                Feeling stuck in a job that doesn't excite you? Every day feels like you're not reaching your full potential, just going through the motions without fulfilment.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                ⏰
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Missing Opportunities</h3>
              <p className="text-soft-grey">
                The longer you stay in that job, the more you miss out on the opportunities that could change your life. The routine becomes draining, and the fear of stepping into something new only holds you back.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-fresh-green/10 text-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Break Free with CareerFrame</h3>
              <p className="text-soft-grey">
                CareerFrame is here to help you break free. With personalized coaching, skill gap analysis, and tailored career paths, we'll guide you to a job that excites and motivates you every day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
