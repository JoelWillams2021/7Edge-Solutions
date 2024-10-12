import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

// Define types for the ProjectCard props
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Type for useState

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="text-xl font-bold text-gray-800">SevenEdge Technologies</a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Solutions</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Resources</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Company</a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Acme Inc." />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Solutions</a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Resources</a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Company</a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
      image: 'https://cdn.usegalileo.ai/sdxl10/b84c6066-7e4c-4108-9f66-9bf01ed4ad8f.png'
    },
    { 
      title: 'Sustainable Office Complex',
      description: 'Eco-friendly design incorporating renewable energy and green spaces.',
      image: 'https://cdn.usegalileo.ai/sdxl10/05b4cb0d-1003-4bf0-8963-2c7db7daa62b.png'
    },
    { 
      title: 'Urban Renewal Project',
      description: 'Revitalizing city centers with mixed-use developments and public areas.',
      image: '"https://cdn.usegalileo.ai/sdxl10/05b4cb0d-1003-4bf0-8963-2c7db7daa62b.png'
    },
    { 
      title: 'Luxury Resort',
      description: 'Blending natural beauty with high-end amenities for an unforgettable experience.',
      image: 'https://cdn.usegalileo.ai/sdxl10/46c17195-283d-40a1-8c31-469f64ea5ee8.png'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Our Work</h1>
        <p className="text-xl text-gray-500 text-center mb-8">Discover our innovative projects and design solutions</p>
        <SearchBar />
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">Acme Inc. is a leading design and architecture firm, creating innovative spaces for a sustainable future.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Portfolio</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">123 Design Street, Creativity City, 12345</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
              <p className="text-gray-300">Email: info@acmeinc.com</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 Acme Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
