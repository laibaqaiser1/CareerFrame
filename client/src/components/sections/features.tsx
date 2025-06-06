import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
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
  ArrowRight
} from "lucide-react";
import careerPathwaysImage from "@assets/Screenshot 2025-05-17 182855.png";
import xpRewardInterface from "@assets/XP & Reward Interface.png";

const features = [
  {
    icon: Bot,
    title: "1. Personalized Career Coaching",
    description: "Tailored AI-powered coaching offering personalized advice and action plans to guide your career journey.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "AI-powered career coaching session",
    cta: "Start Coaching"
  },
  {
    icon: TrendingUp,
    title: "2. Skill Gap Analysis",
    description: "Assess your current skills, identify gaps, and receive recommendations to elevate your qualifications.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional skills assessment and analysis",
    cta: "Analyze Skills"
  },
  {
    icon: Route,
    title: "3. Tailored Career Pathways",
    description: "Receive a bespoke roadmap with clear milestones and tailored career opportunities based on your goals.",
    image: careerPathwaysImage,
    alt: "Professional exploring diverse career paths and opportunities",
    cta: "Build Pathway"
  },
  {
    icon: FileText,
    title: "4. AI-Powered Resume Builder",
    description: "Generate a professional, optimized resume tailored to the job you're aiming for with AI-driven insights.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "AI-generated professional resume creation",
    cta: "Create Resume"
  }
];

const additionalFeatures = [
  {
    icon: FileText,
    title: "5. AI-Generated Cover Letter",
    description: "Automatically generate a personalized cover letter that fits the specific role you're applying for.",
    color: "bg-indigo-100 text-indigo-500"
  },
  {
    icon: Target,
    title: "6. Milestone Tracker",
    description: "Track and celebrate career progress with personalized goals and visible milestones (Premium: Full visibility).",
    color: "bg-purple-100 text-purple-500"
  },
  {
    icon: Search,
    title: "7. Explore Roles Access",
    description: "Get limited (Freemium) or unlimited (Premium) access to in-depth role insights, including job fit, salaries, and perks.",
    color: "bg-blue-100 text-blue-500"
  },
  {
    icon: TrendingUp,
    title: "8. Deep Skill Gap Analysis (Premium)",
    description: "Receive a detailed skill gap report to understand areas needing improvement for career advancement.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Trophy,
    title: "9. XP Points & Rewards (2x XP Premium)",
    description: "Earn XP points for completing milestones and unlock rewards to accelerate your career progress.",
    color: "bg-yellow-100 text-yellow-500"
  },
  {
    icon: Users,
    title: "10. Team Networking (Freemium & Premium)",
    description: "Connect with other professionals through team networking groups (Premium: Industry-specific communities).",
    color: "bg-pink-100 text-pink-500"
  },
  {
    icon: Goal,
    title: "11. Career Alignment & Role Insights",
    description: "Get in-depth role overviews and personalized recommendations based on your skills, experience, and career aspirations.",
    color: "bg-cyan-100 text-cyan-500"
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

  return (
    <>
      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={valuePropRef}
            className={`transition-all duration-700 ${valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              More Than a Job Board - It's Your Complete Career Ecosystem
            </h2>
            <p className="text-xl text-soft-grey max-w-3xl mx-auto mb-12">
              We don't just show you what jobs exist. We show you which roles are right for you, and exactly how to get there with AI-powered guidance every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`w-16 h-16 ${prop.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{prop.title}</h3>
                <p className="text-soft-grey">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={featuresRef}
            className={`text-center mb-16 transition-all duration-700 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
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
                  <Button variant="link" className="text-fresh-green p-0 h-auto font-semibold">
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
