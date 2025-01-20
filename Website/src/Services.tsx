'use client'

import React, { useRef, useState, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'
import { Menu, X, Zap, Shield, Cloud, Cpu } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Bar, BarChart, Pie, PieChart, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Line as RechartsLine, LineChart } from 'recharts'


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
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
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
          <NavLink href="#services">Services</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </motion.div>
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
              <li><a href="#ai-analytics" className="text-gray-400 hover:text-white transition-colors">AI & Analytics</a></li>
              <li><a href="#blockchain" className="text-gray-400 hover:text-white transition-colors">Blockchain Solutions</a></li>
              <li><a href="#iot" className="text-gray-400 hover:text-white transition-colors">IoT Ecosystem</a></li>
              <li><a href="#cloud" className="text-gray-400 hover:text-white transition-colors">Cloud Architecture</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

function RandomSpherePoints() {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => new THREE.SphereGeometry(1.5, 64, 64))
  const [positions] = useState(() => Float32Array.from(sphere.attributes.position.array))

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]

      const scale = Math.sin(x + time) * Math.cos(y + time) * Math.sin(z + time) * 0.2
      sphere.attributes.position.array[i] = x + scale
      sphere.attributes.position.array[i + 1] = y + scale
      sphere.attributes.position.array[i + 2] = z + scale
    }
    sphere.attributes.position.needsUpdate = true
    ref.current.rotation.x = time * 0.1
    ref.current.rotation.y = time * 0.15
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8a2be2"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

function FloatingParticles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const light = useRef<THREE.PointLight>(null!)

  const particles = useMemo(() => {
    const temp: { time: number; factor: number; speed: number; x: number; y: number; z: number; }[] = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 2 - 1
      const y = Math.random() * 2 - 1
      const z = Math.random() * 2 - 1
      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { time, factor, speed, x, y, z } = particle
      time = (time + speed) % (2 * Math.PI)
      const s = Math.cos(time)
      dummy.position.set(
        x * factor + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10,
        y * factor + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10,
        z * factor + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
      )
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
    light.current.position.set(
      Math.sin(state.clock.elapsedTime * 0.3) * 4,
      Math.sin(state.clock.elapsedTime * 0.2) * 4,
      Math.cos(state.clock.elapsedTime * 0.1) * 4
    )
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.01]} />
        <meshPhongMaterial color="#00ffff" />
      </instancedMesh>
    </>
  )
}

function ConnectingLines() {
  useThree()
  const points: THREE.Vector3[] = useMemo(() => {
      const temp: THREE.Vector3[] = []
      for (let i = 0; i < 100; i++) {
        const x = (Math.random() - 0.5) * 10
        const y = (Math.random() - 0.5) * 10
        const z = (Math.random() - 0.5) * 10
        temp.push(new THREE.Vector3(x, y, z))
      }
      return temp
    }, [])

  useFrame((state) => {
    points.forEach((point) => {
      point.y += Math.sin(state.clock.elapsedTime + point.x) * 0.01
    })
  })

  return (
    <group>
      {points.map((point, i) => (
        <group key={i}>
          {points.slice(i + 1).map((secondPoint, j) => {
            if (point.distanceTo(secondPoint) < 2) {
              return (
                <Line
                  key={`${i}-${j}`}
                  points={[point, secondPoint]}
                  color="white"
                  lineWidth={0.5}
                  transparent
                  opacity={0.2}
                />
              )
            }
            return null
          })}
        </group>
      ))}
    </group>
  )
}

const LiveDesign: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />
        <RandomSpherePoints />
        <FloatingParticles />
        <ConnectingLines />
      </Canvas>
    </div>
  )
}

const ServiceSection: React.FC<{ 
  id: string;
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  chartData: any;
  features: string[];
  benefits: string[];
}> = ({ id, title, description, icon, chartData, features, benefits }) => {
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <motion.div
              className="text-purple-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {icon}
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.ul
              className="list-disc list-inside text-gray-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              {chartData.type === 'bar' ? (
                <BarChart data={chartData.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              ) : chartData.type === 'pie' ? (
                <PieChart>
                  <Pie
                    data={chartData.data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.data.map((_entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={chartData.colors[index % chartData.colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              ) : (
                <LineChart data={chartData.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <RechartsLine type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </motion.div>
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Benefits</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

const Services: React.FC = () => {
  const services = [
    {
      id: "ai-analytics",
      title: "AI-Powered Analytics",
      description: "Harness the power of artificial intelligence to gain deep insights from your data. Our AI-powered analytics solution helps you make data-driven decisions faster and more accurately than ever before.",
      icon: <Cpu size={48} />,
      chartData: {
        type: 'bar',
        data: [
          { name: 'Accuracy', value: 95 },
          { name: 'Speed', value: 90 },
          { name: 'Cost Savings', value: 80 },
          { name: 'Insights', value: 85 },
        ],
      },
      features: [
        "Advanced machine learning algorithms",
        "Real-time data processing",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision capabilities"
      ],
      benefits: [
        "Improved decision-making accuracy",
        "Faster time-to-insight",
        "Reduced operational costs",
        "Enhanced customer experiences",
        "Competitive advantage through data-driven strategies"
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain Solutions",
      description: "Secure, transparent, and efficient. Our blockchain solutions provide a robust foundation for decentralized applications, smart contracts, and secure transactions across various industries.",
      icon: <Shield size={48} />,
      chartData: {
        type: 'pie',
        data: [
          { name: 'Finance', value: 40 },
          { name: 'Supply Chain', value: 25 },
          { name: 'Healthcare', value: 20 },
          { name: 'Others', value: 15 },
        ],
        colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      },
      features: [
        "Smart contract development",
        "Decentralized application (DApp) creation",
        "Tokenization services",
        "Consensus mechanism optimization",
        "Cross-chain interoperability"
      ],
      benefits: [
        "Enhanced security and transparency",
        "Reduced intermediary costs",
        "Improved traceability in supply chains",
        "Faster and cheaper cross-border transactions",
        "Immutable record-keeping"
      ]
    },
    {
      id: "iot",
      title: "IoT Ecosystem",
      description: "Connect, monitor, and control your devices seamlessly with our comprehensive IoT ecosystem. From smart homes to industrial applications, we've got you covered.",
      icon: <Zap size={48} />,
      chartData: {
        type: 'line',
        data: [
          { name: '2020', value: 50 },
          { name: '2021', value: 75 },
          { name: '2022', value: 90 },
          { name: '2023', value: 120 },
          { name: '2024', value: 150 },
        ],
      },
      features: [
        "End-to-end IoT platform development",
        "Sensor integration and data collection",
        "Edge computing solutions",
        "IoT security and encryption",
        "Machine-to-machine (M2M) communication"
      ],
      benefits: [
        "Improved operational efficiency",
        "Real-time monitoring and control",
        "Predictive maintenance capabilities",
        "Enhanced energy management",
        "Data-driven product development"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Architecture",
      description: "Build scalable, resilient, and cost-effective cloud infrastructures tailored to your specific needs. Our cloud solutions ensure your applications are always available and performing at their best.",
      icon: <Cloud size={48} />,
      chartData: {
        type: 'pie',
        data: [
          { name: 'AWS', value: 45 },
          { name: 'Azure', value: 30 },
          { name: 'Google Cloud', value: 20 },
          { name: 'Others', value: 5 },
        ],
        colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      },
      features: [
        "Multi-cloud and hybrid cloud solutions",
        "Serverless architecture design",
        "Containerization and orchestration",
        "Cloud-native application development",
        "Automated scaling and load balancing"
      ],
      benefits: [
        "Increased scalability and flexibility",
        "Improved disaster recovery and business continuity",
        "Reduced infrastructure costs",
        "Enhanced collaboration and accessibility",
        "Faster time-to-market for new features"
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
          <LiveDesign />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text leading-tight py-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Cutting-Edge Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how Seven Edge Solutions can transform your business with our innovative technology services.
            </motion.p>
            <motion.a
              href="#services"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore Our Services
            </motion.a>
          </div>
        </div>
        <div id="services">
          {services.map((service, index) => (
            <ServiceSection key={index} {...service} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Services

