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

const features = [
  {
    icon: Bot,
    title: "🧠 AI Career Coach",
    description: "Real-time personalized chat support that guides you through each step of your career journey with intelligent recommendations.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Diverse team of professionals collaborating on career planning",
    cta: "Try AI Coach"
  },
  {
    icon: Search,
    title: "🔍 Role Discovery & Career Alignment",
    description: "Explore thousands of job roles based on your personality, experience, and skillset. Get matched with roles that suit you.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional career coaching session with mentor and client",
    cta: "Discover Roles"
  },
  {
    icon: TrendingUp,
    title: "🧱 Skill Gap Analysis",
    description: "Understand exactly what's missing between your current profile and your desired role with targeted learning resources.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional development training session with skills assessment",
    cta: "Analyze Skills"
  },
  {
    icon: Target,
    title: "🎯 Milestone Tracker",
    description: "Follow structured, manageable steps toward your career goal. Regenerate or reset milestones as your path evolves.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional celebrating success and achievement in modern workplace",
    cta: "Track Progress"
  }
];

const additionalFeatures = [
  {
    icon: FileText,
    title: "📑 AI CV & Cover Letter Builder",
    description: "Instantly create professional documents tailored to your chosen role and career data.",
    color: "bg-indigo-100 text-indigo-500"
  },
  {
    icon: Users,
    title: "🧩 Community & Group Networking",
    description: "Connect with others in your target industry and join industry-specific chat groups.",
    color: "bg-pink-100 text-pink-500"
  },
  {
    icon: Trophy,
    title: "🏆 XP & Rewards System",
    description: "Earn XP for completing tasks and exchange for discounts with partnered brands.",
    color: "bg-yellow-100 text-yellow-500"
  }
];

const valueProps = [
  {
    icon: Goal,
    title: "Perfect Role Alignment",
    description: "Match with careers that truly suit your personality, skills, and aspirations - not just market trends.",
    color: "bg-fresh-green text-white"
  },
  {
    icon: Route,
    title: "Clear Action Plan",
    description: "Get step-by-step milestones and learning resources to bridge the gap between where you are and where you want to be.",
    color: "bg-navy text-white"
  },
  {
    icon: Trophy,
    title: "Motivated Progress",
    description: "Stay engaged with XP rewards, community support, and continuous AI coaching throughout your journey.",
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
                className={`bg-white shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 100} ${
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
                    className="rounded-lg w-full h-48 object-cover mb-4" 
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
            className="grid md:grid-cols-3 gap-8"
          >
            {additionalFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 delay-${index * 100} ${
                  additionalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-2">{feature.title}</h4>
                  <p className="text-soft-grey">{feature.description}</p>
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
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-green-200 text-sm">Average XP/Week</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-green-200 text-sm">Partner Brands</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">$200</div>
                        <div className="text-green-200 text-sm">Avg. Savings/Month</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Professional celebrating success" 
                      className="rounded-xl mx-auto" 
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
