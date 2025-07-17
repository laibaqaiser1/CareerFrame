import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, Quote } from "lucide-react";

// Pre-launch testimonials from early adopters and beta testers
const testimonials = [
  {
    rating: 5,
    quote: "The process and milestone tracker has really given me something proud to work towards. Finally, a clear path instead of endless job searching with no direction.",
    name: "Sarah Chen",
    role: "Early Adopter",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80"
  },
  {
    rating: 5,
    quote: "CareerFrame has actually given me direction, I was lost before. The platform helped me see a clear roadmap when I had no idea what my next career move should be.",
    name: "Marcus Johnson", 
    role: "Beta Tester",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    rating: 5,
    quote: "Due to AI I was made redundant, I genuinely had to start over again. This platform helped me understand how my skills could be reapplied in a job that will be more protected from AI.",
    name: "Emily Rodriguez",
    role: "Career Transitioner", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  }
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
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
            Here's what our early adopters and beta testers are saying about their experience with CareerFrame so far.
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



      </div>
    </section>
  );
}