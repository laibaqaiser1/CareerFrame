import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials-new";
import { PricingSection } from "@/components/sections/pricing";
import { NewsletterSection } from "@/components/sections/newsletter";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { LiveChat } from "@/components/ui/live-chat";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-animation";
import careerFrameLogo from "@assets/Logo Clear background.png";

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={careerFrameLogo} 
                alt="CareerFrame Logo" 
                className="h-10 w-10 mr-3"
              />
              <span className="text-2xl font-bold text-navy">CareerFrame</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <a href="#features" className="text-soft-grey hover:text-navy px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-soft-grey hover:text-navy px-3 py-2 text-sm font-medium transition-colors">
                  How it Works
                </a>
                <a href="#pricing" className="text-soft-grey hover:text-navy px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#testimonials" className="text-soft-grey hover:text-navy px-3 py-2 text-sm font-medium transition-colors">
                  Success Stories
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#products" className="text-soft-grey hover:text-navy px-3 py-2 text-sm font-medium transition-colors hidden md:block">
              Products
            </a>
            <a href="#pricing" className="text-soft-grey hover:text-navy px-3 py-2 text-sm font-medium transition-colors hidden md:block">
              Pricing
            </a>
            <Button variant="ghost" className="text-soft-grey hover:text-navy">
              Sign In
            </Button>
            <Button className="bg-fresh-green hover:bg-green-600 text-white">
              Join For FREE
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    // Set page title and meta description
    document.title = "CareerFrame - AI-Powered Career Development Platform";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover your perfect career path with CareerFrame\'s AI-powered guidance. Get personalized coaching, skill gap analysis, and milestone tracking to transform your career journey from confusion to confidence.');

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'CareerFrame - AI-Powered Career Development Platform');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Transform your career with AI-powered guidance, personalized coaching, and milestone-based progression. Join 50,000+ professionals who discovered their dream careers.');

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />

      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
      <LiveChat />
    </div>
  );
}
