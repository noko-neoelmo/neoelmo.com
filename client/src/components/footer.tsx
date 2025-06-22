import logoPath from "@assets/White_Holizontal.png"
import { Link } from "wouter"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 dark:bg-gray-100 text-white dark:text-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={logoPath} 
              alt="ネオエルモ" 
              className="h-10 w-auto"
            />
          </div>
          
          <p className="text-gray-400 dark:text-gray-600 mb-6">
            新時代の事業に、新しい成長のDNAを
          </p>
          
          <div className="flex justify-center space-x-8 mb-6">
            <Link 
              href="/privacy-policy" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              プライバシーポリシー
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-700">
            © 2025 株式会社ネオエルモ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
