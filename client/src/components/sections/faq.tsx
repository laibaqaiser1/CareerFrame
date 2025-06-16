import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    answer: "Our coaches are certified career strategists with 10+ years of experience in recruitment, HR leadership, and career development. They've personally helped 500+ professionals transition to higher-paying, more fulfilling roles."
  },
  {
    question: "How does the AI actually work?",
    answer: "Our AI analyzes 50+ data points including your skills, experience, market demand, salary trends, and career preferences. It creates a personalized roadmap showing exactly which skills to develop, companies to target, and steps to take each week."
  },
  {
    question: "Can you guarantee I'll get a salary increase?",
    answer: "While we can't guarantee specific outcomes (no legitimate service can), our users see an average salary increase of 31% within 6 months. We focus on building valuable skills and positioning you for roles that pay what you're worth."
  }
];

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            FAQs
          </h2>
          <p className="text-xl text-soft-grey">
            Common questions about transforming your career with CareerFrame
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-fresh-green transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-soft-grey pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Video Links Section */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-navy mb-6">Learn More About CareerFrame</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
              onClick={() => window.open('https://youtu.be/trfDoGoXNsE?si=tuiRsI3GMOAyux2d', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Platform Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white"
              onClick={() => window.open('https://youtu.be/WgXU7XAZYmQ?si=cffhYgjeogzWe1bQ', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}