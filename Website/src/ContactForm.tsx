import React, { useState } from 'react';
import { Settings, MessageSquare, Menu, X, Search } from 'lucide-react';

// Define types for components' props
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                <circle cx="12" cy="12" r="10" fill="#4A90E2" />
              </svg>
              <span className="text-xl font-bold text-gray-900">Acme Inc.</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <Settings size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <MessageSquare size={20} />
            </button>
            <button className="ml-2 w-8 h-8 bg-gray-200 rounded-full"></button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                    <circle cx="12" cy="12" r="10" fill="#4A90E2" />
                  </svg>
                  <span className="text-xl font-bold text-gray-900">Acme Inc.</span>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink href="#">Home</NavLink>
                  <NavLink href="#">Products</NavLink>
                  <NavLink href="#">About</NavLink>
                  <NavLink href="#">Contact</NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
        </div>
      )}
    </header>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
        Learn More
      </a>
    </div>
  </div>
);

const SearchBar: React.FC = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-12">
    <div className="relative">
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects: ProjectCardProps[] = [
    { 
      title: 'Modern Home Design',
      description: 'A sleek and minimalist approach to contemporary living spaces.',
      image: '/api/placeholder/400/300'
    },
    { 
      title: 'Sustainable Office Complex',
      description: 'Eco-friendly design incorporating renewable energy and green spaces.',
      image: '/api/placeholder/400/300'
    },
    { 
      title: 'Urban Renewal Project',
      description: 'Revitalizing city centers with mixed-use developments and public areas.',
      image: '/api/placeholder/400/300'
    },
    { 
      title: 'Luxury Resort',
      description: 'Blending natural beauty with high-end amenities for an unforgettable experience.',
      image: '/api/placeholder/400/300'
    },
    { 
      title: 'Smart City Infrastructure',
      description: 'Integrating technology for efficient urban living and resource management.',
      image: '/api/placeholder/400/300'
    },
    { 
      title: 'Historic Preservation',
      description: 'Restoring and adapting heritage buildings for modern use while preserving their character.',
      image: '/api/placeholder/400/300'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="mb-6">
            Discover our innovative projects and design solutions. We create spaces that inspire, function efficiently, and stand the test of time.
          </p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
