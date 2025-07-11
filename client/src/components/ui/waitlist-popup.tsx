import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Lock, Mail, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
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
          event_label: 'popup_submission'
        });
      }
      
      toast({
        title: "Welcome to the waitlist!",
        description: "You've secured your spot! We'll notify you when we launch.",
      });
      
      setEmail("");
      onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold" style={{ color: '#1E3A8A' }}>
            Join the Waitlist
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center mb-6">
          <p className="text-lg mb-2" style={{ color: '#1E3A8A' }}>
            Be One of the First 10!
          </p>
          <p className="text-sm text-gray-600">
            Get exclusive early access to CareerFrame when we launch
          </p>
        </div>

        <form onSubmit={handleWaitlistSignup} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 py-3 text-gray-900 border-gray-300 focus:ring-2 focus:ring-fresh-green"
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 font-semibold text-white"
            style={{ backgroundColor: '#88A98F' }}
          >
            {isSubmitting ? "Joining..." : "Secure My Spot"}
          </Button>
        </form>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          <Lock className="inline h-3 w-3 mr-1" />
          We respect your privacy. Unsubscribe anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
}