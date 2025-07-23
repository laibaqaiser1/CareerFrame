import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SoundButton } from "@/components/SoundButton";
import { useToast } from "@/hooks/use-toast";
import avatar1 from "@assets/Avatar_1753221030644.png";
import avatar2 from "@assets/Avatar (1)_1753221039419.png";
import avatar3 from "@assets/Avatar (2)_1753221045680.png";

// Preload background images for reliable loading across all devices
const preloadImages = () => {
  if (typeof window !== 'undefined') {
    const imagesToPreload = [
      '/Pattern.png',
      '/TopLeftCornerFrame.png', 
      '/BottomRightCornerFrame.png',
      '/careerframe-pattern.svg'
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      // Add to browser cache
      img.onload = () => console.log(`Preloaded: ${src}`);
      img.onerror = () => console.warn(`Failed to preload: ${src}`);
    });
  }
};

export function ComingSoonPage() {
  const { scrollY } = useScroll();
  
  // Transform scroll position to frame positions
  const topLeftX = useTransform(scrollY, [0, 500], [0, -100]);
  const topLeftY = useTransform(scrollY, [0, 500], [0, -80]);
  const bottomRightX = useTransform(scrollY, [0, 500], [0, 100]);
  const bottomRightY = useTransform(scrollY, [0, 500], [0, 80]);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [spotsRemaining, setSpotsRemaining] = useState(7);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Calculate countdown to launch date and preload images
  useEffect(() => {
    // Preload background images on component mount
    preloadImages();
    
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
      className="min-h-screen flex flex-col relative overflow-hidden coming-soon-background motion-safe"
      style={{
        background: "linear-gradient(303.01deg, #FFF1F0 0%, #FFFAF1 33.33%, #E8FAF6 66.67%, #EAF6FD 100%)",
        marginTop: '-128px',
        paddingTop: '128px',
        // Ensure background always displays
        minHeight: '100vh',
        width: '100%',
        // Force background to display immediately
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      {/* Pattern Background - Right Side Only with reliable loading */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-1/2 h-full pattern-background"
        style={{
          backgroundImage: "url(/Pattern.png), linear-gradient(45deg, rgba(255,241,240,0.1) 0%, rgba(255,250,241,0.1) 100%)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "80% auto, cover", // Made pattern smaller on mobile
          backgroundPosition: "right center, center",
          // Fallback pattern in case main pattern doesn't load
          backgroundColor: 'rgba(255,250,241,0.05)',
          willChange: 'transform'
        }}
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.backgroundImage = "linear-gradient(45deg, rgba(255,241,240,0.2) 0%, rgba(255,250,241,0.2) 100%)";
        }}
      />
      
      {/* Animated Corner Frame - Top Left with reliable loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="fixed top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
        style={{
          backgroundImage: "url(/TopLeftCornerFrame.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          zIndex: 1,
          x: topLeftX,
          y: topLeftY,
          backgroundColor: 'transparent',
          willChange: 'transform'
        }}
      />
      
      {/* Animated Corner Frame - Bottom Right with reliable loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="fixed bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
        style={{
          backgroundImage: "url(/BottomRightCornerFrame.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          zIndex: 1,
          x: bottomRightX,
          y: bottomRightY,
          backgroundColor: 'transparent',
          willChange: 'transform'
        }}
      />
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 flex-1 flex flex-col relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        
        {/* Main Launch Message - Mobile Responsive */}
        <div className="flex-1 flex items-center justify-center py-6 sm:py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-800 mb-4 leading-tight px-2" style={{ 
              fontFamily: 'Inter',
              letterSpacing: '-0.02em'
            }}>
              Launch day is soon approaching
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-6 px-4 max-w-3xl mx-auto" style={{ 
              fontFamily: 'Inter',
              lineHeight: '1.5'
            }}>
              we're letting in only 10 people first and you'll want to be one of them!
            </p>

            {/* Countdown Timer - Mobile Responsive */}
            <div className="flex justify-center items-center mb-8 gap-1 sm:gap-2 px-4">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Sec' }
                ].map((item, index) => (
                  <React.Fragment key={item.label}>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex flex-col items-center justify-center shadow-md bg-white border border-gray-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-xl p-2">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-none" style={{ 
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                          }}>
                          {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-xs md:text-sm font-medium uppercase tracking-wide mt-1 text-gray-600">
                          {item.label}
                        </div>
                      </div>
                    </motion.div>
                    {index < 3 && (
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600 mx-1 sm:mx-2">
                        :
                      </div>
                    )}
                  </React.Fragment>
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
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-md mx-auto px-4"
            >
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                />
                <SoundButton 
                  soundType="submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white px-4 py-3 sm:px-6 sm:py-4 font-semibold rounded-lg text-base sm:text-lg transition-all duration-200 hover:scale-[1.02]"
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
              
              <div className="flex justify-center items-center mt-6 gap-2 flex-wrap">
                <div className="flex -space-x-2">
                  <img src={avatar1} alt="User avatar" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                  <img src={avatar2} alt="User avatar" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                  <img src={avatar3} alt="User avatar" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <span className="text-xs sm:text-sm ml-2 flex items-center gap-1 sm:gap-2">
                  <span className="font-semibold" style={{ color: '#829340' }}>3 joined</span>
                  <span className="text-gray-400">|</span>
                  <span className="font-semibold" style={{ color: '#667085' }}>5 spots left</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}