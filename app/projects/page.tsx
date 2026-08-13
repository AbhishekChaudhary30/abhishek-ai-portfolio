"use client"

import { useState, useMemo } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const ALL_FILTERS = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "LLM",
  "RAG",
  "Agentic AI",
  "Multimodal",
  "MLOps",
  "LLMOps",
  "AI Systems"
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // 1. Check Filter
      let matchesFilter = true
      if (activeFilter !== "All") {
        const filterLower = activeFilter.toLowerCase()
        // Check if tags or category or technologies include the filter
        matchesFilter = 
          project.category.toLowerCase().includes(filterLower) ||
          project.tags.some(tag => tag.toLowerCase().includes(filterLower)) ||
          project.technologies.some(tech => tech.toLowerCase().includes(filterLower)) ||
          (activeFilter === "Machine Learning" && project.tags.some(t => t.toLowerCase() === "machine learning"))
      }

      // 2. Check Search Query
      let matchesSearch = true
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase()
        matchesSearch = 
          project.title.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tags.some(tag => tag.toLowerCase().includes(query)) ||
          project.technologies.some(tech => tech.toLowerCase().includes(query))
      }

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow">
            Project Showcase
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Intelligent Systems & Applications
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A comprehensive index of my work across machine learning, large language models, agentic workflows, and production deployments.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Filters */}
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            <div className="flex flex-nowrap lg:flex-wrap gap-2">
              {ALL_FILTERS.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeFilter === filter 
                      ? "bg-primary text-white shadow-sm" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search projects, tech, tags..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-card border-border rounded-full focus-visible:ring-primary/20"
            />
          </div>
        </div>

        {/* Results Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria.</p>
            <button 
              onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
