const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Seven Edge Solutions</h3>
            <p className="text-gray-400">
              Building the future of business technology, one solution at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Web Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Seven Edge Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  export default Footer;
  