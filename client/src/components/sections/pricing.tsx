import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Freemium Plan",
    price: 0,
    currency: "£",
    description: "Your first steps into CareerFrame - perfect for exploring the basics",
    features: [
      { text: "Personalized Career Coaching", included: true },
      { text: "Basic Skill Gap Analysis", included: true },
      { text: "AI-Generated CV", included: true },
      { text: "AI-Generated Cover Letter", included: true },
      { text: "Explore Roles", included: true },
      { text: "Team Leaderboard", included: true },
      { text: "Team Networking", included: true },
      { text: "XP Points & Rewards", included: true }
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Premium Plan", 
    price: 29,
    currency: "£",
    description: "Your career, accelerated - unlock the full power of CareerFrame",
    features: [
      { text: "Everything in Freemium, plus:", included: true, highlight: true },
      { text: "Tailored Career Pathways", included: true },
      { text: "Deep Skill Gap Analysis", included: true },
      { text: "Unlimited AI CV & Cover Letters", included: true },
      { text: "Explore Roles (Unlimited)", included: true },
      { text: "Full Team Leaderboard Access", included: true },
      { text: "Industry-Specific Team Networking", included: true },
      { text: "Double XP", included: true },
      { text: "Career Alignment & Role Insights", included: true }
    ],
    cta: "Get Started",
    popular: true
  }
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Choose Your Career Acceleration Plan
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Start free and upgrade when you're ready to unlock your full career potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${plan.popular ? 'gradient-green text-white border-2 border-fresh-green' : 'bg-white border-2 border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-fresh-green px-4 py-2 font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    £{plan.price}
                    <span className={`text-lg font-normal ${plan.popular ? 'opacity-80' : 'text-soft-grey'}`}>
                      /month
                    </span>
                  </div>
                  <p className={plan.popular ? 'opacity-90' : 'text-soft-grey'}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className={`mr-3 h-5 w-5 ${feature.highlight ? 'text-yellow-400' : plan.popular ? 'text-white' : 'text-fresh-green'}`} />
                      ) : (
                        <X className="mr-3 h-5 w-5 text-gray-400" />
                      )}
                      <span className={`${feature.included ? '' : 'text-gray-400'} ${feature.highlight ? 'font-bold text-yellow-400' : ''}`}>
                        {feature.text === "Everything in Freemium, plus:" ? (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent font-bold">
                            Everything in Freemium, plus:
                          </span>
                        ) : (
                          feature.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold button-hover ${
                    plan.popular 
                      ? 'bg-white text-fresh-green hover:bg-gray-100' 
                      : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/90 border-2 border-navy rounded-lg p-4 max-w-xl mx-auto shadow-lg">
            <h3 className="text-navy text-lg font-bold mb-1">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-navy text-sm">
              Cancel anytime • No hidden fees • Risk-free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
