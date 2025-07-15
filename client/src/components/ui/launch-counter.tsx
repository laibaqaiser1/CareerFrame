import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function LaunchCounter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [spotsRemaining, setSpotsRemaining] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate countdown to a specific launch date (adjust as needed)
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
      setIsLoading(false);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate real-time spot tracking (in production, this would connect to your backend)
  useEffect(() => {
    const fetchSpotCount = async () => {
      try {
        // In production, this would be a real API call
        // For now, we'll simulate with localStorage to persist across page refreshes
        // Set to 8 spots (2 people have already joined)
        const initialSpots = 8;
        setSpotsRemaining(initialSpots);
        localStorage.setItem('careerframe_spots_remaining', initialSpots.toString());
      } catch (error) {
        console.error('Error fetching spot count:', error);
      }
    };

    fetchSpotCount();

    // Listen for new signups (this would be a real-time connection in production)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'careerframe_spots_remaining' && e.newValue) {
        setSpotsRemaining(parseInt(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Function to decrement spots (called when someone signs up)
  const decrementSpots = () => {
    if (spotsRemaining > 0) {
      const newCount = spotsRemaining - 1;
      setSpotsRemaining(newCount);
      localStorage.setItem('careerframe_spots_remaining', newCount.toString());
    }
  };

  // Make this function available globally for the newsletter signup
  useEffect(() => {
    (window as any).decrementCareerFrameSpots = decrementSpots;
  }, [spotsRemaining]);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <Card className="bg-gradient-to-r from-navy to-navy/90 border-0 shadow-2xl">
        <CardContent className="p-6 lg:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Countdown Timer */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Clock className="h-6 w-6 text-fresh-green" />
                <h3 className="text-xl font-bold text-white">Launch Countdown</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-white">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-sm text-gray-300">
                Until CareerFrame launches to the public
              </p>
            </div>

            {/* Live User Counter */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Users className="h-6 w-6 text-fresh-green" />
                <h3 className="text-xl font-bold text-white">Early Access Spots</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <motion.div
                    key={spotsRemaining}
                    initial={{ scale: 1.2, color: '#10B981' }}
                    animate={{ scale: 1, color: '#FFFFFF' }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl lg:text-5xl font-bold text-white"
                  >
                    {spotsRemaining}
                  </motion.div>
                  <span className="text-2xl text-gray-300">/</span>
                  <div className="text-2xl text-gray-400">10</div>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((10 - spotsRemaining) / 10) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-fresh-green to-green-400 h-2 rounded-full"
                  />
                </div>
                
                <p className="text-sm text-gray-300">
                  <span className="text-fresh-green font-semibold">
                    {10 - spotsRemaining} joined
                  </span>
                  {' • '}
                  <span className="text-white font-semibold">
                    {spotsRemaining} spots left
                  </span>
                </p>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <p className="text-sm text-yellow-200">
                  {spotsRemaining <= 5 ? 'Almost full!' : 'Filling up fast!'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}