import { TrendingUp, DollarSign, FileCheck, Plane, Building, Leaf } from "lucide-react"

export function FuturePrediction() {
  const predictions = [
    {
      country: "Vietnam",
      growth: "+18.5%",
      factors: ["Infrastructure investment", "Visa liberalization", "Growing middle class"],
      icon: TrendingUp,
    },
    {
      country: "Saudi Arabia",
      growth: "+24.2%",
      factors: ["Vision 2030 initiative", "New entertainment sector", "Heritage tourism"],
      icon: Building,
    },
    {
      country: "Portugal",
      growth: "+15.8%",
      factors: ["Digital nomad visas", "Sustainable tourism", "Cultural attractions"],
      icon: Leaf,
    },
  ]

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-6 w-6 text-green-400" />
        <h3 className="text-2xl font-bold text-white">Future Tourism Prediction</h3>
      </div>

      <p className="text-white/70 mb-6">
        Based on current trends and AI analysis, these destinations are projected to see 
        significant tourism growth driven by infrastructure improvements, visa policies, 
        and growing tourism investment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {predictions.map((pred) => (
          <div key={pred.country} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">{pred.country}</h4>
              <span className="text-green-400 font-bold">{pred.growth}</span>
            </div>
            <p className="text-white/70 text-sm mb-3">Growth Factors:</p>
            <ul className="space-y-2">
              {pred.factors.map((factor) => (
                <li key={factor} className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
        <h4 className="text-white font-semibold mb-3">Key Growth Indicators</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Infrastructure Score", value: "+12%" },
            { label: "Visa Accessibility", value: "+28%" },
            { label: "Tourism Investment", value: "+35%" },
            { label: "Air Connectivity", value: "+22%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-green-400">{stat.value}</p>
              <p className="text-white/70 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ExpenseAnalysis() {
  const expenses = [
    { category: "Accommodation", percentage: 35, amount: "$436", icon: Building },
    { category: "Transportation", percentage: 25, amount: "$311", icon: Plane },
    { category: "Food & Dining", percentage: 20, amount: "$249", icon: DollarSign },
    { category: "Activities", percentage: 12, amount: "$149", icon: TrendingUp },
    { category: "Shopping", percentage: 8, amount: "$100", icon: DollarSign },
  ]

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="h-6 w-6 text-purple-400" />
        <h3 className="text-2xl font-bold text-white">Tourist Expense Analysis</h3>
      </div>

      <p className="text-white/70 mb-6">
        Understanding how tourists allocate their spending helps destinations optimize 
        services and improve visitor experience. Average tourist spending: $1,245 per trip.
      </p>

      <div className="space-y-4 mb-8">
        {expenses.map((expense) => (
          <div key={expense.category} className="flex items-center gap-4">
            <div className="w-32 flex items-center gap-2">
              <expense.icon className="h-4 w-4 text-white/60" />
              <span className="text-gray-300 text-sm">{expense.category}</span>
            </div>
            <div className="flex-1">
              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${expense.percentage}%` }}
                />
              </div>
            </div>
            <div className="w-20 text-right">
              <span className="text-white font-medium">{expense.amount}</span>
              <span className="text-gray-500 text-sm ml-1">({expense.percentage}%)</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-white">$1,245</p>
          <p className="text-white/70 text-sm">Average Trip Spending</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-white">7.2 Days</p>
          <p className="text-white/70 text-sm">Average Stay Duration</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-white">$173/day</p>
          <p className="text-white/70 text-sm">Daily Spending Average</p>
        </div>
      </div>
    </div>
  )
}

export function VisaPolicy() {
  const visaCategories = [
    {
      type: "Visa-Free Access",
      countries: 45,
      impact: "+42% arrivals",
      description: "Countries offering visa-free access see significantly higher tourist arrivals, particularly for short-stay visits.",
    },
    {
      type: "Visa on Arrival",
      countries: 38,
      impact: "+28% arrivals",
      description: "Streamlined visa-on-arrival processes reduce friction and encourage spontaneous travel decisions.",
    },
    {
      type: "E-Visa Programs",
      countries: 52,
      impact: "+35% arrivals",
      description: "Digital visa applications simplify the process while maintaining security requirements.",
    },
  ]

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileCheck className="h-6 w-6 text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">Visa Policy and Restrictions</h3>
      </div>

      <p className="text-gray-400 mb-6">
        Visa policies significantly influence international tourism flow. Countries with 
        more accessible visa policies consistently see higher tourist arrivals and spending.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {visaCategories.map((category) => (
          <div key={category.type} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">{category.type}</h4>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-2xl font-bold text-cyan-400">{category.countries}</span>
              <span className="text-gray-400 text-sm">countries</span>
            </div>
            <p className="text-green-400 text-sm font-medium mb-3">{category.impact}</p>
            <p className="text-gray-400 text-sm">{category.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
        <h4 className="text-white font-semibold mb-3">Impact of Visa Liberalization</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Tourism Flow:</strong> Countries that have relaxed visa requirements 
              see an average 30-40% increase in tourist arrivals within the first two years of policy implementation.
            </p>
          </div>
          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Economic Impact:</strong> Visa liberalization can add 2-3% to tourism 
              GDP contribution, with multiplier effects across hospitality, retail, and transportation sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
