import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const handleScrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* AI Breakthrough Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Inspired Gradient Base matching the attached image */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 30%, #1a202c 70%, #171923 100%)',
          }}
        ></div>
        
        {/* Subtle overlay for light mode */}
        <div className="absolute inset-0 bg-white/95 dark:bg-transparent"></div>
        
        {/* Purple Accent Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-700/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Cosmic Energy Grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="cosmicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Neural Network Pattern */}
            <g filter="url(#glow)">
              <circle cx="200" cy="150" r="8" fill="url(#cosmicGradient)" />
              <circle cx="400" cy="100" r="12" fill="url(#cosmicGradient)" />
              <circle cx="600" cy="200" r="6" fill="url(#cosmicGradient)" />
              <circle cx="800" cy="120" r="10" fill="url(#cosmicGradient)" />
              <circle cx="1000" cy="180" r="8" fill="url(#cosmicGradient)" />
              
              <circle cx="150" cy="350" r="10" fill="url(#cosmicGradient)" />
              <circle cx="350" cy="400" r="8" fill="url(#cosmicGradient)" />
              <circle cx="550" cy="320" r="14" fill="url(#cosmicGradient)" />
              <circle cx="750" cy="380" r="7" fill="url(#cosmicGradient)" />
              <circle cx="950" cy="340" r="9" fill="url(#cosmicGradient)" />
              
              <circle cx="250" cy="550" r="11" fill="url(#cosmicGradient)" />
              <circle cx="450" cy="600" r="9" fill="url(#cosmicGradient)" />
              <circle cx="650" cy="520" r="8" fill="url(#cosmicGradient)" />
              <circle cx="850" cy="580" r="12" fill="url(#cosmicGradient)" />
              
              {/* Connecting Lines */}
              <line x1="200" y1="150" x2="400" y2="100" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="400" y1="100" x2="600" y2="200" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="600" y1="200" x2="800" y2="120" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="800" y1="120" x2="1000" y2="180" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              
              <line x1="150" y1="350" x2="350" y2="400" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="350" y1="400" x2="550" y2="320" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="550" y1="320" x2="750" y2="380" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="750" y1="380" x2="950" y2="340" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              
              <line x1="250" y1="550" x2="450" y2="600" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="450" y1="600" x2="650" y2="520" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="650" y1="520" x2="850" y2="580" stroke="url(#cosmicGradient)" strokeWidth="2" opacity="0.6" />
              
              {/* Vertical Connections */}
              <line x1="200" y1="150" x2="150" y2="350" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              <line x1="400" y1="100" x2="350" y2="400" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              <line x1="600" y1="200" x2="550" y2="320" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              <line x1="800" y1="120" x2="750" y2="380" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              
              <line x1="350" y1="400" x2="250" y2="550" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              <line x1="550" y1="320" x2="450" y2="600" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              <line x1="750" y1="380" x2="650" y2="520" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
              <line x1="950" y1="340" x2="850" y2="580" stroke="url(#cosmicGradient)" strokeWidth="1.5" opacity="0.4" />
            </g>
          </svg>
        </div>
        
        {/* Energy Bursts */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-xl opacity-40"></div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-2xl opacity-30"></div>
        </motion.div>
        
        {/* Data Streams */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-40"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              height: ["80px", "120px", "80px"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Breakthrough Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            新時代の事業に、<br />
            <span className="text-gray-900 dark:text-white">
              新しい成長のDNA
            </span>を
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            事業設計からAI導入、顧客接点のデザインまで<br />
            「事業のコア」を共創します。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => window.open('https://app.spirinc.com/t/AJ_mAlkX7tM_K8hOrg35d/as/S7g17bcsUAlZTWBUJJYRZ/confirm', '_blank')}
              className="px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              30分の無料相談
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
