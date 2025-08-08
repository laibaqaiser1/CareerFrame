import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, TrendingUp, Users, Star, Award } from "lucide-react";

export function WhatToExpectSection() {
  return (
    <section 
      id="what-to-expect" 
      style={{ 
        backgroundColor: '#ffffff !important',
        background: '#ffffff !important'
      }} 
      className="py-16 what-to-expect-white-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '60px',
            letterSpacing: '-0.02em',
            color: '#141414',
            marginBottom: '16px'
          }}>
            What to Expect After You Sign Up
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '28px',
            color: '#525252',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Your career transformation starts immediately — here's exactly what happens next
          </p>
        </motion.div>

        {/* 3-Step Process with numbered circles and dotted line */}
        <div className="mb-20 relative">
          
          {/* Desktop Layout - Circles with dotted lines */}
          <div className="hidden md:block">
            {/* Numbered circles with dotted line - aligned with content columns */}
            <div className="grid grid-cols-3 gap-8 mb-8 relative">
              {/* Circle 1 - centered in first column */}
              <div className="flex justify-center">
                <div 
                  className="numbered-circle numbered-circle-1" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  1
                </div>
              </div>
              
              {/* Circle 2 - centered in second column */}
              <div className="flex justify-center">
                <div 
                  className="numbered-circle numbered-circle-2" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  2
                </div>
              </div>
              
              {/* Circle 3 - centered in third column */}
              <div className="flex justify-center">
                <div 
                  className="numbered-circle numbered-circle-3" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  3
                </div>
              </div>
              
              {/* Connecting lines positioned precisely between circles */}
              <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
                <div className="relative" style={{ width: '600px' }}>
                  {/* Line from circle 1 to circle 2 */}
                  <div 
                    className="connecting-line-dash absolute" 
                    style={{
                      left: '-115px',
                      top: '0px',
                      width: '440px',
                      height: '3px',
                      opacity: 1
                    }}
                  ></div>
                  
                  {/* Line from circle 2 to circle 3 */}
                  <div 
                    className="connecting-line-dash absolute" 
                    style={{
                      left: '300px',
                      top: '0px',
                      width: '400px',
                      height: '3px',
                      opacity: 1
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content below circles - Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Step 1 - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141414',
                marginBottom: '12px'
              }}>
                Meet Your AI Coach
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#525252',
                margin: 0
              }}>
                Complete a 5-minute assessment to help us understand your goals, skills, and career preferences.
              </p>
            </motion.div>

            {/* Step 2 - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141414',
                marginBottom: '12px'
              }}>
                Get Your Personalized Plan
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#525252',
                margin: 0
              }}>
                Receive a custom 90-day roadmap with specific milestones, skill development goals, and target roles.
              </p>
            </motion.div>

            {/* Step 3 - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141414',
                marginBottom: '12px'
              }}>
                Begin Your Journey
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#525252',
                margin: 0
              }}>
                Start progressing through your milestones with daily guidance, weekly check-ins, and community support.
              </p>
            </motion.div>
          </div>

          {/* Mobile Layout - Centered Vertical Stack with connecting lines */}
          <div className="md:hidden space-y-6">
            {/* Step 1 - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="numbered-circle numbered-circle-1" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  1
                </div>
              </div>
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141414',
                marginBottom: '12px'
              }}>
                Meet Your AI Coach
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#525252',
                margin: 0
              }}>
                Complete a 5-minute assessment to help us understand your goals, skills, and career preferences.
              </p>
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3" style={{
                width: '3px',
                height: '24px',
                background: 'repeating-linear-gradient(to bottom, #D5D7DD 0px, #D5D7DD 13px, transparent 13px, transparent 26px)',
                backgroundSize: '3px 26px'
              }}></div>
            </motion.div>

            {/* Step 2 - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="numbered-circle numbered-circle-2" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  2
                </div>
              </div>
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141414',
                marginBottom: '12px'
              }}>
                Get Your Personalized Plan
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#525252',
                margin: 0
              }}>
                Receive a custom 90-day roadmap with specific milestones, skill development goals, and target roles.
              </p>
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3" style={{
                width: '3px',
                height: '24px',
                background: 'repeating-linear-gradient(to bottom, #D5D7DD 0px, #D5D7DD 13px, transparent 13px, transparent 26px)',
                backgroundSize: '3px 26px'
              }}></div>
            </motion.div>

            {/* Step 3 - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="numbered-circle numbered-circle-3" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  3
                </div>
              </div>
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141414',
                marginBottom: '12px'
              }}>
                Begin Your Journey
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#525252',
                margin: 0
              }}>
                Start progressing through your milestones with daily guidance, weekly check-ins, and community support.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section - Grey Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg p-8 md:p-12 stats-grey-box"
          style={{
            backgroundColor: '#FAFAFA !important',
            //border: '1px solid #E0E0E0',
            background: '#FAFAFA !important'
          }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '48px',
              color: '#829340',
              marginBottom: '8px'
            }}>12,000+</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#141414',
              marginBottom: '8px'
            }}>Future Success Stories</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#525252'
            }}>CareerFrame was created to help people land the roles they deserve — and you're next.</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '48px',
              color: '#829340',
              marginBottom: '8px'
            }}>72%</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#141414',
              marginBottom: '8px'
            }}>Reported Improved Career Confidence</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#525252'
            }}>After creating a personalised roadmap with CareerFrame</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '48px',
              color: '#829340',
              marginBottom: '8px'
            }}>Rate us</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#141414',
              marginBottom: '8px'
            }}>Be the first to rate us</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#525252'
            }}>Your voice matters</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '48px',
              color: '#829340',
              marginBottom: '8px'
            }}>90 Days</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#141414',
              marginBottom: '8px'
            }}>Our goal: career breakthroughs</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#525252'
            }}>CareerFrame is built for speed — helping you move fast with a clear, financially lean, achievable plan.</div>
          </motion.div>
          </div>
        </motion.div>
        
        {/* Section Divider */}
        <div className="mt-16 pt-16 border-t border-gray-200"></div>
      </div>
    </section>
  );
}