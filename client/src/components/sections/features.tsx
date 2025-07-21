import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaitlistPopup } from "@/components/ui/waitlist-popup";
import { useWaitlistPopup } from "@/hooks/use-waitlist-popup";
import { 
  Bot, 
  Search, 
  TrendingUp, 
  Target, 
  FileText, 
  Users, 
  Trophy,
  Goal,
  Route,
  ArrowRight,
  Play
} from "lucide-react";
import careerPathwaysImage from "@assets/Screenshot 2025-05-17 182855.png";
import xpRewardInterface from "@assets/XP & Reward Interface.png";
import careerChoiceImage from "@assets/East Asian Male Choosing Career.png";

const features = [
  {
    icon: Target,
    title: "Gain Clarity in Your Job Search",
    description: "Stop feeling overwhelmed by endless job listings. Get specific direction on which roles to target and how to position yourself as the ideal candidate.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional gaining clarity on career direction",
    cta: "Get Clear Direction"
  },
  {
    icon: TrendingUp,
    title: "Overcome Self-Doubt",
    description: "Build unshakeable confidence in your abilities. Identify your unique strengths and learn how to articulate your value to employers.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional building confidence and overcoming doubt",
    cta: "Build Confidence"
  },
  {
    icon: Trophy,
    title: "Discover Roles That Align With You",
    description: "Move beyond settling for 'good enough' jobs. Explore opportunities that align with your values and ambitions through our matching system.",
    image: careerChoiceImage,
    alt: "Professional exploring career opportunities",
    cta: "Explore Opportunities"
  },
  {
    icon: Search,
    title: "Career Alignment & Role Insights",
    description: "Get in-depth role overviews and personalized recommendations based on your skills, experience, and career aspirations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Data analysis and career insights dashboard",
    cta: "Get Role Insights"
  },

];

const additionalFeatures = [
  {
    icon: Users,
    title: "Connect with Like-Minded Professionals",
    description: "Join a supportive community of career-changers. Share experiences, celebrate wins, and get encouragement when you need it most.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Goal,
    title: "Career Alignment & Role Insights",
    description: "Get in-depth role overviews and personalized recommendations based on your skills, experience, and career aspirations.",
    color: "bg-cyan-100 text-cyan-500"
  },
  {
    icon: Search,
    title: "Explore Roles Access (Freemium/Premium)",
    description: "Get limited or unlimited access to job fit, salaries, and perks.",
    color: "bg-blue-100 text-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Deep Skill Gap Analysis (Premium)",
    description: "Receive a detailed skill gap report to understand areas needing improvement for career advancement.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Target,
    title: "Milestone Tracker (Freemium/Premium)",
    description: "Track and celebrate progress with personalized goals and visible milestones.",
    color: "bg-purple-100 text-purple-500"
  },
  {
    icon: FileText,
    title: "AI-Powered Resume Builder",
    description: "Generate a professional, optimized resume tailored to your goals.",
    color: "bg-pink-100 text-pink-500"
  },
  {
    icon: FileText,
    title: "AI-Generated Cover Letter",
    description: "Automatically generate a personalized cover letter for the role you want.",
    color: "bg-indigo-100 text-indigo-500"
  },
  {
    icon: Trophy,
    title: "XP Points & Rewards (2x Premium)",
    description: "Earn XP for milestones and unlock rewards to accelerate your career journey.",
    color: "bg-yellow-100 text-yellow-500"
  }
];

const valueProps = [
  {
    icon: Bot,
    title: "Personalized Career Coaching",
    description: "Get expert guidance every step of the way. Our AI-powered coach builds a relationship with you, offering tailored advice and strategies that align with your unique strengths and career goals.",
    color: "bg-fresh-green text-white"
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis & Growth",
    description: "Discover exactly where you stand. CareerFrame identifies the gaps between your current skills and the ones required for your dream role, giving you a clear path to grow and advance.",
    color: "bg-navy text-white"
  },
  {
    icon: Route,
    title: "Tailored Career Pathways",
    description: "No one-size-fits-all approach. CareerFrame creates a bespoke roadmap for your career, matching you with the right opportunities and learning resources to unlock your potential.",
    color: "bg-purple-500 text-white"
  }
];

export function FeaturesSection() {
  const { ref: valuePropRef, isVisible: valuePropVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: additionalRef, isVisible: additionalVisible } = useScrollAnimation();
  const { isOpen, openPopup, closePopup } = useWaitlistPopup();

  return (
    <>
      <WaitlistPopup isOpen={isOpen} onClose={closePopup} />
      {/* Value Proposition */}
      <section className="section-padding section-divider" style={{ backgroundColor: 'var(--background-white)' }}>
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div 
            ref={valuePropRef}
            className={`transition-all duration-700 ${valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="heading-lg text-center element-spacing" style={{ color: 'var(--primary-navy)' }}>
              What You Get: A Complete Career Development System
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto element-spacing" style={{ color: 'var(--text-secondary)' }}>
              Everything you need to advance your career journey - personalized guidance, proven tools, and expert support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 card-hover stagger-${index + 1} ${
                  valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`w-16 h-16 ${prop.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{prop.title}</h3>
                <p className="text-black font-bold">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <div className={`mt-16 text-center transition-all duration-700 ${
            valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">
                See CareerFrame in Action
              </h3>
              <p className="text-soft-grey mb-6">
                Take a 2-minute interactive tour and discover how we'll transform your career journey.
              </p>
              <Button 
                onClick={openPopup}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                Start Interactive Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-20 bg-light-grey">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
          <div 
            ref={featuresRef}
            className={`text-center mb-16 transition-all duration-700 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6">
              Powerful Features to Accelerate Your Career
            </h2>
            <p className="text-xl text-soft-grey max-w-3xl mx-auto">
              Every tool you need to discover, prepare for, and land your dream career - all powered by intelligent AI guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white shadow-lg card-hover transition-all duration-500 delay-${index * 100} ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-fresh-green/10 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-fresh-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{feature.title}</h3>
                      <p className="text-soft-grey">{feature.description}</p>
                    </div>
                  </div>
                  <img 
                    src={feature.image}
                    alt={feature.alt}
                    className="rounded-lg w-full h-48 object-cover object-top mb-4" 
                  />
                  <Button 
                    onClick={openPopup}
                    variant="link" 
                    className="p-0 h-auto font-semibold" 
                    style={{ color: '#1F3A93' }}
                  >
                    {feature.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div 
            ref={additionalRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 delay-${index * 50} ${
                  additionalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-5">
                  <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-navy mb-2">{feature.title}</h4>
                  <p className="text-sm text-soft-grey">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* XP & Rewards Highlight */}
          <div className="mt-16">
            <Card className="gradient-green text-white overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">🏆 Earn XP & Unlock Rewards</h3>
                    <p className="text-green-50 text-lg mb-6">
                      Complete tasks like CV building, skill upgrades, or community engagement to earn XP. Exchange points for discounts with partner brands or unlock premium features.
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">Build</div>
                        <div className="text-green-200 text-sm">Your Skills</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">Earn</div>
                        <div className="text-green-200 text-sm">XP Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">Unlock</div>
                        <div className="text-green-200 text-sm">Rewards</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <img 
                      src={xpRewardInterface}
                      alt="CareerFrame XP and Rewards Interface showing team leaderboards and milestone tracking" 
                      className="rounded-xl mx-auto max-w-full h-auto" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>
    </>
  );
}
