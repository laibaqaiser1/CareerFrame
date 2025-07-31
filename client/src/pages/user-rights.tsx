import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Users, Shield, CheckCircle, AlertCircle } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";

export default function UserRights() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 opacity-5"
          style={{ transform: 'scale(1.2)' }}
        >
          <defs>
            <pattern
              id="user-rights-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="20" fill="#829340" opacity="0.1" />
              <circle cx="20" cy="20" r="8" fill="#1E3A8A" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#user-rights-pattern)" />
        </svg>
      </div>

      {/* CareerFrame Badge */}
      <div className="absolute top-1/4 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 py-16 relative z-10">
        <div className="mb-12">
          <Link href="/terms">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-green-50 transition-colors"
              style={{ color: '#829340' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Terms Overview
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16" style={{ color: '#829340' }} />
            </div>
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              User Rights
            </h1>
            <p 
              className="text-xl"
              style={{ color: '#6B7280' }}
            >
              Your Rights and Responsibilities
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* XP System Rights */}
          <section 
            className="border rounded-xl p-8 mb-8"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              XP (Experience Points) and User Rewards
            </h2>
            <div className="space-y-6">
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                Our website and services include the ability to earn Experience Points ("XP") and other virtual rewards to track your career development progress.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div 
                  className="bg-white rounded-lg p-6 shadow-sm border"
                  style={{ borderColor: 'rgba(130, 147, 64, 0.2)' }}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#1E3A8A' }}>
                    <CheckCircle className="w-6 h-6 mr-3" style={{ color: '#829340' }} />
                    What XP Does
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Tracks engagement and progress</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Motivates career development activities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Provides achievement recognition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Enables progress comparisons</span>
                    </li>
                  </ul>
                </div>

                <div 
                  className="bg-orange-50 rounded-lg p-6 shadow-sm border border-orange-200"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#DC2626' }}>
                    <AlertCircle className="w-6 h-6 mr-3 text-orange-500" />
                    Important Limitations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>XP has no monetary value</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Cannot be exchanged for cash</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Cannot be transferred outside platform</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Subject to modification or discontinuation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="bg-red-50 border border-red-200 rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold mb-3 flex items-center" style={{ color: '#DC2626' }}>
                  <AlertCircle className="w-6 h-6 mr-3" />
                  XP System Enforcement
                </h4>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  Misuse or abuse of the XP system may result in loss of points or suspension of your account. This includes attempts to artificially inflate points or gaming the system.
                </p>
              </div>
            </div>
          </section>

          {/* User Account Rights */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Your Account Rights
            </h2>
            <div className="space-y-6">
              <div 
                className="border-l-4 pl-6 py-4"
                style={{ borderColor: '#829340', backgroundColor: 'rgba(130, 147, 64, 0.05)' }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Account Access and Control
                </h3>
                <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                  You have full control over your CareerFrame account and the information you share with us.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                  <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Data Access
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Request access to all personal data we hold about you
                  </p>
                </div>

                <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Data Correction
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Request correction of inaccurate or incomplete information
                  </p>
                </div>

                <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                  <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Account Deletion
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Request deletion of your account and associated data
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsibilities Section */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Your Responsibilities
            </h2>
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                    Account Security
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Keep your login credentials secure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Notify us of unauthorized access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Use strong, unique passwords</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Log out from shared devices</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                    Content and Conduct
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Provide accurate information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Respect other users</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Follow community guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Report inappropriate behavior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Information Accuracy */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Information Accuracy
            </h2>
            <div 
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#1E3A8A' }}>
                <AlertCircle className="w-6 h-6 mr-3 text-yellow-600" />
                Our Commitment to Accuracy
              </h3>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                We work hard to ensure that the information on our website is correct and up to date. However, we do not warrant the accuracy, completeness, or reliability of any content.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#829340' }}>
                <p className="text-lg font-medium" style={{ color: '#1E3A8A' }}>
                  Information is provided "as is," and we make no representations or warranties of any kind.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <div 
            className="border-2 rounded-xl p-8 text-center"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: '#829340' 
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Questions About Your Rights?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
              Want to exercise your rights or need clarification? Contact us directly.
            </p>
            <a href="mailto:Arron@careerframe.co.uk">
              <Button 
                className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#829340' }}
              >
                Contact Us About Your Rights
              </Button>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t mt-12" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              © 2025 CareerFrame Ltd. All rights reserved. | Part of Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}