import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react"
import { Github } from "@/components/ui/icons"

// Generate static params for static export
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      
      {/* Top Navigation */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <Badge variant="outline" className="text-[10px]">
                {project.status}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <Button asChild variant="premium" size="lg" className="rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source
                  </a>
                </Button>
              )}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Hero Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-sm bg-muted flex items-center justify-center">
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background" />
            )}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
              <span className="section-eyebrow">The Problem</span>
              <p className="text-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl shadow-sm">
              <span className="section-eyebrow text-primary">The Solution</span>
              <p className="text-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Visualization Placeholder */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">System Architecture</h3>
            <div className="w-full aspect-video bg-card border border-border rounded-xl shadow-sm flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
               <div className="z-10 text-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-xl border border-primary mx-auto mb-4 flex items-center justify-center">
                   <div className="w-8 h-8 bg-primary rounded-sm animate-pulse" />
                 </div>
                 <p className="text-muted-foreground text-sm font-medium">Interactive Architecture Diagram</p>
                 <p className="text-muted-foreground/60 text-xs mt-2">Will use SVG / React Flow in Phase 3</p>
               </div>
            </div>
          </div>

          {/* Workflow */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Workflow</h3>
            <div className="flex flex-wrap gap-3">
              {project.workflow.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium">
                    {step}
                  </div>
                  {idx < project.workflow.length - 1 && (
                    <ChevronRight className="mx-2 text-muted-foreground h-4 w-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Implementation & Engineering Evidence */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Implementation Details</h3>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-foreground leading-relaxed mb-8">{project.implementation}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Evaluation</h4>
                <p className="text-foreground text-sm leading-relaxed">{project.evaluation}</p>
              </div>
              <div className="bg-muted p-6 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Results & Impact</h4>
                <ul className="space-y-2">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-start text-sm text-foreground">
                      <span className="text-primary mr-2">•</span> {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 mt-24 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Explore Related Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {relatedProjects.map(rp => (
               <Link 
                key={rp.id} 
                href={`/projects/${rp.slug}`}
                className="group bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
               >
                 <span className="text-xs text-primary font-bold uppercase block mb-1">{rp.category}</span>
                 <h4 className="text-foreground font-bold group-hover:text-primary transition-colors">{rp.title}</h4>
               </Link>
             ))}
          </div>
        </section>
      )}

    </div>
  )
}
