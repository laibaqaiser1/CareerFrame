import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

      toast({
        title: "Successfully subscribed!",
        description: "You'll receive weekly career insights and tips.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
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
      <section className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={ref}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Future Starts Now — Take the First Step Toward a Career You Love
            </h2>
            <Button 
              size="lg" 
              className="bg-fresh-green hover:bg-green-600 text-white px-12 py-6 text-xl font-semibold button-hover"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Join For FREE
            </Button>
            <p className="text-sm text-blue-200 mt-4">Start your career transformation today • Free, why wouldn't you try?</p>
          </div>
          

        </div>
      </section>
    </>
  );
}
