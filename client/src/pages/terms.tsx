import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, FileText, Users, Shield, AlertTriangle } from "lucide-react";

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-navy mb-4">Terms of Service</h1>
          <p className="text-lg text-soft-grey">
            Last updated: January 3, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <FileText className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Agreement</h3>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">User Rights</h3>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Shield className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Protection</h3>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-fresh-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Limitations</h3>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Acceptance of Terms</h2>
          <p className="text-soft-grey mb-6">
            By accessing and using CareerFrame, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Use License</h2>
          <p className="text-soft-grey mb-4">
            Permission is granted to temporarily use CareerFrame for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">User Accounts</h2>
          <p className="text-soft-grey mb-4">
            To access certain features of CareerFrame, you must register for an account. You agree to:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your password and account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Subscription and Billing</h2>
          <p className="text-soft-grey mb-4">
            CareerFrame offers both free and paid subscription plans:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Free accounts have limited access to features</li>
            <li>Premium subscriptions are billed monthly or annually</li>
            <li>You may cancel your subscription at any time</li>
            <li>Refunds are available within 30 days of purchase</li>
            <li>Price changes will be communicated 30 days in advance</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Prohibited Uses</h2>
          <p className="text-soft-grey mb-4">
            You may not use CareerFrame:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>For any unlawful purpose or to solicit others to engage in unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
            <li>To upload or transmit viruses or any other type of malicious code</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Content and Intellectual Property</h2>
          <p className="text-soft-grey mb-6">
            All content, features, and functionality on CareerFrame are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">AI-Generated Content</h2>
          <p className="text-soft-grey mb-4">
            CareerFrame uses artificial intelligence to provide career guidance and recommendations:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>AI-generated advice is for informational purposes only</li>
            <li>We do not guarantee the accuracy or completeness of AI recommendations</li>
            <li>Users should use their own judgment when making career decisions</li>
            <li>AI advice should not replace professional career counseling when needed</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Disclaimer</h2>
          <p className="text-soft-grey mb-6">
            The information on this website is provided on an "as is" basis. CareerFrame makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Limitations</h2>
          <p className="text-soft-grey mb-6">
            In no event shall CareerFrame or its suppliers be liable for any damages arising out of the use or inability to use the materials on CareerFrame's website, even if CareerFrame or its authorized representative has been notified of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Revisions</h2>
          <p className="text-soft-grey mb-6">
            CareerFrame may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
          <p className="text-soft-grey mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-none text-soft-grey mb-6 space-y-2">
            <li>Email: legal@careerframe.com</li>
            <li>Address: 123 Career Street, Suite 456, San Francisco, CA 94105</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link href="/contact">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Contact Us About Terms
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}