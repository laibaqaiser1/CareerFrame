import { Button } from "@/components/ui/button";
import { Play, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/Picture1.jpg";

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 items-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: '#5A6E22' }}>
              Wake Up Excited for a Career That Fulfills You
            </h1>
            <p className="text-lg text-white mb-2 font-medium">
              CareerFrame is an AI-powered career development platform — not a job board
            </p>
            <p className="text-xl text-white mb-4 leading-relaxed">
              Join early adopters shaping the future of personalised career growth — your transformation could start with just 15 minutes a day.
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-white">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-fresh-green rounded-full mr-2"></span>
                We're targeting meaningful career progress, including salary growth, by aligning you to roles that match your potential
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-fresh-green rounded-full mr-2"></span>
                Our AI coach is built to fast-track your journey to a new career
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-fresh-green hover:bg-fresh-green/90 text-white text-lg px-8 py-4 shadow-lg button-hover"
              >
                Start Your Career Plan — Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 button-hover"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
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
