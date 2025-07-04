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
            Last updated: July 5, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-fresh-green/10 border border-fresh-green/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-navy mb-3">Introduction</h3>
            <p className="text-soft-grey mb-3">
              Welcome to Careerframe Ltd's privacy policy. Careerframe Ltd respects your privacy and is committed to protecting your personal data. This privacy policy explains how we look after your personal data when you visit our website and informs you about your privacy rights and how the law protects you.
            </p>
            <p className="text-soft-grey">
              This privacy policy is provided in a layered format so you can click through to the specific areas set out below. Please also use the Glossary to understand the meaning of some of the terms used.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">1. Important information and who we are</h2>
          
          <h3 className="text-lg font-semibold text-navy mb-3">Purpose of this privacy policy</h3>
          <p className="text-soft-grey mb-4">
            This privacy policy gives you information on how Careerframe Ltd collects and processes your personal data through your use of this website, including any data you may provide when you sign up for our newsletter, purchase a product or service, take part in a competition, or otherwise interact with us.
          </p>
          <p className="text-soft-grey mb-4">
            This website is not intended for children, and we do not knowingly collect data relating to children.
          </p>
          <p className="text-soft-grey mb-6">
            Please read this privacy policy together with any other notices we may provide so you are fully aware of how and why we use your data.
          </p>

          <h3 className="text-lg font-semibold text-navy mb-3">Controller</h3>
          <p className="text-soft-grey mb-4">
            Careerframe Ltd is the controller and responsible for your personal data (collectively referred to as "Careerframe Ltd," "we," "us," or "our" in this policy).
          </p>
          <p className="text-soft-grey mb-6">
            We have appointed a Data Privacy Manager who is responsible for overseeing questions in relation to this privacy policy.
          </p>

          <h3 className="text-lg font-semibold text-navy mb-3">Contact details</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <ul className="list-none text-soft-grey space-y-2">
              <li><strong>Data Privacy Manager:</strong> Arron McWilliam</li>
              <li><strong>Email address:</strong> Arron@careerframe.co.uk</li>
              <li><strong>Postal address:</strong> Porch Cottage, Ruyton XI Towns, Shrewsbury, Shropshire, SY41LR</li>
              <li><strong>Phone number:</strong> 07814045878</li>
            </ul>
          </div>
          <p className="text-soft-grey mb-6">
            You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK regulator for data protection (www.ico.org.uk). However, we would appreciate the chance to address your concerns before you contact the ICO.
          </p>

          <h3 className="text-lg font-semibold text-navy mb-3">Changes to the privacy policy</h3>
          <p className="text-soft-grey mb-6">
            We keep our privacy policy under regular review. This version was last updated on: 05/07/2025.
          </p>
          <p className="text-soft-grey mb-6">
            Please keep us informed if your personal data changes during your relationship with us.
          </p>

          <h3 className="text-lg font-semibold text-navy mb-3">Third-party links</h3>
          <p className="text-soft-grey mb-8">
            Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We are not responsible for their privacy statements and encourage you to read their policies.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">2. The data we collect about you</h2>
          <p className="text-soft-grey mb-4">
            We may collect, use, store and transfer different kinds of personal data about you including:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-4 space-y-2">
            <li>Identity Data</li>
            <li>Contact Data</li>
            <li>Financial Data</li>
            <li>Transaction Data</li>
            <li>Technical Data</li>
            <li>Profile Data</li>
            <li>Usage Data</li>
            <li>Marketing and Communications Data</li>
          </ul>
          <p className="text-soft-grey mb-4">
            We also collect and use Aggregated Data for statistical purposes. We do not collect any Special Categories of Personal Data.
          </p>
          <p className="text-soft-grey mb-8">
            If you fail to provide personal data when requested, we may not be able to perform the contract we have with you.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">3. How is your personal data collected?</h2>
          <p className="text-soft-grey mb-4">
            We use different methods including:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-8 space-y-2">
            <li>Direct interactions</li>
            <li>Automated technologies or interactions (e.g. cookies)</li>
            <li>Third parties or publicly available sources</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">4. How we use your personal data</h2>
          <p className="text-soft-grey mb-4">
            We will only use your personal data when legally allowed, such as:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-4 space-y-2">
            <li>To perform a contract</li>
            <li>Where necessary for legitimate interests</li>
            <li>To comply with a legal obligation</li>
          </ul>
          <p className="text-soft-grey mb-8">
            We will get your consent before sending third-party direct marketing communications. You can withdraw consent at any time.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">5. Disclosures of your personal data</h2>
          <p className="text-soft-grey mb-4">
            We may share your personal data with:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-4 space-y-2">
            <li>Internal and External Third Parties (if applicable)</li>
            <li>HMRC, regulators and other authorities</li>
            <li>Successors in the event of a business sale or merger</li>
          </ul>
          <p className="text-soft-grey mb-4">
            We currently do not use any specific third-party processors.
          </p>
          <p className="text-soft-grey mb-8">
            We require all third parties to respect the security of your data and use it only as instructed.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">6. International transfers</h2>
          <p className="text-soft-grey mb-8">
            We do not transfer your personal data outside the UK.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">7. Data security</h2>
          <p className="text-soft-grey mb-8">
            We have appropriate security measures to prevent your data from being accidentally lost, used or accessed in an unauthorised way, altered, or disclosed. Access to your data is limited to those with a business need to know.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">8. Data retention</h2>
          <p className="text-soft-grey mb-8">
            We will only keep your personal data as long as necessary to fulfil the purposes we collected it for, including for legal and regulatory purposes. We may retain basic customer information for six years for tax purposes.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">9. Your legal rights</h2>
          <p className="text-soft-grey mb-4">
            You have rights under data protection law to:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Request access</li>
            <li>Request correction</li>
            <li>Request erasure</li>
            <li>Object to processing</li>
            <li>Request restriction of processing</li>
            <li>Request transfer</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="text-soft-grey mb-8">
            You will not usually have to pay a fee to exercise your rights. We may need to confirm your identity before fulfilling your request.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">10. Glossary</h2>
          
          <h3 className="text-lg font-semibold text-navy mb-3">Lawful Basis:</h3>
          <ul className="list-disc list-inside text-soft-grey mb-4 space-y-2">
            <li><strong>Legitimate Interest:</strong> Careerframe Ltd's interest in conducting and managing its business</li>
            <li><strong>Performance of Contract:</strong> Necessary to perform a contract with you</li>
            <li><strong>Comply with a legal obligation:</strong> Necessary to comply with the law</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy mb-3">Third Parties:</h3>
          <ul className="list-disc list-inside text-soft-grey mb-8 space-y-2">
            <li><strong>Internal:</strong> Any internal staff or business units as necessary</li>
            <li><strong>External:</strong> None currently contracted</li>
          </ul>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-soft-grey text-center">
              If you have any questions about this policy, please contact <strong>Arron McWilliam</strong> at <strong>Arron@careerframe.co.uk</strong> or call <strong>07814045878</strong>.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="mailto:Arron@careerframe.co.uk?subject=Privacy Policy Inquiry">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Email Privacy Manager
            </Button>
          </a>
          <a href="tel:07814045878">
            <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
              Call: 07814045878
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}