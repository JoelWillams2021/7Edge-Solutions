'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X, Users, Target, Eye, Globe } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Building, ArrowBigUp, Lightbulb, Expand, CheckCircle2, Gem, Rocket, Clock, HeartHandshake } from 'lucide-react'

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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
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
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
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

const LiveDesign = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number }[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    ctx.globalCompositeOperation = 'lighter';

    let resizeTimeout: NodeJS.Timeout;
    const resizeCanvas = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const scale = window.devicePixelRatio;
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;
        ctx.scale(scale, scale);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        
        initParticles();
      }, 250);
    };

    const initParticles = () => {
      const particleCount = 100;
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
      }));
    };

    const maxDistance = 100;
    const maxDistanceSquared = maxDistance * maxDistance;
    
    const animate = (timestamp: number) => {
      if (!previousTimeRef.current) {
        previousTimeRef.current = timestamp;
      }
      
      const deltaTime = timestamp - previousTimeRef.current;
      previousTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        particle.x += particle.vx * (deltaTime / 16);
        particle.y += particle.vy * (deltaTime / 16);

        if (particle.x < 0) {
          particle.x = 0;
          particle.vx = Math.abs(particle.vx);
        } else if (particle.x > window.innerWidth) {
          particle.x = window.innerWidth;
          particle.vx = -Math.abs(particle.vx);
        }

        if (particle.y < 0) {
          particle.y = 0;
          particle.vy = Math.abs(particle.vy);
        } else if (particle.y > window.innerHeight) {
          particle.y = window.innerHeight;
          particle.vy = -Math.abs(particle.vy);
        }
      }

      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        ctx.moveTo(particle.x + particle.radius, particle.y);
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      }
      ctx.fillStyle = 'rgba(147, 51, 234, 0.75)';
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const particleA = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const particleB = particles[j];
          const dx = particleB.x - particleA.x;
          const dy = particleB.y - particleA.y;
          const distSquared = dx * dx + dy * dy;
          
          if (distSquared < maxDistanceSquared) {
            const alpha = 1 - Math.sqrt(distSquared) / maxDistance;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${alpha})`;
          }
        }
      }
      ctx.stroke();

      requestRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    window.addEventListener('resize', resizeCanvas);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      <LiveDesign />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text leading-tight py-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Revolutionizing Software Solutions for the Digital Age
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Seven Edge Solutions, we're not just building software; we're crafting the future of digital innovation. Join us on our journey to transform industries and empower businesses.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Discover Our Vision
        </motion.button>
      </div>
    </div>
  )
}

interface SectionProps {
  title: string;
  content: string;
  id: string;
  icon: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content, id, icon }) => {
  return (
    <motion.section
      id={id}
      className="py-24 bg-gradient-to-b from-gray-900 to-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-purple-400 mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {icon}
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content}
        </motion.p>
      </div>
    </motion.section>
  )
}

const TeamSection: React.FC = () => {
  return (
    <motion.section
      id="team"
      className="py-24 bg-gradient-to-b from-black to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <motion.div
              className="text-purple-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Users size={48} />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our Team
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At Seven Edge Solutions, our team is our greatest asset. We're a diverse group of innovators, problem-solvers, and tech enthusiasts united by our passion for pushing the boundaries of what's possible in software development.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              While we may be a startup, our collective experience spans decades across various tech domains. We're committed to fostering a culture of continuous learning, collaboration, and innovation, ensuring that we're always at the cutting edge of technology trends and best practices.
            </motion.p>
          </div>
          <motion.div
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="../images/Team.JPG"
                alt="Our Team"
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

const FutureRoadmap: React.FC = () => {
  const milestones = [
    { 
      phase: "Phase 1",
      title: "Foundation",
      icon: <Building size={32} />,
      timeline: "Current",
      goals: [
        "Building Core Team",
        "MVP Development",
        "Initial Client Outreach"
      ],
      status: "active"
    },
    { 
      phase: "Phase 2",
      title: "Growth",
      icon: <ArrowBigUp size={32} />,
      timeline: "Q3 2024",
      goals: [
        "Beta Testing",
        "First Partnerships",
        "Community Building"
      ],
      status: "upcoming"
    },
    { 
      phase: "Phase 3",
      title: "Innovation",
      icon: <Lightbulb size={32} />,
      timeline: "Q4 2024",
      goals: [
        "Product Launch",
        "Market Expansion",
        "R&D Initiatives"
      ],
      status: "upcoming"
    },
    { 
      phase: "Phase 4",
      title: "Expansion",
      icon: <Expand size={32} />,
      timeline: "Q1 2025",
      goals: [
        "Global Outreach",
        "New Solutions",
        "Team Growth"
      ],
      status: "upcoming"
    }
  ]

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-gray-900 to-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey Ahead</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            While we're just beginning our journey, we have a clear vision of where we're headed. Here's our roadmap to revolutionizing software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.phase}
              className={`relative p-6 rounded-lg border ${
                milestone.status === 'active' 
                  ? 'border-purple-500 bg-gradient-to-b from-purple-900/20 to-transparent' 
                  : 'border-gray-800 hover:border-purple-500/50'
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className={`text-purple-400 mb-4 ${
                  milestone.status === 'active' ? 'animate-pulse' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {milestone.icon}
              </motion.div>
              
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl">{milestone.phase}</h3>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  milestone.status === 'active' 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  {milestone.timeline}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
                {milestone.title}
              </h4>
              
              <ul className="space-y-2">
                {milestone.goals.map((goal, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-purple-400" />
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Journey
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

const StartupAdvantages: React.FC = () => {
  const advantages = [
    { 
      title: "Cutting-Edge Stack", 
      description: "We use the latest tech stack including React, Node.js, AI/ML, and cloud-native solutions, ensuring your project is future-proof.", 
      icon: <Rocket size={32} />,
      metric: "100% Modern Tech Stack"
    },
    { 
      title: "Startup-Friendly Pricing", 
      description: "Flexible payment plans and transparent pricing designed specifically for growing businesses and fellow startups.", 
      icon: <Gem size={32} />,
      metric: "30-40% Cost Effective"
    },
    { 
      title: "Rapid Development", 
      description: "Quick turnaround times with our lean team structure and agile methodology. From concept to MVP in weeks, not months.", 
      icon: <Clock size={32} />,
      metric: "2-4 Week MVP Delivery"
    },
    { 
      title: "Direct Communication", 
      description: "Work directly with our developers and founders - no middlemen, no communication gaps, just seamless collaboration.", 
      icon: <HeartHandshake size={32} />,
      metric: "24/7 Direct Access"
    }
  ]

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-black to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why Choose a Dynamic Startup?
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Being a startup gives us unique advantages - we're agile, innovative, and fully committed to your success. Experience the difference of working with a team that treats your project like their own.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="relative overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-purple-400 mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {advantage.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
                {advantage.title}
              </h3>
              <p className="text-gray-300 mb-4">{advantage.description}</p>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500/10 to-transparent p-4">
                <p className="text-sm font-semibold text-purple-400">
                  {advantage.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Section
          id="mission"
          title="Our Mission"
          content="At Seven Edge Solutions, our mission is to empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation. We're committed to delivering tailor-made technologies that address the unique challenges of each client, helping them stay ahead in the rapidly evolving digital landscape."
          icon={<Target size={48} />}
        />
        <Section
          id="vision"
          title="Our Vision"
          content="We envision a future where technology seamlessly integrates with every aspect of business, unlocking unprecedented potential for growth and innovation. Seven Edge Solutions aims to be at the forefront of this transformation, continuously pushing the boundaries of what's possible in software development and digital solutions."
          icon={<Eye size={48} />}
        />
        <StartupAdvantages />
        <TeamSection />
        <FutureRoadmap />
        <Section
          id="future"
          title="Shaping the Future"
          content="As a startup, we're not just adapting to the future – we're actively shaping it. Our team is constantly exploring emerging technologies like AI, blockchain, and IoT to develop innovative solutions that will define the next era of digital transformation. Join us on this exciting journey as we build the technologies of tomorrow, today."
          icon={<Globe size={48} />}
        />
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
