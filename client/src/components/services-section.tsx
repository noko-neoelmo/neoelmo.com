import { motion } from "framer-motion"
import { Lightbulb, Zap, Users, Target, Code, BarChart3 } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "事業戦略",
      description: "市場分析から成長戦略まで、データに基づいた戦略設計を行います。",
      features: ["市場分析", "競合調査", "成長戦略", "ビジネスモデル設計"]
    },
    {
      icon: Users,
      title: "マーケティング",
      description: "ブランド構築からデジタルマーケティングまで、包括的な支援を提供します。",
      features: ["ブランド戦略", "コンテンツ制作", "SNS運用", "広告運用"]
    },
    {
      icon: Code,
      title: "システム開発",
      description: "最新技術を活用し、ビジネス成長を支えるシステムを構築します。",
      features: ["Webアプリ開発", "モバイルアプリ", "API開発", "インフラ構築"]
    },
    {
      icon: Zap,
      title: "AI・DX",
      description: "AI技術を活用したビジネス変革と業務効率化を実現します。",
      features: ["AI導入支援", "業務自動化", "データ活用", "DX戦略"]
    },
    {
      icon: Target,
      title: "事業開発",
      description: "新規事業の立ち上げから既存事業の成長まで総合的にサポート。",
      features: ["新規事業企画", "プロダクト開発", "事業計画", "資金調達支援"]
    },
    {
      icon: BarChart3,
      title: "組織開発",
      description: "成長を支える組織づくりと人材育成を通じて企業力を向上させます。",
      features: ["組織設計", "人材育成", "評価制度", "文化醸成"]
    }
  ]

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-32 left-8 w-24 h-px bg-black opacity-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute top-1/2 right-12 w-px h-40 bg-black opacity-10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-16 h-16 border border-black opacity-5"
          initial={{ rotate: 45, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Grid pattern */}
        <motion.div 
          className="absolute bottom-20 right-20 grid grid-cols-4 gap-1 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
        >
          {Array.from({length: 16}).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black" />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-black tracking-tight">
            AIエージェント
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            事業成長のあらゆる領域で、専門性と先進技術を融合させたソリューションを提供します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white border border-gray-200 hover:border-black transition-all duration-500 p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Geometric corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gray-200 group-hover:border-black transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gray-200 group-hover:border-black transition-colors duration-300"></div>
              
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8 text-black mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">{service.title}</h3>
                <div className="w-12 h-px bg-black mb-4"></div>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </motion.div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="text-sm text-gray-500 font-light flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-black mr-3 opacity-20"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover geometric effect */}
              <motion.div 
                className="absolute top-4 right-4 w-4 h-4 border border-black opacity-0 group-hover:opacity-20"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button geometric accents */}
            <motion.div 
              className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white opacity-0 group-hover:opacity-20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white opacity-0 group-hover:opacity-20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            
            詳しいサービス内容を相談する
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
