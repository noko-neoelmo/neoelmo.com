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
              onClick={handleScrollToContact}
              variant="outline"
              className="px-8 py-6 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black rounded-lg font-semibold text-lg transition-all duration-300"
            >
              お問い合わせ
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
