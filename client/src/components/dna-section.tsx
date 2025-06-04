import { motion } from "framer-motion"
import { Compass, MessageSquare, Bot } from "lucide-react"

export default function DnaSection() {
  const dnaItems = [
    {
      icon: Compass,
      title: "Design",
      subtitle: "強くしなやかな事業設計",
      description: "戦略的な事業設計により、変化に強い組織とサービスを構築します"
    },
    {
      icon: MessageSquare,
      title: "Narrative",
      subtitle: "コミュニティに支持されるマーケティング",
      description: "ブランドの想いを適切に伝える、顧客との関係性を設計します"
    },
    {
      icon: Bot,
      title: "AI",
      subtitle: "成果を生み出すAI活用",
      description: "戦略に基づいた適切なAI導入で、確実な成果を実現します"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            新しい成長の<span className="text-gray-900 dark:text-white">DNA</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Design・Narrative・AIの3つの柱で、強くしなやかな事業を育てます
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dnaItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 dark:bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                <item.icon className="text-white dark:text-black w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-semibold">
                {item.subtitle}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
