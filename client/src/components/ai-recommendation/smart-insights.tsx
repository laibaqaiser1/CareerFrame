import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Zap, Clock, Award } from 'lucide-react';

interface InsightData {
  id: string;
  type: 'market_trend' | 'skill_gap' | 'opportunity' | 'timing';
  title: string;
  description: string;
  value: string;
  change: number;
  icon: any;
  color: string;
}

interface SmartInsightsProps {
  className?: string;
}

export function SmartInsights({ className = '' }: SmartInsightsProps) {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample AI-generated insights
  const sampleInsights: InsightData[] = [
    {
      id: '1',
      type: 'market_trend',
      title: 'Cloud Jobs Surge',
      description: 'Cloud architecture roles increased 34% this quarter',
      value: '+34%',
      change: 34,
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: '2',
      type: 'skill_gap',
      title: 'AI/ML Skills Gap',
      description: 'High demand, low supply in machine learning expertise',
      value: '2.3x',
      change: 130,
      icon: Zap,
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: '3',
      type: 'opportunity',
      title: 'Remote Leadership',
      description: 'Remote management positions show highest growth',
      value: '+45%',
      change: 45,
      icon: Users,
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: '4',
      type: 'timing',
      title: 'Q1 Hiring Peak',
      description: 'January-March shows optimal hiring activity',
      value: 'Peak',
      change: 28,
      icon: Clock,
      color: 'from-orange-400 to-red-500'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setInsights(sampleInsights);
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-2 mb-6">
        <BarChart3 className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Smart Career Insights</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">AI-Powered</span>
      </div>

      <div className="grid gap-4">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          
          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 1, y: 0 }
              animate={{ opacity: 1, y: 0 }
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${insight.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {insight.description}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    insight.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {insight.value}
                  </div>
                  {insight.change !== 0 && (
                    <div className={`text-xs ${
                      insight.change > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {insight.change > 0 ? '+' : ''}{insight.change}%
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 1, y: 0 }
        animate={{ opacity: 1, y: 0 }
        transition={{ delay: 0 }
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200"
      >
        <div className="flex items-center space-x-2 mb-2">
          <Award className="w-4 h-4 text-purple-600" />
          <h4 className="font-semibold text-purple-900 text-sm">AI Analysis Summary</h4>
        </div>
        <p className="text-sm text-purple-800">
          Market conditions favor cloud and AI specialists. Consider upskilling in these areas for maximum career impact in Q1 2025.
        </p>
      </motion.div>
    </div>
  );
}