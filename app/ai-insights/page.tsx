"use client"

import { useState } from "react"
import { Sparkles, TrendingUp, Leaf, Building, Plane, X, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { Chatbot } from "@/components/chatbot"

const insights = [
  {
    id: "revenue",
    title: "Tourism Revenue Growth Trends",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    summary: "Global tourism revenue is projected to grow 8.5% annually through 2028",
    details: {
      overview: "Our AI analysis of tourism revenue data reveals strong growth patterns across key markets, with emerging destinations showing exceptional performance.",
      keyFindings: [
        "Global tourism revenue reached $1.7 trillion in 2024, surpassing pre-pandemic levels",
        "Asia-Pacific region shows the fastest recovery with 15.2% year-over-year growth",
        "Digital tourism services (online bookings, virtual tours) contribute 23% to total revenue",
        "Luxury travel segment is growing 2.3x faster than budget travel"
      ],
      predictions: [
        "Revenue is expected to reach $2.3 trillion by 2028",
        "Southeast Asian markets will capture 18% more global market share by 2026",
        "Sustainable tourism premiums will add $145 billion to industry revenue annually"
      ],
      recommendations: [
        "Invest in digital infrastructure to capture growing online booking market",
        "Develop luxury eco-tourism products for high-value travelers",
        "Focus on extended-stay offerings to increase revenue per visitor"
      ]
    }
  },
  {
    id: "sustainability",
    title: "Impact of Sustainability on Tourism Satisfaction",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    summary: "Sustainable destinations see 23% higher satisfaction scores",
    details: {
      overview: "AI-powered analysis confirms that sustainability practices significantly influence tourist satisfaction and destination choice.",
      keyFindings: [
        "78% correlation between sustainability scores and visitor satisfaction",
        "Eco-certified accommodations receive 4.2 stars average vs 3.6 for non-certified",
        "Travelers willing to pay 15% premium for verified sustainable experiences",
        "Carbon-neutral destinations see 28% higher repeat visitation rates"
      ],
      predictions: [
        "By 2027, 65% of travelers will consider sustainability as primary factor",
        "Destinations without sustainability certifications may see 20% decline in arrivals",
        "Green tourism market will exceed $500 billion annually by 2030"
      ],
      recommendations: [
        "Implement comprehensive sustainability certification programs",
        "Develop carbon offset options for tourism activities",
        "Create transparent sustainability reporting for visitors"
      ]
    }
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development and Tourism Growth",
    icon: Building,
    gradient: "from-purple-500 to-pink-500",
    summary: "Every $1B infrastructure investment yields 8% tourism growth",
    details: {
      overview: "Machine learning models reveal the critical relationship between infrastructure investment and tourism sector performance.",
      keyFindings: [
        "Airport capacity expansion correlates with 12% increase in international arrivals",
        "Digital infrastructure (5G, WiFi) investment shows 18% ROI in tourism revenue",
        "Road network improvements reduce travel friction by 24%",
        "Healthcare facility proximity increases destination confidence by 31%"
      ],
      predictions: [
        "Smart city initiatives will drive 25% tourism growth in urban destinations",
        "High-speed rail connections will redistribute 15% of air travel demand",
        "Digital payment infrastructure will increase tourist spending by 20%"
      ],
      recommendations: [
        "Prioritize airport modernization for capacity and experience",
        "Invest in last-mile connectivity for tourist attractions",
        "Develop integrated transportation apps for seamless travel"
      ]
    }
  },
  {
    id: "traffic",
    title: "Airport Traffic and Travel Demand",
    icon: Plane,
    gradient: "from-orange-500 to-red-500",
    summary: "Hub airports driving 40% of global tourism flow",
    details: {
      overview: "Deep analysis of airport traffic patterns reveals key insights about travel demand and connectivity importance.",
      keyFindings: [
        "Top 50 airports handle 62% of international tourist traffic",
        "Direct flight availability increases destination visits by 35%",
        "Low-cost carrier expansion has democratized travel to 45 new markets",
        "Business class capacity correlates with high-value tourism revenue"
      ],
      predictions: [
        "Secondary airports will capture 20% more traffic by 2028",
        "Sustainable aviation fuel adoption will reach 15% by 2030",
        "Electric aircraft will serve 8% of short-haul routes by 2032"
      ],
      recommendations: [
        "Develop strategic airline partnerships for route expansion",
        "Invest in airport experience to improve destination perception",
        "Create seamless ground transportation connections"
      ]
    }
  }
]

export default function AIInsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState<typeof insights[0] | null>(null)

  return (
    <div className="min-h-screen">
      <Particles count={40} />
      <Navbar />

      <main className="page-transition pt-24">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                AI-Powered Insights
              </h1>
            </div>
            <p className="text-white/80 max-w-3xl">
              Leverage artificial intelligence to uncover hidden patterns, predict trends, 
              and gain actionable insights from our comprehensive tourism datasets.
            </p>
          </div>
        </section>

        {/* Insight Cards */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.map((insight) => (
                <div
                  key={insight.id}
                  className="glass-card rounded-2xl p-6 card-3d"
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${insight.gradient} flex items-center justify-center flex-shrink-0`}>
                      <insight.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{insight.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{insight.summary}</p>
                      <button
                        onClick={() => setSelectedInsight(insight)}
                        className="neon-button px-4 py-2 rounded-lg text-white text-sm font-medium inline-flex items-center gap-2"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Methodology */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Our AI Methodology</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Collection</h3>
                  <p className="text-white/70 text-sm">
                    Aggregating data from 50+ countries, including government statistics, 
                    industry reports, and real-time travel data sources.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">ML Analysis</h3>
                  <p className="text-white/70 text-sm">
                    Advanced machine learning models identify patterns, correlations, 
                    and anomalies in tourism data across multiple dimensions.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Insight Generation</h3>
                  <p className="text-white/70 text-sm">
                    AI synthesizes findings into actionable insights with predictions 
                    and recommendations for stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />

      {/* Detail Modal */}
      {selectedInsight && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedInsight(null)}
          />
          <div className="profile-panel relative rounded-2xl p-8 max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedInsight(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${selectedInsight.gradient} flex items-center justify-center`}>
                <selectedInsight.icon className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">{selectedInsight.title}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                <p className="text-gray-300">{selectedInsight.details.overview}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Findings</h3>
                <ul className="space-y-2">
                  {selectedInsight.details.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Predictions</h3>
                <ul className="space-y-2">
                  {selectedInsight.details.predictions.map((prediction, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      {prediction}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                <ul className="space-y-2">
                  {selectedInsight.details.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
