import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Zap, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [spotsRemaining, setSpotsRemaining] = useState(487);
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
    const savedSpots = localStorage.getItem('careerframe_spots_remaining');
    if (savedSpots) {
      setSpotsRemaining(parseInt(savedSpots));
    } else {
      setSpotsRemaining(487);
      localStorage.setItem('careerframe_spots_remaining', '487');
    }

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
      if (spotsRemaining > 0) {
        const newCount = spotsRemaining - 1;
        setSpotsRemaining(newCount);
        localStorage.setItem('careerframe_spots_remaining', newCount.toString());
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
    <section className="py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 text-center">
        
        {/* Main Launch Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-8" style={{ 
            color: '#1E3A8A',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Launch day is soon approaching — <span style={{ color: '#88A98F' }}>we're letting in 500 people first</span> and you'll want to be one of them!
          </h1>
        </motion.div>

        {/* Countdown Timer and Spots Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-navy to-navy/90 border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Countdown Timer */}
                <div className="text-center">
                  <div className="grid grid-cols-4 gap-3 mb-6">
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
                        className="bg-white rounded-xl p-4 border-2 border-fresh-green"
                      >
                        <div className="text-3xl lg:text-4xl font-bold text-navy mb-1">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600 uppercase tracking-wide">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-white">
                    Until CareerFrame launches to the public
                  </p>
                </div>

                {/* Early Access Spots */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Early Access Spots</h3>
                  
                  <div className="bg-white rounded-xl p-8 mb-6 border-2 border-fresh-green">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <motion.div
                        key={spotsRemaining}
                        initial={{ scale: 1.2, color: '#88A98F' }}
                        animate={{ scale: 1, color: '#1E3A8A' }}
                        transition={{ duration: 0.3 }}
                        className="text-5xl lg:text-6xl font-bold text-navy"
                      >
                        {spotsRemaining}
                      </motion.div>
                      <span className="text-3xl text-gray-600">/</span>
                      <div className="text-3xl text-gray-600">500</div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((500 - spotsRemaining) / 500) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-fresh-green to-green-400 h-3 rounded-full"
                      />
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-4">
                      <span className="text-fresh-green font-semibold">
                        {500 - spotsRemaining} joined
                      </span>
                      {' • '}
                      <span className="text-navy font-semibold">
                        {spotsRemaining} spots left
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <p className="text-lg text-yellow-200">
                      {spotsRemaining <= 50 ? 'Almost full!' : 'Filling up fast!'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Waitlist Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <Card className="bg-white border-2 border-fresh-green/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="h-6 w-6 text-fresh-green" />
                <h3 className="text-xl font-bold text-navy">Join the Waitlist</h3>
              </div>
              
              <form onSubmit={handleWaitlistSignup}>
                <div className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-fresh-green focus:border-fresh-green"
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-fresh-green hover:bg-green-600 text-white px-8 py-3 font-semibold rounded-lg text-lg"
                  >
                    {isSubmitting ? "Securing your spot..." : "Secure My Spot"}
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Get notified when we launch + exclusive early access
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}