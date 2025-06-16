import { Button } from "@/components/ui/button";
import { Play, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import milestoneTracker from "@assets/image_1749238417328.png";
import leaderboard from "@assets/image_1749238465998.png";
import careerCoach from "@assets/image_1749238613692.png";
import xpInterface from "@assets/XP & Reward Interface.png";

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-t from-black via-neutral-900 to-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#B1D5C8] mb-4 leading-tight">
              Wake Up Excited for a Career That Fulfills You
            </h1>
            <p className="text-lg text-[#B1D5C8] mb-2 font-medium opacity-90">
              CareerFrame is an AI-powered career development platform — not a job board
            </p>
            <p className="text-xl text-[#B1D5C8] mb-4 leading-relaxed opacity-80">
              Join 12,000+ professionals who've transformed their careers in just 15 minutes a day
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center text-sm text-[#B1D5C8]">
                <span className="w-2 h-2 bg-[#B1D5C8] rounded-full mr-2"></span>
                Average salary increase: 31%
              </div>
              <div className="flex items-center text-sm text-[#B1D5C8]">
                <span className="w-2 h-2 bg-[#B1D5C8] rounded-full mr-2"></span>
                92% land new role within 90 days
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-[#B1D5C8] hover:bg-[#B1D5C8]/90 text-black text-lg px-8 py-4 shadow-lg button-hover"
              >
                Start Your Career Plan — Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#B1D5C8] text-[#B1D5C8] hover:bg-[#B1D5C8] hover:text-black text-lg px-8 py-4 button-hover"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative h-[600px] w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Device Mockup Stack */}
            <div className="relative w-full h-full perspective-1000">
              
              {/* Back layer: MacBook (z-index: 10) */}
              <motion.div 
                className="absolute inset-0 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="w-full max-w-[800px] mx-auto mt-8">
                  {/* MacBook Frame */}
                  <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl transform perspective-1000 rotateX-5">
                    <div className="bg-black rounded-lg overflow-hidden aspect-[16/10]">
                      <img 
                        src={milestoneTracker}
                        alt="CareerFrame Milestone Tracker"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* MacBook Base */}
                  <div className="bg-gray-700 h-6 rounded-b-2xl shadow-lg transform perspective-1000 rotateX-5"></div>
                </div>
              </motion.div>

              {/* Middle-left layer: Tablet (z-index: 20) */}
              <motion.div 
                className="absolute left-0 top-12 z-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="w-[500px]">
                  {/* Tablet Frame */}
                  <div className="bg-gray-300 rounded-2xl p-3 shadow-2xl drop-shadow-lg">
                    <div className="bg-black rounded-xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={leaderboard}
                        alt="CareerFrame Leaderboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Middle-right layer: Smartphone (z-index: 20) */}
              <motion.div 
                className="absolute right-8 top-20 z-20"
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="w-[300px]">
                  {/* Phone Frame */}
                  <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl drop-shadow-lg">
                    <div className="bg-black rounded-2xl overflow-hidden aspect-[9/19.5]">
                      <img 
                        src={careerCoach}
                        alt="CareerFrame Career Coach"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Front corners: Smartwatches (z-index: 30) */}
              <motion.div 
                className="absolute left-4 bottom-8 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.4 }}
              >
                <div className="w-[120px]">
                  {/* Left Watch Frame */}
                  <div className="bg-gray-800 rounded-2xl p-2 shadow-xl">
                    <div className="bg-black rounded-xl overflow-hidden aspect-square">
                      <img 
                        src={xpInterface}
                        alt="XP Tracking"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute right-4 bottom-8 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.4 }}
              >
                <div className="w-[120px]">
                  {/* Right Watch Frame */}
                  <div className="bg-gray-800 rounded-2xl p-2 shadow-xl">
                    <div className="bg-black rounded-xl overflow-hidden aspect-square">
                      <img 
                        src={xpInterface}
                        alt="Milestone Stats"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
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
