"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Layers, Cpu, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[104px] h-9 bg-muted rounded-full animate-pulse" />
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-secondary border border-border rounded-full shadow-sm">
      <button
        onClick={() => setTheme("linear")}
        className={cn(
          "p-1.5 rounded-full transition-all duration-300 flex items-center justify-center",
          theme === "linear" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Linear Aesthetic"
        title="Linear Aesthetic"
      >
        <Layers size={16} />
      </button>
      
      <button
        onClick={() => setTheme("cyber")}
        className={cn(
          "p-1.5 rounded-full transition-all duration-300 flex items-center justify-center",
          theme === "cyber" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Cyber-Data"
        title="Cyber-Data"
      >
        <Cpu size={16} />
      </button>

      <button
        onClick={() => setTheme("monochrome")}
        className={cn(
          "p-1.5 rounded-full transition-all duration-300 flex items-center justify-center",
          theme === "monochrome" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Monochrome Minimalist"
        title="Monochrome Minimalist"
      >
        <Circle size={16} />
      </button>
    </div>
  )
}
