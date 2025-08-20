import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, TrendingUp, Users, Star, Award } from "lucide-react";

export function WhatToExpectSection() {
  return (
    <section 
      id="what-to-expect" 
      style={{ 
        backgroundColor: '#ffffff !important',
        background: '#ffffff !important',
        position: 'relative',
        zIndex: 100002
      }} 
      className="what-to-expect-white-bg"
    >
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-8 py-8">
        {/* 
        What to Expect After You Sign Up section is commented out:
        
        Header:
        - What to Expect After You Sign Up
        - Your career transformation starts immediately — here's exactly what happens next
        
        3-Step Process:
        1. Meet Your AI Coach - Complete a 5-minute assessment to help us understand your goals, skills, and career preferences.
        2. Get Your Personalized Plan - Receive a tailored roadmap with specific steps and resources to achieve your career goals.  
        3. Begin Your Journey - Take action with confidence, track your progress, and accelerate your career transformation.
        */}

        {/* 
        Stats Section - Commented out:
        
        12,000+ Future Success Stories
        CareerFrame was created to help people land the roles they deserve — and you're next.
        
        72% Reported Improved Career Confidence  
        CareerFrame bridges the confidence gap, helping professionals present their best selves.
        
        6x Cheaper Than Traditional Coaching
        High-quality career guidance that doesn't break the bank or require long commitments.
        
        90 Days Our goal: career breakthroughs
        CareerFrame is built for speed — helping you move fast with a clear, financially lean, achievable plan.
        */}
      </div>
    </section>
  );
}