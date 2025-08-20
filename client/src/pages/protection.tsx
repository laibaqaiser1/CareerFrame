import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, Eye, FileCheck } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function Protection() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
              <Shield className="w-16 h-16" style={{ color: '#829340' }} />
            </div>
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Protection
            </h1>
            <p 
              className="text-xl"
              style={{ color: '#6B7280' }}
            >
              Data Security and Privacy Protection
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Data Security Section */}
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
              Data Security Measures
            </h2>
            <div className="space-y-6">
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                  <Lock className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Access Control
                  </h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Access to your data is limited to those with a business need to know
                  </p>
                </div>

                <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                  <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Encryption
                  </h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Data transmission and storage use industry-standard encryption
                  </p>
                </div>

                <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
                  <Eye className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                    Monitoring
                  </h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Continuous monitoring for unauthorized access attempts
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention Section */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Data Retention Policy
            </h2>
            <div 
              className="border-l-4 pl-6 py-4"
              style={{ borderColor: '#829340', backgroundColor: 'rgba(130, 147, 64, 0.05)' }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                How Long We Keep Your Data
              </h3>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                We will only keep your personal data as long as necessary to fulfill the purposes we collected it for, including for legal and regulatory purposes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div 
                className="bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-200"
              >
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Active Account Data
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Profile information: While account is active</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Usage data: For service improvement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>XP and progress: Linked to active account</span>
                  </li>
                </ul>
              </div>

              <div 
                className="bg-orange-50 rounded-lg p-6 shadow-sm border border-orange-200"
              >
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Legal Compliance
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Basic customer information: 6 years for tax purposes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Transaction records: As required by law</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Legal communications: Until resolved</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* International Transfers */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              International Data Transfers
            </h2>
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(34, 197, 94, 0.05)', 
                borderColor: 'rgba(34, 197, 94, 0.2)' 
              }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 mr-4" style={{ color: '#22C55E' }} />
                <h3 className="text-2xl font-semibold" style={{ color: '#1E3A8A' }}>
                  UK Data Protection
                </h3>
              </div>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                We do not transfer your personal data outside the United Kingdom. All data processing and storage occurs within UK boundaries, ensuring compliance with UK GDPR requirements.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#22C55E' }}>
                <p className="text-lg font-medium" style={{ color: '#1E3A8A' }}>
                  ✓ Your data stays in the UK at all times
                </p>
              </div>
            </div>
          </section>

          {/* Third Party Protection */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Third-Party Data Sharing
            </h2>
            <div className="space-y-6">
              <div 
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                  When We May Share Your Data
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FileCheck className="w-6 h-6 mr-4 mt-1" style={{ color: '#829340' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#1E3A8A' }}>Legal Requirements</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>HMRC, regulators and other authorities as required by law</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileCheck className="w-6 h-6 mr-4 mt-1" style={{ color: '#829340' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#1E3A8A' }}>Business Transfers</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Successors in the event of a business sale or merger</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileCheck className="w-6 h-6 mr-4 mt-1" style={{ color: '#829340' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#1E3A8A' }}>Service Providers</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Internal and external parties (currently none contracted)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="bg-green-50 border border-green-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Our Protection Promise
                </h3>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  We require all third parties to respect the security of your personal data and to treat it only as we instruct them. We do not allow our third-party service providers to use your personal data for their own purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Links Protection */}
          <section className="mb-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              External Links Protection
            </h2>
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you.
              </p>
              <div className="bg-white rounded-lg p-6 border-l-4" style={{ borderColor: '#829340' }}>
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#1E3A8A' }}>
                  Important Notice
                </h4>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  We are not responsible for the privacy practices of external websites. We encourage you to read their privacy policies before sharing any personal information.
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
              Questions About Data Protection?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
              Have concerns about how we protect your data? Contact our data protection team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:Arron@careerframe.co.uk">
                <Button 
                  className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#829340' }}
                >
                  Contact Data Protection Team
                </Button>
              </a>
              <Link href="/privacy">
                <Button 
                  variant="outline"
                  className="px-8 py-3 text-lg border-2 hover:bg-blue-50 transition-all"
                  style={{ borderColor: '#1E3A8A', color: '#1E3A8A' }}
                >
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}