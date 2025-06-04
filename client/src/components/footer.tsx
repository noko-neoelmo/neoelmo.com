import logoPath from "@assets/Purple_Holizontal.png"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 dark:bg-gray-100 text-white dark:text-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={logoPath} 
              alt="ネオエルモ" 
              className="h-10 w-auto filter invert dark:invert-0"
            />
          </div>
          
          <p className="text-gray-400 dark:text-gray-600 mb-4">
            新時代の事業に、新しい成長のDNAを
          </p>
          
          <div className="text-sm text-gray-500 dark:text-gray-700">
            © 2025 株式会社ネオエルモ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
