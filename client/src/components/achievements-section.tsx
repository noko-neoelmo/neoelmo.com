import { motion } from "framer-motion"

export default function AchievementsSection() {
  const achievements = [
    { title: "AI導入", subtitle: "チャットボット" },
    { title: "開発支援", subtitle: "Cursor活用" },
    { title: "自動化", subtitle: "GAS活用" },
    { title: "LINE連携", subtitle: "API活用" },
  ]

  const clients = [
    "大丸松坂屋", "UCC", "レンガ", "SOELU", 
    "ファンタラクティブ", "EmpaC", "KIYONO"
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">実績</span>
          </h2>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">お取引先企業</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 opacity-80 hover:opacity-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <div className="text-sm font-bold text-gray-700 dark:text-gray-300">{client}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Innovation visualization */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="AI innovation abstract visualization" 
            className="w-full h-64 object-cover rounded-2xl opacity-20 dark:opacity-10"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2">{achievement.title}</div>
                  <div className="text-sm opacity-80">{achievement.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h4 className="font-bold text-blue-600 mb-2">店舗AI導入</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">チャットボット導入による顧客対応の効率化</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h4 className="font-bold text-purple-600 mb-2">開発効率化</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cursor活用による開発スピード向上</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h4 className="font-bold text-cyan-600 mb-2">業務自動化</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">GASを用いたワークフロー自動化</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h4 className="font-bold text-green-600 mb-2">MA連携</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">LINE拡張ツールとMA連携による効果最大化</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
