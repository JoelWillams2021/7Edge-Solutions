import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-bold mb-4">Seven Edge Solutions</h3>
            <p className="text-gray-400">
              Building the future of business technology, one solution at a time.
            </p>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h4 className="text-sm font-semibold mb-4 uppercase">Services</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">API Development</a></li>
            </ul>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <h4 className="text-sm font-semibold mb-4 uppercase">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Coewntact</a></li>+
            </ul>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            
            <h4 className="text-sm font-semibold mb-4 uppercase">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/7edge.official/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/7edge13562?s=21" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Seven Edge Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}