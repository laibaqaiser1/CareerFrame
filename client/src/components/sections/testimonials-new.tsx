import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Pre-launch testimonials from early adopters and beta testers
const testimonials = [
  {
    rating: 5,
    quote: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum nisi. Maecenas ac placerat metus, in faucibus est.",
    name: "Robert Fox",
    role: "Web Designer",
    image: "/Avatar1.png"
  },
  {
    rating: 5,
    quote: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum nisi. Maecenas ac placerat metus, in faucibus est.",
    name: "Bessie Cooper", 
    role: "Brand Designer",
    image: "/Avatar2.png"
  },
  {
    rating: 5,
    quote: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum nisi. Maecenas ac placerat metus, in faucibus est.",
    name: "Jane Cooper",
    role: "Developer", 
    image: "/Avatar3.png"
  }
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "#141414"
            }}
          >
            Real Stories — Coming Soon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's what our early adopters and beta testers are saying about their experience with CareerFrame so far.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Desktop: outside grid, Mobile: over testimonial */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center hover:opacity-70 transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center hover:opacity-70 transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonials Grid - Desktop: 3 cols, Mobile: 1 col centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 place-items-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white transition-all duration-700 delay-${index * 100} relative flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  // Mobile: show only current testimonial, Desktop: show all
                  'md:block ' + (index === currentIndex ? 'block' : 'hidden md:block')
                }`}
                style={{
                  width: '357px',
                  height: '236px',
                  borderRadius: '12px',
                  padding: '20px',
                  opacity: 1,
                  boxShadow: '0px 12px 80px 0px #002C6D0D'
                }}
              >
                {/* Star Rating */}
                <div className="flex mb-4" style={{ width: '148px', height: '28px', gap: '2px', alignItems: 'center' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" style={{ width: '28px', height: '28px' }} />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
                
                {/* Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full object-cover mr-3" 
                    />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Quote Icon - Aligned with profile */}
                  <img 
                    src="/Quote.png"
                    alt="Quote"
                    className="opacity-100"
                    style={{ width: '48px', height: '48px' }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}