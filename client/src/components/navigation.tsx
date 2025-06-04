import { useState } from "react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, Flame } from "lucide-react"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "会社情報" },
    { href: "#services", label: "サービス" },
    { href: "#achievements", label: "実績" },
    { href: "#contact", label: "お問い合わせ" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Flame className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              ネオエルモ
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
