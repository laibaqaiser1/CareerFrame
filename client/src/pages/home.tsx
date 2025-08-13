import { useEffect, useState } from "react";
import { ComingSoonPage } from "@/components/sections/coming-soon";
import { WhatToExpectSection } from "@/components/sections/what-to-expect";
import { TrustSignalsSection } from "@/components/sections/trust-signals";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { AIDemoSection } from "@/components/ai-recommendation/ai-demo-section";

import { TestimonialsSection } from "@/components/sections/testimonials-new";

import { PricingSection } from "@/components/sections/pricing";

import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { LiveChat } from "@/components/ui/live-chat";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import careerFrameLogo from "@assets/logo_1753453465800.png";
import { useSoundEffects } from "@/hooks/useSoundEffects";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();
  const { playHoverSound, playClickSound } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('nav')) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
    <nav 
      style={{ 
        position: 'relative',
        width: '100%',
        height: '128px',
        background: 'transparent',
        zIndex: 50000 // Increased navbar z-index
      }}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 relative z-10" style={{ backgroundColor: 'transparent' }}>
        <div className="flex justify-between items-center h-32" style={{ backgroundColor: 'transparent' }}>
          <div className="flex-shrink-0 flex items-center" style={{ zIndex: 10000 }}>
            <img 
              src={careerFrameLogo} 
              alt="CareerFrame Logo" 
              style={{ 
                width: '200px', 
                height: 'auto', 
                transform: 'rotate(0deg)', 
                opacity: 1,
                zIndex: 10000 
              }}
            />
          </div>
          
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
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
              
              {/* Desktop Sign In Button - Inside navigation for perfect alignment */}
              <Button 
                onClick={openPopup}
                className="text-white px-8 py-3 text-xl font-semibold button-hover rounded-lg navbar-signin-btn" 
                style={{ 
                  backgroundColor: '#829340 !important', 
                  background: '#829340 !important',
                  border: '1px solid #829340 !important',
                  color: 'white !important'
                }}
              >
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playClickSound();
              }}
              className="md:hidden p-2 rounded-lg transition-colors duration-200 mobile-menu-toggle"
              style={{ 
                backgroundColor: '#829340',
                border: '1px solid #829340',
                zIndex: 50001
              }}
              onMouseEnter={playHoverSound}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} style={{ backgroundColor: '#ffffff' }}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 mt-1 ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#ffffff' }}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} style={{ backgroundColor: '#ffffff' }}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-32 left-0 right-0 shadow-lg border-t z-40" style={{ background: 'linear-gradient(303.01deg, #FFF1F0 0%, #FFFAF1 33.33%, #E8FAF6 66.67%, #EAF6FD 100%)' }}>
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#how-it-works" 
              className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-green-600" 
              style={{ color: '#000000' }}
              onClick={() => {
                setMobileMenuOpen(false);
                playClickSound();
              }}
            >
              How it Works
            </a>
            <a 
              href="#features" 
              className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-green-600" 
              style={{ color: '#000000' }}
              onClick={() => {
                setMobileMenuOpen(false);
                playClickSound();
              }}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-green-600" 
              style={{ color: '#000000' }}
              onClick={() => {
                setMobileMenuOpen(false);
                playClickSound();
              }}
            >
              Success Stories
            </a>
            <a 
              href="#pricing" 
              className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-green-600" 
              style={{ color: '#000000' }}
              onClick={() => {
                setMobileMenuOpen(false);
                playClickSound();
              }}
            >
              Pricing
            </a>
            <Button 
              onClick={() => {
                openPopup();
                setMobileMenuOpen(false);
                playClickSound();
              }}
              className="w-full text-white px-6 py-3 text-lg font-semibold mt-4 navbar-signin-btn" 
              style={{ 
                backgroundColor: '#829340 !important', 
                background: '#829340 !important',
                border: '1px solid #829340 !important',
                color: 'white !important'
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
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
      <div className="relative">
        <Navigation />
        <div style={{ marginTop: '-128px' }}>
          {/* Coming Soon Section at the top */}
          <div className="fade-in">
            <ComingSoonPage />
          </div>
          
          {/* What to Expect Section - Separate from gradient background */}
          <div className="fade-in">
            <WhatToExpectSection />
          </div>
        
        
        {/* Full website content below for exploration */}
        <div className="page-transition" style={{ background: "transparent", backgroundColor: "transparent" }}>
          <div className="slide-in-left" style={{ background: "transparent", backgroundColor: "transparent" }}>
            <FeaturesSection />
          </div>
          <div className="slide-in-left" style={{ background: "transparent", backgroundColor: "transparent" }}>
            <HowItWorksSection />
          </div>
          
          {/* Section Divider */}
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200"></div>
            </div>
          </div>
          
          <div className="slide-up" style={{ background: "transparent", backgroundColor: "transparent" }}>
            <TestimonialsSection />
          </div>
          <div className="slide-in-right" style={{ background: "transparent", backgroundColor: "transparent" }}>
            <PricingSection />
          </div>
          <div className="scale-in" style={{ background: "transparent", backgroundColor: "transparent" }}>
            <FAQSection />
          </div>
          <Footer />
          <LiveChat />
          <CustomCursor />
        </div>
        </div>
      </div>
    </>
  );
}
