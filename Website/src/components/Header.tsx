import React, { useState } from 'react';
import Button from './Button';  // Importing the Button component
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string; // href should be a string
  children: React.ReactNode; // children can be any valid React node
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 text-blue-600">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Seven Edge Solutions</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button label="Get Started" variant="primary" onClick={function (): void {
              throw new Error('Function not implemented.');
            } } />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <Button label="Get Started" variant="primary" onClick={function (): void {
                throw new Error('Function not implemented.');
              } } />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
