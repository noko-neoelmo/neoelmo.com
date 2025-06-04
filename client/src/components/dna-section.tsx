import { motion } from "framer-motion"

export default function DnaSection() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            新時代の事業に、新しい成長のDNAを
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            事業設計からAI導入、顧客接点のデザインまで「事業のコア」を共創します。
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Philosophy Section */}
          <motion.div
            className="mb-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <span className="font-bold text-gray-900 dark:text-white">事業を伸ばす魔法のプロンプトは存在しません。</span>
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                高速で変化する世の中で、強い事業を育てるためにはAIの活用が不可欠です。<br />
                しかし、ただ導入すればうまくいくわけではありません。
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                体に異物が入ればアレルギーが出るように、<br />
                ヒトも、企業文化もアップデートすることが重要です。
              </p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
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
                className="absolute w-48 h-48 rounded-full border-4 border-purple-400 bg-purple-50/80 dark:bg-purple-900/30 flex items-center justify-center"
                style={{ top: "0px", left: "64px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Design</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">強くしなやかな<br />事業設計</p>
                </div>
              </motion.div>

              {/* Narrative Circle - Bottom Left */}
              <motion.div
                className="absolute w-48 h-48 rounded-full border-4 border-purple-500 bg-purple-100/80 dark:bg-purple-800/30 flex items-center justify-center"
                style={{ top: "128px", left: "0px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Narrative</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">コミュニティに<br />支持される<br />マーケティング</p>
                </div>
              </motion.div>

              {/* AI Circle - Bottom Right */}
              <motion.div
                className="absolute w-48 h-48 rounded-full border-4 border-purple-600 bg-purple-200/80 dark:bg-purple-700/30 flex items-center justify-center"
                style={{ top: "128px", left: "128px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">AI</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">成果を生み出す<br />AI活用</p>
                </div>
              </motion.div>

              {/* Center DNA Label */}
              <motion.div
                className="absolute w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg"
                style={{ top: "132px", left: "96px" }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-white">DNA</span>
              </motion.div>
            </div>
          </motion.div>

          {/* DNA Details */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-purple-500 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Design</h3>
              <p className="text-gray-700 dark:text-gray-300">強くしなやかな事業設計</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-purple-500 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Narrative</h3>
              <p className="text-gray-700 dark:text-gray-300">コミュニティに支持されるマーケティング</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-purple-500 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">AI</h3>
              <p className="text-gray-700 dark:text-gray-300">成果を生み出すAI活用</p>
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                磨き抜かれた戦略があってこそ、どこに、どんなAIを導入すべきかが見えてきます。
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                私たちは、事業設計からAI開発、そしてAIで結果を出す強固な組織文化まで、一気通貫でプロデュース。
              </p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                目まぐるしく風向きが変わるビジネスの海で、共に灯台を目指すパートナーです。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
