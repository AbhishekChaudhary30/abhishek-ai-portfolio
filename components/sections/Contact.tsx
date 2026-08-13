"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, MapPin, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"
import { profile } from "@/data/profile"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    // Phase 1: Simulate network request. Phase 3: Actual backend integration
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log("Form data (Phase 1 simulation):", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset success state after a few seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-16 text-center">
          <span className="section-eyebrow">CONTACT</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Ready to build intelligent systems? Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 premium-glass bg-secondary/50 border border-border p-8 rounded-2xl relative overflow-hidden shadow-sm">
            {/* Decorative background element */}
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-primary/10 blur-[50px] -z-10 pointer-events-none" />

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 size={64} className="text-primary mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent</h3>
              <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    {...register("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-slate-300">Project Type</Label>
                <select 
                  id="projectType"
                  className="flex h-10 w-full rounded-md border border-[var(--color-border)] bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
                  {...register("projectType")}
                  aria-invalid={!!errors.projectType}
                >
                  <option value="" disabled className="bg-background text-muted-foreground">Select a project type...</option>
                  <option value="ai-ml" className="bg-background">AI/ML Project</option>
                  <option value="rag" className="bg-background">RAG Application</option>
                  <option value="agentic" className="bg-background">Agentic AI</option>
                  <option value="automation" className="bg-background">AI Automation</option>
                  <option value="freelance" className="bg-background">Freelance</option>
                  <option value="hiring" className="bg-background">Hiring</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
                {errors.projectType && <p className="text-sm text-red-400">{errors.projectType.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px] bg-background border-border focus-visible:ring-primary/50 transition-colors"
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-md gap-2 border border-primary/50 shadow-sm transition-colors duration-300">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </Button>
              
            </form>
          )}
          </div>
          
          {/* Right: Contact Information */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            
            <div className="space-y-6">
              {profile.email && (
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors duration-300 border border-transparent hover:border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Email</h4>
                    <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors text-base break-all">
                      {profile.email}
                    </a>
                  </div>
                </div>
              )}

              {profile.socials.find(s => s.name === "GitHub")?.url && (
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors duration-300 border border-transparent hover:border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">GitHub</h4>
                    <a href={profile.socials.find(s => s.name === "GitHub")?.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-base break-all">
                      {profile.socials.find(s => s.name === "GitHub")?.url?.replace("https://github.com/", "@")}
                    </a>
                  </div>
                </div>
              )}

              {profile.socials.find(s => s.name === "LinkedIn")?.url && (
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors duration-300 border border-transparent hover:border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">LinkedIn</h4>
                    <a href={profile.socials.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-base break-all">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors duration-300 border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-muted-foreground text-base">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
