import { Button } from "@/components/ui/button"
import { Flame } from "lucide-react"
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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200" 
          alt="Modern business technology background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-400/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse">
              <Flame className="text-white w-8 h-8" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            新時代の事業に、<br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
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
              className="px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              サービス詳細を見る
            </Button>
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              className="px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-semibold text-lg transition-all duration-300"
            >
              お問い合わせ
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
