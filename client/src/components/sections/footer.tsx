import { Twitter, Linkedin, Facebook } from "lucide-react";
import careerFrameLogo from "@assets/ChatGPT Image Jun 19, 2025, 09_12_42 PM_1750363966951.png";

const footerSections = [
  {
    title: "Platform",
    links: [
      { text: "Features", href: "#features" },
      { text: "How it Works", href: "#how-it-works" },
      { text: "Pricing", href: "#pricing" },
      { text: "Success Stories", href: "#testimonials" }
    ]
  },
  {
    title: "Resources",
    links: [
      { text: "Career Blog", href: "#" },
      { text: "Help Center", href: "#" },
      { text: "Community", href: "#" },
      { text: "API Docs", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Contact", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Twitter className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
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
