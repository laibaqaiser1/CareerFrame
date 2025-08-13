import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function WaitlistSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
          event_label: 'section_submission'
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Waitlist Section */}
          <div 
            className="text-center mx-auto"
            style={{
              backgroundColor: '#ECEEE4',
              width: '1216px',
              maxWidth: '100%',
              height: '388px',
              borderRadius: '16px',
              padding: '64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '32px'
            }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join the Waitlist - Be One of the First 10!
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Get exclusive early access to CareerFrame when we launch. Plus, receive career insights and tips delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-gray-300 h-12 px-4 text-base"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                style={{ 
                  backgroundColor: '#829340',
                  color: 'white'
                }}
                className="hover:opacity-90 transition-opacity px-8 h-12 text-base font-medium"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="h-4 w-4" />
              <span>90-day satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}