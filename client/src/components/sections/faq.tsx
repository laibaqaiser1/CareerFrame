import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const { ref, isVisible } = useScrollAnimation();
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Collapsible open={isFAQOpen} onOpenChange={setIsFAQOpen}>
            <CollapsibleTrigger className="w-full text-center mb-8">
              <div className="flex items-center justify-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                  Your Questions Answered
                </h2>
                <ChevronDown className={`h-8 w-8 text-navy transition-transform duration-300 ${isFAQOpen ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-xl text-soft-grey mt-4">
                Honest answers to the questions holding you back from taking action
              </p>
            </CollapsibleTrigger>
            
            <CollapsibleContent className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="bg-white shadow-lg mt-8">
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
            </CollapsibleContent>
          </Collapsible>
        </div>


      </div>
    </section>
  );
}