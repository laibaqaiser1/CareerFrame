import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Zap, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { AnimatedBackground } from "@/components/ui/animated-background";

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
    const launchDate = new Date('2025-07-15T00:00:00').getTime();
    
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
    <section className="min-h-screen bg-white flex flex-col relative">
      <AnimatedBackground />
      <div className="w-full max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex-1 flex flex-col relative z-10">
        
        {/* Main Launch Message - Perfectly centered */}
        <div className="flex-1 flex items-center justify-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl mx-auto" style={{ 
              color: '#000000',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              lineHeight: '1.3',
              letterSpacing: '-0.01em'
            }}>
              Launch day is soon approaching — <span style={{ color: '#829340' }}>we're letting in only 10 people first</span> and you'll want to be one of them!
            </h1>
          </motion.div>
        </div>

        {/* Combined Countdown Timer, Spots Counter, and Signup - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-12"
        >
          <Card className="bg-gradient-to-r from-navy to-navy/90 border-0 shadow-2xl max-w-5xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                
                {/* Countdown Timer */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#1E3A8A' }}>Launch Countdown</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { value: 'TBC', label: 'Days' },
                      { value: 'TBC', label: 'Hours' },
                      { value: 'TBC', label: 'Minutes' },
                      { value: 'TBC', label: 'Seconds' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white rounded-lg p-3 border-2 border-fresh-green"
                      >
                        <div className="text-xl lg:text-2xl font-bold text-navy mb-1">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-white">
                    Until CareerFrame launches
                  </p>
                </div>

                {/* Early Access Spots */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#1E3A8A' }}>Early Access Spots</h3>
                  
                  <div className="bg-white rounded-lg p-6 mb-4 border-2 border-fresh-green">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <motion.div
                        key={spotsRemaining}
                        initial={{ scale: 1.2, color: '#829340' }}
                        animate={{ scale: 1, color: '#1E3A8A' }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl lg:text-5xl font-bold text-navy"
                      >
                        {spotsRemaining}
                      </motion.div>
                      <span className="text-2xl text-gray-600">/</span>
                      <div className="text-2xl text-gray-600">10</div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((10 - spotsRemaining) / 10) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-fresh-green to-green-400 h-2 rounded-full"
                      />
                    </div>
                    
                    <p className="text-sm text-gray-700">
                      <span className="text-fresh-green font-semibold">
                        {10 - spotsRemaining} joined
                      </span>
                      {' • '}
                      <span className="text-navy font-semibold">
                        {spotsRemaining} spots left
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <p className="text-sm text-orange-200">
                      {spotsRemaining <= 5 ? 'Almost full!' : 'Filling up fast!'}
                    </p>
                  </div>
                </div>

                {/* Waitlist Signup */}
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 border-2 border-fresh-green">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Mail className="h-5 w-5 text-fresh-green" />
                      <h3 className="text-lg font-bold text-navy">Join the Waitlist</h3>
                    </div>
                    
                    <form onSubmit={handleWaitlistSignup}>
                      <div className="flex flex-col gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="px-3 py-2 text-gray-900 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-fresh-green focus:border-fresh-green text-sm"
                        />
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-fresh-green hover:bg-green-600 text-white px-6 py-2 font-semibold rounded-lg text-sm"
                        >
                          {isSubmitting ? "Securing..." : "Secure My Spot"}
                        </Button>
                      </div>
                    </form>
                    
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      Get notified when we launch + exclusive early access
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}