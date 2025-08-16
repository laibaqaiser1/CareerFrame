import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Plus, Minus, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "Is this just another online course or coaching program?",
    answer: "No. CareerFrame is a complete career transformation system that combines AI analysis, personalized coaching, and actionable roadmaps. You get specific next steps, not generic advice. 92% of our users land new roles within 90 days."
  },
  {
    question: "What if I don't see results in 90 days?",
    answer: "We offer a 90-day career transformation guarantee. If you don't land a new role or see significant career progress within 90 days, we'll refund your investment and provide an additional 90 days of coaching absolutely free."
  },
  {
    question: "How much time do I need to invest weekly?",
    answer: "Most successful users spend 3-5 hours per week on their career transformation. Our system is designed for busy professionals - you can make progress in 30-minute focused sessions during lunch breaks or evenings."
  },
  {
    question: "What credentials do your career coaches have?",
    answer: "Our coaches are certified career strategists with 10+ years of experience in recruitment, HR leadership, and career development. They've personally helped 1000+ professionals transition to higher-paying, more fulfilling roles."
  },
  {
    question: "How does the AI actually work?",
    answer: "Our AI analyzes 50+ data points including your skills, experience, market demand, salary trends, and career preferences. It creates a personalized roadmap showing exactly which skills to develop, companies to target, and steps to take each week."
  },
  {
    question: "Can you guarantee career outcomes?",
    answer: "We can't guarantee specific career outcomes like job placement or salary increases, as these depend on many external factors. However, we provide proven tools, personalized guidance, and skill development that our users report finding valuable. Our 90-day satisfaction guarantee ensures you're happy with the platform itself."
  }
];

export function FAQSection() {
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "-0.02em",
                textAlign: "center",
                color: "#141414"
              }}
            >
              Frequently asked questions
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Honest answers to the questions holding you back from taking action
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className={`${index < faqs.length - 1 ? 'border-b border-gray-200 pb-6 mb-6' : 'pb-6 border-b-0'}`}
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors py-0 flex justify-between items-center w-full group [&>svg]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                    <Plus className="h-3 w-3 text-gray-500 group-hover:text-gray-700 transition-colors group-data-[state=open]:hidden" />
                    <Minus className="h-3 w-3 text-gray-500 group-hover:text-gray-700 transition-colors group-data-[state=closed]:hidden" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 pb-0 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Waitlist Section */}
          <div 
            className="text-center mx-auto px-4 sm:px-6 md:px-8 w-full max-w-7xl"
            style={{
              backgroundColor: '#ECEEE4',
              minHeight: '388px',
              borderRadius: '16px',
              padding: '32px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '24px',
              boxSizing: 'border-box'
            }}
          >
            <div className="px-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Join the Waitlist - Be One of the First 10!
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Get exclusive early access to CareerFrame when we launch. Plus, receive career insights and tips delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row mx-auto mb-4 sm:mb-6 px-2 w-full justify-center items-center" style={{ gap: '6px' }}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 px-3 sm:px-4 text-sm sm:text-base rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none w-full sm:w-[331px]"
                style={{
                  height: '48px',
                  backgroundColor: '#ffffff !important',
                  background: '#ffffff !important',
                  backgroundImage: 'none !important',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                style={{ 
                  backgroundColor: '#829340',
                  color: 'white',
                  height: '48px'
                }}
                className="hover:opacity-90 transition-opacity px-6 sm:px-8 text-sm sm:text-base font-medium w-full sm:w-auto sm:min-w-[140px]"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 px-2">
              <Lock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-center">90-day satisfaction guarantee</span>
            </div>
          </div>
      </div>
    </section>
  );
}