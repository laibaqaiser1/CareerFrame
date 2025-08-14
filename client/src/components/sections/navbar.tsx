import { Link } from "wouter";
import careerFrameLogo from "@assets/logo_1753453465800.png";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={careerFrameLogo} 
                alt="CareerFrame Logo" 
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Contact
              </a>
            </Link>
            <Link href="/">
              <a 
                className="px-4 py-2 rounded-lg font-medium transition-colors"
                style={{ 
                  backgroundColor: '#829340',
                  color: 'white'
                }}
              >
                Get Started
              </a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link href="/">
              <a 
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ 
                  backgroundColor: '#829340',
                  color: 'white'
                }}
              >
                Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}