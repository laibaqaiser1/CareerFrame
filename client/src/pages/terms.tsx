import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import careerFrameLogo from "../assets/avatar1.png";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* CareerFrame Badge in background */}
      <div className="absolute top-1/4 right-1/4 opacity-5 transform rotate-12 z-0">
        <img 
          src={careerFrameLogo} 
          alt="CareerFrame Badge" 
          className="w-64 h-64 object-contain"
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
              Last updated: August 2025
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none px-4">
          {/* Section 1 - About these terms */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">1</span>
              <span>About these terms</span>
            </h2>
            <div 
              className="text-base md:text-lg mb-4 leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>
                These Terms govern your use of CareerFrame's websites and services (the "Service"). By creating an account or using the Service, you agree to these Terms.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p><strong>Provider:</strong> CareerFrame Ltd, Battlefield Industrial Estate, Shrewsbury, Shropshire, SY4 3DB, Company Number 16331497.</p>
                <p><strong>Contact:</strong> <a href="mailto:support@careerframe.co.uk" style={{ color: '#829340' }}>support@careerframe.co.uk</a></p>
                <p><strong>Governing law:</strong> England & Wales.</p>
              </div>
            </div>
          </section>

          {/* Section 2 - Who can use CareerFrame */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">2</span>
              <span>Who can use CareerFrame</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-3"
              style={{ color: '#6B7280' }}
            >
              <p>You must be 18 or older and capable of forming a contract in your jurisdiction.</p>
              <p>If you use CareerFrame on behalf of a company, you represent that you have authority to bind that company and that "you" includes that entity.</p>
            </div>
          </section>

          {/* Section 3 - Your account & security */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">3</span>
              <span>Your account & security</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              You are responsible for safeguarding your login credentials and for all activity on your account. Notify us immediately of any unauthorised use. We may suspend or terminate accounts that violate these Terms or pose security risks.
            </p>
          </section>

          {/* Section 4 - Service description */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">4</span>
              <span>Service description</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              CareerFrame provides AI-assisted career alignment, skill-gap insights, milestone tracking, networking tools, and job application helpers (e.g., CV and cover letter drafting). Some features are free with limits; others require a paid subscription.
            </p>
          </section>

          {/* Section 5 - Plans, billing & cancellations */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">5</span>
              <span>Plans, billing & cancellations</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p><strong>Freemium:</strong> limited access as described on our pricing page.</p>
              <p><strong>Premium:</strong> paid subscription with expanded limits and features. Fees and renewal cadence are shown at checkout.</p>
              <p><strong>Billing:</strong> Subscriptions renew automatically until cancelled. You authorise us and our payment processor to charge the payment method on file.</p>
              <p><strong>Cancellation:</strong> Cancel any time via account settings; access continues until the end of the billing period.</p>
              <p><strong>Cooling‑off (UK consumers):</strong> You may have a 14‑day right to cancel digital services. By starting a paid plan immediately, you consent to immediate performance and acknowledge you may lose the right to cancel once the service is fully provided within the 14 days.</p>
              <p><strong>Refunds:</strong> Except where required by law, fees are non‑refundable once a billing period starts. We may issue a pro‑rata credit if we materially fail to deliver the core Service and cannot remedy within a reasonable time.</p>
            </div>
          </section>

          {/* Section 6 - Acceptable use */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">6</span>
              <span>Acceptable use</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-2"
              style={{ color: '#6B7280' }}
            >
              <ul className="space-y-2 ml-4">
                <li>Do not break the law, infringe IP, or violate others' privacy.</li>
                <li>Do not upload unlawful, discriminatory, or harmful content.</li>
                <li>Do not reverse engineer, scrape, or overload the Service.</li>
                <li>Do not misrepresent your identity or professional qualifications.</li>
                <li>Do not use outputs to create misleading or deceptive applications.</li>
                <li>Do not interfere with others' use or the security of the Service.</li>
              </ul>
            </div>
          </section>

          {/* Section 7 - Your content & licences */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">7</span>
              <span>Your content & licences</span>
            </h2>
            <div 
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: '#6B7280' }}
            >
              <p>You retain ownership of content you upload. You grant CareerFrame a worldwide, non‑exclusive licence to host, process, display, and create derivative works as needed to operate and improve the Service. You represent you have rights to the content you upload.</p>
              <p><strong>Feedback:</strong> If you share feedback, you grant us a royalty‑free, perpetual licence to use it without obligation to you.</p>
            </div>
          </section>

          {/* Section 8 - AI outputs & guidance */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">8</span>
              <span>AI outputs & guidance</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              AI features generate recommendations and drafts based on your inputs. Outputs may be incorrect or incomplete and are provided for information only. You are responsible for reviewing outputs before acting on them. CareerFrame does not provide legal, financial, or professional advice.
            </p>
          </section>

          {/* Section 9 - Third-party services */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">9</span>
              <span>Third‑party services</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We integrate with third‑party providers (e.g., payments, communications, course partners). Your use of those services is governed by their terms and privacy policies. We are not responsible for third‑party services we do not control.
            </p>
          </section>

          {/* Section 10 - Availability & changes */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">10</span>
              <span>Availability & changes</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We aim for high availability but do not guarantee uninterrupted Service. We may modify or discontinue features with reasonable notice where feasible. Material changes to these Terms will be notified in‑app or by email. Continued use after changes indicates acceptance.
            </p>
          </section>

          {/* Section 11 - Suspension & termination */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">11</span>
              <span>Suspension & termination</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              We may suspend or terminate your access for material breach, security risk, non‑payment, or unlawful use. You may terminate at any time by closing your account. Sections intended to survive (e.g., IP, disclaimers, liability limits) will survive.
            </p>
          </section>

          {/* Section 12 - Liability */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">12</span>
              <span>Liability</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Nothing limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded by law. Subject to that, CareerFrame will not be liable for indirect or consequential losses, loss of profits, or loss of data. Our aggregate liability is limited to the greater of £50 or the amounts you paid in the 12 months before the event.
            </p>
          </section>

          {/* Section 13 - Indemnity */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">13</span>
              <span>Indemnity</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              You will indemnify CareerFrame against claims arising from your unlawful use of the Service or breach of these Terms, to the extent permitted by law.
            </p>
          </section>

          {/* Section 14 - Dispute resolution */}
          <section className="mb-8 md:mb-12">
            <h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-start"
              style={{ color: '#1E3A8A' }}
            >
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-base md:text-lg font-bold mr-3 md:mr-4 flex-shrink-0 mt-1">14</span>
              <span>Dispute resolution</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              These Terms are governed by the laws of England and Wales. UK consumers may have access to Alternative Dispute Resolution (ADR) schemes; details available on request.
            </p>
          </section>

          {/* COMMENTED OUT - Previous Terms Sections Available for Reference */}
          {/*
          
          PREVIOUS TERMS OF SERVICE SECTIONS (COMMENTED OUT FOR SIMPLICITY)
          These sections contained simplified explanations and are maintained here for reference.
          They can be uncommented if needed for alternative presentation.

          - Basic Terms Overview
          - User Rights & Responsibilities  
          - Service Features & Limitations
          - Payment & Cancellation Policies
          - Content & Privacy Guidelines
          - Contact Information
          
          Contact support@careerframe.co.uk for access to alternative terms presentations.
          
          */}

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
            <a href="mailto:support@careerframe.co.uk">
              <Button 
                className="text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#829340' }}
              >
                Contact Us About Terms
              </Button>
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}