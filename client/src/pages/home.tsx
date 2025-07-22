import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { ComingSoonPage } from "@/components/sections/coming-soon";
import { WhatToExpectSection } from "@/components/sections/what-to-expect";
import { TrustSignalsSection } from "@/components/sections/trust-signals";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";

import { TestimonialsSection } from "@/components/sections/testimonials-new";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { PricingSection } from "@/components/sections/pricing";

import { FAQSection } from "@/components/sections/faq";

import { NewsletterSection } from "@/components/sections/newsletter";
import { Footer } from "@/components/sections/footer";
import { LiveChat } from "@/components/ui/live-chat";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import careerFrameLogo from "@assets/ChatGPT Image Jul 17, 2025, 03_29_50 PM_1752762637040.png";
import { useSoundEffects } from "@/hooks/useSoundEffects";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();
  const { playHoverSound, playClickSound } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
    <nav className="fixed top-0 left-0 right-0 w-full z-50" style={{ 
      backgroundColor: 'transparent',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999
    }}>
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div className="flex justify-between items-center h-32">
          <div className="flex-shrink-0 flex items-center" style={{ zIndex: 10000 }}>
            <img 
              src={careerFrameLogo} 
              alt="CareerFrame Logo" 
              style={{ 
                width: '148px', 
                height: '148px', 
                transform: 'rotate(0deg)', 
                opacity: 1, 
                zIndex: 10000 
              }}
            />
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-10">
                <a 
                  href="#how-it-works" 
                  className="px-4 py-3 text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" 
                  style={{ color: '#000000' }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <span className="relative z-10">How it Works</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(130, 147, 64, 0.1)' }}></div>
                </a>
                <a 
                  href="#features" 
                  className="px-4 py-3 text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" 
                  style={{ color: '#000000' }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <span className="relative z-10">Features</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(130, 147, 64, 0.1)' }}></div>
                </a>
                <a 
                  href="#testimonials" 
                  className="px-4 py-3 text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" 
                  style={{ color: '#000000' }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <span className="relative z-10">Success Stories</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(130, 147, 64, 0.1)' }}></div>
                </a>

                <a 
                  href="#pricing" 
                  className="px-4 py-3 text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative group" 
                  style={{ color: '#000000' }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <span className="relative z-10">Pricing</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: 'rgba(130, 147, 64, 0.1)' }}></div>
                </a>
              </div>
            </div>
            
            <Button 
              onClick={openPopup}
              className="text-white px-8 py-3 text-xl font-semibold button-hover" 
              style={{ backgroundColor: '#829340' }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
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
    <>
      <Navigation />
      <div className="bg-white">
        {/* Coming Soon Section at the top */}
        <div className="fade-in">
          <ComingSoonPage />
        </div>
        
        {/* Full website content below for exploration */}
        <div className="min-h-screen page-transition">
          <div className="fade-in">
            <HeroSection />
          </div>
          <div className="slide-up">
            <ProblemSolutionSection />
          </div>
          <div className="slide-up">
            <WhatToExpectSection />
          </div>
          <div className="slide-in-left">
            <FeaturesSection />
          </div>
          <div className="slide-in-left">
            <HowItWorksSection />
          </div>
          <div className="slide-up">
            <TestimonialsSection />
          </div>
          <div className="slide-in-right">
            <PricingSection />
          </div>
          <div className="scale-in">
            <FAQSection />
          </div>
          <div className="slide-up">
            <NewsletterSection />
          </div>
          <Footer />
          <LiveChat />
          <CustomCursor />
        </div>
      </div>
    </>
  );
}
