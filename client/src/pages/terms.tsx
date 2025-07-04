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
            Last updated: July 5, 2025
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

          <h2 className="text-2xl font-bold text-navy mb-4">Introduction</h2>
          <p className="text-soft-grey mb-6">
            Welcome to the Careerframe Ltd website. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">About Us</h2>
          <p className="text-soft-grey mb-6">
            This website is operated by Careerframe Ltd ("we," "us," or "our"), a company registered in the United Kingdom.
          </p>
          <p className="text-soft-grey mb-6">
            For any questions, you can contact us at:
          </p>
          <ul className="list-none text-soft-grey mb-6 space-y-2">
            <li><strong>Email:</strong> Arron@careerframe.co.uk</li>
            <li><strong>Postal address:</strong> Careerframe Ltd, Registered Office, Shrewsbury, UK</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">Use of the Website</h2>
          <p className="text-soft-grey mb-4">
            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website. Prohibited behaviour includes harassing or causing distress to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
          </p>
          <p className="text-soft-grey mb-6">
            We reserve the right to suspend or terminate your access to the website if you breach these Terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Intellectual Property</h2>
          <p className="text-soft-grey mb-6">
            All content on this website, including text, graphics, logos, icons, images, and software, is the property of Careerframe Ltd or its licensors and is protected by intellectual property laws. You may view, download, and print content for personal use only. Any other use, including reproduction, modification, distribution, or republication, without our prior written consent, is strictly prohibited.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Accuracy of Information</h2>
          <p className="text-soft-grey mb-6">
            We endeavour to ensure that the information on our website is correct and up to date. However, we do not warrant the accuracy, completeness, or reliability of any content. Information is provided "as is," and we make no representations or warranties of any kind.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Links to Other Websites</h2>
          <p className="text-soft-grey mb-6">
            Our website may contain links to third-party websites. These links are provided for your convenience only. Careerframe Ltd has no control over the content or availability of these websites and is not responsible for any loss or damage that may arise from your use of them.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">XP (Experience Points) and User Rewards</h2>
          <p className="text-soft-grey mb-6">
            Our website and services may include the ability to earn Experience Points ("XP") and other virtual rewards. XP is provided for the purpose of tracking engagement and progress within our platform. XP has no monetary value and cannot be exchanged for cash or transferred outside of our platform. We reserve the right to modify, suspend, or discontinue the XP system at any time without notice. Misuse or abuse of the XP system may result in loss of points or suspension of your account.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
          <p className="text-soft-grey mb-6">
            To the fullest extent permitted by law, Careerframe Ltd shall not be liable for any loss or damage, whether direct, indirect, incidental, or consequential, arising from your use of, or inability to use, our website, services, or XP and reward systems.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Changes to These Terms</h2>
          <p className="text-soft-grey mb-6">
            We reserve the right to amend these Terms at any time. Any changes will be posted on this page and will take effect immediately upon posting. Your continued use of the website constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Governing Law</h2>
          <p className="text-soft-grey mb-6">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <p className="text-soft-grey mb-6">
            If you have any questions about these Terms, please contact us at Arron@careerframe.co.uk.
          </p>
        </div>

        <div className="text-center mt-8">
          <a href="mailto:Arron@careerframe.co.uk">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Contact Us About Terms
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}