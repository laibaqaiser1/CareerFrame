import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import messageChatIcon from "@/assets/message-chat-circle.png";
import zapIcon from "@/assets/zap.png";
import chartBreakoutIcon from "@/assets/chart-breakout-square.png";

export function CareerBenefitsSection() {
  return (
    <section className="white-section-override relative py-8" 
      style={{ 
        zIndex: 10,
        backgroundColor: "#ffffff",
        background: "#ffffff" 
      }}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 
          What to Expect After You Sign Up section - Commented out:
          
          Header:
          - What to Expect After You Sign Up  
          - Your career transformation starts immediately — here's exactly what happens next
          
          3-Step Process:
          1. Meet Your AI Coach - Complete a 5-minute assessment to help us understand your goals, skills, and career preferences.
          2. Get Your Personalized Plan - Receive a tailored roadmap with specific steps and resources to achieve your career goals.
          3. Begin Your Journey - Take action with confidence, track your progress, and accelerate your career transformation.
          */}

          {/* Three Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            {/* Column 1 - Feeling stuck */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center"
            >
              {/* Outer Container */}
              <div 
                className="w-full max-w-sm md:max-w-none feature-column-outer"
                style={{
                  width: '384px',
                  height: '290px',
                  minWidth: '320px',
                  opacity: 1,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Icon - positioned above the grey box */}
                <div 
                  className="icon-container-white"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                    marginBottom: '-32px' // Overlap with grey container
                  }}
                >
                  <img 
                    src={messageChatIcon} 
                    alt="Message chat circle"
                    className="w-5 h-5"
                  />
                </div>
                
                {/* Grey Container */}
                <div
                  className="feature-column-grey-container"
                  style={{
                    width: '100%',
                    height: '258px',
                    backgroundColor: '#FAFAFA',
                    borderRadius: '12px',
                    padding: '48px 32px 32px 32px', // Top padding accommodates icon overlap
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    textAlign: 'left'
                  }}>
                    {/* Heading */}
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#141414',
                      marginBottom: '12px'
                    }}>
                      Feeling stuck?
                    </h3>
                    
                    {/* Body text */}
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#525252',
                      margin: 0,
                      flex: 1
                    }}>
                      You know you're capable of more, but every day feels the same. You want to grow, but don't know where to start or what steps to take.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Overwhelmed by choices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex justify-center"
            >
              {/* Outer Container */}
              <div 
                className="w-full max-w-sm md:max-w-none feature-column-outer"
                style={{
                  width: '384px',
                  height: '290px',
                  minWidth: '320px',
                  opacity: 1,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Icon - positioned above the grey box */}
                <div 
                  className="icon-container-white"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                    marginBottom: '-32px' // Overlap with grey container
                  }}
                >
                  <img 
                    src={zapIcon} 
                    alt="Zap icon"
                    className="w-5 h-5"
                  />
                </div>
                
                {/* Grey Container */}
                <div
                  className="feature-column-grey-container"
                  style={{
                    width: '100%',
                    height: '258px',
                    backgroundColor: '#FAFAFA',
                    borderRadius: '12px',
                    padding: '48px 32px 32px 32px', // Top padding accommodates icon overlap
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    textAlign: 'left'
                  }}>
                    {/* Heading */}
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#141414',
                      marginBottom: '12px'
                    }}>
                      Overwhelmed by choices?
                    </h3>
                    
                    {/* Body text */}
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#525252',
                      margin: 0,
                      flex: 1
                    }}>
                      Career advice is everywhere, but it's generic and conflicting. You need personalized guidance that fits your unique situation and goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 3 - Ready for a breakthrough */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex justify-center"
            >
              {/* Outer Container */}
              <div 
                className="w-full max-w-sm md:max-w-none feature-column-outer"
                style={{
                  width: '384px',
                  height: '290px',
                  minWidth: '320px',
                  opacity: 1,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Icon - positioned above the grey box */}
                <div 
                  className="icon-container-white"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                    marginBottom: '-32px' // Overlap with grey container
                  }}
                >
                  <img 
                    src={chartBreakoutIcon} 
                    alt="Chart breakout square"
                    className="w-5 h-5"
                  />
                </div>
                
                {/* Grey Container */}
                <div
                  className="feature-column-grey-container"
                  style={{
                    width: '100%',
                    height: '258px',
                    backgroundColor: '#FAFAFA',
                    borderRadius: '12px',
                    padding: '48px 32px 32px 32px', // Top padding accommodates icon overlap
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    textAlign: 'left'
                  }}>
                    {/* Heading */}
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#141414',
                      marginBottom: '12px'
                    }}>
                      Ready for a breakthrough?
                    </h3>
                    
                    {/* Body text */}
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#525252',
                      margin: 0,
                      flex: 1
                    }}>
                      You're ready to take action and transform your career. You just need the right roadmap and support to make it happen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}