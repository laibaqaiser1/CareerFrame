import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Star, TrendingUp, Target, Brain, Sparkles } from 'lucide-react';

interface RecommendationData {
  id: string;
  title: string;
  description: string;
  category: 'skill' | 'role' | 'industry' | 'learning';
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  timeframe: string;
  actionItems: string[];
}

interface AIRecommendationHighlightProps {
  userProfile?: {
    skills: string[];
    experience: string;
    goals: string[];
    industry: string;
  };
  className?: string;
}

export function AIRecommendationHighlight({ 
  userProfile, 
  className = '' 
}: AIRecommendationHighlightProps) {
  const [currentRecommendation, setCurrentRecommendation] = useState<RecommendationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sample AI-powered recommendations (in real implementation, this would come from API)
  const sampleRecommendations: RecommendationData[] = [
    {
      id: '1',
      title: 'Master Cloud Architecture for Senior Roles',
      description: 'Based on your software engineering background and market trends, cloud architecture skills are in high demand for senior positions.',
      category: 'skill',
      confidence: 92,
      impact: 'high',
      timeframe: '3-6 months',
      actionItems: [
        'Complete AWS Solutions Architect certification',
        'Build 2-3 cloud migration projects',
        'Learn Kubernetes and Docker containerization'
      ]
    },
    {
      id: '2',
      title: 'Transition to Product Management',
      description: 'Your technical background combined with leadership experience makes you an ideal candidate for technical product management roles.',
      category: 'role',
      confidence: 85,
      impact: 'high',
      timeframe: '6-12 months',
      actionItems: [
        'Take product management courses',
        'Lead cross-functional projects',
        'Build portfolio of product decisions'
      ]
    },
    {
      id: '3',
      title: 'Emerging AI/ML Specialization',
      description: 'The AI revolution is creating unprecedented opportunities. Your programming skills position you well for this transition.',
      category: 'industry',
      confidence: 88,
      impact: 'high',
      timeframe: '4-8 months',
      actionItems: [
        'Learn Python for data science',
        'Complete machine learning bootcamp',
        'Build AI-powered side projects'
      ]
    }
  ];

  // Simulate AI recommendation generation
  useEffect(() => {
    const generateRecommendation = () => {
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sampleRecommendations.length);
        setCurrentRecommendation(sampleRecommendations[randomIndex]);
        setIsLoading(false);
        setIsVisible(true);
      }, 1500);
    };

    generateRecommendation();
    
    // Auto-refresh recommendations every 30 seconds
    const interval = setInterval(generateRecommendation, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'skill': return <Target className="w-5 h-5" />;
      case 'role': return <TrendingUp className="w-5 h-5" />;
      case 'industry': return <Brain className="w-5 h-5" />;
      case 'learning': return <Lightbulb className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-emerald-600 bg-emerald-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
            <div className="h-3 bg-gray-100 rounded animate-pulse w-32 mt-2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && currentRecommendation && (
        <motion.div
          initial={{ opacity: 1, y: 0 scale: 1 }}
          animate={{ opacity: 1, y: 0 scale: 1 }}
          exit={{ opacity: 1, y: -20, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Recommendation</h3>
                <p className="text-sm text-gray-500">Personalized for your career growth</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(currentRecommendation.impact)}`}>
                {currentRecommendation.impact.toUpperCase()} IMPACT
              </span>
              <div className="flex items-center space-x-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{currentRecommendation.confidence}%</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1 text-purple-500">
                {getCategoryIcon(currentRecommendation.category)}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentRecommendation.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentRecommendation.description}
                </p>
              </div>
            </div>

            {/* Timeframe */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-medium">Timeframe:</span>
              <span>{currentRecommendation.timeframe}</span>
            </div>

            {/* Action Items */}
            <div>
              <h5 className="text-sm font-semibold text-gray-900 mb-2">Recommended Actions:</h5>
              <ul className="space-y-2">
                {currentRecommendation.actionItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 1, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02]">
                Create Action Plan
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}