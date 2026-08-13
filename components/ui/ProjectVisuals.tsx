"use client"

import { useEffect, useState } from "react"
import { Activity, Database, FileText, Cpu, AlertTriangle, ShieldCheck, User, Wrench, Brain } from "lucide-react"

export function ProjectVisuals({ slug, isHovered = false }: { slug: string, isHovered?: boolean }) {
  if (slug === "medvision-ai") {
    return <MedVisionVisual isHovered={isHovered} />
  }
  if (slug === "architeqt-ai") {
    return <ArchiteqtVisual isHovered={isHovered} />
  }
  if (slug === "ragenius-ai") {
    return <RAGeniusVisual isHovered={isHovered} />
  }
  if (slug === "enterprise-fraud-intelligence") {
    return <FraudIntelligenceVisual isHovered={isHovered} />
  }
  
  return <FallbackVisual isHovered={isHovered} />
}

// 1. MedVision-AI
function MedVisionVisual({ isHovered }: { isHovered: boolean }) {
  const [boxes, setBoxes] = useState<Array<{id: number, x: number, y: number, w: number, h: number, conf: number}>>([])

  useEffect(() => {
    if (!isHovered) return
    const interval = setInterval(() => {
      setBoxes(prev => {
        if (prev.length > 3) return prev.slice(1)
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 60 + 10,
          y: Math.random() * 60 + 10,
          w: Math.random() * 20 + 10,
          h: Math.random() * 20 + 10,
          conf: Math.floor(Math.random() * 15 + 85)
        }]
      })
    }, 800)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div className="w-full h-full relative bg-black flex items-center justify-center overflow-hidden font-mono text-[10px]">
      <div className="absolute inset-4 border border-primary/30 rounded-lg" />
      <Activity className={`text-primary/20 w-32 h-32 absolute transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`} />
      
      {boxes.map(box => (
        <div 
          key={box.id} 
          className="absolute border border-primary bg-primary/10 transition-all duration-300"
          style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}
        >
          <div className="absolute -top-4 left-0 bg-primary text-primary-foreground px-1 py-0.5 rounded-sm">
            {box.conf}%
          </div>
        </div>
      ))}
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      
      {/* Scanning line */}
      <div className={`absolute left-0 right-0 h-[1px] bg-primary/50 shadow-[0_0_10px_var(--color-primary)] transition-all duration-[2000ms] ${isHovered ? 'top-full opacity-0' : 'top-0 opacity-100'}`} style={{ transitionTimingFunction: 'linear', animation: isHovered ? 'scan 2s infinite linear' : 'none' }} />
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}

// 2. Architeqt.ai
function ArchiteqtVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full relative bg-secondary/20 flex items-center justify-center overflow-hidden p-4">
      <div className="relative w-full max-w-[200px] aspect-square">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <path d="M 100,50 L 100,100" stroke="currentColor" strokeWidth="1" className="text-border" />
          <path d="M 50,150 L 100,100" stroke="currentColor" strokeWidth="1" className="text-border" />
          <path d="M 150,150 L 100,100" stroke="currentColor" strokeWidth="1" className="text-border" />
          
          {/* Animated Pulses */}
          {isHovered && (
            <>
              <circle cx="100" cy="50" r="2" className="fill-primary animate-pulse" style={{ animationDuration: '1.5s' }} />
              <circle cx="50" cy="150" r="2" className="fill-primary animate-pulse" style={{ animationDuration: '2s' }} />
              <circle cx="150" cy="150" r="2" className="fill-primary animate-pulse" style={{ animationDuration: '1.8s' }} />
            </>
          )}
        </svg>

        {/* Nodes */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border ${isHovered ? 'border-primary shadow-[0_0_15px_var(--color-primary)]' : 'border-border'} flex items-center justify-center z-10 transition-all duration-500`}>
          <User className="w-4 h-4 text-foreground" />
        </div>
        
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-primary/10 border ${isHovered ? 'border-primary' : 'border-primary/50'} flex items-center justify-center z-10 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
          <Brain className="w-6 h-6 text-primary" />
        </div>
        
        <div className={`absolute bottom-0 left-0 w-10 h-10 rounded-full bg-card border ${isHovered ? 'border-primary/70' : 'border-border'} flex items-center justify-center z-10 transition-all duration-500 delay-100`}>
          <Wrench className="w-4 h-4 text-foreground" />
        </div>
        
        <div className={`absolute bottom-0 right-0 w-10 h-10 rounded-full bg-card border ${isHovered ? 'border-primary/70' : 'border-border'} flex items-center justify-center z-10 transition-all duration-500 delay-200`}>
          <Database className="w-4 h-4 text-foreground" />
        </div>
      </div>
    </div>
  )
}

// 3. RAGenius AI
function RAGeniusVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full relative bg-secondary/30 flex items-center justify-center overflow-hidden">
      <div className="flex items-center gap-4 relative">
        {/* Documents */}
        <div className="flex flex-col gap-2 relative z-10">
          {[1, 2, 3].map(i => (
            <div key={i} className={`w-8 h-10 bg-card border border-border rounded-sm flex items-center justify-center transition-all duration-300 ${isHovered ? 'translate-x-1 border-primary/40' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <FileText className="w-3 h-3 text-muted-foreground" />
            </div>
          ))}
        </div>
        
        {/* Data flow */}
        <div className="flex flex-col gap-3 relative z-0">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-8 h-[1px] bg-border overflow-hidden relative">
              <div className={`absolute top-0 left-0 bottom-0 w-1/2 bg-primary transition-transform duration-1000 ${isHovered ? 'translate-x-8' : '-translate-x-full'}`} style={{ transitionDelay: `${i * 150}ms`, transitionTimingFunction: 'linear' }} />
            </div>
          ))}
        </div>
        
        {/* Vector DB */}
        <div className={`w-12 h-16 bg-card border-2 rounded-md flex items-center justify-center relative z-10 transition-all duration-500 ${isHovered ? 'border-primary shadow-[0_0_15px_var(--color-primary)]' : 'border-border'}`}>
          <Database className={`w-5 h-5 transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
          {isHovered && (
             <div className="absolute inset-0 bg-primary/10 animate-pulse rounded-sm" />
          )}
        </div>
        
        {/* Output */}
        <div className="w-8 h-[1px] bg-border overflow-hidden relative">
          <div className={`absolute top-0 left-0 bottom-0 w-1/2 bg-primary transition-transform duration-700 ${isHovered ? 'translate-x-8' : '-translate-x-full'}`} style={{ transitionDelay: '500ms' }} />
        </div>
        
        <div className={`w-10 h-10 rounded-full bg-secondary border flex items-center justify-center relative z-10 transition-all duration-500 ${isHovered ? 'border-primary scale-110' : 'border-border'}`}>
          <Cpu className={`w-4 h-4 ${isHovered ? 'text-primary' : 'text-foreground'}`} />
        </div>
      </div>
    </div>
  )
}

// 4. Enterprise Fraud Intelligence
function FraudIntelligenceVisual({ isHovered }: { isHovered: boolean }) {
  const [packets, setPackets] = useState<Array<{id: number, type: 'normal'|'fraud', offset: number}>>([])
  
  useEffect(() => {
    if (!isHovered) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPackets([])
      return
    }
    
    const interval = setInterval(() => {
      setPackets(prev => {
        if (prev.length > 5) return prev.slice(1)
        return [...prev, {
          id: Date.now(),
          type: Math.random() > 0.8 ? 'fraud' : 'normal',
          offset: Math.random() * 40 - 20
        }]
      })
    }, 400)
    
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div className="w-full h-full relative bg-secondary/10 flex items-center justify-center overflow-hidden">
      {/* Pipeline base */}
      <div className="absolute left-0 right-0 h-12 border-y border-border/50 flex items-center" />
      
      {/* Packets */}
      {packets.map(packet => (
        <div 
          key={packet.id}
          className={`absolute w-3 h-3 rounded-full shadow-lg ${packet.type === 'fraud' ? 'bg-red-500 shadow-red-500/50' : 'bg-primary/50'}`}
          style={{ 
            top: `calc(50% + ${packet.offset}px)`,
            animation: 'slideRight 2s linear forwards'
          }}
        />
      ))}
      
      {/* AI Monitor */}
      <div className={`absolute right-[20%] w-16 h-16 rounded-xl border ${packets.some(p => p.type === 'fraud') ? 'bg-red-500/10 border-red-500/50' : 'bg-card border-border'} flex items-center justify-center backdrop-blur-sm z-10 transition-colors duration-300`}>
        {packets.some(p => p.type === 'fraud') ? (
          <AlertTriangle className="w-6 h-6 text-red-500 animate-bounce" />
        ) : (
          <ShieldCheck className="w-6 h-6 text-muted-foreground" />
        )}
      </div>

      <style>{`
        @keyframes slideRight {
          from { left: -10%; }
          to { left: 110%; }
        }
      `}</style>
    </div>
  )
}

// 5. Fallback Visual
function FallbackVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full relative bg-secondary/20 flex items-center justify-center overflow-hidden">
      <div className={`w-32 h-32 border border-border/50 rounded-lg flex items-center justify-center transition-all duration-1000 ${isHovered ? 'rotate-12 scale-110 border-primary/30' : 'rotate-0 scale-100'}`}>
        <div className={`w-24 h-24 border border-border/50 rounded-full flex items-center justify-center transition-all duration-1000 delay-100 ${isHovered ? '-rotate-12 border-primary/50' : 'rotate-0'}`}>
          <div className={`w-16 h-16 border border-border/50 rounded-sm transition-all duration-1000 delay-200 ${isHovered ? 'rotate-45 bg-primary/5' : 'rotate-0'}`} />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-color)_100%)] opacity-50 pointer-events-none" />
    </div>
  )
}
