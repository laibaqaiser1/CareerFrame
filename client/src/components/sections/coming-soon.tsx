import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SoundButton } from "@/components/SoundButton";
import { useToast } from "@/hooks/use-toast";
// Removed AnimatedBackground import
// Removed unused geometric pattern imports
// No need to import since we're using public assets directly

export function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [spotsRemaining, setSpotsRemaining] = useState(8);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Calculate countdown to launch date
  useEffect(() => {
    const launchDate = new Date('2025-08-18T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Manage spot tracking
  useEffect(() => {
    // Force reset localStorage and set to 8 spots (2 people have already joined)
    localStorage.clear(); // Clear all localStorage
    localStorage.setItem('careerframe_spots_remaining', '8');
    setSpotsRemaining(8);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'careerframe_spots_remaining' && e.newValue) {
        setSpotsRemaining(parseInt(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      // Decrease spots counter
      const currentSpots = parseInt(localStorage.getItem('careerframe_spots_remaining') || '8');
      if (currentSpots > 0) {
        const newCount = currentSpots - 1;
        setSpotsRemaining(newCount);
        localStorage.setItem('careerframe_spots_remaining', newCount.toString());
        
        // Trigger storage event to update all components
        window.dispatchEvent(new StorageEvent('storage', {
          key: 'careerframe_spots_remaining',
          newValue: newCount.toString(),
          oldValue: currentSpots.toString()
        }));
      }
      
      // Track waitlist signup in Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'waitlist_signup', {
          event_category: 'engagement',
          event_label: 'email_submission'
        });
      }
      
      toast({
        title: "Welcome to the waitlist!",
        description: "You've secured your spot! We'll notify you when we launch.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Failed to join waitlist",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col relative pt-32 overflow-hidden"
      style={{
        background: "linear-gradient(303.01deg, #FFF1F0 0%, #FFFAF1 33.33%, #E8FAF6 66.67%, #EAF6FD 100%)"
      }}
    >
      {/* Pattern Background - Right Side Only */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          backgroundImage: "url(/Pattern.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right center"
        }}
      />
      
      {/* Animated Corner Frame - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ 
          opacity: 0.8, 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 1.5, 
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 2,
          transition: { duration: 0.3 }
        }}
        className="absolute top-16 left-0 w-96 h-96 lg:w-[500px] lg:h-[500px]"
        style={{
          backgroundImage: "url(/TopLeftCornerFrame.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left"
        }}
      />
      
      {/* Animated Corner Frame - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
        animate={{ 
          opacity: 0.8, 
          scale: 1, 
          rotate: 0,
          y: [0, 10, 0],
          x: [0, -5, 0]
        }}
        transition={{ 
          duration: 1.5, 
          delay: 0.8,
          type: "spring",
          stiffness: 100,
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: -2,
          transition: { duration: 0.3 }
        }}
        className="absolute bottom-0 right-0 w-96 h-96 lg:w-[500px] lg:h-[500px]"
        style={{
          backgroundImage: "url(/BottomRightCornerFrame.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right"
        }}
      />
      <div className="w-full max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 flex-1 flex flex-col relative z-10">
        
        {/* Main Launch Message - Perfectly centered */}
        <div className="flex-1 flex items-center justify-center py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto px-4"
          >
            <h1 style={{ 
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '60px',
              lineHeight: '72px',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#1F2937',
              marginBottom: '16px'
            }}>
              Launch day is soon approaching
            </h1>
            <p style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#6B7280',
              marginBottom: '24px'
            }}>
              we're letting in only 10 people first and you'll want to be one of them!
            </p>
          </motion.div>
        </div>

        {/* Combined Countdown Timer, Spots Counter, and Signup - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 sm:gap-8 mb-12">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Sec' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center relative"
                  >
                    <div 
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
                      style={{ 
                        color: '#1F2937',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div 
                      className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider"
                      style={{ color: '#6B7280' }}
                    >
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold mb-8"
                style={{ 
                  color: '#1F2937',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                Subscribe to enter the waitlist
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                />
                <SoundButton 
                  soundType="submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white px-6 py-4 font-semibold rounded-lg text-lg transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: '#829340',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {isSubmitting ? "Securing..." : "Secure My Spot"}
                </SoundButton>
              </form>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Get notified when we launch + exclusive early access
              </p>
              
              <div className="flex justify-center items-center mt-6 gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  <span className="font-semibold">{10 - spotsRemaining} joined</span> · <span className="text-green-600 font-semibold">{spotsRemaining} spots left</span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}