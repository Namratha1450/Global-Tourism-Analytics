"use client"

import { useState, useMemo } from "react"
import { Search, TrendingUp, TrendingDown, BarChart3 } from "lucide-react"

const countries = [
  "United States", "France", "Spain", "Italy", "China", "Germany", "United Kingdom",
  "Thailand", "Japan", "Australia", "Mexico", "India", "Brazil", "Canada", "UAE"
]

const years = ["2024", "2023", "2022", "2021", "2020", "2019"]

const metrics = [
  "Tourism Revenue",
  "GDP Contribution",
  "Airport Traffic",
  "Visa Approvals",
  "Tourism Investment",
  "Tourism Satisfaction",
  "Sustainability Score",
  "Infrastructure Development"
]

// Simulated data generator
function generateData(country: string, year: string, metric: string): { value: string; trend: number; insight: string } {
  const baseValues: Record<string, Record<string, number>> = {
    "Tourism Revenue": { "United States": 256, "France": 73, "Spain": 84, "Italy": 56, "China": 45, "Germany": 52, "United Kingdom": 48, "Thailand": 63, "Japan": 41, "Australia": 38, "Mexico": 29, "India": 32, "Brazil": 25, "Canada": 23, "UAE": 34 },
    "GDP Contribution": { "United States": 8.2, "France": 9.5, "Spain": 14.3, "Italy": 13.2, "China": 11.1, "Germany": 8.8, "United Kingdom": 9.2, "Thailand": 21.6, "Japan": 7.8, "Australia": 10.8, "Mexico": 17.2, "India": 9.4, "Brazil": 8.1, "Canada": 6.9, "UAE": 11.8 },
    "Airport Traffic": { "United States": 890, "France": 180, "Spain": 275, "Italy": 195, "China": 680, "Germany": 245, "United Kingdom": 285, "Thailand": 145, "Japan": 198, "Australia": 165, "Mexico": 112, "India": 295, "Brazil": 118, "Canada": 158, "UAE": 92 },
    "Visa Approvals": { "United States": 12.5, "France": 4.2, "Spain": 3.8, "Italy": 3.1, "China": 6.8, "Germany": 4.5, "United Kingdom": 3.9, "Thailand": 8.2, "Japan": 5.4, "Australia": 7.8, "Mexico": 2.1, "India": 4.5, "Brazil": 2.8, "Canada": 3.2, "UAE": 15.5 },
    "Tourism Investment": { "United States": 85, "France": 32, "Spain": 28, "Italy": 24, "China": 125, "Germany": 38, "United Kingdom": 35, "Thailand": 22, "Japan": 42, "Australia": 28, "Mexico": 18, "India": 45, "Brazil": 21, "Canada": 19, "UAE": 65 },
    "Tourism Satisfaction": { "United States": 8.2, "France": 8.6, "Spain": 8.9, "Italy": 8.8, "China": 7.8, "Germany": 8.4, "United Kingdom": 8.3, "Thailand": 8.7, "Japan": 9.1, "Australia": 8.9, "Mexico": 8.1, "India": 7.9, "Brazil": 8.0, "Canada": 8.5, "UAE": 8.8 },
    "Sustainability Score": { "United States": 6.8, "France": 7.9, "Spain": 7.5, "Italy": 7.2, "China": 6.2, "Germany": 8.2, "United Kingdom": 7.8, "Thailand": 7.1, "Japan": 8.0, "Australia": 7.6, "Mexico": 6.5, "India": 6.1, "Brazil": 7.4, "Canada": 8.1, "UAE": 7.0 },
    "Infrastructure Development": { "United States": 8.8, "France": 8.5, "Spain": 8.2, "Italy": 7.8, "China": 8.9, "Germany": 9.0, "United Kingdom": 8.6, "Thailand": 7.2, "Japan": 9.2, "Australia": 8.4, "Mexico": 6.8, "India": 6.5, "Brazil": 6.2, "Canada": 8.3, "UAE": 9.1 }
  }

  const units: Record<string, string> = {
    "Tourism Revenue": "B USD",
    "GDP Contribution": "%",
    "Airport Traffic": "M passengers",
    "Visa Approvals": "M",
    "Tourism Investment": "B USD",
    "Tourism Satisfaction": "/10",
    "Sustainability Score": "/10",
    "Infrastructure Development": "/10"
  }

  const yearMultiplier = 1 + (2024 - parseInt(year)) * 0.05 * (Math.random() > 0.5 ? -1 : 1)
  const baseValue = baseValues[metric]?.[country] || Math.random() * 50 + 10
  const value = (baseValue * yearMultiplier).toFixed(1)
  const trend = (Math.random() * 20 - 5).toFixed(1)

  const insights: Record<string, string> = {
    "Tourism Revenue": `${country}'s tourism revenue of $${value}${units[metric]} reflects strong performance in the hospitality sector. Key revenue drivers include international arrivals, average spending per tourist, and the growth of luxury tourism segments.`,
    "GDP Contribution": `Tourism contributes ${value}${units[metric]} to ${country}'s GDP, highlighting the sector's economic importance. This includes direct contributions from hotels, restaurants, and attractions, plus indirect effects on supply chains.`,
    "Airport Traffic": `${country} processed ${value}${units[metric]} in ${year}, indicating robust air connectivity. Hub airports serve as critical nodes for both business and leisure travel, driving tourism growth.`,
    "Visa Approvals": `${country} approved ${value}${units[metric]} visas in ${year}. Visa policies significantly impact tourism flow, with easier access correlating with higher visitor numbers.`,
    "Tourism Investment": `Investment of $${value}${units[metric]} in ${country}'s tourism infrastructure supports long-term growth. Focus areas include digital transformation, sustainable facilities, and accessibility improvements.`,
    "Tourism Satisfaction": `${country} achieved a satisfaction score of ${value}${units[metric]}, reflecting visitor experience quality. High scores correlate with repeat visits and positive word-of-mouth promotion.`,
    "Sustainability Score": `${country}'s sustainability score of ${value}${units[metric]} measures environmental responsibility. Leading practices include renewable energy adoption, waste reduction, and conservation programs.`,
    "Infrastructure Development": `${country}'s infrastructure index of ${value}${units[metric]} evaluates transportation, digital connectivity, and tourism facilities. Higher scores attract more visitors and investment.`
  }

  return {
    value: `${value}${units[metric]}`,
    trend: parseFloat(trend),
    insight: insights[metric] || `Data for ${metric} in ${country} for ${year}.`
  }
}

export function DataExplorer() {
  const [country, setCountry] = useState("United States")
  const [year, setYear] = useState("2024")
  const [metric, setMetric] = useState("Tourism Revenue")

  const data = useMemo(() => generateData(country, year, metric), [country, year, metric])

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Search className="h-6 w-6 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Tourism Data Explorer</h3>
      </div>

      <p className="text-white/70 mb-6">
        Select a country, year, and metric to explore detailed tourism data and insights.
      </p>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            {countries.map((c) => (
              <option key={c} value={c} className="bg-gray-900">{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-gray-900">{y}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Metric</label>
          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            {metrics.map((m) => (
              <option key={m} value={m} className="bg-gray-900">{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Value Card */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-white/70 text-sm mb-2">{metric}</p>
          <div className="flex items-end gap-3">
            <p className="text-4xl font-bold text-white">{data.value}</p>
            <div className={`flex items-center gap-1 pb-1 ${data.trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {data.trend >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm font-medium">{data.trend >= 0 ? '+' : ''}{data.trend}%</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">{country} | {year}</p>
        </div>

        {/* Trend Chart Placeholder */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            <p className="text-gray-300 font-medium">Trend Analysis</p>
          </div>
          <div className="h-24 flex items-end justify-between gap-1">
            {[65, 72, 58, 85, 78, 92].map((height, idx) => (
              <div
                key={idx}
                className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>2019</span>
            <span>2024</span>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h4 className="text-white font-semibold mb-2">Insight</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{data.insight}</p>
      </div>
    </div>
  )
}
