import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, FileText, CheckCircle } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";

export default function Agreement() {
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
              id="agreement-pattern"
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
          <rect width="100%" height="100%" fill="url(#agreement-pattern)" />
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
              <FileText className="w-16 h-16" style={{ color: '#829340' }} />
            </div>
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Agreement
            </h1>
            <p 
              className="text-xl"
              style={{ color: '#6B7280' }}
            >
              Terms and Conditions of Use
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* About Us Section */}
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
              About CareerFrame Ltd
            </h2>
            <div className="space-y-4">
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                This website is operated by CareerFrame Ltd ("we," "us," or "our"), a company registered in the United Kingdom. We are committed to providing innovative career guidance and development services.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#829340' }} />
                    <span><strong>Email:</strong> Arron@careerframe.co.uk</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#829340' }} />
                    <span><strong>Address:</strong> CareerFrame Ltd, Registered Office, Shrewsbury, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use of Website Section */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Use of the Website
            </h2>
            <div className="space-y-6">
              <div 
                className="border-l-4 pl-6 py-4"
                style={{ borderColor: '#829340', backgroundColor: 'rgba(130, 147, 64, 0.05)' }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Acceptable Use
                </h3>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold" style={{ color: '#1E3A8A' }}>
                    ✅ Permitted Activities
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Browse career guidance content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Create and manage your profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Participate in career development programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Download content for personal use</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold" style={{ color: '#DC2626' }}>
                    ❌ Prohibited Behavior
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">✗</span>
                      </div>
                      <span>Harassing or causing distress to others</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">✗</span>
                      </div>
                      <span>Transmitting obscene or offensive content</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">✗</span>
                      </div>
                      <span>Disrupting normal website flow</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">✗</span>
                      </div>
                      <span>Unauthorized commercial use</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  ⚠️ Enforcement
                </h4>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  We reserve the right to suspend or terminate your access to the website if you breach these Terms. This is to ensure a safe and positive environment for all users.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property Section */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Intellectual Property Rights
            </h2>
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
                All content on this website, including text, graphics, logos, icons, images, and software, is the property of CareerFrame Ltd or its licensors and is protected by intellectual property laws.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    What You Can Do
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>View content for personal use</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Download content for personal use</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#829340' }} />
                      <span>Print content for personal reference</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#DC2626' }}>
                    What Requires Permission
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">!</span>
                      </div>
                      <span>Reproduction for commercial use</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">!</span>
                      </div>
                      <span>Modification of content</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 mr-3 mt-0.5 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">!</span>
                      </div>
                      <span>Distribution or republication</span>
                    </li>
                  </ul>
                </div>
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
              Questions About Our Agreement?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
              Need clarification on any part of our terms and conditions? We're here to help.
            </p>
            <a href="mailto:Arron@careerframe.co.uk">
              <Button 
                className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#829340' }}
              >
                Contact Us About Agreement
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