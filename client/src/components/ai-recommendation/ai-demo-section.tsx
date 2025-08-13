import { useState } from 'react';
import { motion } from 'framer-motion';
import { AIRecommendationHighlight } from './recommendation-highlight';
import { SmartInsights } from './smart-insights';
import { Brain, Sparkles, TrendingUp, User } from 'lucide-react';

interface AIDemoSectionProps {
  className?: string;
}

export function AIDemoSection({ className = '' }: AIDemoSectionProps) {
  const [activeDemo, setActiveDemo] = useState<'recommendations' | 'insights'>('recommendations');
  const [userProfile] = useState({
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    experience: '5 years',
    goals: ['Senior Developer', 'Tech Lead', 'Cloud Architecture'],
    industry: 'Software Engineering'
  });

  const demoTabs = [
    {
      id: 'recommendations' as const,
      label: 'AI Recommendations',
      icon: Brain,
      description: 'Personalized career guidance'
    },
    {
      id: 'insights' as const,
      label: 'Market Insights',
      icon: TrendingUp,
      description: 'Real-time industry trends'
    }
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "-0.02em",
                color: "#1F2937",
                margin: 0
              }}
            >
              AI-Powered Career Intelligence
            </h2>
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience our advanced AI system that analyzes your profile, market trends, and career opportunities 
            to provide personalized recommendations for accelerated growth.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {demoTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`relative px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 ${
                    activeDemo === tab.id
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {activeDemo === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                      style={{ zIndex: -1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - User Profile Simulation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Sample User Profile</h3>
                <p className="text-sm text-gray-500">AI analyzes this data for recommendations</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Experience</h4>
                <p className="text-sm text-gray-600">{userProfile.experience}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Career Goals</h4>
                <div className="space-y-1">
                  {userProfile.goals.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Industry</h4>
                <p className="text-sm text-gray-600">{userProfile.industry}</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">AI Processing</span>
              </div>
              <p className="text-xs text-purple-700">
                Our AI analyzes 50+ data points including skills, market trends, salary data, 
                and career trajectories to generate personalized recommendations.
              </p>
            </div>
          </motion.div>

          {/* Right Side - AI Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-full"
          >
            {activeDemo === 'recommendations' && (
              <AIRecommendationHighlight 
                userProfile={userProfile}
                className="h-full"
              />
            )}
            
            {activeDemo === 'insights' && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
                <SmartInsights />
              </div>
            )}
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Brain,
              title: 'Machine Learning Powered',
              description: 'Advanced algorithms analyze millions of career paths and market data'
            },
            {
              icon: TrendingUp,
              title: 'Real-Time Market Data',
              description: 'Up-to-date insights from job markets, salary trends, and industry shifts'
            },
            {
              icon: Sparkles,
              title: 'Personalized Action Plans',
              description: 'Tailored recommendations based on your unique skills and goals'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Experience AI-Powered Career Guidance
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Join the waitlist to get early access to our AI recommendation engine
          </p>
        </div>
      </div>
    </section>
  );
}