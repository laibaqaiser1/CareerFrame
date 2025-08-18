import React from "react";
import { Button } from "@/components/ui/button";
import messageChatIcon from "@/assets/message-chat-circle.png";
import zapIcon from "@/assets/zap.png";
import chartBreakoutIcon from "@/assets/chart-breakout-square.png";

export function CareerBenefitsSection() {
  return (
    <section className="white-section-override py-8 sm:py-12 md:py-16 lg:py-20 relative" 
      style={{ 
        zIndex: 50,
        backgroundColor: "#ffffff",
        background: "#ffffff" 
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
            What to Expect After You Sign Up
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Your career transformation starts immediately — here's exactly what happens next
          </p>
          
          {/* 3-Step Process */}
          <div className="mb-8">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Numbered circles with dotted line */}
              <div className="grid grid-cols-3 gap-8 mb-8 relative">
                {/* Circle 1 */}
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
                
                {/* Circle 2 */}
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
                
                {/* Circle 3 */}
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
                
                {/* Connecting lines */}
                <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
                  <div className="relative" style={{ width: '600px' }}>
                    <div 
                      className="connecting-line-dash absolute" 
                      style={{
                        left: '-115px',
                        top: '0px',
                        width: '440px',
                        height: '3px',
                        opacity: 1,
                      }}
                    ></div>
                    <div 
                      className="connecting-line-dash absolute" 
                      style={{
                        left: '300px',
                        top: '0px',
                        width: '400px',
                        height: '3px',
                        opacity: 1,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Content below circles - Desktop */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
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
                </div>

                <div className="text-center">
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
                    Receive a tailored roadmap with specific steps and resources to achieve your career goals.
                  </p>
                </div>

                <div className="text-center">
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
                    Take action with confidence, track your progress, and accelerate your career transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div 
                    className="numbered-circle numbered-circle-1" 
                    style={{ 
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    1
                  </div>
                </div>
                <div className="text-center">
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#141414',
                    marginBottom: '8px'
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
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div 
                    className="numbered-circle numbered-circle-2" 
                    style={{ 
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    2
                  </div>
                </div>
                <div className="text-center">
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#141414',
                    marginBottom: '8px'
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
                    Receive a tailored roadmap with specific steps and resources to achieve your career goals.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div 
                    className="numbered-circle numbered-circle-3" 
                    style={{ 
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    3
                  </div>
                </div>
                <div className="text-center">
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#141414',
                    marginBottom: '8px'
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
                    Take action with confidence, track your progress, and accelerate your career transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Grey Box */}
        <div className="mt-8 rounded-lg p-8 md:p-12 stats-grey-box"
             style={{
               backgroundColor: '#FAFAFA !important',
               background: '#FAFAFA !important'
             }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
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
            </div>
            
            <div className="text-center">
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
            </div>
            
            <div className="text-center">
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
            </div>
            
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16">
        <div className="border-b border-gray-200"></div>
      </div>
    </section>
  );
}