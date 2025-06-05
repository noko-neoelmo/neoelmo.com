import { motion } from "framer-motion"
import ceoImagePath from "@assets/it9prr.jpg"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-32 left-16 w-40 h-px bg-black opacity-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute top-1/4 right-24 w-px h-32 bg-black opacity-10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.8, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-20 w-24 h-24 border border-black opacity-5"
          initial={{ rotate: 45, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/2 right-12 w-12 h-12 border border-black opacity-8"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Grid accent */}
        <motion.div 
          className="absolute bottom-32 right-1/3 grid grid-cols-2 gap-2 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
        >
          {Array.from({length: 4}).map((_, i) => (
            <div key={i} className="w-3 h-3 border border-black" />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-black tracking-tight">
            代表メッセージ
          </h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            {/* Image geometric frame */}
            <div className="relative">
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-black"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-black"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              />
              
              <img 
                src={ceoImagePath} 
                alt="土屋沙也加 代表取締役" 
                className="w-80 h-80 object-cover filter grayscale border-2 border-black"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-8 relative">
              {/* Geometric corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-black"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-black mb-2">土屋沙也加</h3>
                <div className="w-12 h-px bg-black mb-3"></div>
                <p className="text-gray-600 text-lg font-light">代表取締役</p>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed font-light">
                <p>
                  古くから航海士にとって希望の光だった「セントエルモの火」という逸話から社名をつけました。
                </p>
                <p>
                  混沌とした時代だからこそ、組織も人もサービスも変わり続けなければいけない。スタートアップ創業初期からメガベンチャーまでを経験し、AI時代を迎えた今より強く思っています。
                </p>
                <p>
                  「一番困っている時」に我々のことを思い出していただけるような伴走型の事業プロデュースを大切にしています。
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 relative">
              {/* Top geometric accent */}
              <motion.div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-px bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              />
              
              <h4 className="font-medium text-lg mb-4 text-black">経歴</h4>
              <div className="w-8 h-px bg-black mb-4"></div>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                大学在学時よりシード期のSOELU株式会社にJOINし、シリーズBまでビジネス職全般をリード。CRMと新規事業の責任者として顧客体験とコミュニケーションデザイン・事業戦略を設計。
                LINE公式アカウントの活用でCPAを3,000円下げた経験からLINE株式会社（現LINEヤフー株式会社）の法人事業本部にて公式アカウントを活用した事業開発をPMMとして推進。
                2022年Web3コミュニティの支援を行う株式会社SHINSEKAI TechnologiesにてVPofCXを務め、PMとして体験設計やアライアンス戦略を経験した後、2025年3月に株式会社ネオエルモを創業。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
