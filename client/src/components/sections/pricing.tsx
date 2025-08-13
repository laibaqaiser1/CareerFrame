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
    name: "Basic plan",
    price: 0,
    currency: "£",
    description: "Perfect for exploring career options and getting started",
    features: [
      "Basic career assessment",
      "3 role recommendations", 
      "1 CV generation per month",
      "1 cover letter per month",
      "Community forum access",
      "Basic XP rewards",
      "3 AI coaching sessions per month"
    ],
    limitations: [
      "Limited coaching sessions",
      "Basic skill analysis only",
      "No custom career pathways"
    ],
    cta: "Start Your Career Plan — Free",
    popular: false
  },
  {
    name: "Premium plan", 
    price: 29,
    currency: "£",
    description: "Includes unlimited AI coaching, tailored milestone plans, and recruiter visibility",
    features: [
      "Everything in Free Plan, plus:",
      "ATS-optimized documents",
      "Unlimited AI coaching sessions",
      "Weekly milestone reviews", 
      "Custom 90-day career roadmaps",
      "Industry-specific networking groups",
      "Deep skill gap analysis + learning paths",
      "Priority support from career coaches",
      "Unlimited CV & cover letter generation",
      "Recruiter visibility boost",
      "2x XP multiplier + bonus rewards"
    ],
    valueProps: [
      "90-day satisfaction guarantee"
    ],
    cta: "Accelerate your career",
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
    <section id="pricing" className="py-12" style={{background: "linear-gradient(129.61deg, #FACB15 0%, #EF4543 100%)"}}>
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="mb-6 drop-shadow-lg"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "white"
            }}
          >
            Simple Pricing. Powerful Results.
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Most users see a 5x return on investment within 6 months.<br />
            Start free — upgrade only when you see the value. 90-day satisfaction guarantee.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } border-2 border-gray-200 rounded-xl flex flex-col`}
              style={{backgroundColor: 'white', width: '470px'}}
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-navy">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <div 
                        className="text-xs font-semibold inline-flex items-center"
                        style={{
                          color: '#829340',
                          background: '#F2F4EB',
                          width: '72px',
                          height: '24px',
                          opacity: 1,
                          paddingTop: '4px',
                          paddingRight: '16px',
                          paddingBottom: '4px',
                          paddingLeft: '16px',
                          borderRadius: '12px',
                          borderWidth: '1px',
                          border: '1px solid #D9DEC5',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="flex items-start justify-end mb-1">
                      <span 
                        className="font-bold text-navy"
                        style={{
                          fontSize: '30px',
                          lineHeight: '60px',
                          paddingBottom: '24px'
                        }}
                      >
                        £
                      </span>
                      <div 
                        className="text-navy"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 600,
                          fontSize: '52px',
                          lineHeight: '72px',
                          letterSpacing: '-2%',
                          minWidth: '60px',
                          textAlign: 'left'
                        }}
                      >
                        {plan.price}
                      </div>
                      <span className="text-sm text-gray-500 self-center">
                        per month
                      </span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-200 mb-4" />
                
                <h4 className="text-xs font-bold text-gray-700 mb-3 tracking-wider uppercase">Features</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {plan.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 w-4 h-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#E6E9D8'}}>
                        <svg width="10" height="7" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.5 8L11 1" stroke="#829340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span 
                        className={
                          feature === "Everything in Free Plan, plus:" 
                            ? 'font-semibold text-gray-700' 
                            : 'text-gray-700'
                        }
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: feature === "Everything in Free Plan, plus:" ? 600 : 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          letterSpacing: '0%'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {plan.limitations && plan.limitations.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-700 mb-2 tracking-wider uppercase">Limitations:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-center">
                            <X className="mr-2 h-3 w-3 text-red-500" />
                            <span 
                              className="text-gray-600"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0%'
                              }}
                            >
                              {limitation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.valueProps && plan.valueProps.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-700 mb-2 tracking-wider uppercase">Value:</h4>
                      <ul className="space-y-1">
                        {plan.valueProps.map((value, i) => (
                          <li key={i} className="flex items-center">
                            <div className="mr-2 w-3 h-3 rounded-full flex items-center justify-center" style={{backgroundColor: '#E6E9D8'}}>
                              <svg width="8" height="6" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.5L4.5 8L11 1" stroke="#829340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span 
                              className="text-gray-700"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0%'
                              }}
                            >
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <SoundButton 
                    soundType="submit"
                    onClick={openPopup}
                    className={`w-full py-2 text-sm font-semibold button-hover border-2 hover:opacity-90 ${
                      plan.popular 
                        ? 'text-white' 
                        : 'bg-transparent'
                    }`}
                    style={plan.popular 
                      ? {backgroundColor: '#829340', borderColor: '#829340'} 
                      : {color: '#829340', borderColor: '#829340', backgroundColor: 'transparent'}
                    }
                    variant="default"
                  >
                    {plan.cta}
                  </SoundButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>






      </div>
    </section>
    </>
  );
}
