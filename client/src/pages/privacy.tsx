import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react";

export default function Privacy() {
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
          <h1 className="text-4xl font-bold text-navy mb-4">Privacy Policy</h1>
          <p className="text-lg text-soft-grey">
            Last updated: January 3, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Shield className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Data Protection</h3>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Eye className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Transparency</h3>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Lock className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Security</h3>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Database className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Control</h3>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>
          <p className="text-soft-grey mb-4">
            We collect information you provide directly to us, such as when you create an account, complete assessments, or contact us for support.
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Personal information (name, email address, phone number)</li>
            <li>Career information (work history, skills, goals)</li>
            <li>Assessment responses and career preferences</li>
            <li>Usage data and interaction patterns</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
          <p className="text-soft-grey mb-4">
            We use the information we collect to provide, maintain, and improve our services:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Provide personalized career guidance and recommendations</li>
            <li>Process payments and manage your account</li>
            <li>Communicate with you about our services</li>
            <li>Improve our AI algorithms and service quality</li>
            <li>Ensure platform security and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Information Sharing</h2>
          <p className="text-soft-grey mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Legal requirements or to protect our rights</li>
            <li>Business transfers (mergers, acquisitions)</li>
            <li>Aggregated, non-personally identifiable data for analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Data Security</h2>
          <p className="text-soft-grey mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Your Rights</h2>
          <p className="text-soft-grey mb-4">
            You have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Access and review your personal data</li>
            <li>Request corrections to inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request data portability</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Cookies and Tracking</h2>
          <p className="text-soft-grey mb-6">
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Children's Privacy</h2>
          <p className="text-soft-grey mb-6">
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Changes to This Policy</h2>
          <p className="text-soft-grey mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
          <p className="text-soft-grey mb-4">
            If you have any questions about this privacy policy, please contact us:
          </p>
          <ul className="list-none text-soft-grey mb-6 space-y-2">
            <li>Email: privacy@careerframe.com</li>
            <li>Address: 123 Career Street, Suite 456, San Francisco, CA 94105</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link href="/contact">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Contact Us About Privacy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}