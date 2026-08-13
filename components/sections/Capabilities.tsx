"use client"

import { capabilities } from "@/data/capabilities"
import * as Icons from "lucide-react"

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-eyebrow">
            WHAT I BUILD
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Engineering intelligent systems for real-world applications.
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = (Icons[cap.icon as keyof typeof Icons] as React.ElementType) || Icons.Code;

            return (
              <div 
                key={index} 
                className="group premium-card p-8 flex flex-col h-full cursor-default bg-secondary border-border/50 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(180,71,90,0.5)]"
                tabIndex={0}
              >
                {/* Icon Container */}
                <div className="h-14 w-14 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-[360deg] group-hover:shadow-[0_0_15px_var(--color-primary)]">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-white">
                  {cap.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow transition-colors duration-300 group-hover:text-white/80">
                  {cap.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cap.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-2.5 py-1 bg-background/50 border border-border/50 text-muted-foreground text-xs font-medium rounded-md transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
