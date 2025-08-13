import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import { Bot, TrendingUp, Route, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import careerPathVideo from "../../assets/Career path product video.mp4";

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
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  
  // Debug logging
  console.log("FeaturesSection - cardsVisible:", cardsVisible);
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoElementRef.current) {
      if (isPlaying) {
        videoElementRef.current.pause();
      } else {
        videoElementRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />

      <section
        className="py-8 sm:py-12 md:py-16 features-white-bg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 features-white-bg"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "36px",
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
            ref={videoRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              videoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 w-full">
              <video
                ref={videoElementRef}
                className="w-full h-auto"
                poster="" // You can add a poster image here if needed
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls
              >
                <source src={careerPathVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Overlay Button */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button
                    onClick={toggleVideo}
                    className="bg-white bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition-all duration-300 shadow-lg"
                  >
                    <Play className="h-12 w-12 text-gray-800 ml-1" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Progress Bar Test - Always Visible on All Screens */}
          <div className="mb-8">
            <div className="w-full h-8 bg-red-500 mb-6 flex items-center justify-center text-white font-bold">
              PROGRESS BAR TEST - SHOULD BE VISIBLE
            </div>
            <div className="w-full h-6 bg-gray-400 mb-6 relative">
              <div className="h-full bg-green-600 w-3/4"></div>
            </div>
          </div>

          {/* Feature Cards */}
          <motion.div
            ref={cardsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                {/* Individual Progress Bars Test */}
                <div className="mb-6">
                  <div className="w-full h-8 bg-purple-500 mb-2 flex items-center justify-center text-white font-bold text-sm">
                    CARD {index + 1} PROGRESS TEST
                  </div>
                  <div className="w-full h-6 bg-orange-400 relative">
                    <div className="h-full bg-cyan-500 w-2/3"></div>
                  </div>
                </div>

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

          {/* CTA Section - Fixed container with proper layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mx-auto"
            style={{
              width: "1216px",
              height: "212px",
              maxWidth: "calc(100vw - 48px)",
              background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "64px",
              boxSizing: "border-box"
            }}
          >
            <div 
              className="flex items-center justify-between w-full h-full"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
                color: "white"
              }}
            >
              <div className="text-left flex-1">
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
                    maxWidth: "400px",
                    margin: "0"
                  }}
                >
                  Take a 2-minute Signup tour and discover how we'll transform your career journey.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <Button
                  onClick={openPopup}
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
                    color: "white"
                  }}
                  className="text-white hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
