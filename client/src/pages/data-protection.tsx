import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, Eye, Database, FileText, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-4">Data Protection Policy</h1>
          <p className="text-lg text-soft-grey">
            We serve users aged 18+ only. Email Privacy - Know your rights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">UK GDPR Compliant</h3>
              <p className="text-sm text-soft-grey">
                Full compliance with UK data protection standards
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Lock className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Right to Erasure</h3>
              <p className="text-sm text-soft-grey">
                Request deletion of your personal data
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Eye className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Full Transparency</h3>
              <p className="text-sm text-soft-grey">
                Clear information about data processing
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Section 1: Who we are */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">1) Who we are</h2>
            <p className="text-soft-grey mb-4">
              CareerFrame Ltd ("CareerFrame", "we", "our", "us") provides an AI-enabled career development platform that helps individuals align to roles, identify skill gaps, and take guided steps toward employment. We act as a data controller for personal data of users who sign up to our platform and as a data processor where we process personal data strictly on behalf of business customers (if/when applicable).
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-2 text-soft-grey">
                <p><strong>Controller:</strong> CareerFrame Ltd, Battlefield Industrial Estate, Shrewsbury, Shropshire, SY4 3DB, Company Number 16331497.</p>
                <p><strong>ICO Registration:</strong> C1742472.</p>
                <p><strong>Privacy contact:</strong> <a href="mailto:privacy@careerframe.co.uk" className="text-fresh-green hover:underline">privacy@careerframe.co.uk</a></p>
              </div>
            </div>
            <p className="text-soft-grey">
              This policy explains our data protection principles and security practices. For specific details of the personal data we collect and why, see our Privacy Policy.
            </p>
          </section>

          {/* Section 2: Scope */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">2) Scope</h2>
            <p className="text-soft-grey">
              This policy applies to all personal data processed by CareerFrame in connection with our services, websites, apps, support channels, analytics, and integrations (e.g., payment providers, communications vendors, course partners). It covers employees, contractors, and suppliers who handle personal data on our behalf.
            </p>
          </section>

          {/* Section 3: Lawful bases & purposes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">3) Lawful bases & purposes (summary)</h2>
            <p className="text-soft-grey mb-4">
              We process personal data under the UK GDPR on the following lawful bases:
            </p>
            <ul className="list-disc list-inside text-soft-grey space-y-3">
              <li><strong>Contract:</strong> to create/manage accounts, deliver platform functionality (AI coach, milestone tracking, skill-gap analysis, CV/cover letters), and handle payments.</li>
              <li><strong>Legitimate interests:</strong> to secure our services, prevent fraud/abuse, improve features, and provide limited service communications. We conduct balancing tests where appropriate.</li>
              <li><strong>Consent:</strong> for certain marketing communications, optional analytics/cookies, and where required by law.</li>
              <li><strong>Legal obligation:</strong> to meet accounting, tax, and regulatory duties.</li>
            </ul>
          </section>

          {/* Section 4: Data minimisation & retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">4) Data minimisation & retention</h2>
            <ul className="list-disc list-inside text-soft-grey space-y-3">
              <li><strong>Account data:</strong> retained while your account is active; deleted or anonymised within 90 days of deletion request, subject to legal holds.</li>
              <li><strong>Payment records:</strong> kept for up to 7 years to comply with tax and accounting laws.</li>
              <li><strong>Support tickets:</strong> up to 24 months for audit and training.</li>
              <li><strong>Backups/logs:</strong> rotate on fixed schedules and are deleted per our retention calendar.</li>
            </ul>
          </section>

          {/* Section 5: Security measures */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">5) Security measures</h2>
            <ul className="list-disc list-inside text-soft-grey space-y-2">
              <li>Encryption in transit (TLS) and at rest for primary data stores.</li>
              <li>Role-based access controls (RBAC), least-privilege IAM, and MFA for staff.</li>
              <li>Segregated environments for development, staging, and production.</li>
              <li>Regular patching, vulnerability scanning, and change control.</li>
              <li>Audit logging and monitoring for anomalous access.</li>
              <li>Vendor due diligence and contractual data protection terms with processors.</li>
              <li>Staff training on security, privacy, and phishing awareness.</li>
            </ul>
          </section>

          {/* Section 6: International data transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">6) International data transfers</h2>
            <p className="text-soft-grey">
              Where personal data is transferred outside the UK (e.g., to sub-processors), we use appropriate safeguards such as the UK Addendum to the EU Standard Contractual Clauses or other legally recognised mechanisms. We maintain a list of key sub-processors in our Privacy Policy and update it when suppliers change.
            </p>
          </section>

          {/* Section 7: AI processing & automated decisions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">7) AI processing & automated decisions</h2>
            <p className="text-soft-grey">
              Our AI features assist with career alignment, skill gap insights, milestone suggestions, and drafting CV/cover letters. Outputs are recommendations only and do not make legally or similarly significant automated decisions about you. You remain in control of your choices and can request human review via <a href="mailto:support@careerframe.co.uk" className="text-fresh-green hover:underline">support@careerframe.co.uk</a>.
            </p>
          </section>

          {/* Section 8: Your rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">8) Your rights</h2>
            <p className="text-soft-grey mb-4">
              You have rights under UK GDPR, including: access; rectification; erasure; restriction; portability; and objection to certain processing (including direct marketing). You can withdraw consent at any time where processing is based on consent.
            </p>
            <div className="space-y-3 text-soft-grey">
              <p><strong>How to exercise:</strong> email <a href="mailto:privacy@careerframe.co.uk" className="text-fresh-green hover:underline">privacy@careerframe.co.uk</a> from your registered address. We may need to verify your identity.</p>
              <p><strong>Complaints:</strong> you can complain to the UK Information Commissioner's Office (ICO). See <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-fresh-green hover:underline">ico.org.uk</a> for details.</p>
            </div>
          </section>

          {/* Section 9: Data breaches */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">9) Data breaches</h2>
            <p className="text-soft-grey">
              We maintain an incident response plan. Where required by law, we will notify the ICO within 72 hours of becoming aware of a notifiable breach and will inform affected individuals without undue delay.
            </p>
          </section>

          {/* Section 10: Roles & responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">10) Roles & responsibilities</h2>
            <ul className="list-disc list-inside text-soft-grey space-y-3">
              <li><strong>Senior management:</strong> accountable for overall compliance.</li>
              <li><strong>Privacy lead:</strong> coordinates data protection activities and vendor oversight.</li>
              <li><strong>All staff/contractors:</strong> must follow this policy, complete training, and report incidents promptly.</li>
            </ul>
          </section>

          {/* Section 11: Policy governance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">11) Policy governance</h2>
            <p className="text-soft-grey">
              We review this policy at least annually or after significant changes to our services, laws, or suppliers.
            </p>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/privacy">
            <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
              View Privacy Policy
            </Button>
          </Link>
          <a href="mailto:privacy@careerframe.co.uk?subject=Data Protection Enquiry">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Contact Privacy Team
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}