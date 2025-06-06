import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free Explorer",
    price: 0,
    description: "Perfect for getting started on your career journey",
    features: [
      { text: "Basic career assessment", included: true },
      { text: "3 role recommendations", included: true },
      { text: "Basic skill gap analysis", included: true },
      { text: "Community access", included: true },
      { text: "1 AI-generated CV", included: true },
      { text: "Limited AI coaching (5 questions/week)", included: false }
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Career Accelerator", 
    price: 29,
    description: "Complete career transformation toolkit",
    features: [
      { text: "Everything in Free, plus:", included: true },
      { text: "Unlimited AI coaching sessions", included: true },
      { text: "Complete milestone roadmaps", included: true },
      { text: "Deep personality & skills analysis", included: true },
      { text: "Unlimited CVs & cover letters", included: true },
      { text: "Priority community support", included: true },
      { text: "XP rewards & partner discounts", included: true }
    ],
    cta: "Start 7-Day Free Trial",
    popular: true
  }
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-12 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            Choose Your Career Acceleration Plan
          </h2>
          <p className="text-xl text-soft-grey max-w-3xl mx-auto">
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
                    ${plan.price}
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
                        <Check className={`mr-3 h-5 w-5 ${plan.popular ? 'text-white' : 'text-fresh-green'}`} />
                      ) : (
                        <X className="mr-3 h-5 w-5 text-gray-400" />
                      )}
                      <span className={feature.included ? '' : 'text-gray-400'}>
                        {feature.text}
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

        <div className={`text-center mt-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-fresh-green/20">
            <p className="text-navy text-xl font-bold mb-2">
              30-Day Money-Back Guarantee
            </p>
            <p className="text-soft-grey text-sm">
              Cancel anytime • No hidden fees • Risk-free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
