import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does CareerFrame's AI coaching work?",
    answer: "Our AI coaching system analyzes your profile, skills, and career goals to provide personalized guidance. It creates tailored action plans, identifies skill gaps, and offers step-by-step milestones to help you reach your dream career."
  },
  {
    question: "What's the difference between Free and Premium plans?",
    answer: "Free users get basic career assessment, 3 role recommendations, and community access. Premium unlocks unlimited AI coaching, complete milestone roadmaps, deep analysis, unlimited CVs, and 2x XP rewards."
  },
  {
    question: "How accurate is the skill gap analysis?",
    answer: "Our skill gap analysis uses industry data and job market trends to provide highly accurate assessments. It compares your current skills against requirements for your target roles and suggests specific learning resources."
  },
  {
    question: "Can I change my career path after starting?",
    answer: "Absolutely! CareerFrame is designed to adapt to your evolving goals. You can regenerate or reset your milestones and career pathway as your interests and aspirations change."
  },
  {
    question: "How long does it typically take to see results?",
    answer: "Many users see clarity and direction within the first week. Career transitions typically take 3-6 months depending on your goals, but you'll have a clear roadmap and support throughout the entire journey."
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