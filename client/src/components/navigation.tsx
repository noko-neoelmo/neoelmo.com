import { useState } from "react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu } from "lucide-react"
import logoPath from "@assets/Purple_Holizontal.png"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "会社情報" },
    { href: "#services", label: "サービス" },
    { href: "#achievements", label: "実績" },
    { href: "#contact", label: "お問い合わせ" },
  ]

  const handleConsultationClick = () => {
    window.open('https://app.spirinc.com/t/AJ_mAlkX7tM_K8hOrg35d/as/S7g17bcsUAlZTWBUJJYRZ/confirm', '_blank')
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="ネオエルモ" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium text-gray-900 dark:text-gray-100"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleConsultationClick}
              className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg font-medium text-sm transition-all duration-300"
            >
              30分の無料相談
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={handleConsultationClick}
                    className="w-full mt-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg font-medium transition-all duration-300"
                  >
                    30分の無料相談
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
