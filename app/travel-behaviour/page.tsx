import { Plane, TrendingUp, CreditCard, FileCheck, BarChart3 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { KPICard } from "@/components/kpi-card"
import { Chatbot } from "@/components/chatbot"

const kpis = [
  { title: "Inflation Rate", value: "3.2%", icon: TrendingUp, trend: "-0.5% from last year", trendUp: false },
  { title: "Total Airport Traffic", value: "4.5B", icon: Plane, trend: "+12.3% YoY", trendUp: true },
  { title: "Total Visa Approvals", value: "89M", icon: FileCheck, trend: "+8.7% YoY", trendUp: true },
  { title: "Total Tourism Investment", value: "$2.1T", icon: CreditCard, trend: "+15.2% YoY", trendUp: true },
]

const insights = [
  {
    title: "International Travel Share by Country",
    description: "This chart visualizes the distribution of international travelers across different countries. The data reveals that European nations like France, Spain, and Italy dominate international arrivals, collectively accounting for over 30% of global tourism. The United States and China follow as major source and destination markets, highlighting the importance of long-haul travel corridors.",
  },
  {
    title: "Tourism Investment Growth Trends",
    description: "The investment trend analysis shows a consistent upward trajectory in tourism infrastructure spending, with a notable acceleration post-2020. Emerging markets in Southeast Asia and the Middle East are leading investment growth rates, averaging 18-22% annually. This investment focus on sustainability and digital transformation is reshaping the tourism landscape.",
  },
  {
    title: "Airport Traffic Distribution by Country",
    description: "Airport traffic data indicates that hub airports in the UAE, United States, and China handle the highest passenger volumes. Dubai International, Hartsfield-Jackson Atlanta, and Beijing Capital airports serve as critical nodes in the global aviation network, facilitating millions of tourism-related movements annually.",
  },
  {
    title: "Inflation vs Airport Traffic Relationship",
    description: "Our analysis reveals a complex relationship between inflation rates and airport traffic. While high inflation generally suppresses travel demand due to increased costs, certain destinations with strong value propositions maintain resilient traffic levels. Countries with inflation below 4% show 15-20% higher tourism growth compared to high-inflation economies.",
  },
]

export default function TravelBehaviourPage() {
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
                Travel Behaviour Dashboard
              </h1>
            </div>
            <p className="text-gray-400 max-w-3xl">
              Analyze travel patterns, airport traffic, visa approvals, and tourism investment trends 
              across multiple countries to understand global travel behavior dynamics.
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
                title="Travel Behaviour Dashboard"
                width="100%"
                height="650"
                src="https://app.powerbi.com/view?r=eyJrIjoiYWNhOTNiYmYtMzU3My00ZjI0LTg4MjYtNjViN2NmNWMxMzVhIiwidCI6ImFiMTUzYjlmLTJjNzUtNDhiZC05NWMzLTg0ZmVkY2MyYjQ5MSJ9&pageName=410f52545a0c868c816b"
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
              <BarChart3 className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Dashboard Insights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.map((insight) => (
                <div key={insight.title} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{insight.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Analysis */}
            <div className="mt-8 glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Travel Demand Evolution</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Travel demand has undergone significant transformation in recent years. The data reveals 
                shifting preferences toward sustainable travel options, with eco-conscious travelers now 
                representing 42% of the market. Digital nomadism has emerged as a major trend, with 
                extended-stay tourism increasing by 35% since 2021.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Regional analysis shows that Southeast Asia and the Middle East are experiencing the 
                fastest growth in tourism infrastructure investment, positioning these regions as 
                future tourism hotspots. The correlation between infrastructure development and 
                tourist arrivals remains strong, with improved connectivity driving 18% higher 
                visitor numbers in upgraded destinations.
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
