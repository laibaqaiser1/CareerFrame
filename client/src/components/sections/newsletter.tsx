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
      {/* Partner Logos */}
      <section className="py-12 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-soft-grey font-medium">Trusted by professionals at leading companies</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'DesignStudio', 'Analytics Pro', 'StartupHub', 'InnovateCo'].map((company, index) => (
              <div key={index} className="bg-gray-300 w-32 h-12 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Final CTA */}
      <section className="py-20 gradient-navy text-white">
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
              className="bg-fresh-green hover:bg-green-600 text-white px-12 py-6 text-xl font-semibold"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Join For FREE
            </Button>
            <p className="text-sm text-blue-200 mt-4">Start your career transformation today • No credit card required</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold mb-6">
                Ready to Transform Your Career?
              </h3>
              <p className="text-blue-100 text-lg mb-8">
                Join thousands of professionals who've discovered their dream careers with CareerFrame's AI-powered guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-fresh-green hover:bg-green-600 text-white px-8 py-4 flex-1"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Career Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 flex-1"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Get Weekly Career Insights</h3>
                  <p className="text-blue-100 mb-6">
                    Subscribe to receive job market trends, skill development tips, and career success strategies.
                  </p>
                  
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input 
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white text-navy placeholder-gray-500 border-0"
                      required
                    />
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-fresh-green hover:bg-green-600 text-white py-3"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                    </Button>
                  </form>
                  
                  <p className="text-blue-200 text-sm mt-4 text-center">
                    <Lock className="inline mr-1 h-3 w-3" />
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
