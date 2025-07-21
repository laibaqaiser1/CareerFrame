import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "I was stuck in a job that didn't match my skills for years. CareerFrame's AI coach helped me discover product management was perfect for me. Within 3 months, I landed my dream role at a tech startup!",
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    rating: 5,
    quote: "As a recent graduate, I had no idea what career path to choose. The milestone tracker and skill gap analysis gave me clear direction. Now I'm a successful UX designer!",
    name: "Marcus Johnson", 
    role: "UX Designer at DesignStudio",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    rating: 5,
    quote: "After 15 years in finance, I wanted a career change but didn't know where to start. CareerFrame's AI coaching helped me transition to data science. Best decision ever!",
    name: "Emily Rodriguez",
    role: "Data Scientist at Analytics Pro", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  }
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding section-divider" style={{ backgroundColor: 'var(--background-white)' }}>
      <div className="max-w-7xl mx-auto container-padding">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="heading-lg text-center element-spacing" style={{ color: 'var(--primary-navy)' }}>
            Success Stories from Our Community
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto element-spacing" style={{ color: 'var(--text-secondary)' }}>
            Real people, real transformations. See how CareerFrame helped these professionals find their dream careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-light-grey shadow-lg hover:shadow-xl transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-soft-grey mb-6 italic">"{testimonial.quote}"</p>
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
      </div>
    </section>
  );
}
