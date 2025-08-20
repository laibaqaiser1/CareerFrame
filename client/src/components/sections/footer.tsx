import { Linkedin, Facebook, Shield } from "lucide-react";
import { SiX, SiTiktok, SiInstagram } from "react-icons/si";
import careerFrameLogo from "@assets/logo_1753453465800.png";

const companyLinks = [
  { text: "About us", href: "/about-us" },
  { text: "Contact", href: "/contact" }
];

const legalLinks = [
  { text: "Privacy policy", href: "/privacy-policy" },
  { text: "Terms of services", href: "/terms-of-service" },
  { text: "Data protection", href: "/data-protection" }
];

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16 md:py-20 w-full">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left section with logo, description and social icons */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={careerFrameLogo} 
                alt="CareerFrame Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Empowering careers through AI-powered<br className="hidden md:block" /> guidance and personalized coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/careerframe_" target="_blank" rel="noopener noreferrer">
                <SiX className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/company/careerframe" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577108494161" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </a>
              <a href="https://tiktok.com/@careerframe" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Company section */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal section */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-16 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 CareerFrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
