import { Leaf, BarChart3, ThumbsUp, Building, CloudRain } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { KPICard } from "@/components/kpi-card"
import { Chatbot } from "@/components/chatbot"

const kpis = [
  { title: "Avg Sustainability Score", value: "7.2/10", icon: Leaf, trend: "+0.8 from last year", trendUp: true },
  { title: "Tourism Satisfaction Score", value: "8.4/10", icon: ThumbsUp, trend: "+0.3 YoY", trendUp: true },
  { title: "Infrastructure Dev Index", value: "6.8/10", icon: Building, trend: "+1.2 YoY", trendUp: true },
  { title: "Carbon Emissions", value: "1.2GT", icon: CloudRain, trend: "-3.5% YoY", trendUp: false },
]

const insights = [
  {
    title: "Sustainability Influence on Tourism Satisfaction",
    description: "Our analysis reveals a strong positive correlation (r=0.78) between sustainability scores and tourism satisfaction. Destinations that prioritize environmental conservation, waste management, and eco-friendly practices consistently achieve higher visitor satisfaction ratings. Countries like Costa Rica, Norway, and New Zealand demonstrate this relationship, achieving sustainability scores above 8.5 alongside satisfaction ratings exceeding 9.0.",
  },
  {
    title: "Impact of Infrastructure on Tourism Attractiveness",
    description: "Infrastructure development directly influences destination attractiveness. The data shows that for every 1-point increase in infrastructure index, tourist arrivals increase by approximately 12%. Key infrastructure factors include transportation networks (35% weight), digital connectivity (25%), healthcare facilities (20%), and tourism-specific amenities (20%). Emerging destinations investing in infrastructure are seeing accelerated growth.",
  },
  {
    title: "Carbon Emissions and Environmental Sustainability",
    description: "The tourism sector contributes approximately 8% of global carbon emissions. Our dashboard tracks emissions intensity per tourist across destinations, revealing significant variations. European destinations average 0.18 tons CO2 per visitor, while long-haul destinations see higher figures due to air travel. The industry is responding with carbon offset programs, sustainable aviation fuel adoption, and eco-certification requirements.",
  },
]

export default function EnvironmentalImpactPage() {
  return (
    <div className="min-h-screen">
      <Particles count={40} />
      <Navbar />

      <main className="page-transition pt-24">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Tourism Social Environmental Impact
              </h1>
            </div>
            <p className="text-gray-400 max-w-3xl">
              Explore sustainability metrics, carbon emissions, infrastructure development, and 
              tourism satisfaction scores to understand the environmental and social impact of tourism.
            </p>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi) => (
                <KPICard
                  key={kpi.title}
                  title={kpi.title}
                  value={kpi.value}
                  icon={kpi.icon}
                  trend={kpi.trend}
                  trendUp={kpi.trendUp}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Power BI Dashboard */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="dashboard-container">
              <iframe
                title="Tourism Social Environmental Impact"
                width="100%"
                height="650"
                src="https://app.powerbi.com/view?r=eyJrIjoiYWNhOTNiYmYtMzU3My00ZjI0LTg4MjYtNjViN2NmNWMxMzVhIiwidCI6ImFiMTUzYjlmLTJjNzUtNDhiZC05NWMzLTg0ZmVkY2MyYjQ5MSJ9&pageName=6da298dc9d306318c4db"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Dashboard Insights</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {insights.map((insight) => (
                <div key={insight.title} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{insight.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>

            {/* Sustainability Focus */}
            <div className="mt-8 glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Sustainable Tourism Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-blue-400 mb-3">Environmental Initiatives</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Leading destinations are implementing comprehensive sustainability programs. 
                    These include renewable energy adoption in hotels (45% of major chains now use 
                    renewable sources), plastic reduction initiatives, water conservation programs, 
                    and biodiversity protection measures.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      45% hotels using renewable energy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      67% reduction in single-use plastics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      32% water usage reduction achieved
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-400 mb-3">Social Impact Metrics</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tourism creates significant social benefits when managed responsibly. 
                    Our data shows that sustainable tourism destinations see 25% higher 
                    local employment rates and 40% better community satisfaction scores 
                    compared to mass tourism destinations.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      25% higher local employment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      40% better community satisfaction
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      60% revenue stays in local economy
                    </li>
                  </ul>
                </div>
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
