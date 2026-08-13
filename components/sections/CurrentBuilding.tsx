import { Activity } from "lucide-react"

export function CurrentBuilding() {
  return (
    <section className="py-12 border-y border-border/50 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex h-12 w-12 rounded-full bg-primary/10 border border-primary/20 items-center justify-center text-primary">
              <Activity size={24} />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-1">Currently Building</h2>
              <h3 className="text-xl font-bold text-foreground">Advanced AI systems across RAG, Agentic AI and LLM engineering.</h3>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/70 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Active Development</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
