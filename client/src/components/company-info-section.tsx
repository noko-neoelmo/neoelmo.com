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
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {companyInfo.map((item, index) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{item.label}</span>
                  <span className="text-gray-900 dark:text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}