import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, Quote } from "lucide-react";

// Updated testimonials based on the presentation content
const testimonials = [
  {
    rating: 5,
    quote: "CareerFrame helped me break free from a job that felt like I was just going through the motions. The personalized coaching and skill gap analysis gave me the confidence to pursue my dream role in digital marketing. Now I wake up excited for work every day!",
    name: "Sarah Chen",
    role: "Digital Marketing Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    rating: 5,
    quote: "I was stuck in a routine that was draining my energy and missing out on opportunities. The tailored career pathway from CareerFrame showed me exactly what steps to take to transition into UX design. The AI coaching made all the difference in building my confidence.",
    name: "Marcus Johnson", 
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    rating: 5,
    quote: "The fear of stepping into something new was holding me back from the career I deserved. CareerFrame's milestone tracker and personalized roadmap gave me the tools and support I needed to make the leap into data science. Best decision I ever made!",
    name: "Emily Rodriguez",
    role: "Data Scientist", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  }
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            Real Stories — Coming Soon
          </h2>
          <p className="text-xl text-soft-grey max-w-3xl mx-auto">
            We're currently working with early adopters who are transforming their careers. Be among the first to write the next success story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-light-grey shadow-lg hover:shadow-xl transition-all duration-700 delay-${index * 100} relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-fresh-green/20">
                  <Quote className="h-12 w-12" />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-soft-grey mb-6 italic relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-soft-grey">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 90-Day Guarantee Section - Added right after testimonials */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-xl border-2" style={{ borderColor: '#88A98F', backgroundColor: 'rgba(136, 169, 143, 0.05)' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#88A98F' }}>
                <span className="text-2xl font-bold text-white">90</span>
              </div>
              <h3 className="text-3xl font-bold text-navy">
                90-Day Satisfaction Guarantee
              </h3>
            </div>
            <p className="text-lg text-soft-grey mb-4 leading-relaxed">
              If you're not completely satisfied with your CareerFrame experience within 90 days, we'll provide a full refund. We're confident in the quality of our platform and coaching.
            </p>
            <p className="text-xl font-bold text-navy">
              Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}