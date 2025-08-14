import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import { Bot, TrendingUp, Route, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import videoCoverImage from "../../assets/VideoCover.png";
// Using direct path approach for video with spaces in filename

const valueProps = [
  {
    icon: Bot,
    title: "Personalized Career Coaching",
    description:
      "Get expert guidance every step of the way. Our AI-powered coach builds a relationship with you, offering tailored advice and strategies that align with your unique strengths and career goals.",
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis & Growth",
    description:
      "Discover exactly where you stand. CareerFrame identifies the gaps between your current skills and the ones required for your dream role, giving you a clear path to grow and advance.",
  },
  {
    icon: Route,
    title: "Tailored Career Pathways",
    description:
      "No one-size-fits-all approach. CareerFrame creates a bespoke roadmap for your career, matching you with the right opportunities and learning resources to unlock your potential.",
  },
];

export function FeaturesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: videoSectionRef, isVisible: videoVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  
  // Debug logging
  console.log("FeaturesSection - cardsVisible:", cardsVisible);
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoPreloaded, setVideoPreloaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* Hidden video element for preloading */}
      <video
        ref={preloadVideoRef}
        style={{ display: 'none' }}
        preload="auto"
        muted
        onLoadedData={() => {
          console.log('Video preloaded successfully');
          setVideoPreloaded(true);
        }}
        onCanPlayThrough={() => {
          console.log('Video can play through - fully preloaded');
          setVideoPreloaded(true);
        }}
        onError={(e) => {
          console.error('Video preload error:', e);
          console.error('Video preload error details:', e.currentTarget.error);
        }}
      >
        <source src="/career-path-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />

      <section
        className="py-8 sm:py-12 md:py-16 features-white-bg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 features-white-bg"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 0 }}
            animate={
              sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "44px",
                letterSpacing: "-0.02em",
                textAlign: "center",
                color: "#141414",
                marginBottom: "16px",
              }}
            >
              What You Get: A Complete Career
              <br className="hidden md:block" />
              Development System
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#525252",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Everything you need to advance your career journey - personalized
              guidance, proven tools, and expert support.
            </p>
          </motion.div>

          {/* Video Demo Section */}
          <motion.div
            ref={videoSectionRef}
            initial={{ opacity: 0, y: 0 }}
            animate={
              videoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
            }
            transition={{ duration: 0.7, delay: 0 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 w-full aspect-video">
              {showVideo ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  onPlay={() => {
                    console.log('Video started playing');
                    setIsPlaying(true);
                  }}
                  onPause={() => {
                    console.log('Video paused');
                    setIsPlaying(false);
                  }}
                  onEnded={() => {
                    console.log('Video ended');
                    setIsPlaying(false);
                    setShowVideo(false);
                  }}
                  onError={(e) => {
                    console.error('Video error:', e);
                    console.error('Video error details:', e.currentTarget.error);
                  }}
                  onLoadStart={() => console.log('Video load started')}
                  onLoadedData={() => console.log('Video data loaded')}
                  onCanPlay={() => console.log('Video can play')}
                  onCanPlayThrough={() => console.log('Video can play through')}
                >
                  <source src="/career-path-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={videoCoverImage}
                    alt="CareerFrame Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Professional Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <div className="relative">
                      {/* Preload indicator */}
                      {videoPreloaded && (
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                      <button
                        onClick={() => {
                          console.log('🎬 Play button clicked!');
                          console.log('Video preloaded:', videoPreloaded);
                          setShowVideo(true);
                        }}
                        className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-100 hover:scale-105 transition-all duration-300 shadow-lg"
                        title={videoPreloaded ? 'Video ready to play' : 'Loading video...'}
                      >
                        <Play className="h-12 w-12 text-gray-800 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>



          {/* Feature Cards */}
          <motion.div
            ref={cardsRef}
            initial={{ opacity: 0, y: 0 }}
            animate={
              cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
            }
            transition={{ duration: 0.7, delay: 0 }}
            className="grid md:grid-cols-3 gap-8 md:gap-0 mb-16"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={
                  cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
                }
                transition={{ duration: 0.6, delay: 0 + index * 0.1 }}
                className="text-center"
                style={{
                  borderTop: index === 0 ? '4px solid #829340' : '4px solid #F5F5F5',
                  paddingTop: "20px"
                }}
              >
                {/* Progress Bar - COMMENTED OUT FOR NOW
                <div className="mb-6 w-full">
                  <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1500 ease-out"
                      style={{ 
                        width: cardsVisible ? `${75 + (index * 8)}%` : '0%'
                      }}
                    />
                  </div>
                </div>
                */}

                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#141414",
                    marginBottom: "12px",
                  }}
                >
                  {prop.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#525252",
                  }}
                >
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section - Responsive container with background image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-6xl mx-auto relative overflow-hidden"
            style={{
              borderRadius: "16px",
              padding: "32px",
              boxSizing: "border-box",
              minHeight: window.innerWidth >= 768 ? "212px" : "120px",
              display: "flex",
              alignItems: "center"
            }}
          >
            {/* Background Image */}
            <img
              src="/image.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                borderRadius: "16px"
              }}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.698)",
                borderRadius: "16px"
              }}
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full relative z-10">
              <div className="text-left flex-1 flex flex-col justify-center">
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "white",
                    marginBottom: "8px",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)"
                  }}
                >
                  See CareerFrame in Action
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#E5E7EB",
                    margin: "0",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)"
                  }}
                >
                  Take a 2-minute Signup tour and discover how we'll transform your career journey.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div
                  onClick={() => window.open("https://app.careerframe.co.uk/", "_blank")}
                  ref={(el) => {
                    if (el) {
                      el.style.setProperty("background-color", "#829340", "important");
                      el.style.setProperty("background", "#829340", "important");
                      el.style.setProperty("background-image", "none", "important");
                      el.style.setProperty("border", "2px solid #829340", "important");
                      el.style.setProperty("color", "#ffffff", "important");
                    }
                  }}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(130, 147, 64, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "inline-block",
                    userSelect: "none",
                    minWidth: "120px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: "9999"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty("background-color", "#6d7a35", "important");
                    e.currentTarget.style.setProperty("background", "#6d7a35", "important");
                    e.currentTarget.style.setProperty("border-color", "#6d7a35", "important");
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("background-color", "#829340", "important");
                    e.currentTarget.style.setProperty("background", "#829340", "important");
                    e.currentTarget.style.setProperty("border-color", "#829340", "important");
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Get started
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16">
        <div className="border-b border-gray-200"></div>
      </div>
    </>
  );
}
