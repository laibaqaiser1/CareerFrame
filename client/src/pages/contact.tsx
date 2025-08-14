import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Mail, MapPin, Clock } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { SoundButton } from "@/components/SoundButton";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* CareerFrame Badge */}
      <div className="absolute top-1/4 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 relative z-10">
        <div className="mb-12">
          <Link href="/">
            <SoundButton 
              variant="ghost" 
              className="mb-6 hover:bg-green-50 transition-colors"
              style={{ color: '#829340' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </SoundButton>
          </Link>
          
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Contact Us
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              We're here to help you on your career journey. Get in touch with our team for support, guidance, or any questions about CareerFrame.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            className="border rounded-xl p-8"
            style={{ 
              backgroundColor: 'rgba(30, 58, 138, 0.05)', 
              borderColor: 'rgba(30, 58, 138, 0.2)' 
            }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A8A' }}>Send us a message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1E3A8A' }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1E3A8A' }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#1E3A8A' }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#1E3A8A' }}>Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <SoundButton 
                soundType="submit"
                onClick={() => {
                  const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                  const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                  const subject = (document.getElementById('subject') as HTMLInputElement)?.value || '';
                  const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                  
                  const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  const mailtoLink = `mailto:Support@careerframe.co.uk?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
                  
                  window.location.href = mailtoLink;
                }}
                className="w-full text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#829340' }}
              >
                Send Message
              </SoundButton>
              
              <div className="text-center mt-4">
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Or email us directly:
                </p>
                <a 
                  href="mailto:Support@careerframe.co.uk?subject=Contact%20Form%20Inquiry&body=Hello%20CareerFrame%20Team,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20regarding:%0D%0A%0D%0A[Please%20describe%20your%20inquiry%20here]%0D%0A%0D%0AThank%20you!"
                  className="text-sm font-medium hover:underline transition-colors"
                  style={{ color: '#829340' }}
                >
                  Support@careerframe.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: 'rgba(130, 147, 64, 0.2)' 
              }}
            >
              <Mail className="h-12 w-12 mb-4" style={{ color: '#829340' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Email Support</h4>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>For all inquiries, support, and assistance</p>
              <a 
                href="mailto:Support@careerframe.co.uk" 
                className="text-lg font-medium hover:underline transition-colors"
                style={{ color: '#829340' }}
              >
                Support@careerframe.co.uk
              </a>
            </div>

            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: 'rgba(130, 147, 64, 0.2)' 
              }}
            >
              <Clock className="h-12 w-12 mb-4" style={{ color: '#1E3A8A' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Response Time</h4>
              <p className="text-lg mb-2" style={{ color: '#6B7280' }}>We aim to respond to all emails within</p>
              <p className="text-lg font-medium" style={{ color: '#829340' }}>24 hours during business days</p>
            </div>

            <div 
              className="border rounded-xl p-8"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <MapPin className="h-12 w-12 mb-4" style={{ color: '#1E3A8A' }} />
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#1E3A8A' }}>Office Address</h4>
              <div className="text-lg" style={{ color: '#6B7280' }}>
                <p>CareerFrame Ltd</p>
                <p>Battlefield Industrial Estate</p>
                <p>Shrewsbury, SY1 4AP</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div 
          className="border-2 rounded-xl p-8 text-center"
          style={{ 
            backgroundColor: 'rgba(130, 147, 64, 0.05)', 
            borderColor: '#829340' 
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
            Need Quick Help?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            For the fastest response, email us directly. We're committed to helping you succeed in your career journey and will get back to you promptly.
          </p>
          <a href="mailto:Support@careerframe.co.uk">
            <SoundButton 
              className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#829340' }}
            >
              Email Support Now
            </SoundButton>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t mt-12" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            © 2025 CareerFrame Ltd. All rights reserved. | We're here to support your career success
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}