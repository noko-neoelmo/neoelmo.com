import { motion } from "framer-motion"
import { Route, Mic, Brain, Rocket, Search, MessageCircle } from "lucide-react"
import { SiGoogle, SiLine } from "react-icons/si"

export default function ServicesSection() {
  const ownServices = [
    {
      icon: Route,
      title: "らくステップ",
      description: "LINE公式アカウントのステップ配信やトリガー配信を自然言語のみでつくることができるAIエージェント",
      tags: ["CVR向上", "自動化", "簡単設定"]
    },
    {
      icon: Mic,
      title: "VOICER",
      description: "「自分のことばを引き出す」インタビュー〜note作成までをAIエージェントがご支援",
      tags: ["パーソナルブランディング", "効率化"]
    }
  ]

  const supportServices = [
    {
      icon: Brain,
      title: "生成AI顧問",
      description: "1to1で最新のテック情報や活用方法をお伝えする伴走型コーチング"
    },
    {
      icon: Rocket,
      title: "新規事業グロース",
      description: "立ち上げからグロースまでトータルプロデュース。女性向け・ヘルスケア領域の実績が多いです。"
    },
    {
      icon: SiGoogle,
      title: "Google Workspace支援",
      description: "GeminiやGASを活用したワークフロー自動化"
    },
    {
      icon: SiLine,
      title: "LINEコミュニケーション",
      description: "LINE APIを活用した顧客データ連携とパーソナライズ配信"
    },
    {
      icon: Search,
      title: "LLMO/AIO支援",
      description: "生成AIに選ばれるための構造化整備とコンテンツ設計"
    }
  ]

  const tools = [
    "Google Workspace", "ChatGPT", "Claude", "Gemini", 
    "Cursor", "Dify", "LINE API", "Flo", "Perplexity"
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            サービス
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
                  <div className="w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <service.icon className="text-white dark:text-black w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold"
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
                <div className="w-10 h-10 bg-gray-900 dark:bg-gray-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <service.icon className="text-white dark:text-black w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h4>
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
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-mono font-semibold border border-gray-200 dark:border-gray-700"
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
