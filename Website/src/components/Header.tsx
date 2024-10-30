import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative overflow-hidden group"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </a>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-xl font-bold">7E</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Seven Edge Solutions</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/blog">Blog & Resources</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300">
              Get Started
            </button>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fadeIn">
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/blog">Blog & Resources</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300 w-full mt-2">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}