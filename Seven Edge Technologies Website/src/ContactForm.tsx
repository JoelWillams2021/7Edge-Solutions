import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Settings, MessageSquare, Menu, X, Phone, Mail, MapPin, Globe, ChevronDown } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  country: string;
  subject: string;
  message: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface TabButtonProps {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  type?: string;
  required?: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('contact');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        country: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a href={href} className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </a>
  );

  const TabButton: React.FC<TabButtonProps> = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 font-medium text-sm rounded-md ${
        active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', required = false }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                  <circle cx="12" cy="12" r="10" fill="#4A90E2" />
                </svg>
                <span className="text-xl font-bold text-gray-900">7EdgeSolutions</span>
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
      </header>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                    <circle cx="12" cy="12" r="10" fill="#4A90E2" />
                  </svg>
                  <span className="text-xl font-bold text-gray-900">7EdgeSolutions</span>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact 7EdgeSolutions</h1>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="flex border-b border-gray-200">
              <TabButton id="contact" label="Contact Us" active={activeTab === 'contact'} onClick={setActiveTab} />
              <TabButton id="sales" label="Sales Inquiry" active={activeTab === 'sales'} onClick={setActiveTab} />
              <TabButton id="support" label="Technical Support" active={activeTab === 'support'} onClick={setActiveTab} />
            </div>
            
            <div className="p-6">
              {activeTab === 'contact' && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
                  <p className="mb-6">
                    We're here to help. Whether you have questions about our products, need support, or just want to say hi, we'd love to hear from you.
                  </p>
                </>
              )}
              {activeTab === 'sales' && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Sales Inquiry</h2>
                  <p className="mb-6">
                    Interested in our products or services? Let us know how we can help you achieve your business goals.
                  </p>
                </>
              )}
              {activeTab === 'support' && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
                  <p className="mb-6">
                    Need help with one of our products? Our technical support team is here to assist you.
                  </p>
                </>
              )}

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="First Name" name="firstName" required />
                    <InputField label="Last Name" name="lastName" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Email" name="email" type="email" required />
                    <InputField label="Phone" name="phone" type="tel" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Company" name="company" />
                    <InputField label="Job Title" name="jobTitle" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <div className="relative">
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Select a country</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          {/* Add more countries as needed */}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </div>
                    <InputField label="Subject" name="subject" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                  <p className="font-bold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactForm;