import { experiences } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

export function Experience() {
  return (
    <section id="training" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="flex items-center gap-4 mb-16">
          <BookOpen className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Training & Learning</h2>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-mono text-primary/80">
                  {exp.startDate} {exp.endDate ? `— ${exp.endDate}` : ""}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-foreground mb-4">{exp.company}</h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              {exp.achievements.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-background text-muted-foreground border-border">
                    {tech}
                  </Badge>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
