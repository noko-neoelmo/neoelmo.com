import { motion } from "framer-motion"
import { Building, User, MapPin, Calendar, FileText } from "lucide-react"

export default function CompanyInfoSection() {
  const companyInfo = [
    {
      icon: User,
      label: "代表取締役",
      value: "土屋沙也加"
    },
    {
      icon: Building,
      label: "会社名",
      value: "株式会社ネオエルモ"
    },
    {
      icon: MapPin,
      label: "所在地",
      value: "東京都練馬区"
    },
    {
      icon: Calendar,
      label: "設立",
      value: "2025年3月3日"
    },
    {
      icon: FileText,
      label: "事業内容",
      value: "AI事業プロデュース・コンサルティング"
    }
  ]

  return (
    <section id="company" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            会社情報
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            株式会社ネオエルモの企業概要
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}