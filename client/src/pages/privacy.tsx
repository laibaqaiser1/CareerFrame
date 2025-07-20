import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from "lucide-react";
import careerFrameLogo from "@assets/ChatGPT Image Jul 17, 2025, 03_29_50 PM_1752762637040.png";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern - matching landing page */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 opacity-5"
          style={{ transform: 'scale(1.2)' }}
        >
          <defs>
            <pattern
              id="careerframe-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="20" fill="#829340" opacity="0.1" />
              <circle cx="20" cy="20" r="8" fill="#1E3A8A" opacity="0.08" />
              <circle cx="80" cy="80" r="12" fill="#829340" opacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#careerframe-pattern)" />
        </svg>
      </div>

      {/* CareerFrame Badge in background */}
      <div className="absolute top-1/4 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 py-16 relative z-10">
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
              Privacy Policy
            </h1>
            <p 
              className="text-lg"
              style={{ color: '#6B7280' }}
            >
              Effective Date: July 20, 2025
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div 
            className="border rounded-xl p-8 mb-12 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 mr-3" style={{ color: '#829340' }} />
              <h3 
                className="text-2xl font-semibold mb-0"
                style={{ color: '#1E3A8A' }}
              >
                Our Promise to You
              </h3>
            </div>
            <p 
              className="text-lg mb-4 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              At CareerFrame, we're dedicated to helping you find and grow into the right career — and we take your trust very seriously. Protecting your privacy is a core part of how we build and operate our platform.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We keep things simple: we only collect the information we need to deliver our services, and we don't keep it any longer than necessary. Below we explain what we collect, why, and how you can stay in control.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">1</span>
              Who We Are
            </h2>
            <p 
              className="text-lg mb-4 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              CareerFrame helps people identify and close skill gaps to reach their career goals through personalized coaching and guidance. Your information belongs to you, and our role is to use it only to provide and improve our service — nothing more.
            </p>
            <div 
              className="bg-gray-50 border-l-4 p-6 rounded-r-lg"
              style={{ borderLeftColor: '#829340' }}
            >
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" style={{ color: '#829340' }} />
                <p className="text-lg font-medium mb-0" style={{ color: '#1E3A8A' }}>
                  Contact us anytime at: <a href="mailto:privacy@careerframe.co.uk" className="underline hover:no-underline" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">2</span>
              Where This Privacy Policy Applies
            </h2>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              This Privacy Policy applies to the CareerFrame website, web app, and related services under the CareerFrame brand. If we launch services with different privacy practices, those will have their own policy.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">3</span>
              What We Collect & Why
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We aim to collect the minimum data necessary for your experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div 
                className="border rounded-lg p-6"
                style={{ borderColor: 'rgba(130, 147, 64, 0.2)', backgroundColor: 'rgba(130, 147, 64, 0.02)' }}
              >
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                  Information you provide
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span style={{ color: '#6B7280' }}>Account details: name, email, date of birth (to verify you're over 18)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span style={{ color: '#6B7280' }}>Profile details: your current skills, career goals, milestones — so we can coach you</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span style={{ color: '#6B7280' }}>Communication: messages you send through the platform, and feedback you provide to us</span>
                  </li>
                </ul>
              </div>
              
              <div 
                className="border rounded-lg p-6"
                style={{ borderColor: 'rgba(30, 58, 138, 0.2)', backgroundColor: 'rgba(30, 58, 138, 0.02)' }}
              >
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>
                  Information we collect automatically
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span style={{ color: '#6B7280' }}>Usage data: logins, feature use, pages visited — to maintain, secure, and improve the service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span style={{ color: '#6B7280' }}>Device data: IP address, browser type, device type — for security and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              className="bg-red-50 border border-red-200 rounded-lg p-6"
            >
              <p className="text-lg font-medium" style={{ color: '#EF4444' }}>
                We do not use or share your data for profiling, targeted advertising, or any purpose unrelated to the service you signed up for.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">4</span>
              How We Use Your Information
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We use your information to:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Provide and maintain your account and milestones</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Tailor coaching and advice to your goals</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Keep our platform secure and compliant with law</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Improve the functionality and experience of our service</span>
              </div>
            </div>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We may also use anonymized, aggregated data to improve CareerFrame — never to identify you personally.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">5</span>
              How We Share Your Information
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We only share your information:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>With trusted service providers who help operate our platform (e.g., hosting, payments) — under strict confidentiality agreements</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>When required by law or to protect the safety of users</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>With your explicit consent, if we introduce optional features that involve partners</span>
              </div>
            </div>
            <div 
              className="bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <p className="text-lg font-medium" style={{ color: '#059669' }}>
                We never sell your data, nor use it for third-party advertising.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">6</span>
              How Long We Keep Your Data
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We keep your information only as long as it's needed to provide the service or meet legal requirements, then we delete it.
            </p>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              If you delete your account, we remove your personal data within 30 days, except where required to:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Retain limited records to comply with tax, fraud prevention, or other legal obligations</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Retain records of consent or disputes for up to 6 years, as allowed under UK law</span>
              </div>
            </div>
            <p 
              className="text-lg mb-4 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Inactive accounts may be closed after 2 years of inactivity.
            </p>
            <div 
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <p className="text-lg font-medium" style={{ color: '#2563EB' }}>
                We don't keep your data "just in case."
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">7</span>
              Your Rights
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              You're in control of your data. At any time you can:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">✅</div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Request a copy of your data</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">✅</div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Ask us to correct or delete your data</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">✅</div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Withdraw consent where processing is based on consent</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">✅</div>
                <span className="text-lg" style={{ color: '#6B7280' }}>Object to certain processing or request we limit it</span>
              </div>
            </div>
            <div 
              className="bg-gray-50 border-l-4 p-6 rounded-r-lg"
              style={{ borderLeftColor: '#829340' }}
            >
              <p className="text-lg font-medium" style={{ color: '#1E3A8A' }}>
                Just email us at: <a href="mailto:privacy@careerframe.co.uk" className="underline hover:no-underline" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a>
              </p>
              <p className="text-base mt-2" style={{ color: '#6B7280' }}>
                We may ask for proof of identity to protect your account and others.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">8</span>
              No Children Allowed
            </h2>
            <div 
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <p className="text-lg font-medium" style={{ color: '#D97706' }}>
                CareerFrame is for users 18 and over. We do not knowingly collect data from children.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">9</span>
              Changes to This Policy
            </h2>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We'll update this policy if our practices change. We'll notify you of material changes before they take effect so you can review them.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-16">
            <h2 
              className="text-3xl font-bold mb-6 flex items-center"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">10</span>
              Contact Us
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              If you have any questions or concerns, please reach out to:
            </p>
            <div 
              className="border-2 rounded-xl p-8 text-center"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: '#829340' 
              }}
            >
              <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#829340' }} />
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
                Get in Touch
              </h3>
              <a 
                href="mailto:privacy@careerframe.co.uk" 
                className="text-2xl font-medium underline hover:no-underline transition-colors"
                style={{ color: '#829340' }}
              >
                📧 privacy@careerframe.co.uk
              </a>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              © 2025 CareerFrame. All rights reserved. | Effective Date: July 20, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}