"use client"

import { techStack } from "@/data/techstack"

export function TechStack() {
  return (
    <section id="engineering" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-2xl mb-16">
          <span className="section-eyebrow">
            Engineering Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Tools & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, idx) => (
            <div 
              key={idx}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border transition-colors group-hover:border-primary/30">
                {stack.category}
              </h3>
              
              <ul className="space-y-3">
                {stack.technologies.map(tech => (
                  <li key={tech} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="text-muted-foreground font-medium text-sm group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
