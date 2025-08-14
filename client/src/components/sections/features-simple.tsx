import { useState, useEffect } from 'react';

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    console.log('🔥 FEATURES COMPONENT LOADED - activeFeature:', activeFeature);
  }, [activeFeature]);

  const handleFeatureClick = (index: number) => {
    console.log('🎯 FEATURE CLICKED:', index, 'Current active:', activeFeature);
    setActiveFeature(index);
  };

  const handleFeatureHover = (index: number) => {
    console.log('👆 FEATURE HOVERED:', index, 'Current active:', activeFeature);
    setActiveFeature(index);
  };

  return (
    <>

      
      {/* Main Features Section - White Background */}
      <section 
        className="py-4"
        style={{
          backgroundColor: "transparent",
          background: "transparent"
        }}
      >
        <div 
          className="mx-auto px-6"
          style={{
            width: "1216px",
            maxWidth: "calc(100vw - 48px)",
            backgroundColor: "#ffffff",
            background: "#ffffff",
            borderRadius: "8px"
          }}
        >
          <h2 
            className="text-center mb-4"
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
            What You Get: A Complete Career <br className="hidden md:block" />Development System
          </h2>
          
          {/* Debug Display */}
          <div style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            textAlign: "center",
            fontSize: "14px",
            color: "#333"
          }}>
            Active Feature: {activeFeature} | Click any feature below to test interaction
          </div>
          
          <p 
            className="text-center mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#525252",
              lineHeight: "1.6"
            }}
          >
            Everything you need to advance your career journey - personalized guidance, proven tools, and expert support.
          </p>

          {/* Video Section with CareerFrame Interface */}
          <div 
            className="mb-12 relative mx-auto main-video-container"
            style={{
              width: "1216px",
              maxWidth: "calc(100vw - 48px)"
            }}
          >
            <div 
              className="relative rounded-xl overflow-hidden border-2 border-gray-200 cursor-pointer group w-full main-video-frame" 
              style={{ 
                aspectRatio: "16/9",
                backgroundColor: "#ffffff",
                backgroundImage: "url('/VideoCover.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >

              
              {/* CareerFrame Image */}
              <img 
                src="/VideoCover.png" 
                alt="CareerFrame Dashboard Interface showing career development tools and progress tracking" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 2
                }}
                onLoad={() => console.log('VideoCover.png loaded successfully')}
                onError={(e) => {
                  console.error('Failed to load VideoCover.png', e);
                }}
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 20 }}>
                <div 
                  className="play-button-circle w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110" 
                  style={{ 
                    backgroundColor: '#FFFFFFCC',
                    background: '#FFFFFFCC',
                    border: '1px solid rgba(200, 200, 200, 0.3)',
                    backdropFilter: 'blur(4px)',
                    opacity: '1'
                  }}
                >
                  <div 
                    className="ml-1" 
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '16px solid #829340',
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          </div>

          {/* Three Column Features with Connected Progress Bars */}
          <div className="relative">
            
            {/* Desktop: Connected Progress Bars - COMMENTED OUT FOR NOW
            <div className="hidden md:block mb-8">
              <div className="flex items-center w-full">
                <div className="flex-1 h-4 rounded-l-full relative overflow-hidden" style={{ backgroundColor: "#D5D7DD" }}>
                  <div 
                    className="absolute top-0 left-0 h-full rounded-l-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: "100%",
                      backgroundColor: "#F97316"
                    }}
                  />
                </div>
                
                <div className="w-4 h-4 relative overflow-hidden" style={{ backgroundColor: "#D5D7DD" }}>
                  <div 
                    className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: "100%",
                      backgroundColor: "#F97316"
                    }}
                  />
                </div>
                
                <div className="flex-1 h-4 relative overflow-hidden" style={{ backgroundColor: "#D5D7DD" }}>
                  <div 
                    className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: "100%",
                      backgroundColor: "#F97316"
                    }}
                  />
                </div>
                
                <div className="w-4 h-4 relative overflow-hidden" style={{ backgroundColor: "#D5D7DD" }}>
                  <div 
                    className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: "100%",
                      backgroundColor: "#F97316"
                    }}
                  />
                </div>
                
                <div className="flex-1 h-4 rounded-r-full relative overflow-hidden" style={{ backgroundColor: "#D5D7DD" }}>
                  <div 
                    className="absolute top-0 left-0 h-full rounded-r-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: "100%",
                      backgroundColor: "#F97316"
                    }}
                  />
                </div>
              </div>
            </div>
            */}

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Career Coaching",
                  description: "Get expert guidance every step of the way. Our AI-powered coach builds a relationship with you, offering tailored advice and strategies that align with your unique strengths and career goals."
                },
                {
                  title: "Skill Gap Analysis & Growth", 
                  description: "Discover exactly where you stand. CareerFrame identifies the gaps between your current skills and the ones required for your dream role, giving you a clear path to grow and advance."
                },
                {
                  title: "Tailored Career Pathways",
                  description: "No one-size-fits-all approach. CareerFrame creates a bespoke roadmap for your career, matching you with the right opportunities and learning resources to unlock your potential."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                  style={{
                    position: "relative",
                    border: activeFeature === index ? '2px solid #829340' : '2px solid transparent',
                    borderTop: activeFeature === index ? '4px solid #829340' : '4px solid #F5F5F5'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleFeatureClick(index);
                  }}
                  onMouseEnter={() => handleFeatureHover(index)}
                >
                  
                  {/* Mobile: Individual Progress Bars - COMMENTED OUT FOR NOW
                  <div className="md:hidden mb-6">
                    <div className="w-full h-4 rounded-full relative overflow-hidden" style={{ backgroundColor: "#D5D7DD" }}>
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: "100%",
                          backgroundColor: "#F97316"
                        }}
                      />
                    </div>
                  </div>
                  */}
                  
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#141414"
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#525252",
                      lineHeight: "1.6"
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom "Get Started" Section - Image Background Inside Container */}
      <section 
        className="py-16 text-white relative overflow-hidden get-started-section"
        style={{
          backgroundColor: "#ffffff",
          minHeight: "300px"
        }}
      >
        <div 
          className="mx-auto relative get-started-dark-container"
          style={{
            width: "1216px",
            height: "212px",
            maxWidth: "calc(100vw - 48px)",
            borderRadius: "16px",
            padding: "64px",
            boxSizing: "border-box",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "linear-gradient(135deg, #1f2937 0%, #111827 100%), linear-gradient(0deg, rgba(20, 20, 20, 0.698), rgba(20, 20, 20, 0.698))",
            backgroundColor: "rgba(20, 20, 20, 0.698)"
          }}
        >
          {/* Text Content */}
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "64px",
              transform: "translateY(-50%)",
              maxWidth: "400px",
              color: "white",
              zIndex: 10
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "32px",
                color: "white",
                marginBottom: "12px",
              }}
            >
              See CareerFrame in Action
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#D1D5DB",
                margin: "0"
              }}
            >
              Take a 2-minute Signup tour and discover how we'll transform your career journey.
            </p>
          </div>
          
          {/* Truly Centered Button */}
          <div style={{ 
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 11
          }}>
            <button
              style={{
                backgroundColor: "#829340",
                borderColor: "#829340",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                padding: "14px 32px",
                borderRadius: "24px",
                border: "none",
                boxShadow: "0 4px 12px rgba(130, 147, 64, 0.3)",
                color: "white",
                whiteSpace: "nowrap"
              }}
              className="text-white hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              Get started
            </button>
          </div>
        </div>

      </section>

      {/* Section Divider */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 section-divider-white"
        style={{
          backgroundColor: "#ffffff !important",
          background: "#ffffff !important",
          backgroundImage: "none !important"
        }}
      >
        <div className="border-b border-gray-200"></div>
      </div>
    </>
  );
}