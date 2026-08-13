"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/data/site"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"
import Image from "next/image"

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
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-lg tracking-tight text-foreground transition-colors group-hover:text-primary">
              AC
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider hidden sm:block">
              Agentic AI Developer & LLM Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {siteConfig.navItems.map((item) => {
            // Check active state
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            
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
                
                {/* Active Underline Indicator */}
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
          {siteConfig.navItems.map((item) => (
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
          ))}
          <div className="px-4 py-3 border-t border-border mt-2">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
