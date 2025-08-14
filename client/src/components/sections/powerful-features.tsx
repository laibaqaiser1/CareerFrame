import milestoneTrackerImg from "@/assets/BlogImages/MilestoneTracker.png";
import selfDoubtImg from "@/assets/BlogImages/selfDoubt.png";
import deepSkillImg from "@/assets/BlogImages/DeepSkill.png";
import careerAlignmentImg from "@/assets/BlogImages/careerAlignment.png";

export function PowerfulFeaturesSection() {
  const features = [
    {
      title: "Milestone Tracker (Freemium/Premium)",
      description: "Track and celebrate progress with personalized goals and visible milestones.",
      image: milestoneTrackerImg,
      actionText: "Get clear direction"
    },
    {
      title: "Overcome self-doubt",
      description: "Build unshakeable confidence in your abilities. Identify your unique strengths and learn how to articulate your value to employers.",
      image: selfDoubtImg,
      actionText: "Build confidence"
    },
    {
      title: "Deep Skill Gap Analysis",
      description: "Receive a detailed skill gap report to understand areas needing improvement for career advancement.",
      image: deepSkillImg,
      actionText: "Explore opportunities",
      highlight: true
    },
    {
      title: "Career alignment & role insights",
      description: "Get in-depth role overviews and personalized recommendations based on your skills, experience, and career aspirations.",
      image: careerAlignmentImg,
      actionText: "Get role insights"
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300"
            >
              {/* Rounded Rectangle Image */}
              <div className="relative mb-6">
                <div 
                  className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: "100%",
                    height: "320px",
                    borderRadius: "16px",
                    border: "2px solid #e5e7eb"
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
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#1f2937",
                    marginBottom: "12px"
                  }}
                >
                  {feature.title}
                </h3>
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
                >
                  {feature.actionText}
                  <span className="ml-2">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}