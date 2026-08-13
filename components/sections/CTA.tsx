import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-border">
      {/* Dark reddish backdrop */}
      <div className="absolute inset-0 bg-secondary/80" />
      
      {/* Background glow and lines */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(180,71,90,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,71,90,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 -z-10" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
          HAVE AN AI PROJECT IN MIND?
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Looking to build an AI-powered application, RAG system, intelligent workflow or agentic AI solution?
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="premium" size="lg" className="px-8 rounded-full gap-2 bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_var(--color-primary)] border border-primary/50 transition-all duration-300">
            Start a Project <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-full border-border hover:bg-background/50 hover:text-white transition-all duration-300">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  )
}
