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
          <h1 className="text-4xl font-bold text-navy mb-4">User Data Deletion & Data Protection Policy</h1>
          <p className="text-lg text-soft-grey">
            Your data protection rights and how to request deletion of your personal data
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
          <h2 className="text-2xl font-bold text-navy mb-4">Introduction</h2>
          <p className="text-soft-grey mb-6">
            Careerframe Ltd respects your privacy and is committed to protecting your personal data. This page explains your data protection rights, including how you can request the deletion of your personal data held by Careerframe Ltd, in line with the UK General Data Protection Regulation (UK GDPR).
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Data Protection Commitment</h2>
          <p className="text-soft-grey mb-4">
            We take your privacy seriously and adhere to data protection principles, ensuring your data is:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Processed lawfully, fairly, and transparently</li>
            <li>Collected for specified, explicit, and legitimate purposes</li>
            <li>Relevant, limited, and kept up to date</li>
            <li>Stored securely and retained only as long as necessary</li>
            <li>Processed in a manner that ensures appropriate security and confidentiality</li>
          </ul>

          <p className="text-soft-grey mb-4">
            You have the following rights under data protection law:
          </p>
          <div className="bg-fresh-green/10 border border-fresh-green/20 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Database className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to access your personal data</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to rectify inaccurate or incomplete data</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to request erasure of your personal data ("right to be forgotten")</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to restrict processing</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Database className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to data portability</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to object to processing</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-fresh-green mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to withdraw consent at any time (where consent was the basis for processing)</h4>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Your Right to Erasure</h2>
          <p className="text-soft-grey mb-4">
            You have the right to request that we delete your personal data where:
          </p>
          <ul className="list-disc list-inside text-soft-grey mb-4 space-y-2">
            <li>The data is no longer necessary for the purposes for which it was collected</li>
            <li>You withdraw your consent (where applicable)</li>
            <li>You object to processing and there are no overriding legitimate grounds</li>
            <li>The data was processed unlawfully</li>
            <li>Deletion is required to comply with a legal obligation</li>
          </ul>
          <p className="text-soft-grey mb-8">
            We may not always be able to comply fully if we are required to retain certain data for legal, regulatory, or legitimate business purposes (e.g., tax records or legal claims).
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">How to Request Data Deletion</h2>
          <p className="text-soft-grey mb-4">
            You can request the deletion of your personal data at any time by contacting our Data Privacy Manager:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-navy mb-3">Contact Information</h4>
            <ul className="list-none text-soft-grey space-y-2">
              <li><strong>Data Privacy Manager:</strong> Arron McWilliam</li>
              <li><strong>Email:</strong> Arron@careerframe.co.uk</li>
              <li><strong>Postal address:</strong> Careerframe Ltd, Registered Office, Shrewsbury, UK</li>
              <li><strong>Subject line:</strong> Data Deletion Request</li>
            </ul>
          </div>
          <h4 className="font-semibold text-navy mb-3">Information to include in your request:</h4>
          <ul className="list-disc list-inside text-soft-grey mb-6 space-y-2">
            <li>Full name</li>
            <li>Email address associated with your account</li>
            <li>Description of the data you wish to have deleted</li>
          </ul>
          <p className="text-soft-grey mb-8">
            We may ask you to verify your identity to ensure your data remains secure.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">How We Process Your Request</h2>
          <p className="text-soft-grey mb-4">
            We aim to respond to all legitimate requests within one month. If your request is complex or if you have made multiple requests, it may take longer. We will keep you informed.
          </p>
          <p className="text-soft-grey mb-8">
            Where possible, your data will be deleted from our active systems and securely removed from backups at the next available scheduled cycle.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Consequences of Data Deletion</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <p className="text-soft-grey">
              <strong>Please note:</strong> Deletion of your data will result in the closure of your account and the loss of any accumulated XP, rewards, or progress associated with it. This action cannot be reversed once completed.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Contact</h2>
          <p className="text-soft-grey mb-4">
            If you have any questions about this policy, your rights, or how we handle your data, please contact our Data Privacy Manager at Arron@careerframe.co.uk.
          </p>
          <p className="text-soft-grey mb-6">
            You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at www.ico.org.uk, but we encourage you to contact us first so we can try to resolve your concerns.
          </p>
          <p className="text-soft-grey mb-6">
            <strong>Last updated:</strong> July 5, 2025
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/privacy">
            <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
              View Privacy Policy
            </Button>
          </Link>
          <a href="mailto:Arron@careerframe.co.uk?subject=Data Deletion Request">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Request Data Deletion
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}