import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: string
  trendUp?: boolean
  className?: string
}

export function KPICard({ title, value, icon: Icon, trend, trendUp, className }: KPICardProps) {
  return (
    <div className={cn("kpi-card p-6 card-3d", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend && (
            <p className={cn("text-sm mt-2", trendUp ? "text-green-400" : "text-red-400")}>
              {trendUp ? "+" : ""}{trend}
            </p>
          )}
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
      </div>
    </div>
  )
}
