import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* CareerFrame Badge */}
      <div className="absolute top-1/4 right-2 md:right-1/4 opacity-5 transform rotate-12 z-0 hidden sm:block">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 object-contain"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Privacy Policy
            </h1>
            <p 
              className="text-base md:text-lg px-4"
              style={{ color: '#6B7280' }}
            >
              Your privacy matters to us - kept clear and friendly
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none px-4">
          {/* Introduction */}
          <div 
            className="border rounded-xl p-6 md:p-8 mb-8 md:mb-12 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <p 
              className="text-base md:text-lg leading-relaxed mb-0"
              style={{ color: '#6B7280' }}
            >
              This policy explains our data protection principles and security practices. For specific details of the personal data we collect and why, see our comprehensive privacy information below.
            </p>
          </div>

          {/* Section 1 - Who We Are */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">1</span>
              <span>Who We Are</span>
            </h2>
            <div 
              className="text-base md:text-lg mb-4 leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>
                We are CareerFrame Ltd, a UK-based career development platform helping individuals find the right career path. We're based at Battlefield Industrial Estate, Shrewsbury, Shropshire, SY4 3DB.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Controller Details:</p>
                <p>CareerFrame Ltd, Battlefield Industrial Estate, Shrewsbury, Shropshire, SY4 3DB</p>
                <p>Company Number: 16331497</p>
                <p>ICO Registration: C1742472</p>
                <p>Privacy contact: <a href="mailto:privacy@careerframe.co.uk" className="text-green-600 hover:underline">privacy@careerframe.co.uk</a></p>
              </div>
            </div>
          </section>

          {/* Section 2 - Scope */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">2</span>
              <span>Scope</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              This policy applies to all personal data processed by CareerFrame in connection with our services, websites, apps, support channels, analytics, and integrations (e.g., payment providers, communications vendors, course partners). It covers employees, contractors, and suppliers who handle personal data on our behalf.
            </p>
          </section>

          {/* Section 3 - Lawful Bases & Purposes */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">3</span>
              <span>Lawful Bases & Purposes</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>We process personal data under the UK GDPR on the following lawful bases:</p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Contract:</p>
                  <p>To create/manage accounts, deliver platform functionality (AI coach, milestone tracking, skill-gap analysis, CV/cover letters), and handle payments.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Legitimate Interests:</p>
                  <p>To secure our services, prevent fraud/abuse, improve features, and provide limited service communications. We conduct balancing tests where appropriate.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Consent:</p>
                  <p>For certain marketing communications, optional analytics/cookies, and where required by law.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Legal Obligation:</p>
                  <p>To meet accounting, tax, and regulatory duties.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Data Minimisation & Retention */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">4</span>
              <span>Data Minimisation & Retention</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Account Data:</p>
                  <p>Retained while your account is active; deleted or anonymised within 90 days of deletion request, subject to legal holds.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Payment Records:</p>
                  <p>Kept for up to 7 years to comply with tax and accounting laws.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Support Tickets:</p>
                  <p>Up to 24 months for audit and training purposes.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Backups/Logs:</p>
                  <p>Rotate on fixed schedules and are deleted per our retention calendar.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 - Security Measures */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">5</span>
              <span>Security Measures</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <ul className="space-y-2 list-disc list-inside">
                <li>Encryption in transit (TLS) and at rest for primary data stores</li>
                <li>Role-based access controls (RBAC), least-privilege IAM, and MFA for staff</li>
                <li>Segregated environments for development, staging, and production</li>
                <li>Regular patching, vulnerability scanning, and change control</li>
                <li>Audit logging and monitoring for anomalous access</li>
                <li>Vendor due diligence and contractual data protection terms with processors</li>
                <li>Staff training on security, privacy, and phishing awareness</li>
              </ul>
            </div>
          </section>

          {/* Section 6 - International Data Transfers */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">6</span>
              <span>International Data Transfers</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Where personal data is transferred outside the UK (e.g., to sub-processors), we use appropriate safeguards such as the UK Addendum to the EU Standard Contractual Clauses or other legally recognised mechanisms. We maintain a list of key sub-processors in our Privacy Policy and update it when suppliers change.
            </p>
          </section>

          {/* Section 7 - AI Processing & Automated Decisions */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">7</span>
              <span>AI Processing & Automated Decisions</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>
                Our AI features assist with career alignment, skill gap insights, milestone suggestions, and drafting CV/cover letters. Outputs are recommendations only and do not make legally or similarly significant automated decisions about you. You remain in control of your choices and can request human review via <a href="mailto:support@careerframe.co.uk" className="text-green-600 hover:underline">support@careerframe.co.uk</a>.
              </p>
            </div>
          </section>

          {/* Section 8 - Your Rights */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">8</span>
              <span>Your Rights</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>You have rights under UK GDPR, including: access; rectification; erasure; restriction; portability; and objection to certain processing (including direct marketing). You can withdraw consent at any time where processing is based on consent.</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>How to Exercise Your Rights:</p>
                <p>Email <a href="mailto:privacy@careerframe.co.uk" className="text-green-600 hover:underline">privacy@careerframe.co.uk</a> from your registered address. We may need to verify your identity.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Complaints:</p>
                <p>You can complain to the UK Information Commissioner's Office (ICO). See <a href="https://ico.org.uk" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a> for details.</p>
              </div>
            </div>
          </section>

          {/* Section 9 - Data Breaches */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">9</span>
              <span>Data Breaches</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We maintain an incident response plan. Where required by law, we will notify the ICO within 72 hours of becoming aware of a notifiable breach and will inform affected individuals without undue delay.
            </p>
          </section>

          {/* Section 10 - Questions or Concerns */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">10</span>
              <span>Questions or Concerns?</span>
            </h2>
            <p 
              className="text-base md:text-lg mb-4 leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We're here to help. Email us at privacy@careerframe.co.uk or write to us at our registered address. You can also contact the UK Information Commissioner's Office (ICO) if you're unhappy with how we handle your data.
            </p>
            
            <div 
              className="border rounded-xl p-6 md:p-8 text-center"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: 'rgba(130, 147, 64, 0.2)' 
              }}
            >
              <Mail className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" style={{ color: '#829340' }} />
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
                Contact Information
              </h3>
              <p className="text-sm md:text-base mb-3" style={{ color: '#6B7280' }}>
                CareerFrame Ltd<br />
                Battlefield Industrial Estate<br />
                Shrewsbury, Shropshire, SY4 3DB
              </p>
              <a 
                href="mailto:privacy@careerframe.co.uk"
                className="text-sm md:text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                📧 privacy@careerframe.co.uk
              </a>
            </div>
          </section>

          {/* Section 11 - Policy Governance */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">11</span>
              <span>Policy Governance</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>We review this policy at least annually or after significant changes to our services, laws, or suppliers.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Roles & Responsibilities:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>Senior management:</strong> accountable for overall compliance</li>
                  <li><strong>Privacy lead:</strong> coordinates data protection activities and vendor oversight</li>
                  <li><strong>All staff/contractors:</strong> must follow this policy, complete training, and report incidents promptly</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-semibold" style={{ color: '#1E3A8A' }}>Last Updated: August 2025</p>
                <p className="text-sm mt-2">This policy will be reviewed annually or when significant changes occur to our services or applicable laws.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}