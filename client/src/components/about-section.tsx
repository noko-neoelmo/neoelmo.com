import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team collaboration workspace" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              代表メッセージ
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="CEO Portrait" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">土屋沙也加</h3>
                  <p className="text-gray-600 dark:text-gray-300">代表取締役</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
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

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600">2025年</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">設立年</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600">東京</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">本社所在地</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
              <h4 className="font-bold text-lg mb-2">経歴</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
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
