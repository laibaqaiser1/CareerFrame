import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import { SoundButton } from "@/components/SoundButton";
import msgIcon from "../../assets/message-chat-circle.png";
import zapIcon from "../../assets/zap.png";
import chartIcon from "../../assets/chart-breakout-square.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

const steps = [
  {
    icon: msgIcon,
    title: "Complete Assessment",
    description:
      "Answer questions about your skills, experience, and career goals. Our AI analyzes your profile to understand your unique strengths and aspirations.",
  },
  {
    icon: zapIcon,
    title: "Get Your Roadmap",
    description:
      "Receive a personalized career pathway with specific action steps, skill recommendations, and milestone targets tailored to your dream job.",
  },
  {
    icon: chartIcon,
    title: "Take Action",
    description:
      "Follow your tailored roadmap, track progress with XP points, and leverage our networking features to accelerate your career advancement.",
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
      <section
        id="how-it-works"
        className="py-8 sm:py-12 md:py-16 lg:py-20"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div
            ref={ref}
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "-0.02em",
                textAlign: "center",
                color: "#141414",
              }}
            >
              How It Works
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Get started in minutes and see results in days. Our simple 3-step
              process
              <br className="hidden md:block" />
              transforms your career journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 delay-${index * 100} ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div 
                      className="mb-6 border border-gray-300 relative"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="object-contain absolute"
                        style={{
                          width: "24px",
                          height: "24px",
                          top: "12px",
                          left: "12px",
                          opacity: 1,
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            className={`get-in-touch-bg rounded-2xl p-8 text-center transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              backgroundColor: "#ECEEE4",
              background: "#ECEEE4",
              backgroundImage: "none",
              border: "2px solid #DDDDDD",
              minHeight: "200px",
              position: "relative",
            }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative z-10">
                  <img
                    src="/Avatar1.png"
                    alt="User Avatar 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative z-20">
                  <img
                    src="/Avatar2.png"
                    alt="User Avatar 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative z-10">
                  <img
                    src="/Avatar3.png"
                    alt="User Avatar 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to transform your career journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>

            <SoundButton
              soundType="submit"
              onClick={openPopup}
              className="text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#829340" }}
            >
              Get in touch
            </SoundButton>
          </div>
        </div>
      </section>
    </>
  );
}
