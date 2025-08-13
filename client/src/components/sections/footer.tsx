import { Linkedin, Facebook, Shield } from "lucide-react";
import { SiX, SiTiktok, SiInstagram } from "react-icons/si";
import careerFrameLogo from "@assets/logo_1753453465800.png";

const footerSections = [
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Data Protection", href: "/data-protection" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left section with logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={careerFrameLogo} 
                alt="CareerFrame Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Empowering careers through AI-powered guidance and personalized coaching.
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
          
          {/* Right section with links */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 CareerFrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
