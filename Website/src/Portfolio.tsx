'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion'
import { Menu, X, ArrowRight, Code, Database, Cloud, Zap, Globe, Cpu, Users } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin, FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython, FaJava, FaAws } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiGooglecloud, SiTensorflow, SiKubernetes, SiHiveBlockchain } from 'react-icons/si'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'
import ReactPlayer from 'react-player'

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

const AnimatedSphere = () => {
  const mesh = useRef<Mesh>(null)
  useFrame((_state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25
      mesh.current.rotation.y += delta * 0.25
    }
  })
  return (
    <Sphere ref={mesh} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}

const EnhancedHeroSection: React.FC = () => {
  const [isVideoReady, setIsVideoReady] = useState(false)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futuristic-city-HNxRoT1jfFEhqLGXQQWqgZQZBPRBSo.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          onReady={() => setIsVideoReady(true)}
          style={{ opacity: isVideoReady ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4">
        <div className="text-left text-white max-w-2xl mb-8 md:mb-0">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text leading-tight py-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Redefining the Future of Technology
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pioneering AI, Web, and Cloud solutions that transform industries and drive innovation
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover Our Innovations
          </motion.button>
        </div>
        <div className="w-full max-w-md h-96">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <motion.div
    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl text-purple-400 mb-4">{icon}</div>
    <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
    <p className="text-gray-400">{label}</p>
  </motion.div>
)

const StartupProgressSection: React.FC = () => {
  const stats = [
    { icon: <Users />, value: "Alpha", label: "Development Stage" },
    { icon: <Cpu />, value: "7", label: "Core Technologies" },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Startup Journey
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const EnhancedProjectCard: React.FC<{ title: string; description: string; icon: React.ReactNode; index: number }> = ({
  title,
  description,
  icon,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-8 flex flex-col items-center">
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-6"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-6 text-center">{description}</p>
        <motion.button
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Project
          <motion.div
            className="ml-2"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  )
}

const TechIcon: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="text-5xl mb-3 text-purple-400  group-hover:text-indigo-400 transition-colors duration-300"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  )
}

const EnhancedTechnologiesSection: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.section
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
      style={{ scale }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          variants={itemVariants}
        >
          Cutting-Edge Technologies We Master
        </motion.h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-12" variants={containerVariants}>
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-purple-400 flex items-center">
              <Code className="mr-3" /> Frontend
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <TechIcon icon={<FaReact />} name="React" />
              <TechIcon icon={<FaAngular />} name="Angular" />
              <TechIcon icon={<FaVuejs />} name="Vue.js" />
            </div>
          </motion.div>
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-purple-400 flex items-center">
              <Zap className="mr-3" /> Backend
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <TechIcon icon={<FaNodeJs />} name="Node.js" />
              <TechIcon icon={<FaPython />} name="Python" />
              <TechIcon icon={<FaJava />} name="Java" />
            </div>
          </motion.div>
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-purple-400 flex items-center">
              <Database className="mr-3" /> Data & AI
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <TechIcon icon={<SiMongodb />} name="MongoDB" />
              <TechIcon icon={<SiPostgresql />} name="PostgreSQL" />
              <TechIcon icon={<SiTensorflow />} name="TensorFlow" />
            </div>
          </motion.div>
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-purple-400 flex items-center">
              <Cloud className="mr-3" /> Cloud & DevOps
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <TechIcon icon={<FaAws />} name="AWS" />
              <TechIcon icon={<SiGooglecloud />} name="Google Cloud" />
              <TechIcon icon={<SiKubernetes />} name="Kubernetes" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

const StartupMilestonesSection: React.FC = () => {
  const milestones = [
    { title: "Enhance Customer Satisfaction", description: "Focus on delivering reliable, high-quality software solutions to our clients" },
    { title: "Expand Market Reach", description: "Build the company's presence in key target markets by utilizing key partnerships and networking strategies" },
    { title: "Drive Innovation through R&D", description: "Dedicate resources to research and development to stay ahead of industry trends and create cutting-edge software solutions" },
    { title: "Building a Strong Talent Pool", description: "Build a network of passionate, top of the line technical talent to drive company growth" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Business Goals
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
              <p className="text-gray-200">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; image: string }> = ({
  quote,
  author,
  role,
  image,
}) => (
  <motion.div
    className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-2xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-300 mb-6 italic text-lg">"{quote}"</p>
    <div className="flex items-center">
      <motion.img
        src={image}
        alt={author}
        className="w-16 h-16 rounded-full object-cover mr-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <div>
        <p className="font-semibold text-white text-lg">{author}</p>
        <p className="text-purple-400">{role}</p>
      </div>
    </div>
  </motion.div>
)

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "I am delighted to express my sincere appreciation for the exceptional services provided by 7 Edge Solutions. As a fellow young business owner, I was amazed by their prowess in coding, conducting meetings, and crafting well-written paragraphs, among other essential tasks. Despite being a small business with team members still in school, their dedication and talent shone through brilliantly",
      author: 'Ryan Paige',
      role: 'Photographer & Entrepreneur',
      image: '../images/paige.jpg',
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <TestimonialCard key={currentTestimonial} {...testimonials[currentTestimonial]} />
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none ${
                index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
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
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  API Development
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

export default function EnhancedPortfolio() {
  const projects = [
    {
      title: 'Plant Health AI',
      description:
        'A machine learning integrated website that takes images as input to help evaluate plant health.',
      icon: <Cpu size={48} className="text-purple-400" />,
    },
    {
      title: 'eCommerce Website',
      description:
        'A next-generation eCommerce website for a clothing store, offering unparalleled security, flexibility and convenience for the business owner.',
      icon: <SiHiveBlockchain size={48} className="text-indigo-400" />,
    },
    {
      title: 'Celestify',
      description:
        'An advanced 3-D solar system representation, with helpful information blocks attached to each planet.',
      icon: <Globe size={48} className="text-green-400" />,
    },
    {
      title: 'AI Detector',
      description:
        'A state of the art AI Detector that helps detect plagiarism in academic works.',
      icon: <Database size={48} className="text-blue-400" />,
    },
  ]

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <EnhancedHeroSection />
      <main>
        <StartupProgressSection />
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pioneering Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our groundbreaking projects that are reshaping industries and setting new standards in technological innovation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-8 lg:grid-cols-2 xl:gap-x-12">
              {projects.map((project, index) => (
                <EnhancedProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>
        <EnhancedTechnologiesSection />
        <StartupMilestonesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
