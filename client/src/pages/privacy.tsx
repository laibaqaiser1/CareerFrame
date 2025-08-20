import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function Privacy() {
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

      <div className="max-w-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 py-16 relative z-10">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4"
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Welcome to CareerFrame's Privacy Policy!
            </h1>
            <p 
              className="text-base md:text-lg px-4"
              style={{ color: '#6B7280' }}
            >
              Your privacy matters to us. This page explains what information we collect, why we collect it, and how we keep it safe. We've kept it clear and friendly so you can understand your rights and our responsibilities.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none px-4">
          {/* Section 1: Who We Are */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              1) Who We Are
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We are CareerFrame Ltd, a UK-based career development platform helping individuals find the right career path. We're based at Battlefield Industrial Estate, Shrewsbury, Shropshire, SY4 3DB. Company Number: 16331497 | ICO Registration: C1742472.
            </p>
          </section>

          {/* Section 2: What Information We Collect */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              2) What Information We Collect
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We collect information that helps us provide our services, such as your name, email, work history, and career preferences. We also collect data about how you use our platform so we can improve it.
            </p>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              3) How We Use Your Information
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We use your information to deliver the services you sign up for, such as career alignment, skill gap analysis, and milestone tracking. We may also use it to send you updates, respond to your questions, and keep our platform secure.
            </p>
          </section>

          {/* Section 4: Your Privacy Choices & Rights */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              4) Your Privacy Choices & Rights
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              You have the right to see, update, or delete your information, and to object to certain uses. If you ever want to exercise your rights, just email us at <a href="mailto:privacy@careerframe.co.uk" className="underline" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a>.
            </p>
          </section>

          {/* Section 5: How We Keep Your Data Safe */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              5) How We Keep Your Data Safe
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We use encryption, access controls, and regular security checks to keep your data safe. Only trained staff have access to personal information, and only when necessary.
            </p>
          </section>

          {/* Section 6: How Long We Keep Your Data */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              6) How Long We Keep Your Data
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We keep your information only as long as needed to provide our services and comply with the law. When we no longer need it, we securely delete or anonymise it.
            </p>
          </section>

          {/* Section 7: Questions or Concerns? */}
          <section className="mb-8">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              7) Questions or Concerns?
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              We're here to help. Email us at <a href="mailto:privacy@careerframe.co.uk" className="underline" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a> or write to us at our registered address. You can also contact the UK Information Commissioner's Office (ICO) if you're unhappy with how we handle your data.
            </p>
          </section>

          {/* Closing Message */}
          <div 
            className="border rounded-xl p-6 md:p-8 mt-8 md:mt-12 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(130, 147, 64, 0.05)', 
              borderColor: 'rgba(130, 147, 64, 0.2)' 
            }}
          >
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 mr-3" style={{ color: '#829340' }} />
              <h3 
                className="text-lg md:text-xl font-semibold"
                style={{ color: '#1E3A8A' }}
              >
                Thank You for Trusting CareerFrame
              </h3>
            </div>
            <p 
              className="text-base md:text-lg leading-relaxed mb-4"
              style={{ color: '#6B7280' }}
            >
              Thanks for trusting CareerFrame. We'll always do our best to keep your information safe and use it responsibly.
            </p>
            <p 
              className="text-base md:text-lg"
              style={{ color: '#6B7280' }}
            >
              Questions? Contact us: <a href="mailto:privacy@careerframe.co.uk" className="underline font-medium" style={{ color: '#829340' }}>privacy@careerframe.co.uk</a>
            </p>
          </div>



        </div>
      </div>
      <Footer />
    </div>
  );
}