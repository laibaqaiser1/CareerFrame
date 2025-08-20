import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, Info, Scale } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";

export default function Limitations() {
  return (
    <div className="min-h-screen bg-white">

      {/* CareerFrame Badge */}
      <div className="absolute top-1/4 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="max-w-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 py-16 relative z-10">
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
              <AlertTriangle className="w-16 h-16" style={{ color: '#829340' }} />
            </div>
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Limitations
            </h1>
            <p 
              className="text-xl"
              style={{ color: '#6B7280' }}
            >
              Liability Limitations and Legal Boundaries
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Limitation of Liability Section */}
          <section 
            className="border rounded-xl p-8 mb-8"
            style={{ 
              backgroundColor: 'rgba(255, 165, 0, 0.05)', 
              borderColor: 'rgba(255, 165, 0, 0.2)' 
            }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Limitation of Liability
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 mr-4 mt-1" style={{ color: '#FF6B35' }} />
                <div>
                  <p 
                    className="text-lg leading-relaxed mb-4"
                    style={{ color: '#6B7280' }}
                  >
                    To the fullest extent permitted by law, CareerFrame Ltd shall not be liable for any loss or damage, whether direct, indirect, incidental, or consequential, arising from your use of, or inability to use, our website, services, or XP and reward systems.
                  </p>
                </div>
              </div>
              
              <div 
                className="bg-red-50 border border-red-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#DC2626' }}>
                  Important Legal Notice
                </h3>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  This limitation applies even if we have been advised of the possibility of such damages. Our total liability to you shall not exceed the amount you have paid to us for our services.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Limitations */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              What Our Limitations Cover
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="border rounded-lg p-6"
                style={{ borderColor: 'rgba(220, 38, 38, 0.2)', backgroundColor: 'rgba(220, 38, 38, 0.05)' }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#DC2626' }}>
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Direct Damages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Financial losses due to service interruption</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Career opportunity losses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Data loss or corruption</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Time investment losses</span>
                  </li>
                </ul>
              </div>

              <div 
                className="border rounded-lg p-6"
                style={{ borderColor: 'rgba(245, 101, 101, 0.2)', backgroundColor: 'rgba(245, 101, 101, 0.05)' }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#DC2626' }}>
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Indirect Damages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Consequential business losses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Loss of profits or income</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Loss of business opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Reputational damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Limitations */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Service Limitations
            </h2>
            <div 
              className="border-l-4 pl-6 py-4"
              style={{ borderColor: '#829340', backgroundColor: 'rgba(130, 147, 64, 0.05)' }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                What We Cannot Guarantee
              </h3>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                While we strive to provide excellent service, we cannot guarantee specific career outcomes or continuous service availability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                <Info className="w-12 h-12 mx-auto mb-4" style={{ color: '#3B82F6' }} />
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Career Outcomes
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  We provide guidance but cannot guarantee job placement or specific career results
                </p>
              </div>

              <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4" style={{ color: '#F59E0B' }} />
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Service Availability
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Occasional maintenance, updates, or technical issues may temporarily limit access
                </p>
              </div>

              <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4" style={{ color: '#DC2626' }} />
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Third-Party Services
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  We're not responsible for external websites, tools, or services linked from our platform
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Governing Law and Jurisdiction
            </h2>
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 mr-4" style={{ color: '#1E3A8A' }} />
                <h3 className="text-2xl font-semibold" style={{ color: '#1E3A8A' }}>
                  Legal Framework
                </h3>
              </div>
              
              <div className="space-y-4">
                <div 
                  className="bg-white rounded-lg p-6 border-l-4"
                  style={{ borderColor: '#829340' }}
                >
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Applicable Law
                  </h4>
                  <p className="text-lg" style={{ color: '#6B7280' }}>
                    These Terms shall be governed by and construed in accordance with the laws of England and Wales.
                  </p>
                </div>

                <div 
                  className="bg-white rounded-lg p-6 border-l-4"
                  style={{ borderColor: '#3B82F6' }}
                >
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Dispute Resolution
                  </h4>
                  <p className="text-lg" style={{ color: '#6B7280' }}>
                    Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Changes to These Terms
            </h2>
            <div 
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                How We Handle Updates
              </h3>
              <div className="space-y-4">
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  We reserve the right to amend these Terms at any time. Any changes will be posted on this page and will take effect immediately upon posting.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#F59E0B' }}>
                  <p className="text-lg font-medium" style={{ color: '#1E3A8A' }}>
                    Your continued use of the website constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What This Means for You */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              What This Means for You
            </h2>
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: 'rgba(130, 147, 64, 0.2)' 
              }}
            >
              <div className="space-y-4">
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  These limitations are designed to protect both you and CareerFrame Ltd while ensuring fair and reasonable use of our services.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                      ✅ What We Do Provide
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Professional career guidance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Reliable platform service</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Data protection measures</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Customer support</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#DC2626' }}>
                      ⚠️ What We Cannot Control
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>External job market conditions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Individual career decisions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Third-party service availability</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Internet connectivity issues</span>
                      </li>
                    </ul>
                  </div>
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
              Questions About Our Limitations?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
              Need clarification on our liability limitations or legal framework? We're here to help explain.
            </p>
            <a href="mailto:Arron@careerframe.co.uk">
              <Button 
                className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#829340' }}
              >
                Contact Us About Limitations
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