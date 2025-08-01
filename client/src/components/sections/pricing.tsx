import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import { SoundButton } from "@/components/SoundButton";
import { Check, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const comparisonFeatures = [
  { feature: "Career Assessment", free: "Basic (1 time)", premium: "Advanced + Unlimited Retakes" },
  { feature: "AI Career Coaching", free: "3 sessions/month", premium: "Unlimited sessions" },
  { feature: "Role Recommendations", free: "3 roles", premium: "Unlimited personalized matches" },
  { feature: "Skill Gap Analysis", free: "Basic overview", premium: "Deep analysis + learning roadmap" },
  { feature: "CV Generation", free: "1 per month", premium: "Unlimited + ATS optimization" },
  { feature: "Cover Letters", free: "1 per month", premium: "Unlimited + role-specific" },
  { feature: "Career Pathways", free: "✗", premium: "Custom 90-day roadmaps" },
  { feature: "Milestone Tracking", free: "✗", premium: "Weekly progress reviews" },
  { feature: "Priority Support", free: "✗", premium: "Direct coach access" },
  { feature: "Community Access", free: "Basic forums", premium: "Industry-specific groups" },
  { feature: "XP Rewards", free: "Standard rate", premium: "2x multiplier + bonuses" }
];

const plans = [
  {
    name: "Free Plan",
    price: 0,
    currency: "£",
    description: "Perfect for exploring career options and getting started",
    features: [
      "Basic career assessment",
      "3 AI coaching sessions per month",
      "3 role recommendations",
      "1 CV generation per month",
      "1 cover letter per month",
      "Community forum access",
      "Basic XP rewards"
    ],
    limitations: [
      "Limited coaching sessions",
      "No custom career pathways",
      "Basic skill analysis only"
    ],
    cta: "Start Your Career Plan — Free",
    popular: false
  },
  {
    name: "Premium Plan", 
    price: 29,
    currency: "£",
    description: "Includes unlimited AI coaching, tailored milestone plans, and recruiter visibility",
    features: [
      "Everything in Free Plan, plus:",
      "Unlimited AI coaching sessions",
      "Custom 90-day career roadmaps", 
      "Deep skill gap analysis + learning paths",
      "Unlimited CV & cover letter generation",
      "ATS-optimized documents",
      "Weekly milestone reviews",
      "Industry-specific networking groups",
      "Priority support from career coaches",
      "2x XP multiplier + bonus rewards",
      "Recruiter visibility boost"
    ],
    valueProps: [
      "90-day satisfaction guarantee"
    ],
    cta: "Accelerate Your Career",
    popular: true
  }
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
    <section id="pricing" className="py-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 drop-shadow-lg">
            Simple Pricing. Powerful Results.
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Most users see a 5x return on investment within 6 months.<br />
            Start free — upgrade only when you see the value. 90-day satisfaction guarantee.
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
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`mr-3 h-5 w-5 ${plan.popular ? 'text-white' : 'text-fresh-green'}`} />
                      <span className={
                        feature === "Everything in Free Plan, plus:" 
                          ? 'text-yellow-400 font-semibold' 
                          : plan.popular ? 'text-white' : 'text-navy'
                      }>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.limitations && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-soft-grey mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <X className="mr-2 h-4 w-4 text-gray-400" />
                          <span className="text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.valueProps && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Value:</h4>
                    <ul className="space-y-2">
                      {plan.valueProps.map((prop, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-yellow-400" />
                          <span className="text-white/90">{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <SoundButton 
                  soundType="submit"
                  onClick={openPopup}
                  className={`w-full py-3 font-semibold button-hover ${
                    plan.popular 
                      ? 'bg-white hover:bg-gray-100' 
                      : 'border-2 text-white hover:text-black'
                  }`}
                  style={plan.popular 
                    ? { color: '#829340' }
                    : { borderColor: '#829340', backgroundColor: '#829340' }
                  }
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </SoundButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Comparison Table - Collapsible */}
        <div className={`mt-16 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <Collapsible open={isComparisonOpen} onOpenChange={setIsComparisonOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
                  >
                    <h3 className="text-2xl font-bold text-navy">
                      Feature Comparison
                    </h3>
                    <ChevronDown 
                      className={`h-6 w-6 text-navy transition-transform duration-200 ${
                        isComparisonOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-4 px-4 font-semibold text-navy">Feature</th>
                          <th className="text-center py-4 px-4 font-semibold text-navy">Free Plan</th>
                          <th className="text-center py-4 px-4 font-semibold text-fresh-green">Premium Plan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonFeatures.map((item, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium text-navy">{item.feature}</td>
                            <td className="py-4 px-4 text-center text-soft-grey">
                              {item.free === "✗" ? (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              ) : (
                                item.free
                              )}
                            </td>
                            <td className="py-4 px-4 text-center text-fresh-green font-medium">
                              {item.premium}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>




      </div>
    </section>
    </>
  );
}
