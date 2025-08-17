import milestoneTrackerImg from "@/assets/BlogImages/MilestoneTracker.png";
import selfDoubtImg from "@/assets/BlogImages/selfDoubt.png";
import deepSkillImg from "@/assets/BlogImages/DeepSkill.png";
import careerAlignmentImg from "@/assets/BlogImages/careerAlignment.png";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function PowerfulFeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Milestone Tracker",
      description: "Track and celebrate progress with personalized goals and visible milestones.",
      image: milestoneTrackerImg,
      actionText: "Get clear direction",
      detailedContext: "CareerFrame analyses your strengths, experiences, and ambitions to uncover roles that truly align with who you are. You'll discover paths you may never have considered — ones that fit your skills and values, bring more fulfilment, and show you where you'll thrive. With a clear, personalised plan, you'll know exactly how to get there."
    },
    {
      title: "Self Doubt",
      description: "Build unshakeable confidence in your abilities. Identify your unique strengths and learn how to articulate your value to employers.",
      image: selfDoubtImg,
      actionText: "Build confidence",
      detailedContext: "CareerFrame matches you with paths that fit your strengths, experiences, and passions — making work feel natural, not forced. When your role aligns with who you are, confidence grows, learning feels easier, and you step forward with purpose instead of being held back."
    },
    {
      title: "Deep Skill Gap Analysis",
      description: "Receive a detailed skill gap report to understand areas needing improvement for career advancement.",
      image: deepSkillImg,
      actionText: "Explore opportunities",
      highlight: true,
      detailedContext: `The Deep Skill Gap Analysis compares your current skills and experience with the real requirements of your chosen role. You'll see a clear breakdown of what you already have, what's still missing, and the fastest, most affordable ways to fill those gaps.
No vague advice — just precise steps, resources, and actions that get you closer to your target career without wasting time or money.`
    },
    {
      title: "Career Alignment & Role Insights",
      description: "Get in-depth role overviews and personalized recommendations based on your skills, experience, and career aspirations.",
      image: careerAlignmentImg,
      actionText: "Get role insights",
      detailedContext: `Choosing a career isn't just about the next job — it's about the journey ahead. CareerFrame gives you a complete picture of what life in a role looks like, today and years down the line.

We break down everything that matters:
• Career Progression – the promotions and paths typically available from that role.
• Salary Expectations – what you can earn at each stage of your journey.
• Job Perks & Benefits – the real advantages that make a role worthwhile beyond pay.
• Skills Required – the capabilities employers expect and how yours stack up.

This means you don't just apply blind — you apply with foresight. You'll know exactly what the role offers, what it demands, and how it can grow with you.`
    }
  ];

  const handleFeatureClick = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <section id="powerful-features" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "-0.02em",
              color: "#1f2937",
              marginBottom: "16px"
            }}
          >
            Powerful features to accelerate your career
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            Every tool you need to discover, prepare for, and land your dream career - all powered by intelligent AI guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="w-full">
                <div
                  className="group cursor-pointer transition-all duration-300"
                  onClick={() => handleFeatureClick(index)}
                >
                  {/* Rounded Rectangle Image */}
                  <div className="relative mb-6">
                    <div 
                      className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105"
                      style={{
                        width: "100%",
                        height: "320px",
                        borderRadius: "16px",
                        border: expandedFeature === index ? "2px solid #829340" : "2px solid #e5e7eb"
                      }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Below Image - Left Aligned */}
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#1f2937",
                          margin: 0,
                        }}
                      >
                        {feature.title}
                      </h3>
                      {expandedFeature === index ? (
                        <ChevronUp className="h-5 w-5 text-[#829340]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#6b7280",
                        marginBottom: "20px"
                      }}
                    >
                      {feature.description}
                    </p>

                    {/* Action Link */}
                    <button
                      className="inline-flex items-center text-sm font-medium transition-colors duration-200 hover:opacity-80"
                      style={{
                        color: "#829340",
                        fontFamily: "Inter, sans-serif"
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {feature.actionText}
                      <span className="ml-2">↗</span>
                    </button>
                  </div>
                </div>
                
                {/* Individual Dropdown Content - appears right below this feature */}
                {expandedFeature === index && (
                  <div 
                    className="mt-6 w-full animate-in slide-in-from-top-2 duration-300"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "12px",
                      padding: "24px",
                      border: "2px solid #829340",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      animation: "slideDown 0.3s ease-out"
                    }}
                  >
                    <div className="mb-4">
                      <h4
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "32px",
                          color: "#141414",
                          margin: 0,
                        }}
                      >
                        {feature.title}
                      </h4>
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#525252",
                        whiteSpace: "pre-line",
                        minHeight: "50px",
                        display: "block",
                        visibility: "visible",
                        opacity: 1
                      }}
                    >
                      {feature.detailedContext || "No content available"}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}