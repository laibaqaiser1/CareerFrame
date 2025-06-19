import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

export function WhatToExpectSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Meet Your AI Coach",
      description: "Complete a 5-minute assessment to help us understand your goals, skills, and career preferences."
    },
    {
      step: "Step 2", 
      title: "Get Your Personalized Plan",
      description: "Receive a custom 90-day roadmap with specific milestones, skill development goals, and target roles."
    },
    {
      step: "Step 3",
      title: "Begin Your Journey",
      description: "Start progressing through your milestones with daily guidance, weekly check-ins, and community support."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            What to Expect After You Sign Up
          </h2>
          <p className="text-xl text-soft-grey">
            Your career transformation starts immediately — here's exactly what happens next
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6" style={{ backgroundColor: '#88A98F' }}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  </div>
                  
                  <p className="text-soft-grey text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8" style={{ color: '#88A98F' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="rounded-lg p-6 max-w-2xl mx-auto" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
            <CheckCircle className="h-8 w-8 mx-auto mb-4" style={{ color: '#88A98F' }} />
            <h3 className="text-lg font-semibold text-navy mb-2">
              No Credit Card Required to Start
            </h3>
            <p className="text-soft-grey">
              Begin with our free plan and upgrade when you're ready to accelerate your results. 
              Cancel anytime, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}