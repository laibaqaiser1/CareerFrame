import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    title: "Complete Assessment",
    description: "Answer questions about your skills, experience, and career goals. Our AI analyzes your profile to understand your unique strengths and aspirations."
  },
  {
    title: "Get Your Roadmap",
    description: "Receive a personalized career pathway with specific action steps, skill recommendations, and milestone targets tailored to your dream job."
  },
  {
    title: "Take Action",
    description: "Follow your roadmap, track progress with XP points, and leverage our networking features to accelerate your career advancement."
  }
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-soft-grey max-w-3xl mx-auto">
            Get started in minutes and see results in days. Our simple 3-step process transforms your career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-700 delay-${index * 100} border-t-4 border-fresh-green ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-fresh-green text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{step.title}</h3>
                <p className="text-soft-grey leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg text-soft-grey mb-6">
              Ready to transform your career journey?
            </p>
            <button 
              className="bg-fresh-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
