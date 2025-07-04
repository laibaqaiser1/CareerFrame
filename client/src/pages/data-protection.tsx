import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, Eye, Database, FileText, Users } from "lucide-react";

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-4">Data Protection</h1>
          <p className="text-lg text-soft-grey">
            How we protect your personal information and comply with data protection regulations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GDPR Compliant</h3>
              <p className="text-sm text-soft-grey">
                Full compliance with European data protection standards
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Lock className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Storage</h3>
              <p className="text-sm text-soft-grey">
                End-to-end encryption and secure data handling
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Eye className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Full Transparency</h3>
              <p className="text-sm text-soft-grey">
                Clear information about data collection and usage
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-navy mb-4">Data Protection Framework</h2>
          <p className="text-soft-grey mb-6">
            CareerFrame is committed to protecting your personal data and respecting your privacy rights. We implement comprehensive data protection measures in accordance with international privacy laws including GDPR, CCPA, and other applicable regulations.
          </p>

          <div className="bg-fresh-green/10 border border-fresh-green/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-navy mb-3">Your Data Rights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Database className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Access</h4>
                  <p className="text-sm text-soft-grey">Request copies of your personal data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Rectification</h4>
                  <p className="text-sm text-soft-grey">Request corrections to inaccurate data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Erasure</h4>
                  <p className="text-sm text-soft-grey">Request deletion of your personal data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Portability</h4>
                  <p className="text-sm text-soft-grey">Request transfer of your data</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">How We Protect Your Data</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-fresh-green mt-1" />
              <div>
                <h4 className="font-semibold">Encryption in Transit and at Rest</h4>
                <p className="text-soft-grey">All data is encrypted using industry-standard AES-256 encryption</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-fresh-green mt-1" />
              <div>
                <h4 className="font-semibold">Access Controls</h4>
                <p className="text-soft-grey">Strict role-based access controls and regular access reviews</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="h-5 w-5 text-fresh-green mt-1" />
              <div>
                <h4 className="font-semibold">Regular Security Audits</h4>
                <p className="text-soft-grey">Quarterly security assessments and penetration testing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Database className="h-5 w-5 text-fresh-green mt-1" />
              <div>
                <h4 className="font-semibold">Data Minimization</h4>
                <p className="text-soft-grey">We only collect and retain data necessary for our services</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Data Processing Purposes</h2>
          <p className="text-soft-grey mb-4">
            We process your personal data for the following purposes:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Providing personalized career guidance and recommendations</li>
            <li>Improving our AI algorithms and service quality</li>
            <li>Communicating with you about our services</li>
            <li>Processing payments and managing your account</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Data Retention</h2>
          <p className="text-soft-grey mb-6">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Career assessment data is retained for 3 years after account closure to support service improvements, after which it is permanently deleted.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">International Data Transfers</h2>
          <p className="text-soft-grey mb-6">
            When transferring data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) and adequacy decisions where applicable.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Data Subject Requests</h2>
          <p className="text-soft-grey mb-4">
            To exercise your data protection rights, please contact us at:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <ul className="list-none text-soft-grey space-y-2">
              <li><strong>Email:</strong> dataprotection@careerframe.com</li>
              <li><strong>Response Time:</strong> Within 30 days</li>
              <li><strong>Verification:</strong> Identity verification required for all requests</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Data Protection Officer</h2>
          <p className="text-soft-grey mb-6">
            Our Data Protection Officer oversees our data protection compliance and can be contacted at dpo@careerframe.com for any privacy-related concerns.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Updates to This Policy</h2>
          <p className="text-soft-grey mb-6">
            This data protection policy may be updated from time to time. We will notify you of any significant changes via email or through our platform.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/privacy">
            <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
              View Privacy Policy
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Contact Data Protection Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}