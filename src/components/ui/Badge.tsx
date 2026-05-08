import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glass";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
        {
          "bg-brand-500 text-white shadow hover:bg-brand-600": variant === "default",
          "bg-slate-100 text-slate-900 hover:bg-slate-200": variant === "secondary",
          "text-slate-950 border border-slate-200": variant === "outline",
          "bg-brand-500/10 text-brand-600 border border-brand-500/20": variant === "glass",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
