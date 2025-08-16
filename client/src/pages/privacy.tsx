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
              className="text-base md:text-lg leading-relaxed mb-4"
              style={{ color: '#6B7280' }}
            >
              We serve users aged 18+ only.
            </p>
            <p 
              className="text-base md:text-lg leading-relaxed mb-4"
              style={{ color: '#6B7280' }}
            >
              <strong>Email Privacy</strong>
            </p>
            <p 
              className="text-base md:text-lg leading-relaxed mb-0"
              style={{ color: '#6B7280' }}
            >
              <strong>Know your rights</strong>
            </p>
          </div>

          {/* Section 1 - Who We Are */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">1</span>
              <span>Who we are</span>
            </h2>
            <div 
              className="text-base md:text-lg mb-4 leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>
                CareerFrame Ltd ("CareerFrame", "we", "our", "us") provides an AI-enabled career development platform that helps individuals align to roles, identify skill gaps, and take guided steps toward employment. We act as a data controller for personal data of users who sign up to our platform and as a data processor where we process personal data strictly on behalf of business customers (if/when applicable).
              </p>
              <p>
                <strong>Controller:</strong> CareerFrame Ltd, Battlefield Industrial Estate, Shrewsbury, Shropshire, SY4 3DB, Company Number 16331497.<br/>
                <strong>ICO Registration:</strong> C1742472.<br/>
                <strong>Privacy contact:</strong> <a href="mailto:privacy@careerframe.co.uk" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a>
              </p>
              <p>
                This policy explains our data protection principles and security practices. For specific details of the personal data we collect and why, see our Privacy Policy.
              </p>
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

          {/* Section 3 - Lawful bases & purposes */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">3</span>
              <span>Lawful bases & purposes (summary)</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>We process personal data under the UK GDPR on the following lawful bases:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Contract:</strong> to create/manage accounts, deliver platform functionality (AI coach, milestone tracking, skill-gap analysis, CV/cover letters), and handle payments.</li>
                <li><strong>Legitimate interests:</strong> to secure our services, prevent fraud/abuse, improve features, and provide limited service communications. We conduct balancing tests where appropriate.</li>
                <li><strong>Consent:</strong> for certain marketing communications, optional analytics/cookies, and where required by law.</li>
                <li><strong>Legal obligation:</strong> to meet accounting, tax, and regulatory duties.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Data minimisation & retention */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">4</span>
              <span>Data minimisation & retention</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-3"
              style={{ color: '#6B7280' }}
            >
              <p><strong>Account data:</strong> retained while your account is active; deleted or anonymised within 90 days of deletion request, subject to legal holds.</p>
              <p><strong>Payment records:</strong> kept for up to 7 years to comply with tax and accounting laws.</p>
              <p><strong>Support tickets:</strong> up to 24 months for audit and training.</p>
              <p><strong>Backups/logs:</strong> rotate on fixed schedules and are deleted per our retention calendar.</p>
            </div>
          </section>

          {/* Section 5 - Security measures */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">5</span>
              <span>Security measures</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-2"
              style={{ color: '#6B7280' }}
            >
              <ul className="space-y-2 ml-4">
                <li>Encryption in transit (TLS) and at rest for primary data stores.</li>
                <li>Role-based access controls (RBAC), least-privilege IAM, and MFA for staff.</li>
                <li>Segregated environments for development, staging, and production.</li>
                <li>Regular patching, vulnerability scanning, and change control.</li>
                <li>Audit logging and monitoring for anomalous access.</li>
                <li>Vendor due diligence and contractual data protection terms with processors.</li>
                <li>Staff training on security, privacy, and phishing awareness.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 - International data transfers */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">6</span>
              <span>International data transfers</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Where personal data is transferred outside the UK (e.g., to sub-processors), we use appropriate safeguards such as the UK Addendum to the EU Standard Contractual Clauses or other legally recognised mechanisms. We maintain a list of key sub-processors in our Privacy Policy and update it when suppliers change.
            </p>
          </section>

          {/* Section 7 - AI processing & automated decisions */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">7</span>
              <span>AI processing & automated decisions</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Our AI features assist with career alignment, skill gap insights, milestone suggestions, and drafting CV/cover letters. Outputs are recommendations only and do not make legally or similarly significant automated decisions about you. You remain in control of your choices and can request human review via <a href="mailto:support@careerframe.co.uk" style={{ color: '#829340' }}>support@careerframe.co.uk</a>.
            </p>
          </section>

          {/* Section 8 - Your rights */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">8</span>
              <span>Your rights</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>You have rights under UK GDPR, including: access; rectification; erasure; restriction; portability; and objection to certain processing (including direct marketing). You can withdraw consent at any time where processing is based on consent.</p>
              <p><strong>How to exercise:</strong> email <a href="mailto:privacy@careerframe.co.uk" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a> from your registered address. We may need to verify your identity.</p>
              <p><strong>Complaints:</strong> you can complain to the UK Information Commissioner's Office (ICO). See ico.org.uk for details.</p>
            </div>
          </section>

          {/* Section 9 - Data breaches */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">9</span>
              <span>Data breaches</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We maintain an incident response plan. Where required by law, we will notify the ICO within 72 hours of becoming aware of a notifiable breach and will inform affected individuals without undue delay.
            </p>
          </section>

          {/* Section 10 - Roles & responsibilities */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">10</span>
              <span>Roles & responsibilities</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-3"
              style={{ color: '#6B7280' }}
            >
              <p><strong>Senior management:</strong> accountable for overall compliance.</p>
              <p><strong>Privacy lead:</strong> coordinates data protection activities and vendor oversight.</p>
              <p><strong>All staff/contractors:</strong> must follow this policy, complete training, and report incidents promptly.</p>
            </div>
          </section>

          {/* Section 11 - Policy governance */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">11</span>
              <span>Policy governance</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We review this policy at least annually or after significant changes to our services, laws, or suppliers.
            </p>
          </section>

          {/* COMMENTED OUT - Previous Privacy Policy Sections Available for Reference */}
          {/*
          
          PREVIOUS PRIVACY POLICY SECTIONS (COMMENTED OUT FOR SIMPLICITY)
          These sections contained user-friendly explanations and are maintained here for reference.
          They can be uncommented if needed for alternative presentation.

          - What Information We Collect
          - How We Use Your Information  
          - Your Privacy Choices & Rights
          - How We Keep Your Data Safe
          - How Long We Keep Your Data
          - Questions or Concerns?
          
          Contact privacy@careerframe.co.uk for access to alternative privacy policy presentations.
          
          */}

        </div>
      </div>
      <Footer />
    </div>
  );
}