import { Link } from "wouter";
import careerFrameLogo from "@assets/logo_1753453465800.png";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={careerFrameLogo} 
                alt="CareerFrame Logo" 
                className="h-6 w-auto"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/#powerful-features"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </a>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contact
            </Link>
            <a 
              href="https://app.careerframe.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ml-2"
              style={{ 
                backgroundColor: '#829340',
                color: 'white'
              }}
            >
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex space-x-2">
            <a 
              href="/#powerful-features"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600"
            >
              Features
            </a>
            <a 
              href="https://app.careerframe.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ 
                backgroundColor: '#829340',
                color: 'white'
              }}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}