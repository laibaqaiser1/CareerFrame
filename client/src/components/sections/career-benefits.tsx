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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Find the right role get there faster
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Real Progress - Real People, 6 x cheaper than the average career coach
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 w-full max-w-md mx-auto sm:max-w-none">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            >
              Subscribe
            </Button>
            <Button
              size="lg"
              className="get-started-button w-full sm:w-auto px-6 sm:px-8 py-3 text-base font-semibold text-white"
              style={{ 
                backgroundColor: "#829340 !important",
                background: "#829340 !important",
                color: "white !important",
                borderRadius: "8px !important"
              }}
            >
              Start for Free
            </Button>
          </div>
          
          {/* Guarantee */}
          <p className="text-sm font-medium text-gray-700">
            90-day satisfaction guarantee
          </p>
        </div>

        {/* Three Feature Columns - Static, no animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {/* Column 1 - Feeling stuck */}
          <div className="flex justify-center">
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

              {/* Inner Container - grey background */}
              <div 
                className="rounded-2xl feature-column-inner"
                style={{
                  width: '384px',
                  height: '266px',
                  backgroundColor: '#FAFAFA',
                  paddingTop: '52px',
                  paddingRight: '24px',
                  paddingBottom: '32px',
                  paddingLeft: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Content */}
                <div 
                  className="feature-column-content"
                  style={{
                    width: '336px',
                    height: '134px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    textAlign: 'center'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '30px',
                      letterSpacing: '0%',
                      color: '#141414',
                      margin: 0
                    }}
                  >
                    Feeling stuck
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
                      color: '#525252',
                      margin: 0
                    }}
                  >
                    Feeling stuck in a job that doesn't excite you? Every day feels like you're not reaching your full potential, just going through the motions without fulfilment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Missing opportunities */}
          <div className="flex justify-center">
            {/* Outer Container */}
            <div 
              className="feature-column-outer"
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
                  marginBottom: '-32px'
                }}
              >
                <img 
                  src={zapIcon} 
                  alt="Lightning bolt zap"
                  className="w-5 h-5"
                />
              </div>

              {/* Inner Container - grey background */}
              <div 
                className="rounded-2xl feature-column-inner"
                style={{
                  width: '384px',
                  height: '266px',
                  backgroundColor: '#FAFAFA',
                  paddingTop: '52px',
                  paddingRight: '24px',
                  paddingBottom: '32px',
                  paddingLeft: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Content */}
                <div 
                  className="feature-column-content"
                  style={{
                    width: '336px',
                    height: '134px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    textAlign: 'center'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '30px',
                      letterSpacing: '0%',
                      color: '#141414',
                      margin: 0
                    }}
                  >
                    Missing opportunities
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
                      color: '#525252',
                      margin: 0
                    }}
                  >
                    The longer you stay in that job, the more you miss out on the opportunities that could change your life. The routine becomes draining, and the fear of stepping into something new only holds you back.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Break free with CareerFrame */}
          <div className="flex justify-center">
            {/* Outer Container */}
            <div 
              className="feature-column-outer"
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
                  marginBottom: '-32px'
                }}
              >
                <img 
                  src={chartBreakoutIcon} 
                  alt="Chart breakout square"
                  className="w-5 h-5"
                />
              </div>

              {/* Inner Container - grey background */}
              <div 
                className="rounded-2xl feature-column-inner"
                style={{
                  width: '384px',
                  height: '266px',
                  backgroundColor: '#FAFAFA',
                  paddingTop: '52px',
                  paddingRight: '24px',
                  paddingBottom: '32px',
                  paddingLeft: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Content */}
                <div 
                  className="feature-column-content"
                  style={{
                    width: '336px',
                    height: '134px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    textAlign: 'center'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '30px',
                      letterSpacing: '0%',
                      color: '#141414',
                      margin: 0
                    }}
                  >
                    Break free with CareerFrame
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
                      color: '#525252',
                      margin: 0
                    }}
                  >
                    CareerFrame helps you break free from career confusion. With personalized coaching, skill gap analysis, and tailored career paths, we provide the tools and guidance to help you pursue work that aligns with your goals.
                  </p>
                </div>
              </div>
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