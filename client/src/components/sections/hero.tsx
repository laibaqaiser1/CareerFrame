import { Button } from "@/components/ui/button";
import { Play, Heart, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import careerVrImage from "@assets/Screenshot 2025-05-17 182855.png";
import xpLeaderboardImage from "@assets/XP & Reward Interface.png";
import logoImage from "@assets/Logo Clear background.png";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoImage} alt="CareerFrame" className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold text-white">CAREERFRAME</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
              <Button className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-lg border border-green-600">
                START A PROJECT
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                <span className="text-green-400">Trusted AI Partners</span> for your{' '}
                <span className="text-green-400">Career Development</span> journey
              </h1>
              
              <div className="max-w-md">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We help ambitious professionals and students build highly personalized career paths — enabling them to do more in less time.
                </p>
                
                <Button className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg border border-green-600 text-lg">
                  START YOUR JOURNEY
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Device Mockups */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Main Desktop Browser */}
              <div className="relative z-10">
                <div className="bg-gray-800 rounded-t-lg p-2 border border-gray-700">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src={xpLeaderboardImage} 
                      alt="CareerFrame XP & Leaderboard Interface" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Phone - Bottom Right */}
              <motion.div 
                className="absolute -bottom-16 -right-8 w-40 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="bg-gray-900 rounded-3xl p-1 border border-gray-700">
                  <div className="bg-black rounded-2xl p-1">
                    <div className="bg-white rounded-xl overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-b-lg z-10"></div>
                      <img 
                        src={careerVrImage} 
                        alt="CareerFrame Mobile Interface" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tablet - Left Side */}
              <motion.div 
                className="absolute -left-12 top-20 w-32 z-15"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="bg-gray-800 rounded-lg p-1 border border-gray-700">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src={xpLeaderboardImage} 
                      alt="CareerFrame Tablet View" 
                      className="w-full h-24 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Laptop - Top Right */}
              <motion.div 
                className="absolute -top-8 right-4 w-48 z-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="bg-gray-800 rounded-t-lg p-1 border border-gray-700">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src={careerVrImage} 
                      alt="CareerFrame Laptop View" 
                      className="w-full h-28 object-cover"
                    />
                  </div>
                </div>
                <div className="bg-gray-600 h-1 rounded-b-lg"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-16 h-16 border-2 border-green-400 rounded-full flex items-center justify-center">
          <div className="text-green-400 text-xs font-bold transform rotate-90">
            EXPLORE OUR WORK
          </div>
        </div>
        <ArrowDown className="text-green-400 mx-auto mt-2 animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
