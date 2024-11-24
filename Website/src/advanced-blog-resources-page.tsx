'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, MessageSquare, ThumbsUp, Calendar, User, Clock, Search, Moon, Sun, Github, Twitter, Linkedin } from 'lucide-react'
import { format } from 'date-fns'
import { debounce } from 'lodash'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import * as THREE from 'three'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Interfaces
interface BlogPost {
  id: number
  title: string
  category: string
  content: string
  likes: number
  comments: number
  trending: boolean
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: number
  image: string
}

interface InsightData {
  date: string
  pageViews: number
  uniqueVisitors: number
}

interface TrendData {
  topic: string
  count: number
  change: number
  timestamp: string
}

interface PollOption {
  id: string
  text: string
  votes: number
}

interface Poll {
  id: string
  question: string
  options: PollOption[]
  totalVotes: number
  endTime: string
}

interface SocialTrend {
  platform: string
  topic: string
  volume: number
  sentiment: number
  timestamp: string
}

// Components
const BlogCard: React.FC<BlogPost> = ({ title, category, content, likes, comments, trending, author, publishedAt, readTime, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{category}</span>
        {trending && (
          <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <TrendingUp size={12} className="mr-1" /> Trending
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{content.substring(0, 150)}...</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <User size={14} />
        {author.name}
        <Calendar size={14} />
        {format(new Date(publishedAt), 'MMM d, yyyy')}
        <Clock size={14} />
        {readTime} min read
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="flex items-center text-gray-600 dark:text-gray-400"><ThumbsUp size={16} className="mr-1" /> {likes}</span>
          <span className="flex items-center text-gray-600 dark:text-gray-400"><MessageSquare size={16} className="mr-1" /> {comments}</span>
        </div>
        <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          Read More <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  </motion.div>
)

const InsightsChart: React.FC<{ data: InsightData[] }> = ({ data }) => {
  const chartData = {
    labels: data.map(d => format(new Date(d.date), 'MMM d')),
    datasets: [
      {
        label: 'Page Views',
        data: data.map(d => d.pageViews),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Unique Visitors',
        data: data.map(d => d.uniqueVisitors),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Blog Insights',
      },
    },
  }

  return (
    <div className="h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  )
}

const RealTimeTrends: React.FC = () => {
  const [trends, setTrends] = useState<TrendData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTrends = async () => {
    try {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      const storyIds = await response.json()
      
      const storyPromises = storyIds.slice(0, 10).map((id: number) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
      )
      
      const stories = await Promise.all(storyPromises)
      
      const trendData: TrendData[] = stories
        .filter(story => story.title)
        .map(story => ({
          topic: story.title,
          count: story.score,
          change: story.descendants || 0,
          timestamp: new Date(story.time * 1000).toISOString()
        }))
      
      setTrends(trendData)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch trend data')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrends()
    const interval = setInterval(fetchTrends, 300000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 rounded-lg">
        {error}
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Real-time Tech Trends</h3>
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex-1">
              <h4 className="font-medium text-sm">{trend.topic}</h4>
              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                <TrendingUp size={14} className="mr-1" />
                <span>{trend.count} points</span>
                <MessageSquare size={14} className="ml-3 mr-1" />
                <span>{trend.change} comments</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              {format(new Date(trend.timestamp), 'HH:mm')}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Data updates every 5 minutes • Powered by HackerNews API
      </div>
    </div>
  )
}

const LivePoll: React.FC<{ poll: Poll; onVote: (pollId: string, optionId: string) => void }> = ({ poll, onVote }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = async (optionId: string) => {
    if (hasVoted) return

    try {
      await onVote(poll.id, optionId)
      setSelectedOption(optionId)
      setHasVoted(true)
    } catch (error) {
      console.error('Failed to submit vote:', error)
    }
  }

  const calculatePercentage = (votes: number) => {
    return ((votes / poll.totalVotes) * 100).toFixed(1)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">{poll.question}</h3>
      <div className="space-y-3">
        {poll.options.map((option) => (
          <motion.div
            key={option.id}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => handleVote(option.id)}
              disabled={hasVoted}
              className={`w-full p-4 rounded-lg border transition-all ${
                hasVoted
                  ? 'cursor-default'
                  : 'hover:bg-blue-50 dark:hover:bg-gray-700'
              } ${
                selectedOption === option.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-gray-700'
                  : 'border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{option.text}</span>
                {hasVoted && (
                  <span className="font-semibold">
                    {calculatePercentage(option.votes)}%
                  </span>
                )}
              </div>
              {hasVoted && (
                <motion.div
                  className="absolute left-0 bottom-0 h-1 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${calculatePercentage(option.votes)}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              )}
            </button>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Total votes: {poll.totalVotes} • Ends in {format(new Date(poll.endTime), 'h:mm a')}
      </div>
    </div>
  )
}

const SocialTrends: React.FC = () => {
  const [trends, setTrends] = useState<SocialTrend[]>([])

  useEffect(() => {
    const fetchSocialTrends = async () => {
      try {
        // Simulated API call
        const mockTrends: SocialTrend[] = [
          { platform: 'Twitter', topic: '#AIinTech', volume: 15000, sentiment: 0.8, timestamp: new Date().toISOString() },
          { platform: 'LinkedIn', topic: 'Cloud Computing', volume: 8000, sentiment: 0.6, timestamp: new Date().toISOString() },
          { platform: 'Reddit', topic: 'Machine Learning', volume: 12000, sentiment: 0.7, timestamp: new Date().toISOString() },
          { platform: 'Twitter', topic: '#DevOps', volume: 10000, sentiment: 0.5, timestamp: new Date().toISOString() },
          { platform: 'LinkedIn', topic: 'Blockchain', volume: 6000, sentiment: 0.4, timestamp: new Date().toISOString() },
        ]
        setTrends(mockTrends)
      } catch (error) {
        console.error('Failed to fetch social trends:', error)
      }
    }

    fetchSocialTrends()
    const interval = setInterval(fetchSocialTrends, 300000) // Update every 5 minutes
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Tech Trends on Social Media</h3>
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700  rounded-lg"
          >
            
            <div className="flex-1">
              <h4 className="font-medium">{trend.topic}</h4>
              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                <TrendingUp size={14} className="mr-1" />
                <span>{trend.volume.toLocaleString()} mentions</span>
                <span className="ml-2">Sentiment: {trend.sentiment.toFixed(2)}</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              {format(new Date(trend.timestamp), 'HH:mm')}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const ThreeJSBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true })
    const torus = new THREE.Mesh(geometry, material)

    scene.add(torus)

    camera.position.z = 30

    const animate = () => {
      requestAnimationFrame(animate)

      torus.rotation.x += 0.01
      torus.rotation.y += 0.005

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

// Mock data
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    category: "Artificial Intelligence",
    content: "Artificial Intelligence is revolutionizing the way we develop software. From automated testing to intelligent code completion, AI is enhancing developer productivity and software quality...",
    likes: 120,
    comments: 45,
    trending: true,
    author: {
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    publishedAt: "2024-03-15T10:00:00Z",
    readTime: 5,
    image: "https://source.unsplash.com/random/800x600?ai"
  },
  {
    id: 2,
    title: "Securing Your Cloud Infrastructure",
    category: "Cloud Computing",
    content: "As more businesses move to the cloud, securing your infrastructure becomes paramount. This article explores best practices for maintaining a robust security posture in cloud environments...",
    likes: 89,
    comments: 32,
    trending: false,
    author: {
      name: "John Smith",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    publishedAt: "2024-03-14T14:30:00Z",
    readTime: 7,
    image: "https://source.unsplash.com/random/800x600?cloud"
  },
  {
    id: 3,
    title: "The Rise of Low-Code Platforms",
    category: "Software Development",
    content: "Low-code platforms are changing the landscape of software development. By enabling rapid application development with minimal hand-coding, these platforms are democratizing software creation...",
    likes: 156,
    comments: 67,
    trending: true,
    author: {
      name: "Emily Johnson",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    publishedAt: "2024-03-13T09:15:00Z",
    readTime: 6,
    image: "https://source.unsplash.com/random/800x600?code"
  }
]

const mockTrendingTopics: string[] = ["AI", "Cloud Security", "Low-Code", "DevOps", "Blockchain"]

const mockInsights: InsightData[] = [
  { date: "2024-03-10", pageViews: 1000, uniqueVisitors: 750 },
  { date: "2024-03-11", pageViews: 1200, uniqueVisitors: 900 },
  { date: "2024-03-12", pageViews: 1100, uniqueVisitors: 850 },
  { date: "2024-03-13", pageViews: 1300, uniqueVisitors: 1000 },
  { date: "2024-03-14", pageViews: 1500, uniqueVisitors: 1100 },
]

export default function EnhancedSoftwareSolutionsBlog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [trendingTopics, setTrendingTopics] = useState<string[]>([])
  const [insights, setInsights] = useState<InsightData[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('latest')
  const [currentPoll, setCurrentPoll] = useState<Poll>({
    id: '1',
    question: 'Which technology are you most excited to learn in 2024?',
    options: [
      { id: '1', text: 'Artificial Intelligence / Machine Learning', votes: 245 },
      { id: '2', text: 'Web3 / Blockchain', votes: 182 },
      { id: '3', text: 'Cloud Native Development', votes: 156 },
      { id: '4', text: 'DevOps & Infrastructure as Code', votes: 134 }
    ],
    totalVotes: 717,
    endTime: '2024-03-15T23:59:59Z'
  })
  const [darkMode, setDarkMode] = useState(false)

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      console.log('Searching for:', term)
    }, 300),
    []
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlogPosts(mockBlogPosts)
      setTrendingTopics(mockTrendingTopics)
      setInsights(mockInsights)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    debouncedSearch(searchTerm)
  }, [searchTerm, debouncedSearch])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleVote = async (_pollId: string, optionId: string) => {
    try {
      // Simulating API call to record vote
      await new Promise(resolve => setTimeout(resolve, 500))

      setCurrentPoll(prevPoll => {
        const updatedOptions = prevPoll.options.map(option =>
          option.id === optionId ? { ...option, votes: option.votes + 1 } : option
        )
        return {
          ...prevPoll,
          options: updatedOptions,
          totalVotes: prevPoll.totalVotes + 1
        }
      })
    } catch (error) {
      console.error('Failed to submit vote:', error)
    }
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <ThreeJSBackground />
      <header className="bg-white dark:bg-gray-800 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Software Solutions Blog</h1>
            <nav className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Categories</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <RealTimeTrends />
          </div>
          <div>
            <LivePoll poll={currentPoll} onVote={handleVote} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <SocialTrends />
          </div>
        </div>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="mb-8">
          <div className="flex space-x-4">
            <motion.button
              onClick={() => setActiveTab('latest')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'latest' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Latest
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'trending' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Trending
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'insights' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Insights
            </motion.button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div>
            {activeTab === 'latest' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
                </AnimatePresence>
              </div>
            )}
            {activeTab === 'trending' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => post.trending).map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            )}
            {activeTab === 'insights' && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Blog Performance Insights</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">View trends in page views and unique visitors</p>
                <InsightsChart data={insights} />
              </div>
            )}
          </div>
        )}

        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured Authors</h2>
          <div className="flex flex-wrap gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <motion.div
                key={post.id}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.category} Expert</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <form className="flex gap-4">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" />
              <motion.button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 mt-12 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600 dark:text-gray-400">We provide cutting-edge software solutions and insights for businesses of all sizes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Software Solutions Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}