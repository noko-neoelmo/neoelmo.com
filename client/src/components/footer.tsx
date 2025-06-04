import { Flame } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Flame className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              株式会社ネオエルモ
            </span>
          </div>
          
          <p className="text-gray-400 mb-4">
            新時代の事業に、新しい成長のDNAを
          </p>
          
          <div className="text-sm text-gray-500">
            © 2025 株式会社ネオエルモ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
