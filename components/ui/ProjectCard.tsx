import Link from "next/link"
import Image from "next/image"
import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Github } from "@/components/ui/icons"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  
  // Status color mapping
  const statusColors = {
    "Live": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    "In Development": "bg-amber-500/10 text-amber-600 border-amber-500/20",
    "Research": "bg-blue-500/10 text-blue-600 border-blue-500/20",
    "Coming Soon": "bg-slate-500/10 text-slate-600 border-slate-500/20",
  }

  return (
    <div className="group premium-card flex flex-col h-full relative overflow-hidden bg-secondary border-border/50 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-lg">
      
      {/* Image Container with Zoom & Overlay */}
      <div className="relative aspect-video overflow-hidden bg-muted/50">
        
        {project.image && (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        
        {/* Status Badge - Always visible */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className={`${statusColors[project.status]} shadow-sm backdrop-blur-md`}>
            {project.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
            {project.status}
          </Badge>
        </div>

        {/* Hover Overlay with CTAs */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6 z-20">
          <Button asChild variant="premium" className="w-full sm:w-auto translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
            <Link href={`/projects/${project.slug}`}>
              View Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            {project.liveUrl && (
              <Button asChild variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-3.5 w-3.5" /> Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-3.5 w-3.5" /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
          {project.category}
        </span>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="px-2 py-1 bg-background/50 border border-border/50 text-muted-foreground text-[11px] font-medium rounded-md transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary-foreground">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-background/50 border border-border/50 text-muted-foreground text-[11px] font-medium rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Mobile-only fallback CTA */}
      <div className="p-6 pt-0 mt-auto md:hidden">
        <Button asChild variant="outline" className="w-full text-primary border-primary/30 hover:bg-primary/5">
          <Link href={`/projects/${project.slug}`}>
            View Case Study
          </Link>
        </Button>
      </div>

    </div>
  )
}
