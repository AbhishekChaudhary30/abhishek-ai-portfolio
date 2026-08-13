"use client"

import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, TerminalSquare } from "lucide-react"

export default function AILabPage() {
  
  const agenticWorkflows = projects.filter(p => p.category === "Agentic AI")
  const aiApplications = projects.filter(p => p.category === "Live AI Applications")
  const aiEngineering = projects.filter(p => p.category === "Advanced AI Engineering")

  const renderCategory = (title: string, categoryProjects: typeof projects) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border flex items-center gap-3">
        <TerminalSquare className="text-primary" /> {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProjects.map(project => (
          <div key={project.id} className="bg-card border border-border p-6 rounded-xl flex flex-col h-full hover:shadow-md transition-shadow">
            
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-foreground pr-4">{project.title}</h4>
              <Badge variant="outline" className={`
                shrink-0
                ${project.status === "Live" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : ""}
                ${project.status === "In Development" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : ""}
                ${project.status === "Research" ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : ""}
                ${project.status === "Coming Soon" ? "bg-slate-500/10 text-slate-600 border-slate-500/20" : ""}
              `}>
                {project.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
                {project.status}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
               {project.technologies.slice(0,3).map(tech => (
                 <span key={tech} className="text-[10px] uppercase font-bold text-muted-foreground bg-muted px-2 py-1 rounded">
                   {tech}
                 </span>
               ))}
            </div>

            <div className="mt-auto">
              {project.liveUrl ? (
                <Button asChild variant="premium" className="w-full justify-between group">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Launch Demo
                    <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
              ) : (
                <Button variant="outline" className="w-full cursor-not-allowed opacity-50" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-muted/20 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <span className="section-eyebrow justify-center">
            LIVE AI LAB
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Explore deployed AI applications and intelligent workflows.
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A secure sandbox environment to test, evaluate, and interact with the AI systems I&apos;ve built. Real-time telemetry, model outputs, and agent traces are available for live projects.
          </p>
        </div>

        {/* Categories */}
        {renderCategory("Agentic Workflows", agenticWorkflows)}
        {renderCategory("AI Applications", aiApplications)}
        {renderCategory("AI Engineering", aiEngineering)}

      </div>
    </div>
  )
}
