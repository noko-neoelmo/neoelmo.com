import { motion } from "framer-motion"

export default function AchievementsSection() {
  const clients = [
    "株式会社大丸松坂屋百貨店", "UCC上島珈琲株式会社", "株式会社レンガ", "SOELU株式会社", 
    "株式会社ファンタラクティブ", "株式会社EmpaC", "株式会社KIYONO", "株式会社Walkers", "株式会社アシタヘ"
  ]

  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-16 w-32 h-px bg-black opacity-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-px h-24 bg-black opacity-10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-12 w-20 h-20 border border-black opacity-5"
          initial={{ rotate: 45, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-40 right-1/3 w-8 h-8 border border-black opacity-10"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-16 w-6 h-6 bg-black opacity-5"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Grid pattern */}
        <motion.div 
          className="absolute top-1/2 left-8 grid grid-cols-3 gap-1 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
        >
          {Array.from({length: 9}).map((_, i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 border border-black"
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 0.3 
              }}
            />
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
            実績
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            多様な業界のリーディングカンパニーとともに、新しい成長のDNAを創造してきました
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-black tracking-wide">お取引先企業</h3>
            <div className="w-12 h-px bg-black mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="group h-24 bg-white border border-gray-200 hover:border-black transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                {/* Geometric corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gray-200 group-hover:border-black transition-colors duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-gray-200 group-hover:border-black transition-colors duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                  viewport={{ once: true }}
                />
                
                <div className="h-full flex items-center justify-center p-4 relative">
                  {/* Central line accent */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-black opacity-0 group-hover:opacity-20"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="text-sm font-light text-black text-center leading-tight z-10">
                    {client}
                  </div>
                </div>
                
                {/* Hover geometric effect */}
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 bg-black opacity-0 group-hover:opacity-10"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 border border-black text-black font-light hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button geometric accents */}
            <motion.div 
              className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-black group-hover:border-white transition-colors duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-black group-hover:border-white transition-colors duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-px bg-black group-hover:bg-white opacity-0 group-hover:opacity-20"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            
            あなたの事業の成長について相談する
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
