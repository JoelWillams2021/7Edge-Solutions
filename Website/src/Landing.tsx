
import './tailwind.css';
import './App.css';


'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X, Code, Database, Cloud, Zap, Globe, Cpu, Users, RefreshCw, Lightbulb, Wallet } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors relative overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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
            
          </nav>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-purple-300 rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-64 bg-gradient-to-br from-black via-purple-800 to-black shadow-lg overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <motion.button
                    onClick={toggleMenu}
                    className="p-2 text-white hover:text-purple-300 rounded-md transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                  <NavLink href="/portfolio" onClick={toggleMenu}>Portfolio</NavLink>
                  <NavLink href="/about-us" onClick={toggleMenu}>About Us</NavLink>
                  <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}



const Particle: React.FC<{ index: number }> = React.memo(({ index }) => {
  const particleProps = useMemo(() => ({
    width: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: Math.random() > 0.7 
      ? `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.6)`
      : 'rgba(255, 255, 255, 0.6)',
    duration: Math.random() * 5 + 8,
    delay: Math.random() * -15,
    moveRange: Math.random() * 20 + 10,
    rotate: Math.random() * 360,
  }), []);

  return (
    <motion.div
      className="absolute rounded-full backdrop-blur-sm"
      style={{
        width: particleProps.width,
        height: particleProps.width,
        top: particleProps.top,
        left: particleProps.left,
        background: particleProps.color,
        boxShadow: `0 0 ${particleProps.width * 2}px ${particleProps.color}`,
      }}
      animate={{
        y: [0, -particleProps.moveRange, 0],
        x: [0, Math.sin(index) * particleProps.moveRange, 0],
        scale: [1, Math.random() * 0.3 + 1.1, 1],
        rotate: [0, particleProps.rotate, 0],
      }}
      transition={{
        duration: particleProps.duration,
        delay: particleProps.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});

const FloatingGradientOrbs: React.FC = React.memo(() => {
  const orbs = useMemo(() => 
    [...Array(3)].map((_, i) => ({
      key: i,
      width: `${Math.random() * 30 + 20}%`,
      height: `${Math.random() * 30 + 20}%`,
      background: `linear-gradient(${Math.random() * 360}deg, 
        rgba(147, 51, 234, 0.3), 
        rgba(79, 70, 229, 0.3), 
        rgba(236, 72, 153, 0.3))`,
      x: [
        `${Math.random() * 15 - 7.5}%`,
        `${Math.random() * 15 - 7.5}%`,
        `${Math.random() * 15 - 7.5}%`,
      ],
      y: [
        `${Math.random() * 15 - 7.5}%`,
        `${Math.random() * 15 - 7.5}%`,
        `${Math.random() * 15 - 7.5}%`,
      ],
      duration: Math.random() * 10 + 20,
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.key}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: orb.width,
            height: orb.height,
            background: orb.background,
          }}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
});

const DynamicBackground: React.FC = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(50)].map((_, i) => <Particle key={i} index={i} />),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black" />
      <FloatingGradientOrbs />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, 
            rgba(147, 51, 234, 0.3) 0%, 
            rgba(79, 70, 229, 0.2) 25%, 
            rgba(236, 72, 153, 0.1) 50%, 
            transparent 70%)`
        }}
      />
      <div className="absolute inset-0">
        {particles}
      </div>
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} 
      />
    </div>
  );
});

const EnhancedHeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building the Future of Business Technology";
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const navigate = useNavigate();

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const typeText = () => {
      for (let i = 0; i <= fullText.length; i++) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, i));
        }, i * 50);
        timeouts.push(timeout);
      }
    };

    typeText();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <DynamicBackground />
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 text-center"
        style={{ y }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-2xl leading-tight py-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {typedText}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 text-white/90 text-shadow-lg max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          From startups to enterprises, we help organizations accelerate their digital transformation by building, modernizing, and scaling apps that deliver results.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg backdrop-blur-sm"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(167, 139, 250, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onClick={handleContactClick}
        >
          Talk to a specialist
        </motion.button>
      </motion.div>
    </section>
  );
};

const ServiceCard: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = React.memo(({ title, subtitle, icon }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = useCallback(() => setIsHovered(true), [])
  const handleHoverEnd = useCallback(() => setIsHovered(false), [])

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl transition-all duration-300 relative overflow-hidden"
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div
        className="text-4xl text-purple-400 mb-4 relative z-10"
        animate={{
          y: isHovered ? [-5, 0, -5] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-white relative z-10">{title}</h3>
      <p className="text-gray-300 relative z-10">{subtitle}</p>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
});

const EnhancedServicesSection: React.FC = () => {
  const services = useMemo(() => [
    { title: 'Web Applications', subtitle: 'Modern, responsive web apps using React, Angular, and Vue.js with robust backend systems.', icon: <Globe /> },
    { title: 'API Development', subtitle: 'Scalable REST and GraphQL APIs that power your applications and integrate with existing systems.', icon: <Cloud /> },
    { title: 'Full Stack Development', subtitle: 'End-to-end development for front-end and back-end systems, using the latest technologies.', icon: <Code /> },
    { title: 'Real-Time Mobile Apps', subtitle: 'Native iOS, Android, and cross-platform solutions for real-time chat, gaming, and collaboration.', icon: <Zap /> },
    { title: 'Cloud Migration', subtitle: 'Seamlessly migrate your applications and data to the cloud for scalability and cost-efficiency.', icon: <Database /> },
    { title: 'AI/ML Solutions', subtitle: 'Leverage the power of artificial intelligence and machine learning to automate repetitive tasks and streamline processes.', icon: <Cpu /> },
  ], []);

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ y }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">We Build for All Platforms</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team of experts works with you to build custom software that meets your unique business needs, from web and mobile apps to APIs and backend systems.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const EnhancedWhyChooseUs: React.FC = () => {
  const reasons = useMemo(() => [
    { title: "Personalized Attention", description: "As a boutique software house, we provide dedicated focus to each client", icon: <Users size={48} className="text-purple-400" /> },
    { title: "Agile Development", description: "Quick iterations and transparent communication", icon: <RefreshCw size={48} className="text-indigo-400" /> },
    { title: "Innovation-First", description: "Latest technologies and best practices", icon: <Lightbulb size={48} className="text-pink-400" /> },
    { title: "Cost-Effective", description: "Flexible solutions that grow with your business", icon: <Wallet size={48} className="text-blue-400" /> },
  ], []);

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ y }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose Us</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just developers, we're your technology partners
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-4xl mb-4 relative z-10"
                animate={{
                  y: [-5, 0, -5],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white relative z-10">{reason.title}</h3>
              <p className="text-gray-400 relative z-10">{reason.description}</p>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const Footer: React.FC = React.memo(() => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const socialLinks = useMemo(() => [
    { href: "https://www.instagram.com/7edge.official/", icon: <FaInstagram size={24} /> },
    { href: "https://x.com/7edge13562/status/1848938645383782416?s=46", icon: <FaTwitter size={24} /> },
    { href: "https://www.linkedin.com/company/7edge-solutions/", icon: <FaLinkedin size={24} /> }
  ], [])

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ y }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">Seven Edge Solutions</h3>
            <p className="text-gray-400">
              Building the future of business technology, one solution at a time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Services</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">API Development</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Seven Edge Solutions. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  )
})

export default function OptimizedLanding() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <EnhancedHeroSection />
      <main>
        <EnhancedServicesSection />
        <EnhancedWhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
