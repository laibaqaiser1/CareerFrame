import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Sign Up & Complete Profile",
    description: "Sign up and complete your profile. Tell us about your skills, goals, and aspirations so we can create a personalized career plan just for you. You'll start your customized career journey with AI-powered career coaching and personalized insights that will shape your path to success.",
    color: "bg-red-500"
  },
  {
    number: 2,
    title: "Analysis & Roadmap Creation", 
    description: "We analyse your profile, identify skill gaps, and provide you with a tailored career roadmap. You'll receive actionable steps, milestone tracking, and a skill Gap Analysis aligned with your goals. Your AI career coach will guide you at every step, adapting to your progress and offering the support you need.",
    color: "bg-orange-500"
  },
  {
    number: 3,
    title: "Step Into Your Dream Career",
    description: "With CareerFrame, you'll gain the confidence, skills, and opportunities to step into the career you've always wanted. Whether it's advancing in your current field, switching to a new role, or unlocking higher-paying opportunities, you'll have the tools, insights, and support to make your dream career a reality.",
    color: "bg-fresh-green"
  }
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Your Journey from Confused to Confident
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            See how CareerFrame transforms career uncertainty into clear, actionable steps toward your dream job.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                <span className="text-white text-2xl font-bold">{step.number}</span>
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-soft-grey transform -translate-y-1/2 hidden lg:block" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
              <p className="text-black font-bold">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demo Teaser */}
        <div className={`text-center transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="bg-white shadow-lg inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-navy mb-4">See CareerFrame in Action</h3>
              <p className="text-soft-grey mb-6">Take a 2-minute interactive tour and discover how we'll transform your career journey.</p>
              <Button 
                size="lg" 
                className="bg-fresh-green hover:bg-fresh-green/90 text-white px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Interactive Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
