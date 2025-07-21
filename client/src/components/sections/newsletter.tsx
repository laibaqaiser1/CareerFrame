import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SoundButton } from "@/components/SoundButton";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Lock, Mail, Rocket, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      // Decrease spots counter
      const currentSpots = parseInt(localStorage.getItem('careerframe_spots_remaining') || '8');
      if (currentSpots > 0) {
        const newCount = currentSpots - 1;
        localStorage.setItem('careerframe_spots_remaining', newCount.toString());
        
        // Trigger storage event to update all components
        window.dispatchEvent(new StorageEvent('storage', {
          key: 'careerframe_spots_remaining',
          newValue: newCount.toString(),
          oldValue: currentSpots.toString()
        }));
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
    <>

      {/* Newsletter & Final CTA */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
          <div 
            ref={ref}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join the Waitlist - Be One of the First 10!
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive early access to CareerFrame when we launch. Plus, receive career insights and tips delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 text-gray-900 bg-white border-0 rounded-lg focus:ring-2 focus:ring-white"
                />
                <SoundButton 
                  soundType="submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-fresh-green hover:bg-green-600 text-white px-8 py-3 font-semibold rounded-lg"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </SoundButton>
              </div>
            </form>
            
            <p className="text-sm text-blue-200">
              <Lock className="inline h-4 w-4 mr-1" />
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
          

        </div>
      </section>
    </>
  );
}
