"use client"

import Link from "next/link"
import { Globe, TrendingUp, Leaf, Plane, ArrowRight, BarChart3, Users, Database } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { Chatbot } from "@/components/chatbot"
import { DataExplorer } from "@/components/data-explorer"
import { FuturePrediction, ExpenseAnalysis, VisaPolicy } from "@/components/tourism-features"

const stats = [
  { label: "Countries Covered", value: "50+", icon: Globe },
  { label: "Tourism Metrics", value: "200+", icon: BarChart3 },
  { label: "Tourism Data Records", value: "1M+", icon: Database },
]

const dashboards = [
  {
    title: "Travel Behaviour Dashboard",
    description: "Analyze travel patterns, airport traffic, visa approvals, and tourism investment trends across multiple countries.",
    icon: Plane,
    href: "/travel-behaviour",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tourism Social Environmental Impact",
    description: "Explore sustainability metrics, carbon emissions, infrastructure development, and tourism satisfaction scores.",
    icon: Leaf,
    href: "/environmental-impact",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Tourism Economic Dashboard",
    description: "Track tourism revenue, GDP contribution, average stay duration, and revenue distribution by country.",
    icon: TrendingUp,
    href: "/tourism-economic",
    gradient: "from-purple-500 to-pink-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Particles count={50} />
      <Navbar />

      <main className="page-transition">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-300 text-sm">Live Data Analytics</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              GLOBAL TOURISM{" "}
              <span className="gradient-text">ANALYTICS PLATFORM</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
              A data-driven tourism intelligence platform analyzing tourism revenue, 
              sustainability indicators, and traveler behavior using interactive analytics dashboards.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/travel-behaviour"
                className="neon-button px-8 py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2"
              >
                Explore Dashboards
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl text-white font-semibold border border-white/20 hover:bg-white/5 transition-all inline-flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-8 text-center card-3d"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                    <stat.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Cards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Interactive Dashboards
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore comprehensive tourism analytics through our Power BI integrated dashboards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dashboards.map((dashboard) => (
                <Link
                  key={dashboard.title}
                  href={dashboard.href}
                  className="group glass-card rounded-2xl p-6 card-3d block"
                >
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${dashboard.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    <dashboard.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {dashboard.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {dashboard.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                    View Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Powered by Real-Time Data
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our platform integrates comprehensive tourism datasets covering economic indicators, 
                    sustainability metrics, infrastructure development, airport traffic, visa approvals, 
                    and tourism investment trends across multiple countries and years.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Tourism economic performance tracking",
                      "Sustainable tourism development insights",
                      "Travel demand and infrastructure analysis",
                      "AI-powered predictions and recommendations",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-300">
                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">Interactive Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Explorer Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <DataExplorer />
          </div>
        </section>

        {/* Future Prediction Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FuturePrediction />
          </div>
        </section>

        {/* Expense Analysis Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ExpenseAnalysis />
          </div>
        </section>

        {/* Visa Policy Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <VisaPolicy />
          </div>
        </section>

        {/* Email Subscription */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8">
              Receive tourism analytics insights directly in your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="neon-button px-6 py-3 rounded-xl text-white font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
