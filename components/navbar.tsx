"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Linkedin, Mail, Globe, Home, Plane, Leaf, BarChart3, Bot, FileText, Info, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Economic Impact", href: "/travel-behaviour", icon: BarChart3 },
  { name: "Sustainability", href: "/environmental-impact", icon: Leaf },
  { name: "Travel Analytics", href: "/tourism-economic", icon: Plane },
  { name: "Insights", href: "/ai-insights", icon: Bot },
  { name: "Reports", href: "/reports", icon: FileText },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    setProfileOpen(false)
    router.push("/login")
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-7 w-7 text-cyan-400" />
              <span className="hidden sm:block text-white font-bold text-lg">Global Tourism Analytics Platform</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap",
                      pathname === item.href
                        ? "text-white bg-blue-500/20 border border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                        : "text-white hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Profile & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Developer Profile Circle */}
              <button
                onClick={() => setProfileOpen(true)}
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-blue-400"
              >
                NCG
              </button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                      pathname === item.href
                        ? "text-white bg-blue-500/20 border border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                        : "text-white hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    )}
                  >
                    <Icon className="h-4 w-4 text-blue-400" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Developer Profile Panel */}
      {profileOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setProfileOpen(false)}
          />
          <div className="profile-panel relative rounded-2xl p-8 max-w-md w-full animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setProfileOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl mb-4 border-4 border-blue-400/30">
                NCG
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Namratha Chowdary Gundapuneedi</h2>
              <p className="text-white/80 mb-6">Developer</p>

              <div className="space-y-4">
                <a
                  href="mailto:namrathachowdarygundapuneedi@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-white"
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-sm truncate">namrathachowdarygundapuneedi@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Namratha1450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-white"
                >
                  <Github className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">github.com/Namratha1450</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/namratha-chowdary-gundapuneedi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-white"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">LinkedIn Profile</span>
                </a>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors text-red-400 hover:text-red-300"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
