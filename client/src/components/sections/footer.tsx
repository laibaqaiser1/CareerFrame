import { Linkedin, Facebook } from "lucide-react";
import { SiX, SiTiktok } from "react-icons/si";
import careerFrameLogo from "@assets/ChatGPT Image Jun 19, 2025, 09_12_42 PM_1750363966951.png";

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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={careerFrameLogo} 
                alt="CareerFrame Logo" 
                className="h-32"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Empowering careers through AI-powered guidance and personalized coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Careerframe_" target="_blank" rel="noopener noreferrer">
                <SiX className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://tiktok.com/@careerframe" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/company/careerframe" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577108494161" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
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
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 CareerFrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
