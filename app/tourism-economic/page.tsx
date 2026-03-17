import { TrendingUp, DollarSign, Clock, Percent, BarChart3, PieChart, Plane } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { KPICard } from "@/components/kpi-card"
import { Chatbot } from "@/components/chatbot"

const kpis = [
  { title: "Total Tourism Revenue", value: "$1.7T", icon: DollarSign, trend: "+8.5% YoY", trendUp: true },
  { title: "Average Stay Duration", value: "7.2 Days", icon: Clock, trend: "+0.4 days", trendUp: true },
  { title: "Average Revenue/Tourist", value: "$1,245", icon: TrendingUp, trend: "+5.2% YoY", trendUp: true },
  { title: "GDP Contribution", value: "10.4%", icon: Percent, trend: "+0.6% YoY", trendUp: true },
]

const chartInsights = [
  {
    title: "Revenue by Country",
    description: "The revenue distribution analysis reveals that the top 10 countries account for approximately 65% of global tourism revenue. The United States leads with $256 billion, followed by Spain ($84B), France ($73B), and Thailand ($63B). Emerging markets like Vietnam and Portugal are showing the fastest revenue growth rates at 15-18% annually.",
  },
  {
    title: "Revenue Trend Over Years",
    description: "Historical analysis shows tourism revenue has grown at a compound annual rate of 6.8% over the past decade. The data reveals seasonal patterns, with Q3 consistently generating 35% of annual revenue. Post-pandemic recovery has exceeded projections, with 2024 revenues surpassing 2019 levels by 12% in key markets.",
  },
  {
    title: "Travel Purpose Distribution",
    description: "Travel purpose segmentation shows leisure travel dominates at 54% of total trips, followed by business travel (24%), visiting friends and relatives (15%), and other purposes (7%). However, business travel generates disproportionately higher revenue per trip ($2,800 average) compared to leisure ($980 average).",
  },
  {
    title: "GDP Contribution vs Tourism Revenue",
    description: "The relationship between tourism revenue and GDP contribution varies significantly by economy type. Island nations and small economies show the highest dependency, with Maldives (38%), Seychelles (32%), and Caribbean nations exceeding 25% GDP contribution. Large economies maintain lower percentages but higher absolute values.",
  },
  {
    title: "Top Countries Revenue Share",
    description: "Market share analysis identifies shifting patterns in global tourism revenue distribution. While traditional destinations maintain strong positions, Asian markets are gaining share rapidly. China, Japan, and Southeast Asian nations collectively increased their share from 22% to 31% over the past five years.",
  },
]

export default function TourismEconomicPage() {
  return (
    <div className="min-h-screen">
      <Particles count={40} />
      <Navbar />

      <main className="page-transition pt-24">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Travel Analytics Dashboard
              </h1>
            </div>
            <p className="text-gray-400 max-w-3xl">
              Track tourism revenue, GDP contribution, average stay duration, and revenue 
              distribution by country to understand the economic impact of global tourism.
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
                title="Tourism Economic Dashboard"
                width="100%"
                height="650"
                src="https://app.powerbi.com/view?r=eyJrIjoiYWNhOTNiYmYtMzU3My00ZjI0LTg4MjYtNjViN2NmNWMxMzVhIiwidCI6ImFiMTUzYjlmLTJjNzUtNDhiZC05NWMzLTg0ZmVkY2MyYjQ5MSJ9&pageName=b24f70e81105b5711355"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Chart Insights */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Chart Analysis</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chartInsights.map((insight) => (
                <div key={insight.title} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <PieChart className="h-5 w-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>

            {/* Economic Analysis */}
            <div className="mt-8 glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Economic Impact Analysis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-white mb-2">319M</p>
                  <p className="text-gray-400">Jobs Supported</p>
                  <p className="text-sm text-green-400 mt-2">1 in 10 jobs globally</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-white mb-2">$9.6T</p>
                  <p className="text-gray-400">Total Contribution to GDP</p>
                  <p className="text-sm text-green-400 mt-2">10.4% of global GDP</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-white mb-2">1.5B</p>
                  <p className="text-gray-400">International Arrivals</p>
                  <p className="text-sm text-green-400 mt-2">+12% vs 2019</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Tourism serves as a critical economic driver across all regions, supporting both direct 
                employment in hotels, restaurants, and attractions, as well as indirect employment in 
                supply chains and supporting services. The multiplier effect of tourism spending averages 
                2.5x in developed economies and 1.8x in emerging markets, meaning each dollar spent by 
                tourists generates additional economic activity throughout the local economy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
