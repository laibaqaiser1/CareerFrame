import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Clock, Users, TrendingUp, Star, Award } from "lucide-react";

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
    <section id="what-to-expect" className="py-16 relative overflow-hidden" style={{ backgroundColor: '#e6e8f5' }}>
      {/* Creative Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#88A98F" strokeWidth="1" opacity="0.3"/>
            </pattern>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#88A98F" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#88A98F" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)"/>
          <circle cx="100" cy="100" r="60" fill="url(#gradient)"/>
          <circle cx="300" cy="150" r="40" fill="url(#gradient)"/>
          <circle cx="350" cy="300" r="50" fill="url(#gradient)"/>
          <circle cx="50" cy="300" r="35" fill="url(#gradient)"/>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full opacity-40" style={{ backgroundColor: '#88A98F' }}></div>
      <div className="absolute top-20 right-20 w-6 h-6 rounded-full opacity-30" style={{ backgroundColor: '#88A98F' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full opacity-50" style={{ backgroundColor: '#88A98F' }}></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 rounded-full opacity-35" style={{ backgroundColor: '#88A98F' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            What to Expect After You{" "}
            <span className="text-3xl lg:text-4xl font-bold">
              Sign Up
            </span>
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

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
              <Users className="h-8 w-8" style={{ color: '#88A98F' }} />
            </div>
            <div className="text-3xl font-bold text-navy mb-2">12,000+</div>
            <div className="text-lg font-semibold text-navy mb-1">Future Success Stories</div>
            <div className="text-sm text-soft-grey">CareerFrame was created to help people land the roles they deserve — and you're next.</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
              <TrendingUp className="h-8 w-8" style={{ color: '#88A98F' }} />
            </div>
            <div className="text-3xl font-bold text-navy mb-2">72%</div>
            <div className="text-lg font-semibold text-navy mb-1">Reported Improved Career Confidence</div>
            <div className="text-sm text-soft-grey">After creating a personalised roadmap with CareerFrame</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
              <Star className="h-8 w-8" style={{ color: '#88A98F' }} />
            </div>
            <div className="text-3xl font-bold text-navy mb-2">Rate Us</div>
            <div className="text-lg font-semibold text-navy mb-1">Be the first to rate us</div>
            <div className="text-sm text-soft-grey">Your voice matters</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
              <Award className="h-8 w-8" style={{ color: '#88A98F' }} />
            </div>
            <div className="text-3xl font-bold text-navy mb-2">90 Days</div>
            <div className="text-lg font-semibold text-navy mb-1">Our goal: career breakthroughs</div>
            <div className="text-sm text-soft-grey">CareerFrame is built for speed — helping you move fast with a clear, achievable plan.</div>
          </div>
        </div>
      </div>
    </section>
  );
}