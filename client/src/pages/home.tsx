import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { WhatToExpectSection } from "@/components/sections/what-to-expect";
import { TrustSignalsSection } from "@/components/sections/trust-signals";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FounderStorySection } from "@/components/sections/founder-story";
import { TestimonialsSection } from "@/components/sections/testimonials-new";

import { PricingSection } from "@/components/sections/pricing";
import { UrgencyCTASection } from "@/components/sections/urgency-cta";
import { FAQSection } from "@/components/sections/faq";
import { AITransparencySection } from "@/components/sections/ai-transparency";
import { NewsletterSection } from "@/components/sections/newsletter";
import { Footer } from "@/components/sections/footer";
import { LiveChat } from "@/components/ui/live-chat";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-animation";
import careerFrameLogo from "@assets/Logo Clear background.png";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 nav-scroll ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-black/95 backdrop-blur-sm border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={careerFrameLogo} 
              alt="CareerFrame Logo" 
              className="h-10 w-10 mr-3"
            />
            <span className="text-2xl font-bold text-white">CareerFrame</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <a href="#what-to-expect" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">What to Expect</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
                <a href="#trust-signals" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">Success Stories</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
                <a href="#features" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">Features</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
                <a href="#how-it-works" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">How it Works</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
                <a href="#founder-story" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
                <a href="#guarantee" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">Guarantee</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
                <a href="#pricing" className="px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" style={{ color: '#88A98F' }}>
                  <span className="relative z-10">Pricing</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}></div>
                </a>
              </div>
            </div>
            
            <Button variant="ghost" className="px-6 py-2 font-medium button-hover" style={{ color: '#88A98F' }}>
              Sign In
            </Button>
            <Button className="text-white px-6 py-2 font-semibold button-hover" style={{ backgroundColor: '#88A98F' }}>
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
    <div className="min-h-screen bg-white page-transition">
      <Navigation />
      <div className="fade-in">
        <HeroSection />
      </div>
      <div className="slide-up">
        <WhatToExpectSection />
      </div>
      <div className="slide-up">
        <TrustSignalsSection />
      </div>
      <div className="slide-in-left">
        <FeaturesSection />
      </div>
      <div className="slide-in-left">
        <HowItWorksSection />
      </div>
      <div className="fade-in">
        <FounderStorySection />
      </div>
      <div className="slide-up">
        <TestimonialsSection />
      </div>
      <div className="slide-in-right">
        <PricingSection />
      </div>
      <div className="fade-in">
        <UrgencyCTASection />
      </div>
      <div className="scale-in">
        <FAQSection />
      </div>
      <div className="fade-in">
        <AITransparencySection />
      </div>
      <div className="slide-up">
        <NewsletterSection />
      </div>
      <Footer />
      <LiveChat />
    </div>
  );
}
