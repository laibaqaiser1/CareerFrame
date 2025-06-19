import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "12,000+",
    label: "Future Success Stories",
    description: "CareerFrame was created to help people land the roles they deserve — and you're next."
  },
  {
    icon: TrendingUp,
    number: "72%",
    label: "Reported Improved Career Confidence",
    description: "After creating a personalised roadmap with CareerFrame"
  },
  {
    icon: Star,
    number: "Rate Us",
    label: "Be the first to rate us",
    description: "Your voice matters"
  },
  {
    icon: Award,
    number: "90 Days",
    label: "Our goal: career breakthroughs",
    description: "CareerFrame is built for speed — helping you move fast with a clear, achievable plan."
  }
];

export function TrustSignalsSection() {
  return (
    <section id="trust-signals" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
                <stat.icon className="h-8 w-8" style={{ color: '#88A98F' }} />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-navy mb-1">{stat.label}</div>
              <div className="text-sm text-soft-grey">{stat.description}</div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}