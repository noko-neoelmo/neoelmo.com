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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 dark:bg-gray-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-200 dark:bg-gray-700 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-50 dark:bg-gray-900 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
