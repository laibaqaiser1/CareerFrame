import { Button } from "@/components/ui/button";
import { Play, Compass, CheckCircle, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

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
              Discover Your <span className="text-fresh-green">Dream Career</span> with AI Coaching
            </h1>
            <p className="text-xl text-soft-grey mb-8 leading-relaxed">
              From confused to confident. CareerFrame's intelligent platform guides you step-by-step from career uncertainty to your ideal role with personalized AI coaching and milestone-based progression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-fresh-green hover:bg-green-600 text-white text-lg px-8 py-4 shadow-lg"
              >
                <Compass className="mr-2 h-5 w-5" />
                Discover My Career Path
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center text-sm text-soft-grey space-x-6">
              <div className="flex items-center">
                <CheckCircle className="text-fresh-green mr-2 h-4 w-4" />
                Free to start
              </div>
              <div className="flex items-center">
                <Users className="text-fresh-green mr-2 h-4 w-4" />
                50,000+ career transformations
              </div>
              <div className="flex items-center">
                <Star className="text-fresh-green mr-2 h-4 w-4" />
                4.9/5 user rating
              </div>
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
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaborating on career development" 
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
                  <span className="font-semibold">AI Coach Active</span>
                </div>
              </motion.div>
              <motion.div 
                className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <div className="text-xs text-soft-grey">Career Match Score</div>
                <div className="text-lg font-bold text-navy">94%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
