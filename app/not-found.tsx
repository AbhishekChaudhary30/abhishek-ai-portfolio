import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative h-24 w-24 bg-card border border-border rounded-2xl flex items-center justify-center shadow-2xl">
          <AlertCircle className="h-10 w-10 text-primary" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
        Page Not Found
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild variant="premium" size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Explore Projects
          </Link>
        </Button>
      </div>
    </div>
  )
}
