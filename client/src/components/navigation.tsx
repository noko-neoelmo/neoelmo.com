import { useState } from "react"
import { useTheme } from "./theme-provider"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, Globe } from "lucide-react"
import logoPath from "@assets/Purple_Holizontal.png"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about", label: t("navigation.about") },
    { href: "#services", label: t("navigation.services") },
    { href: "#achievements", label: t("navigation.achievements") },
    { href: "#company", label: t("navigation.company") },
    { href: "#contact", label: t("navigation.contact") },
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
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="filter brightness-0 invert">
              <img 
                src={logoPath} 
                alt="ネオエルモ" 
                className="h-7 w-auto"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-light text-white hover:text-purple-400 transition-colors duration-500 relative group tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button
              onClick={handleConsultationClick}
              className="px-8 py-2 bg-white hover:bg-gray-100 text-black rounded-none font-light text-sm tracking-wider transition-all duration-500 hover:tracking-[0.1em] border-0"
            >
              {t("navigation.consultation")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
              className="rounded-none text-white hover:text-purple-400 hover:bg-transparent"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-none text-white hover:text-purple-400 hover:bg-transparent"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-none text-white hover:text-purple-400 hover:bg-transparent"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-400 hover:bg-transparent rounded-none">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-black border-gray-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left py-2 text-white hover:text-purple-400 transition-colors font-light tracking-wide"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={handleConsultationClick}
                    className="w-full mt-6 bg-white hover:bg-gray-100 text-black rounded-none font-light py-3 tracking-wider transition-all duration-500 border-0"
                  >
                    {t("navigation.consultation")}
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
