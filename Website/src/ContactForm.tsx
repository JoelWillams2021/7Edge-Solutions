'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown, Plus, Minus, Send } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_38lxiz7'
const EMAILJS_TEMPLATE_ID = 'template_lmjxkba'
const EMAILJS_PUBLIC_KEY = 'PKreo4qLdiX6zgbe8'

emailjs.init(EMAILJS_PUBLIC_KEY)

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  country: string
  subject: string
  message: string
}

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What services does Seven Edge Solutions offer?",
    answer: "Seven Edge Solutions offers a wide range of IT services including software development, cloud solutions, cybersecurity, and digital transformation consulting."
  },
  {
    question: "How can I request a quote for your services?",
    answer: "You can request a quote by filling out our contact form or by emailing us directly at sales@7edgesolutions.com. We'll get back to you within 24 hours."
  },
  {
    question: "Do you offer support for your products?",
    answer: "Yes, we offer comprehensive support for all our products. You can reach our support team via email, phone, or through our dedicated support portal."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including finance, healthcare, retail, manufacturing, and more. Our solutions are customizable to meet the specific needs of each industry."
  },
  {
    question: "How do you ensure the security of your clients' data?",
    answer: "We implement state-of-the-art security measures including encryption, regular security audits, and compliance with industry standards like GDPR and HIPAA."
  }
]

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors relative overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{children}</span>
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  )

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{ backgroundColor: headerBackground }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md flex items-center justify-center"
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-xl font-bold">7E</span>
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              Seven Edge Solutions
            </span>
          </motion.a>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </nav>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-purple-300 rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        <motion.div
          className={`md:hidden py-4 space-y-2 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">Seven Edge Solutions</h3>
            <p className="text-gray-400">
              Pioneering the future of technology with innovative solutions that redefine industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  IoT Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Architecture
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/7edge.official/"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.8 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/7edge13562/status/1848938645383782416?s=46"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.8 }}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/7edge-solutions/"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.8 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          
          </motion.div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Seven Edge Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function PremiumContactForm() {
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
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>('contact')
  const [openFAQs, setOpenFAQs] = useState<number[]>([])

  const formRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (formRef.current) observer.observe(formRef.current)
    if (faqRef.current) observer.observe(faqRef.current)

    return () => {
      if (formRef.current) observer.unobserve(formRef.current)
      if (faqRef.current) observer.unobserve(faqRef.current)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_name: 'Mursaleen Sakoskar',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      company: formData.company,
      job_title: formData.jobTitle,
      country: formData.country,
      message: formData.message
    }, EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setIsSubmitted(true)
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
        })
      }, (error) => {
        console.error('Failed to send email:', error.text)
        alert('Failed to send email. Please try again later.')
      })
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prevOpenFAQs =>
      prevOpenFAQs.includes(index)
        ? prevOpenFAQs.filter(i => i !== index)
        : [...prevOpenFAQs, index]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          
          <div ref={formRef} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 opacity-0 backdrop-blur-lg">
            <div className="flex border-b border-gray-700 p-4">
              <motion.button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 font-medium text-sm rounded-full ${
                  activeTab === 'contact' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('sales')}
                className={`px-6 py-3 font-medium text-sm rounded-full ml-4 ${
                  activeTab === 'sales' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sales Inquiry
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('support')}
                className={`px-6 py-3 font-medium text-sm rounded-full ml-4 ${
                  activeTab === 'support' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Technical Support
              </motion.button>
            </div>
            
            <div className="p-8">
              {activeTab === 'contact' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-semibold mb-4 text-purple-400">Get in touch</h2>
                  <p className="mb-6 text-gray-300 text-lg">
                    We're here to help. Whether you have questions about our products, need support, or just want to say hi, we'd love to hear from you.
                  </p>
                </motion.div>
              )}
              {activeTab === 'sales' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-semibold mb-4 text-purple-400">Sales Inquiry</h2>
                  <p className="mb-6 text-gray-300 text-lg">
                    Interested in our products or services? Let us know how we can help you achieve your business goals.
                  </p>
                </motion.div>
              )}
              {activeTab === 'support' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-semibold mb-4 text-purple-400">Technical Support</h2>
                  <p className="mb-6 text-gray-300 text-lg">
                    Need help with one of our products? Our technical support team is here to assist you.
                  </p>
                </motion.div>
              )}

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
                        Country
                      </label>
                      <div className="relative">
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white appearance-none transition-all duration-300"
                        >
                          <option value="">Select a country</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="au">Australia</option>
                          <option value="de">Germany</option>
                          <option value="fr">France</option>
                          <option value="jp">Japan</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-end">
                    <motion.button 
                      type="submit" 
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit <Send className="ml-2" size={18} />
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  className="bg-green-900 border-l-4 border-green-500 text-green-100 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  role="alert"
                >
                  <p className="font-bold text-xl mb-2">Thank you for your message!</p>
                  <p className="text-lg">We appreciate your interest and will get back to you as soon as possible.</p>
                </motion.div>
              )}
            </div>
          </div>

          <div ref={faqRef} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl opacity-0 backdrop-blur-lg">
            <h2 className="text-3xl font-semibold p-8 border-b border-gray-700 text-purple-400">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-700">
              {faqData.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-xl text-white">{faq.question}</span>
                    {openFAQs.includes(index) ? (
                      <Minus className="flex-shrink-0 ml-2 text-purple-400" size={24} />
                    ) : (
                      <Plus className="flex-shrink-0 ml-2 text-purple-400" size={24} />
                    )}
                  </motion.button>
                  {openFAQs.includes(index) && (
                    <motion.p 
                      className="mt-4 text-gray-300 text-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
