import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import careerFrameApp from "@assets/image_1750364343735.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: 'white' }}>
      {/* Geometric Square Grid - Top Left */}
      <div className="absolute top-12 left-4 pointer-events-none">
        <div className="grid grid-cols-12 gap-1">
          {/* Row 1 - Full width */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          
          {/* Row 2 */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="col-span-2"></div>
          
          {/* Row 3 */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="col-span-4"></div>
          
          {/* Row 4 */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="col-span-6"></div>
          
          {/* Row 5 */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="col-span-8"></div>
          
          {/* Row 6 */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="col-span-10"></div>
        </div>
      </div>

      {/* Geometric Square Grid - Bottom Right */}
      <div className="absolute bottom-12 right-4 pointer-events-none">
        <div className="grid grid-cols-14 gap-1">
          {/* Row 1 */}
          <div className="col-span-10"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          
          {/* Row 2 */}
          <div className="col-span-8"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          
          {/* Row 3 */}
          <div className="col-span-6"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          
          {/* Row 4 */}
          <div className="col-span-4"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          
          {/* Row 5 */}
          <div className="col-span-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          
          {/* Row 6 - Full width */}
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-2"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-3"></div>
          <div className="w-8 h-8 border-2 border-green-500 bg-white electric-square-1"></div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
            CareerFrame Finds the Right Roles for You — Then Guides You There
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
            Real Progress - Real People, <span className="pulsate-green" style={{ 
              fontWeight: '600'
            }}>6x cheaper</span> than the average career coach.
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
          <p className="text-sm mt-3" style={{ color: '#88A98F' }}>
            90-day satisfaction guarantee
          </p>
        </motion.div>
      </div>

    </section>
  );
}
