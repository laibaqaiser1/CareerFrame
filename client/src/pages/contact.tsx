import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Mail, MapPin, Clock, Users, Shield, Handshake, Newspaper, AlertTriangle, Building } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { SoundButton } from "@/components/SoundButton";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function Contact() {
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Contact Us
            </h1>
            <p 
              className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              style={{ color: '#6B7280' }}
            >
              We'd love to hear from you. Choose the best route and we'll get back to you quickly.
            </p>
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="mb-12 md:mb-16 px-4">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: '#1E3A8A' }}
          >
            Talk to Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* General Enquiries */}
            <div 
              className="border rounded-xl p-6"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.05)', 
                borderColor: 'rgba(30, 58, 138, 0.2)' 
              }}
            >
              <Mail className="h-8 w-8 mb-3" style={{ color: '#1E3A8A' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>General Enquiries</h4>
              <a 
                href="mailto:info@careerframe.co.uk" 
                className="text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                info@careerframe.co.uk
              </a>
            </div>

            {/* Support & Billing */}
            <div 
              className="border rounded-xl p-6"
              style={{ 
                backgroundColor: 'rgba(130, 147, 64, 0.05)', 
                borderColor: 'rgba(130, 147, 64, 0.2)' 
              }}
            >
              <Users className="h-8 w-8 mb-3" style={{ color: '#829340' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>Support & Billing</h4>
              <a 
                href="mailto:support@careerframe.co.uk" 
                className="text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                support@careerframe.co.uk
              </a>
            </div>

            {/* Privacy & Data */}
            <div 
              className="border rounded-xl p-6"
              style={{ 
                backgroundColor: 'rgba(255, 69, 0, 0.05)', 
                borderColor: 'rgba(255, 69, 0, 0.2)' 
              }}
            >
              <Shield className="h-8 w-8 mb-3" style={{ color: '#FF4500' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>Privacy & Data Requests</h4>
              <a 
                href="mailto:privacy@careerframe.co.uk" 
                className="text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                privacy@careerframe.co.uk
              </a>
            </div>

            {/* Partnerships */}
            <div 
              className="border rounded-xl p-6"
              style={{ 
                backgroundColor: 'rgba(138, 43, 226, 0.05)', 
                borderColor: 'rgba(138, 43, 226, 0.2)' 
              }}
            >
              <Handshake className="h-8 w-8 mb-3" style={{ color: '#8A2BE2' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>Partnerships</h4>
              <a 
                href="mailto:partnerships@careerframe.co.uk" 
                className="text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                partnerships@careerframe.co.uk
              </a>
            </div>

            {/* Press */}
            <div 
              className="border rounded-xl p-6"
              style={{ 
                backgroundColor: 'rgba(255, 20, 147, 0.05)', 
                borderColor: 'rgba(255, 20, 147, 0.2)' 
              }}
            >
              <Newspaper className="h-8 w-8 mb-3" style={{ color: '#FF1493' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>Press</h4>
              <a 
                href="mailto:press@careerframe.co.uk" 
                className="text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                press@careerframe.co.uk
              </a>
            </div>

            {/* Complaints */}
            <div 
              className="border rounded-xl p-6"
              style={{ 
                backgroundColor: 'rgba(220, 20, 60, 0.05)', 
                borderColor: 'rgba(220, 20, 60, 0.2)' 
              }}
            >
              <AlertTriangle className="h-8 w-8 mb-3" style={{ color: '#DC143C' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>Complaints</h4>
              <a 
                href="mailto:complaints@careerframe.co.uk" 
                className="text-base font-medium hover:underline transition-colors break-all"
                style={{ color: '#829340' }}
              >
                complaints@careerframe.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Response Times & Registered Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          {/* Response Times */}
          <div 
            className="border rounded-xl p-6 md:p-8"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <Clock className="h-10 w-10 md:h-12 md:w-12 mb-4" style={{ color: '#829340' }} />
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#1E3A8A' }}>Response Times</h3>
            <div className="space-y-3">
              <p className="text-base md:text-lg" style={{ color: '#6B7280' }}>
                We aim to reply within <span className="font-semibold" style={{ color: '#829340' }}>2 working days</span>
              </p>
              <p className="text-base md:text-lg" style={{ color: '#6B7280' }}>
                For data rights requests, we will respond within <span className="font-semibold" style={{ color: '#829340' }}>one month</span> as required by UK GDPR
              </p>
            </div>
          </div>

          {/* Registered Details */}
          <div 
            className="border rounded-xl p-6 md:p-8"
            style={{ 
              backgroundColor: 'rgba(30, 58, 138, 0.05)', 
              borderColor: 'rgba(30, 58, 138, 0.2)' 
            }}
          >
            <Building className="h-10 w-10 md:h-12 md:w-12 mb-4" style={{ color: '#1E3A8A' }} />
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#1E3A8A' }}>Registered Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#829340' }} />
                <div>
                  <p className="text-base md:text-lg font-medium mb-1" style={{ color: '#1E3A8A' }}>Registered Address:</p>
                  <p className="text-base md:text-lg" style={{ color: '#6B7280' }}>
                    Battlefield Industrial Estate<br />
                    Shrewsbury, Shropshire, SY4 3DB
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#829340' }} />
                <div>
                  <p className="text-base md:text-lg font-medium mb-1" style={{ color: '#1E3A8A' }}>Company Number:</p>
                  <p className="text-base md:text-lg" style={{ color: '#6B7280' }}>16331497</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#829340' }} />
                <div>
                  <p className="text-base md:text-lg font-medium mb-1" style={{ color: '#1E3A8A' }}>ICO Registration:</p>
                  <p className="text-base md:text-lg" style={{ color: '#6B7280' }}>C1742472</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prefer a Form Section */}
        <div className="mb-12 md:mb-16 px-4">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-center"
            style={{ color: '#1E3A8A' }}
          >
            Prefer a Form?
          </h2>
          <div 
            className="border rounded-xl p-6 md:p-8 text-center max-w-2xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <Mail className="h-12 w-12 mx-auto mb-4" style={{ color: '#829340' }} />
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A8A' }}>Quick Contact Form</h3>
            <p className="text-base md:text-lg mb-6" style={{ color: '#6B7280' }}>
              Use the in‑app help widget or contact form. Include your account email and a brief description so we can help faster.
            </p>
            <SoundButton 
              className="px-6 py-3 text-white shadow-lg hover:shadow-xl transition-all rounded-lg"
              style={{ backgroundColor: '#829340' }}
              onClick={() => {
                const mailtoLink = `mailto:info@careerframe.co.uk?subject=Contact%20Form%20Inquiry&body=Hello%20CareerFrame%20Team,%0D%0A%0D%0AAccount%20Email:%20[Your%20email%20here]%0D%0A%0D%0ABrief%20Description:%0D%0A[Please%20describe%20your%20inquiry%20here]%0D%0A%0D%0AThank%20you!`;
                window.location.href = mailtoLink;
              }}
            >
              Open Contact Form
            </SoundButton>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
}