import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Target, Users, Award, Shield, Heart, Zap, Scale, UserCheck, HandHeart, Mail } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* CareerFrame Badge */}
      <div className="absolute top-1/3 right-2 md:right-1/4 opacity-5 transform rotate-12 z-0 hidden sm:block">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-48 md:w-64 lg:w-72 h-48 md:h-64 lg:h-72 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 relative z-10">
        <div className="mb-12">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-green-50 transition-colors"
              style={{ color: '#829340' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              About CareerFrame
            </h1>
            <p 
              className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              style={{ color: '#6B7280' }}
            >
              CareerFrame: Your Future, Made Clear. We're a modern career platform built to help people move into work they actually want.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          <div 
            className="border rounded-xl p-6 md:p-8"
            style={{ 
              backgroundColor: 'rgba(30, 58, 138, 0.05)', 
              borderColor: 'rgba(30, 58, 138, 0.2)' 
            }}
          >
            <Target className="h-10 w-10 md:h-12 md:w-12 mb-4" style={{ color: '#829340' }} />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#1E3A8A' }}>What We Offer</h3>
            <div className="text-base md:text-lg leading-relaxed space-y-2" style={{ color: '#6B7280' }}>
              <p>• Career alignment that maps your strengths and interests to real roles</p>
              <p>• Skill‑gap insights with a clear plan to close them</p>
              <p>• Milestone tracking so you can see progress and stay motivated</p>
              <p>• Application tools that turn your profile into tailored CVs and cover letters</p>
              <p>• Industry connections through communities and curated learning partners</p>
            </div>
          </div>

          <div 
            className="border rounded-xl p-6 md:p-8"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <Users className="h-10 w-10 md:h-12 md:w-12 mb-4" style={{ color: '#1E3A8A' }} />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#1E3A8A' }}>Our Promise</h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Helpful guidance, straight talk, and technology that serves people—not the other way around. We're building the most supportive place on the internet to change your career.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#1E3A8A' }}
          >
            Our Story
          </h2>
          <div 
            className="border rounded-xl p-8 max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderColor: 'rgba(130, 147, 64, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Our founder, Arron McWilliam, struggled with career transition after leaving the British Armed Forces. Navigating job boards, translating experience, and finding a path that fit felt harder than it should be. CareerFrame exists to fix that—so no one has to do it alone.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#1E3A8A' }}
          >
            Media & partnerships
          </h2>
          <div 
            className="border rounded-xl p-8 max-w-4xl mx-auto text-center"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              For press or partnerships, email <a href="mailto:partnerships@careerframe.co.uk" className="text-green-600 hover:underline font-medium">partnerships@careerframe.co.uk</a>.
            </p>
          </div>
        </div>

        {/* COMMENTED OUT - Detailed Sections Available for Reference */}
        {/*
        
        COMPREHENSIVE ABOUT SECTIONS (COMMENTED OUT FOR SIMPLICITY)
        These sections contain detailed company values and technical information.
        They are maintained here for reference and can be uncommented if needed.

        - Our Core Values (6 detailed value cards)
        - What This Means For You
        - Leadership Team
        - Technical Infrastructure
        - Company Achievements
        
        Contact partnerships@careerframe.co.uk for access to complete company documentation.
        
        */}


      </div>
      <Footer />
    </div>
  );
}