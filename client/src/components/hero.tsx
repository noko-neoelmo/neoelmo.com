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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      {/* Cosmic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base cosmic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"></div>
        
        {/* Molecular/Chemical structures */}
        <div className="absolute top-20 left-20 w-32 h-32">
          <svg className="w-full h-full text-purple-200 dark:text-purple-900 opacity-40" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="50" cy="30" r="6" fill="currentColor" />
            <circle cx="80" cy="40" r="3" fill="currentColor" />
            <circle cx="30" cy="60" r="5" fill="currentColor" />
            <circle cx="70" cy="70" r="4" fill="currentColor" />
            <line x1="20" y1="20" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="30" x2="80" y2="40" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="30" x2="30" y2="60" stroke="currentColor" strokeWidth="1" />
            <line x1="30" y1="60" x2="70" y2="70" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24">
          <svg className="w-full h-full text-gray-300 dark:text-gray-700 opacity-30" viewBox="0 0 100 100">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-40 w-28 h-28">
          <svg className="w-full h-full text-purple-100 dark:text-purple-800 opacity-35" viewBox="0 0 100 100">
            <circle cx="30" cy="30" r="5" fill="currentColor" />
            <circle cx="70" cy="30" r="5" fill="currentColor" />
            <circle cx="50" cy="70" r="5" fill="currentColor" />
            <path d="M30 30 L70 30 L50 70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        
        <div className="absolute top-60 right-20 w-20 h-20">
          <svg className="w-full h-full text-gray-400 dark:text-gray-600 opacity-25" viewBox="0 0 100 100">
            <circle cx="50" cy="20" r="3" fill="currentColor" />
            <circle cx="20" cy="50" r="3" fill="currentColor" />
            <circle cx="80" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="80" r="3" fill="currentColor" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
            <line x1="50" y1="20" x2="50" y2="44" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="50" x2="44" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="50" x2="56" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="80" x2="50" y2="56" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Subtle floating cosmic dust */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
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
              onClick={handleScrollToServices}
              className="px-8 py-6 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              サービス詳細を見る
            </Button>
            <Button
              onClick={() => window.open('https://app.spirinc.com/t/AJ_mAlkX7tM_K8hOrg35d/as/S7g17bcsUAlZTWBUJJYRZ/confirm', '_blank')}
              variant="outline"
              className="px-8 py-6 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black rounded-lg font-semibold text-lg transition-all duration-300"
            >
              30分の無料相談
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
