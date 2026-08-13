"use client"

// import Image from "next/image"
import { profile } from "@/data/profile"

export function About() {
  return (
    <section id="about" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Profile Image */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50">
              {/* Optional: Add an actual image to /public/images/profile.webp */}
              <div className="absolute inset-0 bg-secondary flex items-center justify-center transition-colors duration-500 group-hover:bg-secondary/90">
                <svg className="w-24 h-24 text-muted-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              {/* If using real image:
              <Image 
                src="/images/profile.webp" 
                alt={profile.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              */}
              
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,var(--color-border)_2px,transparent_2px)] bg-[size:12px_12px] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="section-eyebrow">
              ABOUT ME
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Engineering AI Systems for Scale
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                {profile.bio}
              </p>
              
              <div className="my-6 p-6 bg-secondary/50 border border-border rounded-xl">
                <h3 className="text-sm font-bold tracking-widest uppercase text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Training & Learning
                </h3>
                <p className="text-base text-muted-foreground/90 leading-relaxed font-normal">
                  Completed two years of intensive software development and technology training at <strong className="text-foreground">Madrid Software, Saket, New Delhi</strong>. Focused on practical development, programming fundamentals, and project-based learning.
                </p>
              </div>

              <p>
                Through this project-driven development, I have specialized in bridging the gap between theoretical machine learning and practical application. My focus is on designing, evaluating, and deploying robust AI systems—from Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to autonomous agentic workflows.
              </p>
            </div>
            
            {/* AI Engineering Focus Strip */}
            <div className="pt-6 border-t border-border mt-8">
              <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-6">AI Engineering Focus</h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-5.253 5.253 4 4 0 0 0 5.125 5.125 4 4 0 0 0 5.253 5.253 4 4 0 0 0 5.125-5.125 4 4 0 0 0 5.253-5.253 4 4 0 0 0-5.125-5.125A3 3 0 0 0 12 5Z"/></svg>
                  </div>
                  <span className="text-xs font-medium text-foreground">LLM<br/>Engineering</span>
                </div>
                
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                  </div>
                  <span className="text-xs font-medium text-foreground">RAG<br/>Systems</span>
                </div>
                
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 11V7h4"/><path d="M11 15h4v4"/></svg>
                  </div>
                  <span className="text-xs font-medium text-foreground">Agentic<br/>AI</span>
                </div>
                
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <span className="text-xs font-medium text-foreground">AI<br/>Automation</span>
                </div>
              </div>
            </div>

            
          </div>
          
        </div>
      </div>
    </section>
  )
}
