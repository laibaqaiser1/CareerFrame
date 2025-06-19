import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, TrendingUp } from "lucide-react";

export function GuaranteeSection() {
  const guaranteeFeatures = [
    {
      icon: Shield,
      title: "Full Money-Back Guarantee",
      description: "100% refund if you don't see career progress"
    },
    {
      icon: Clock,
      title: "Additional 90 Days Free",
      description: "Extra coaching period at no cost to you"
    },
    {
      icon: TrendingUp,
      title: "No Questions Asked",
      description: "Simple process with complete confidence"
    }
  ];

  return (
    <section id="guarantee" className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-lg font-semibold" style={{ backgroundColor: '#88A98F', color: 'white' }}>
            Risk-Free Promise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            90-Day Career Transformation Guarantee
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-soft-grey mb-6 leading-relaxed">
              If you don't land a new role or see significant career progress within 90 days, we'll refund your investment and provide an additional 90 days of coaching absolutely free.
            </p>
            <p className="text-2xl font-bold text-navy">
              No questions asked. We're that confident in our system.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guaranteeFeatures.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
                  <feature.icon className="h-8 w-8" style={{ color: '#88A98F' }} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-soft-grey">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto" style={{ backgroundColor: 'rgba(136, 169, 143, 0.05)', borderColor: '#88A98F' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Why We Can Offer This Guarantee
              </h3>
              <p className="text-lg text-soft-grey">
                Our AI-powered system has helped thousands of professionals achieve their career goals. 
                We've refined our methodology through real success stories and data-driven insights, 
                giving us complete confidence in your transformation journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}