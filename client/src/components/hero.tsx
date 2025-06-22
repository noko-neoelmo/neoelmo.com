import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating squares */}
        <motion.div 
          className="absolute top-20 left-20 w-8 h-8 border border-black opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 90, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-12 h-12 border border-black opacity-15"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -45, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-6 h-6 bg-black opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
        />

        {/* Dynamic lines */}
        <motion.div 
          className="absolute top-1/4 left-0 w-64 h-px bg-black opacity-10"
          initial={{ scaleX: 0, x: -100 }}
          animate={{ scaleX: 1, x: 0 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-48 h-px bg-black opacity-10"
          initial={{ scaleX: 0, x: 100 }}
          animate={{ scaleX: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-px h-32 bg-black opacity-10"
          initial={{ scaleY: 0, y: 50 }}
          animate={{ scaleY: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        />

        {/* Grid pattern */}
        <motion.div 
          className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 4, delay: 2 }}
        >
          {Array.from({length: 9}).map((_, i) => (
            <motion.div 
              key={i}
              className="w-3 h-3 border border-black"
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </motion.div>

        {/* Floating geometric elements */}
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 border-2 border-black opacity-10"
          animate={{ 
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-8 tracking-tight leading-none">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                新しい成長の
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                DNA
              </motion.span>
            </h1>
            
            <motion.div 
              className="w-24 h-px bg-black mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              事業設計から AI活用、顧客接点のデザインまで
              <br className="hidden md:block" />
              「事業のコア」を共創します
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="group bg-black text-white px-8 py-4 font-medium transition-all duration-300 hover:bg-gray-800 flex items-center gap-3 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button geometric accent */}
              <motion.div 
                className="absolute top-0 left-0 w-2 h-2 bg-white opacity-20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-2 h-2 bg-white opacity-20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              
              お問い合わせ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#about"
              className="group border border-black text-black px-8 py-4 font-medium transition-all duration-300 hover:bg-black hover:text-white relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button geometric accent */}
              <motion.div 
                className="absolute top-0 right-0 w-px h-4 bg-black group-hover:bg-white transition-colors"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-4 h-px bg-black group-hover:bg-white transition-colors"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              
              事業について詳しく
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom geometric accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-black opacity-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 2 }}
      />
    </section>
  )
}
