import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, Lock, CheckCircle } from "lucide-react";

export function AITransparencySection() {
  const principles = [
    {
      icon: Brain,
      title: "How Our AI Works",
      description: "Our AI analyzes your skills, experience, and career goals against real job market data from 10,000+ companies. It identifies patterns between successful career transitions and creates personalized recommendations based on proven pathways."
    },
    {
      icon: Shield,
      title: "Data Privacy First",
      description: "Your personal information is encrypted and never shared with third parties. We use anonymized industry data to improve recommendations while keeping your individual profile completely private and secure."
    },
    {
      icon: Lock,
      title: "Transparent Recommendations",
      description: "Every AI suggestion comes with clear explanations. You'll see exactly why certain roles or skills are recommended, based on your unique profile and current market demands. No black box decisions."
    },
    {
      icon: CheckCircle,
      title: "Human-Verified Results",
      description: "Our AI recommendations are continuously validated by certified career coaches with 10+ years of experience. Technology enhances human expertise, never replaces the personal touch you deserve."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            How Our AI Technology Works
          </h2>
          <p className="text-xl text-soft-grey max-w-3xl mx-auto">
            Complete transparency about the technology that powers your career transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-fresh-green/10 rounded-lg flex items-center justify-center">
                      <principle.icon className="h-6 w-6 text-fresh-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-soft-grey leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-fresh-green/5 border border-fresh-green/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Our Promise to You
              </h3>
              <p className="text-lg text-soft-grey max-w-2xl mx-auto">
                We believe in ethical AI that empowers your decisions rather than making them for you. 
                You maintain full control over your career journey while benefiting from intelligent insights 
                that would take hundreds of hours to research manually.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}