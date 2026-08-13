"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { ArrowRight } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-muted/30 -skew-x-12 translate-x-32 z-0" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
              Abhishek Chaudhary
            </h1>
            
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
              AI/ML ENGINEER • LLM & AGENTIC AI
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 fill-mode-both">
              I design and build production-ready AI systems across LLM engineering, RAG, Agentic AI, and AI application development.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base group shadow-sm hover:shadow-md transition-all duration-300 border border-primary/50">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-border hover:bg-secondary text-foreground transition-all duration-300">
                <Link href="/ai-lab">
                  Explore AI Lab
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-border hover:bg-secondary text-foreground transition-all duration-300">
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
            
            <div className="mt-6 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-600 fill-mode-both">
              {profile.socials.find(s => s.name === "LinkedIn")?.url && (
                <a 
                  href={profile.socials.find(s => s.name === "LinkedIn")?.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
            
            {/* Tech Highlights Focus Strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-muted-foreground animate-in fade-in duration-700 delay-700 fill-mode-both">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span> LLM Engineering</span>
              <span className="w-[1px] h-4 bg-border"></span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span> RAG Systems</span>
              <span className="w-[1px] h-4 bg-border"></span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span> Agentic AI</span>
              <span className="w-[1px] h-4 bg-border"></span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span> AI Systems</span>
            </div>
          </div>

          {/* Right Visual - AI Pipeline Architecture */}
          <div className="relative h-[500px] w-full hidden lg:block group">
            <div className="absolute inset-0 rounded-2xl border border-border/40 bg-secondary/30 overflow-hidden shadow-2xl transition-all duration-700 group-hover:border-primary/30">
              
              {/* Technical Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
              
              {/* Nodes and connections (pure CSS) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-8">
                
                {/* 1. Input Node */}
                <div className="absolute top-1/2 left-[15%] -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:border-primary/50 relative z-10">
                    <div className="w-4 h-4 rounded-sm bg-muted-foreground/50" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider text-center">USER INPUT</span>
                </div>

                {/* 2. Core LLM Node */}
                <div className="absolute top-1/2 left-[45%] -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-secondary border border-primary/50 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-110 relative z-10">
                    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin duration-[3000ms]" />
                    <div className="absolute w-3 h-3 rounded-full bg-primary shadow-sm animate-pulse" />
                  </div>
                  <span className="text-[10px] text-primary font-mono font-bold tracking-wider text-center">LLM ENGINE</span>
                </div>

                {/* 3a. RAG / Vector DB Node (Top) */}
                <div className="absolute top-[20%] left-[65%] flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:-translate-y-2 group-hover:border-primary/40 relative z-10">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-6 bg-muted-foreground/30 rounded-full" />
                      <div className="w-1.5 h-6 bg-primary/60 rounded-full" />
                      <div className="w-1.5 h-6 bg-muted-foreground/30 rounded-full" />
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider text-center">RETRIEVAL / RAG<br/>VECTOR DB</span>
                </div>

                {/* 3b. Agentic Tools Node (Bottom) */}
                <div className="absolute bottom-[20%] left-[65%] flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:translate-y-2 group-hover:border-primary/40 relative z-10">
                    <div className="w-5 h-5 border-2 border-muted-foreground/50 rounded-sm rotate-45" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider text-center">AGENTS<br/>TOOLS</span>
                </div>

                {/* 4. Output Node */}
                <div className="absolute top-1/2 right-[10%] -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-110 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider text-center">OUTPUT</span>
                </div>
                
                {/* Connecting SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-muted-foreground)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--color-muted-foreground)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Input to LLM */}
                  <path d="M 15% 50% L 45% 50%" stroke="var(--color-muted-foreground)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" className="transition-all duration-700 group-hover:stroke-[var(--color-primary)] group-hover:opacity-100" />
                  {/* LLM to Vector DB */}
                  <path d="M 45% 50% Q 45% 20% 65% 20%" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" className="transition-all duration-700 opacity-50 group-hover:opacity-100" />
                  {/* LLM to Agents */}
                  <path d="M 45% 50% Q 45% 80% 65% 80%" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" className="transition-all duration-700 opacity-50 group-hover:opacity-100" />
                  {/* LLM to Output */}
                  <path d="M 45% 50% L 90% 50%" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="transition-all duration-700 opacity-30 group-hover:opacity-80" />
                </svg>
                
              </div>
              
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
