import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-4xl font-bold text-navy mb-4">Contact Us</h1>
          <p className="text-xl text-soft-grey">
            We're here to help you on your career journey. Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fresh-green"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fresh-green"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fresh-green"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fresh-green"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button className="w-full bg-fresh-green text-white hover:bg-opacity-90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-fresh-green mb-3" />
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-soft-grey mb-2">For general inquiries and support</p>
                <a href="mailto:support@careerframe.com" className="text-fresh-green hover:underline">
                  support@careerframe.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-fresh-green mb-3" />
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-soft-grey mb-2">Chat with our team in real-time</p>
                <p className="text-sm text-soft-grey">Available 9 AM - 6 PM EST</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-fresh-green mb-3" />
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-soft-grey mb-2">For urgent matters</p>
                <a href="tel:+1-555-CAREER" className="text-fresh-green hover:underline">
                  +1 (555) CAREER-1
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-fresh-green mb-3" />
                <h4 className="font-semibold mb-2">Office</h4>
                <p className="text-soft-grey">
                  123 Career Street<br />
                  Suite 456<br />
                  San Francisco, CA 94105
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-soft-grey mb-6">
            Looking for quick answers? Check our FAQ section first.
          </p>
          <Link href="/">
            <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
              View FAQ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}