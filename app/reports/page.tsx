"use client"

import { useState } from "react"
import { FileText, Download, Eye, TrendingUp, Leaf, Plane, X, Calendar, FileDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { Chatbot } from "@/components/chatbot"

const reports = [
  {
    id: "revenue",
    title: "Tourism Revenue Analysis Report",
    description: "Comprehensive analysis of global tourism revenue trends, country comparisons, and growth projections.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    date: "March 2024",
    pages: 45,
    content: {
      sections: [
        {
          title: "Executive Summary",
          content: "Global tourism revenue reached $1.7 trillion in 2024, marking a 12% increase from pre-pandemic levels. This report analyzes revenue distribution across 50+ countries, identifying key growth drivers and emerging market opportunities."
        },
        {
          title: "Regional Analysis",
          content: "Europe continues to lead with 38% of global tourism revenue, followed by Asia-Pacific (28%), Americas (24%), Middle East (6%), and Africa (4%). Notable growth in Southeast Asia with Vietnam and Thailand showing 18% YoY increases."
        },
        {
          title: "Revenue Drivers",
          content: "Key factors driving revenue growth include: increased average length of stay (7.2 days, up from 6.8), higher spending per tourist ($1,245 average), growth in luxury segment (23% increase), and expanded air connectivity."
        },
        {
          title: "Future Projections",
          content: "Tourism revenue is projected to reach $2.3 trillion by 2028, with compound annual growth rate of 7.8%. Emerging markets will capture increasing share, while traditional destinations focus on value optimization."
        }
      ]
    }
  },
  {
    id: "sustainability",
    title: "Tourism Sustainability Report",
    description: "In-depth examination of environmental impact, sustainability metrics, and eco-tourism trends worldwide.",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    date: "February 2024",
    pages: 38,
    content: {
      sections: [
        {
          title: "Executive Summary",
          content: "The tourism industry accounts for 8% of global carbon emissions. This report examines sustainability initiatives across destinations, measuring progress toward carbon neutrality and evaluating best practices in eco-tourism."
        },
        {
          title: "Environmental Metrics",
          content: "Average sustainability score across monitored destinations: 7.2/10. Leading performers include Costa Rica (9.1), Norway (8.9), and New Zealand (8.7). Carbon intensity per tourist varies from 0.12 to 0.45 tons CO2 equivalent."
        },
        {
          title: "Eco-Tourism Trends",
          content: "Eco-certified accommodations grew by 34% in 2023. 67% of travelers consider sustainability in booking decisions. Nature-based tourism generates $600 billion annually while supporting conservation efforts."
        },
        {
          title: "Recommendations",
          content: "Key recommendations include: mandatory sustainability certifications, carbon offset integration, renewable energy adoption targets, and circular economy practices in hospitality operations."
        }
      ]
    }
  },
  {
    id: "behavior",
    title: "Travel Behaviour Analysis Report",
    description: "Detailed insights into traveler preferences, booking patterns, and emerging travel trends.",
    icon: Plane,
    gradient: "from-purple-500 to-pink-500",
    date: "January 2024",
    pages: 52,
    content: {
      sections: [
        {
          title: "Executive Summary",
          content: "Travel behavior has undergone significant transformation. This report analyzes booking patterns, destination preferences, and emerging trends based on data from 1.5 billion tourist arrivals across 50+ countries."
        },
        {
          title: "Booking Patterns",
          content: "Online bookings represent 68% of total reservations. Mobile bookings grew to 45% share. Average booking lead time: 32 days for domestic, 58 days for international. Last-minute bookings (< 7 days) increased 23%."
        },
        {
          title: "Travel Preferences",
          content: "Experiential travel dominates with 54% preference. Wellness tourism grew 42%. Digital nomad stays (1+ month) increased 35%. Multi-generational travel represents 18% of bookings."
        },
        {
          title: "Emerging Trends",
          content: "Key trends include: sustainable travel prioritization, bleisure travel growth (business + leisure), AI-assisted trip planning adoption, and increased demand for off-the-beaten-path destinations."
        }
      ]
    }
  }
]

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<typeof reports[0] | null>(null)

  const handleDownload = (reportTitle: string) => {
    // Create a simple text file for download
    const content = `${reportTitle}\n\nThank you for downloading this report.\n\nFor the full report with detailed analytics, charts, and data tables, please contact our team.\n\nGlobal Tourism Analytics Platform\nnamrathachowdarygundapuneedi@gmail.com`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${reportTitle.replace(/\s+/g, '_')}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

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
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Analytics Reports
              </h1>
            </div>
            <p className="text-white/80 max-w-3xl">
              Access comprehensive tourism analytics reports with detailed insights, 
              data visualizations, and actionable recommendations.
            </p>
          </div>
        </section>

        {/* Report Cards */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="glass-card rounded-2xl p-6 card-3d flex flex-col"
                >
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${report.gradient} flex items-center justify-center mb-4`}>
                    <report.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{report.title}</h3>
                  <p className="text-white/80 text-sm mb-4 flex-1">{report.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {report.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {report.pages} pages
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedReport(report)}
                      className="w-full neon-button px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Features */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">What Our Reports Include</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, title: "Data Analysis", desc: "In-depth statistical analysis with visualizations" },
                  { icon: FileDown, title: "Export Options", desc: "Download in multiple formats for easy sharing" },
                  { icon: Calendar, title: "Regular Updates", desc: "Monthly and quarterly report updates" },
                  { icon: Eye, title: "Interactive Viewing", desc: "Browse reports with interactive navigation" },
                ].map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />

      {/* Report Viewer Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedReport(null)}
          />
          <div className="profile-panel relative rounded-2xl p-8 max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${selectedReport.gradient} flex items-center justify-center`}>
                <selectedReport.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedReport.title}</h2>
                <p className="text-gray-400 text-sm">{selectedReport.date} | {selectedReport.pages} pages</p>
              </div>
            </div>

            <div className="space-y-6">
              {selectedReport.content.sections.map((section, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedReport(null)}
                className="neon-button px-6 py-2 rounded-lg text-white font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
