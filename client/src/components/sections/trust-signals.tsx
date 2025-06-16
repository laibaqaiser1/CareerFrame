import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "12,000+",
    label: "Successful Career Transitions",
    description: "Professionals who landed their dream jobs"
  },
  {
    icon: TrendingUp,
    number: "31%",
    label: "Average Salary Increase",
    description: "Within 90 days of career transition"
  },
  {
    icon: Star,
    number: "4.8/5",
    label: "User Satisfaction Rating",
    description: "Based on 2,400+ verified reviews"
  },
  {
    icon: Award,
    number: "92%",
    label: "Success Rate",
    description: "Land new role within 90 days"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Data Scientist at Google",
    previousRole: "Former Marketing Manager",
    quote: "CareerFrame helped me transition from marketing to data science in just 3 months. The personalized roadmap was exactly what I needed.",
    salaryIncrease: "£24,000 increase"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager at Stripe",
    previousRole: "Former Sales Executive",
    quote: "I went from dreading Monday mornings to being excited about my work. The career coaching was transformational.",
    salaryIncrease: "£18,000 increase"
  },
  {
    name: "Emma Thompson",
    role: "UX Designer at Figma",
    previousRole: "Former Teacher",
    quote: "The skills gap analysis showed me exactly what to learn. Within 4 months, I had 3 job offers in UX design.",
    salaryIncrease: "£15,000 increase"
  }
];

export function TrustSignalsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-fresh-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-fresh-green" />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-navy mb-1">{stat.label}</div>
              <div className="text-sm text-soft-grey">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            Real Success Stories from Real People
          </h2>
          <p className="text-xl text-soft-grey max-w-3xl mx-auto">
            See how professionals just like you transformed their careers in 90 days or less
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-soft-grey mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-fresh-green font-medium">{testimonial.role}</div>
                  <div className="text-sm text-soft-grey">{testimonial.previousRole}</div>
                  <div className="text-sm font-semibold text-navy mt-2 bg-fresh-green/10 px-3 py-1 rounded-full inline-block">
                    {testimonial.salaryIncrease}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-fresh-green to-fresh-green/80 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">90-Day Career Transformation Guarantee</h3>
              <p className="text-lg mb-6">
                If you don't land a new role or see significant career progress within 90 days, 
                we'll refund your investment and provide an additional 90 days of coaching absolutely free.
              </p>
              <div className="text-sm opacity-90">
                No questions asked. We're that confident in our system.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}