import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, FileText, Users, Shield, AlertTriangle } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">

      {/* CareerFrame Badge in background */}
      <div className="absolute top-1/4 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 py-16 relative z-10">
        <div className="mb-12">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-green-50 transition-colors"
              style={{ color: '#829340' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Terms of Service
            </h1>
            <p 
              className="text-lg"
              style={{ color: '#6B7280' }}
            >
              Last updated: July 5, 2025
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Clickable Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Link href="/terms/agreement">
              <div className="text-center p-6 bg-white border-2 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                   style={{ borderColor: 'rgba(130, 147, 64, 0.2)' }}>
                <FileText className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: '#829340' }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1E3A8A' }}>Agreement</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>Terms and conditions</p>
              </div>
            </Link>
            
            <Link href="/terms/user-rights">
              <div className="text-center p-6 bg-white border-2 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                   style={{ borderColor: 'rgba(130, 147, 64, 0.2)' }}>
                <Users className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: '#829340' }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1E3A8A' }}>User Rights</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>Your rights & responsibilities</p>
              </div>
            </Link>
            
            <Link href="/terms/protection">
              <div className="text-center p-6 bg-white border-2 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                   style={{ borderColor: 'rgba(130, 147, 64, 0.2)' }}>
                <Shield className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: '#829340' }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1E3A8A' }}>Protection</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>Data & privacy protection</p>
              </div>
            </Link>
            
            <Link href="/terms/limitations">
              <div className="text-center p-6 bg-white border-2 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                   style={{ borderColor: 'rgba(130, 147, 64, 0.2)' }}>
                <AlertTriangle className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: '#829340' }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1E3A8A' }}>Limitations</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>Liability & restrictions</p>
              </div>
            </Link>
          </div>

          {/* Introduction Section */}
          <div 
            className="border rounded-xl p-8 mb-12 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Introduction
            </h2>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Welcome to the CareerFrame Ltd website. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website.
            </p>
          </div>

          {/* Quick Overview Section */}
          <section className="mb-12">
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ color: '#1E3A8A' }}
            >
              Quick Overview
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg" style={{ color: '#6B7280' }}>Use our platform responsibly and lawfully</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg" style={{ color: '#6B7280' }}>Respect intellectual property rights</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg" style={{ color: '#6B7280' }}>Understand XP system terms</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg" style={{ color: '#6B7280' }}>Know your rights and limitations</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg" style={{ color: '#6B7280' }}>Understand data protection measures</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg" style={{ color: '#6B7280' }}>Review liability limitations</span>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Call-to-Action */}
          <div 
            className="border rounded-xl p-8 text-center mb-12"
            style={{ 
              backgroundColor: 'rgba(30, 58, 138, 0.05)', 
              borderColor: 'rgba(30, 58, 138, 0.2)' 
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              Ready to Explore Our Terms?
            </h3>
            <p 
              className="text-lg mb-6 max-w-2xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              Click on any of the sections above to dive deeper into specific areas of our Terms of Service. Each section contains detailed information about your rights, our policies, and important legal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms/agreement">
                <Button 
                  className="text-white px-6 py-2 shadow-md hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#829340' }}
                >
                  View Agreement Details
                </Button>
              </Link>
              <Link href="/terms/user-rights">
                <Button 
                  variant="outline"
                  className="px-6 py-2 border-2 hover:bg-blue-50 transition-all"
                  style={{ borderColor: '#1E3A8A', color: '#1E3A8A' }}
                >
                  Learn Your Rights
                </Button>
              </Link>
            </div>
          </div>
          {/* Contact Section */}
          <div 
            className="border-2 rounded-xl p-8 text-center mt-12"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: '#829340' 
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Questions About Our Terms?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
              If you have any questions about these Terms, please don't hesitate to contact us.
            </p>
            <a href="mailto:Arron@careerframe.co.uk">
              <Button 
                className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#829340' }}
              >
                Contact Us About Terms
              </Button>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t mt-12" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              © 2025 CareerFrame Ltd. All rights reserved. | Last updated: July 5, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}