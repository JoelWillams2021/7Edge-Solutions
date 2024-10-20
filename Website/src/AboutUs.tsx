import React, { useState, ReactNode } from 'react';
import { Settings, MessageSquare, Menu, X, Camera, Database, PieChart, DollarSign } from 'lucide-react';
import Footer from './components/Footer';


// Define props types for Icon component
interface IconProps {
  name: string;
  size?: number;
}

// Define icons for dynamic usage in the Icon component
const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const icons = {
    Camera, Database, PieChart, DollarSign, Settings, MessageSquare, Menu, X
  };
  const IconComponent = icons[name as keyof typeof icons];
  return IconComponent ? <IconComponent size={size} /> : null;
};

// Define props types for Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

// Button component
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded transition-colors font-bold';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-blue-600 hover:bg-gray-100',
    outline: 'border border-blue-600 text-blue-600 hover:bg-gray-100',
  };
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

// Define props types for NavLink component
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

// NavLink component
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </a>
);

// Header component
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <div className="w-13 h-10 text-blue-600">
                  <img src="/images/logo2.png" alt="My Image" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-gray-900 ml-2">Seven Edge Solutions</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <Icon name="Menu" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about-us">About Us</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-gray-900">Seven Edge Solutions</span>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <Icon name="X" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink href="/about-us">About Us</NavLink>
                  <NavLink href="/portfolio">Portfolio</NavLink>
                  <NavLink href="/contact">Contact Us</NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Define props types for Section component
interface SectionProps {
  title: string;
  content: string;
  id: string;
}

// Section component
const Section: React.FC<SectionProps> = ({ title, content, id }) => (
  <section id={id} className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="text-lg text-gray-600 max-w-3xl">{content}</p>
    </div>
  </section>
);

// Define props types for TeamMember component
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

// TeamMember component
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

// Hero component
const Hero: React.FC = () => (
  <div className="relative bg-gray-800 text-white">
    <img src="/images/innovation.jpg" alt="" className="w-full h-[60vh] object-cover opacity-50" />
    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
        We're on a mission to power the future of business through technology
      </h1>
    </div>
  </div>
);

// HomePage component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
         <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-grow md:max-w-lg">
            <Section
              id="mission"
              title="Our Mission"
              content="Our mission is to empower businesses with the technology they need to compete and win in the digital economy. We provide a comprehensive suite of cloud-based products and services that help companies innovate faster, scale smarter, and compete more effectively."
            />
            <Section
              id="vision"
              title="Our Vision"
              content="To be the technology partner of choice for businesses worldwide, helping our customers harness the power of the cloud to achieve their most ambitious goals. We believe that by providing innovative, high-quality solutions and outstanding customer service, we can help businesses thrive in the digital age."
            />
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 mt-10 md:mt-0">
            <img 
              src="/images/mission.png" 
              alt="Descriptive Alt Text" 
              className="w-full h-auto rounded-lg" // Make image responsive and rounded
            />
          </div>
        </div>

      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

