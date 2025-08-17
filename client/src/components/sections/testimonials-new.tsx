import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import cartoonImage from "@/assets/cartoon.jpeg";

// Authentic testimonials from real CareerFrame users
const testimonials = [
  {
    rating: 5,
    quote:
      "CareerFrame helped me realise I was already further along than I thought. It highlighted transferable skills I hadn't considered and showed I only needed two short courses instead of the four I assumed. The milestone tracker makes the journey clear and less overwhelming.",
    name: "Mark Wilson",
    role: "Career Changer — Retail → IT Support",
    image: "/Avatar1.png",
  },
  {
    rating: 5,
    quote:
      "I discovered gaps I wasn't aware of and cut out months of training I didn't need. Now I've got a direct plan to an entry-level sustainability role. Can't wait to see the community grow with people sharing real industry tips.",
    name: "Sophie Green",
    role: "Recent Graduate — Environmental Science",
    image: "/Avatar2.png",
  },
  {
    rating: 5,
    quote:
      "After a career break, I finally have a realistic pathway to my target role. I know exactly which skills to refresh and how to prove them. The roadmap gives me clear weekly targets, which has boosted my confidence massively.",
    name: "James Patel",
    role: "Returner — Back to Work After Career Break",
    image: cartoonImage,
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: "#ffffff", background: "#ffffff" }}
    >
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        style={{ backgroundColor: "#ffffff", background: "#ffffff" }}
      >
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
              color: "#141414",
            }}
          >
            Real Stories From Real Users
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who've already transformed their careers
            with CareerFrame's personalized guidance.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-8 md:px-20">
          {/* Navigation Arrows - Positioned outside testimonial area */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-2 hover:opacity-70 transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-2 hover:opacity-70 transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Testimonials Grid - Mobile: 1 at a time, Desktop: 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:items-stretch">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white transition-all duration-700 delay-${index * 100} relative flex flex-col justify-between w-full max-w-md mx-auto md:mx-0 md:max-w-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  // Mobile: show only current testimonial, Desktop: show all
                  "md:block " +
                  (index === currentIndex ? "block" : "hidden md:block")
                }`}
                style={{
                  minHeight: "320px",
                  borderRadius: "12px",
                  padding: "24px",
                  opacity: 1,
                  boxShadow: "0px 12px 80px 0px #002C6D0D",
                  border: "1px solid rgba(0, 44, 109, 0.08)",
                }}
              >
                {/* Star Rating */}
                <div
                  className="flex mb-4"
                  style={{
                    width: "148px",
                    height: "28px",
                    gap: "2px",
                    alignItems: "center",
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      style={{ width: "28px", height: "28px" }}
                    />
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
                      <div className="font-medium text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Quote Icon - Aligned with profile */}
                  <img
                    src="/Quote.png"
                    alt="Quote"
                    className="opacity-100"
                    style={{ width: "48px", height: "48px" }}
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
