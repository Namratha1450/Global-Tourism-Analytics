import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Platform */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Platform</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              This project demonstrates tourism analytics dashboards integrated into a web analytics platform. 
              Providing insights into tourism economic performance, sustainable tourism development, and travel demand patterns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/travel-behaviour" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Travel Behaviour
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Developer</h3>
            <p className="text-gray-300 font-medium mb-3">Namratha Chowdary Gundapuneedi</p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:namrathachowdarygundapuneedi@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Namratha1450"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/namratha-chowdary-gundapuneedi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Global Tourism Analytics Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
