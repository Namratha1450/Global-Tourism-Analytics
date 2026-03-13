import { Globe, TrendingUp, Leaf, Plane, Database, BarChart3, Shield, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { Chatbot } from "@/components/chatbot"

const features = [
  {
    icon: TrendingUp,
    title: "Tourism Economic Performance",
    description: "Track and analyze tourism revenue trends, GDP contributions, and economic growth patterns across countries.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism Development",
    description: "Monitor sustainability scores, environmental impact metrics, and carbon emissions data for responsible tourism.",
  },
  {
    icon: Plane,
    title: "Travel Demand & Infrastructure",
    description: "Analyze airport traffic, visa approvals, and infrastructure development impacting tourism flow.",
  },
]

const datasets = [
  {
    title: "Economic Indicators",
    items: ["Tourism Revenue", "GDP Contribution", "Average Stay Duration", "Revenue by Country"],
  },
  {
    title: "Sustainability Metrics",
    items: ["Sustainability Score", "Carbon Emissions", "Environmental Impact", "Tourism Satisfaction"],
  },
  {
    title: "Infrastructure Data",
    items: ["Airport Traffic", "Visa Approvals", "Infrastructure Index", "Investment Trends"],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Particles count={40} />
      <Navbar />

      <main className="page-transition pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Globe className="h-4 w-4 text-blue-400" />
              <span className="text-gray-300 text-sm">About the Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
              Understanding Global Tourism Through Data
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This platform integrates comprehensive tourism datasets covering economic indicators, 
              sustainability metrics, infrastructure development, airport traffic, visa approvals, 
              and tourism investment trends across multiple countries and years.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We aim to provide comprehensive tourism intelligence that helps stakeholders 
                    make informed decisions about tourism development, sustainability initiatives, 
                    and economic growth strategies.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By integrating Power BI dashboards with advanced data visualization, we transform 
                    complex tourism data into actionable insights that drive positive change in the 
                    global tourism industry.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "50+", label: "Countries" },
                    { value: "5+", label: "Years of Data" },
                    { value: "200+", label: "Metrics" },
                    { value: "1M+", label: "Records" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-2xl p-6 text-center">
                      <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-white/70 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Dashboard Insights</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our dashboards provide comprehensive insights into various aspects of tourism
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card rounded-2xl p-6 card-3d">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Datasets Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Data Coverage</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Comprehensive datasets powering our analytics platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {datasets.map((dataset) => (
                <div key={dataset.title} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-400" />
                    {dataset.title}
                  </h3>
                  <ul className="space-y-2">
                    {dataset.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Built with Modern Technology</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Our platform leverages cutting-edge technologies to deliver seamless analytics experiences
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: BarChart3, label: "Power BI" },
                  { icon: Zap, label: "Real-time Data" },
                  { icon: Shield, label: "Secure Platform" },
                  { icon: Globe, label: "Global Coverage" },
                ].map((tech) => (
                  <div key={tech.label} className="text-center p-4">
                    <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                      <tech.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <p className="text-gray-300 font-medium">{tech.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
