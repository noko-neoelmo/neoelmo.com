import { motion } from "framer-motion"
import { Route, Mic, Brain, Rocket, Search, MessageCircle } from "lucide-react"
import { SiGoogle, SiLine } from "react-icons/si"

export default function ServicesSection() {
  const ownServices = [
    {
      icon: Route,
      title: "シナリオメーカー",
      description: "LINE公式アカウントのステップ配信やトリガー配信を自然言語のみでつくることができるAIエージェント",
      tags: ["CVR向上", "自動化", "簡単設定"],
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      icon: Mic,
      title: "VOICER",
      description: "「自分のことばを引き出す」インタビュー〜note作成までをAIエージェントがご支援",
      tags: ["パーソナルブランディング", "効率化"],
      gradient: "from-purple-600 to-blue-600"
    }
  ]

  const supportServices = [
    {
      icon: Brain,
      title: "生成AI顧問",
      description: "1to1で最新のテック情報や活用方法をお伝えする伴走型コーチング",
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      icon: Rocket,
      title: "新規事業グロース",
      description: "立ち上げからグロースまでトータルプロデュース",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: SiGoogle,
      title: "Google Workspace支援",
      description: "GeminiやGASを活用したワークフロー自動化",
      gradient: "from-cyan-400 to-purple-600"
    },
    {
      icon: SiLine,
      title: "LINEコミュニケーション",
      description: "LINE APIを活用した顧客データ連携とパーソナライズ配信",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Search,
      title: "LLMO/AIO支援",
      description: "生成AIに選ばれるための構造化整備とコンテンツ設計",
      gradient: "from-cyan-400 to-blue-600"
    }
  ]

  const tools = [
    "Google Workspace", "ChatGPT", "Claude", "Gemini", 
    "Cursor", "Dify", "LINE API", "Flo", "Perplexity"
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">サービス</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            自社サービスから伴走支援まで、包括的なソリューションを提供
          </p>
        </motion.div>

        {/* 自社サービス */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">自社サービス</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ownServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    <service.icon className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold">{service.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 支援サービス */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">ご支援内容</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                  <service.icon className="text-white w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 対応ツール */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">対応可能ツール</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-mono font-semibold border border-blue-200 dark:border-blue-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
