import { Button } from "@/components/ui/button";
import { Play, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: '#88A98F' }}>
              Wake Up Excited for a Career That Fulfills You
            </h1>
            <p className="text-lg mb-2 font-medium" style={{ color: '#88A98F' }}>
              CareerFrame is an AI-powered career development platform — not a job board
            </p>
            <p className="text-xl mb-4 leading-relaxed" style={{ color: '#88A98F' }}>
              Join early adopters shaping the future of personalised career growth — your transformation could start with just 15 minutes a day.
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8" style={{ color: '#88A98F' }}>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#88A98F' }}></span>
                We're targeting meaningful career progress, including salary growth, by aligning you to roles that match your potential
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#88A98F' }}></span>
                Our AI coach is built to fast-track your journey to a new career
              </div>
            </div>

            {/* 90-Day Guarantee Banner */}
            <div className="mb-8 p-4 rounded-lg border-2" style={{ borderColor: '#88A98F', backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#88A98F' }}>
                  90-Day Career Transformation Guarantee
                </h3>
                <p className="text-white mb-2">
                  If you don't land a new role or see significant career progress within 90 days, we'll refund your investment and provide an additional 90 days of coaching absolutely free.
                </p>
                <p className="text-white font-semibold">
                  No questions asked. We're that confident in our system.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="text-white text-lg px-8 py-4 shadow-lg button-hover"
                style={{ backgroundColor: '#88A98F' }}
              >
                Start Your Career Plan — Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 text-lg px-8 py-4 button-hover"
                style={{ borderColor: '#88A98F', color: '#88A98F' }}
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
