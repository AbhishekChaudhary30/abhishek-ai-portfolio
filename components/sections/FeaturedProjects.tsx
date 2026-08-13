import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/ProjectCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-eyebrow">FEATURED PROJECTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Selected AI systems and engineering projects.
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors shrink-0"
          >
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
