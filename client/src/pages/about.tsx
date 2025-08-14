import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Target, Users, Award, Shield, Heart, Zap, Scale, UserCheck, HandHeart } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* CareerFrame Badge */}
      <div className="absolute top-1/3 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-72 h-72 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 relative z-10">
        <div className="mb-12">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-green-50 transition-colors"
              style={{ color: '#829340' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              About CareerFrame
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              Empowering professionals to discover and achieve their dream careers through AI-powered guidance, built on the foundation of strong values and authentic relationships.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            className="border rounded-xl p-8"
            style={{ 
              backgroundColor: 'rgba(30, 58, 138, 0.05)', 
              borderColor: 'rgba(30, 58, 138, 0.2)' 
            }}
          >
            <Target className="h-12 w-12 mb-4" style={{ color: '#829340' }} />
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>Our Mission</h3>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              To eliminate career confusion and help every professional find their perfect career path through personalized AI guidance and actionable insights, while upholding the highest standards of integrity and respect.
            </p>
          </div>

          <div 
            className="border rounded-xl p-8"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <Users className="h-12 w-12 mb-4" style={{ color: '#1E3A8A' }} />
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>Our Vision</h3>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              A world where every professional feels confident, fulfilled, and aligned with their career path, supported by intelligent technology, authentic community, and unwavering commitment to their success.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#1E3A8A' }}
          >
            Our Story
          </h2>
          <div 
            className="border rounded-xl p-8 max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderColor: 'rgba(130, 147, 64, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                CareerFrame was founded on the belief that everyone deserves to find work that truly fulfills them. We saw too many talented professionals stuck in careers that didn't align with their values, skills, or aspirations.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Our team of career experts, AI researchers, and industry professionals came together to create a platform that provides personalized, actionable career guidance at scale. We combine cutting-edge AI technology with proven career development methodologies, always guided by our core values.
              </p>
              <div 
                className="bg-white rounded-lg p-6 border-l-4"
                style={{ borderColor: '#829340' }}
              >
                <p className="text-lg font-medium" style={{ color: '#1E3A8A' }}>
                  Today, CareerFrame helps thousands of professionals discover their ideal career paths, develop the right skills, and make confident career transitions with courage, discipline, and unwavering support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#1E3A8A' }}
          >
            Our Core Values
          </h2>
          <p 
            className="text-lg text-center mb-12 max-w-3xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            These six values guide every decision we make and every interaction we have. They're not just words on a page—they're the foundation of who we are and how we serve you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="border rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 69, 0, 0.05)', 
                borderColor: 'rgba(255, 69, 0, 0.2)' 
              }}
            >
              <Zap className="h-12 w-12 mx-auto mb-4" style={{ color: '#FF4500' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Courage</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We take bold steps to innovate, challenge the status quo, and help you make brave career decisions that lead to meaningful change.
              </p>
            </div>

            <div 
              className="border rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(75, 0, 130, 0.05)', 
                borderColor: 'rgba(75, 0, 130, 0.2)' 
              }}
            >
              <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: '#4B0082' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Discipline</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We maintain consistent excellence in our work, follow through on commitments, and help you build the structured approach needed for career success.
              </p>
            </div>

            <div 
              className="border rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(34, 139, 34, 0.05)', 
                borderColor: 'rgba(34, 139, 34, 0.2)' 
              }}
            >
              <Heart className="h-12 w-12 mx-auto mb-4" style={{ color: '#228B22' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Respect For Others</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We value every individual's unique journey, treating all users, colleagues, and partners with dignity, empathy, and genuine care.
              </p>
            </div>

            <div 
              className="border rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <Scale className="h-12 w-12 mx-auto mb-4" style={{ color: '#1E3A8A' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Integrity</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We operate with complete honesty and transparency, ensuring our advice is always in your best interest, not ours.
              </p>
            </div>

            <div 
              className="border rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: 'rgba(130, 147, 64, 0.2)' 
              }}
            >
              <UserCheck className="h-12 w-12 mx-auto mb-4" style={{ color: '#829340' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Loyalty</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We stand by our users through every step of their career journey, providing unwavering support and commitment to their long-term success.
              </p>
            </div>

            <div 
              className="border rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(220, 20, 60, 0.05)', 
                borderColor: 'rgba(220, 20, 60, 0.2)' 
              }}
            >
              <HandHeart className="h-12 w-12 mx-auto mb-4" style={{ color: '#DC143C' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Selflessness</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We put your career goals above our own interests, dedicating ourselves fully to your growth and success without expectation of personal gain.
              </p>
            </div>
          </div>
        </div>

        {/* What This Means For You */}
        <div className="mb-16">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#1E3A8A' }}
          >
            What This Means For You
          </h2>
          <div 
            className="border rounded-xl p-8 max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                  When you work with CareerFrame, you get:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>Honest guidance, even when it's difficult to hear</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>Unwavering support throughout your journey</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>Respect for your unique path and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>Courage to pursue meaningful career changes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                  Our commitment to you:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>We'll never prioritize profits over your success</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>We'll maintain the highest standards of service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>We'll stand by you through challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#6B7280' }}>We'll treat you with complete respect</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="border-2 rounded-xl p-8 text-center"
          style={{ 
            backgroundColor: 'rgba(30, 58, 138, 0.05)', 
            borderColor: '#1E3A8A' 
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Join thousands of professionals who've discovered their ideal career path through our values-driven approach to career development.
          </p>
          <Link href="/">
            <Button 
              className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#829340' }}
            >
              Get Started Today
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t mt-12" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            © 2025 CareerFrame Ltd. All rights reserved. | Built with Courage, Discipline, Respect, Integrity, Loyalty & Selflessness
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}