import { motion } from "framer-motion"

export default function DnaSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-px bg-black opacity-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute top-40 right-16 w-px h-24 bg-black opacity-20"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-black opacity-10"
          initial={{ rotate: 45, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 0.1 }}
          transition={{ duration: 3, delay: 1.5 }}
          viewport={{ once: true }}
        />
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
            新時代の事業に、新しい成長のDNAを
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            事業設計から AI活用、顧客接点のデザインまで「事業のコア」を共創します。
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Philosophy Section */}
          <motion.div
            className="mb-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-sm p-8 md:p-12 relative">
              {/* Geometric corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-black"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-black"></div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
                <span className="font-medium text-black">事業を伸ばす魔法のプロンプトは存在しません。</span>
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
                高速で変化する世の中で、強い事業を育てるためにはAIの活用が不可欠です。<br />
                しかし、ただ導入すればうまくいくわけではありません。
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 font-light">
                体に異物が入ればアレルギーが出るように、<br />
                ヒトも、企業文化もアップデートすることが重要です。
              </p>
              <p className="text-xl md:text-2xl font-medium text-black">
                ネオエルモが作るのは、新しい成長のDNA.
              </p>
            </div>
          </motion.div>

          {/* DNA Venn Diagram */}
          <motion.div
            className="relative flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Design Circle - Top */}
              <motion.div
                className="absolute w-48 h-48 border-2 border-black bg-white flex items-center justify-center"
                style={{ top: "0px", left: "64px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2 text-black">Design</h3>
                  <div className="w-8 h-px bg-black mx-auto mb-2"></div>
                  <p className="text-sm text-black font-light">強くしなやかな<br />事業設計</p>
                </div>
              </motion.div>

              {/* Narrative Circle - Bottom Left */}
              <motion.div
                className="absolute w-48 h-48 border-2 border-black bg-white flex items-center justify-center"
                style={{ top: "128px", left: "0px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2 text-black">Narrative</h3>
                  <div className="w-8 h-px bg-black mx-auto mb-2"></div>
                  <p className="text-sm text-black font-light">コミュニティに<br />支持される<br />マーケティング</p>
                </div>
              </motion.div>

              {/* AI Circle - Bottom Right */}
              <motion.div
                className="absolute w-48 h-48 border-2 border-black bg-white flex items-center justify-center"
                style={{ top: "128px", left: "128px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2 text-black">AI</h3>
                  <div className="w-8 h-px bg-black mx-auto mb-2"></div>
                  <p className="text-sm text-black font-light">成果を生み出す<br />AI活用</p>
                </div>
              </motion.div>

              {/* Connecting geometric lines */}
              <motion.div 
                className="absolute top-24 left-32 w-px h-32 bg-black opacity-20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute top-24 left-40 w-24 h-px bg-black opacity-20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-sm p-8 md:p-12 relative">
              {/* Geometric accent lines */}
              <motion.div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-px bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-px bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              />
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
                磨き抜かれた戦略があってこそ、どこに、どんなAIを活用すべきかが見えてきます。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
                私たちは、事業設計からAI開発、そしてAIで結果を出す強固な組織文化まで、一気通貫でプロデュース。
              </p>
              <p className="text-xl md:text-2xl font-medium text-black">
                目まぐるしく風向きが変わるビジネスの海で、共に灯台を目指すパートナーです。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
