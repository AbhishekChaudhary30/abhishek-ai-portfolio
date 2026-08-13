import Link from "next/link"
import { profile } from "@/data/profile"
import { siteConfig } from "@/data/site"
import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground pt-20 pb-10 mt-auto border-t border-border relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm tracking-tighter border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                A
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                Let&apos;s Build Something.
              </span>
            </Link>
            <p className="text-muted-foreground/70 text-sm max-w-xs mt-4">
              Building intelligent, production-ready systems across Machine Learning, LLMs, RAG, and Agentic AI.
            </p>
            <Link 
              href="#contact"
              className="inline-block mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Start a Conversation
            </Link>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground/70 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: AI Engineering Areas */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">AI Engineering</h4>
            <ul className="space-y-3 text-sm text-muted-foreground/70">
              <li>LLM Engineering</li>
              <li>RAG Systems</li>
              <li>Agentic AI</li>
              <li>AI Systems</li>
              <li>Machine Learning</li>
              <li>AI Application Development</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Have a Question?</h4>
            <div className="flex gap-4 mb-6">
              <a href={profile.socials.find(s => s.name === "GitHub")?.url || "https://github.com/AbhishekChaudhary30"} target="_blank" rel="noreferrer" aria-label="GitHub" className="h-10 w-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                <Github size={18} />
              </a>
              <a href={profile.socials.find(s => s.name === "LinkedIn")?.url || "#"} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email || "abhishekchaudhary8275@gmail.com"}`} aria-label="Email" className="h-10 w-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
            {profile.resumeUrl ? (
              <Link 
                href={profile.resumeUrl}
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                View Full Resume
              </Link>
            ) : (
              <span className="text-sm font-medium text-muted-foreground/50">
                Resume Coming Soon
              </span>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/70">
          <p>© 2026 Abhishek Chaudhary. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
