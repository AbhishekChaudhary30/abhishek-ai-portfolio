"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/data/site"
import { Menu, X } from "lucide-react"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ChevronDown, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"
import { profile } from "@/data/profile"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-border py-4 shadow-sm" 
          : "bg-background border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm tracking-tighter transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300 shadow-[0_0_15px_var(--color-primary)] opacity-90 group-hover:opacity-100 overflow-hidden relative">
            <Image
              src="/images/projects/logo.png"
              alt="Abhishek Chaudhary"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-black text-foreground tracking-tighter hover:text-primary transition-colors duration-300">
              AC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            
            if (item.label === "Contact") {
              return (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 relative px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                      {item.label}
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
                    {profile.socials.find(s => s.name === "GitHub")?.url && (
                      <a href={profile.socials.find(s => s.name === "GitHub")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                    {profile.socials.find(s => s.name === "LinkedIn")?.url && (
                      <a href={profile.socials.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors border-t border-border/50">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </a>
                    )}
                    {profile.email && (
                      <a href={`mailto:${profile.email}`} className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors border-t border-border/50">
                        <Mail className="w-4 h-4" /> Email
                      </a>
                    )}
                  </div>
                </div>
              )
            }
            
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium transition-colors group text-muted-foreground hover:text-foreground"
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive ? "text-primary font-semibold" : "group-hover:text-primary"
                )}>
                  {item.label}
                </span>
                <span className={cn(
                  "absolute bottom-1 left-3 right-3 h-[2px] bg-primary rounded-full transition-all duration-300",
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                )} />
              </Link>
            )
          })}
        </nav>

        {/* Desktop Theme Switcher */}
        <div className="hidden md:flex items-center ml-4">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0 border-transparent shadow-none"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => {
            if (item.label === "Contact") {
              return (
                <div key={item.label} className="px-4 py-2 flex flex-col gap-2">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Contact</span>
                  {profile.socials.find(s => s.name === "GitHub")?.url && (
                    <a href={profile.socials.find(s => s.name === "GitHub")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-md text-foreground hover:bg-muted hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <Github className="w-5 h-5" /> GitHub
                    </a>
                  )}
                  {profile.socials.find(s => s.name === "LinkedIn")?.url && (
                    <a href={profile.socials.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-md text-foreground hover:bg-muted hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </a>
                  )}
                  {profile.email && (
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-md text-foreground hover:bg-muted hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      <Mail className="w-5 h-5" /> Email
                    </a>
                  )}
                </div>
              )
            }
            
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  pathname === item.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="px-4 py-3 border-t border-border mt-2">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
