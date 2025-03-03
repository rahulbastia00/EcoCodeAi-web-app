import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Github, Code2, BarChart3, Leaf, Zap, Award, LineChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background -z-10" />
          
          <div className="container flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-sm font-medium mb-4">
              <Leaf className="h-4 w-4 mr-2" />
              <span>Sustainable Coding</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Optimize Your Code, <span className="text-green-500">Reduce Carbon Footprint</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              EcoCodeAI scans your GitHub repositories to analyze code efficiency and carbon footprint, 
              providing AI-powered recommendations to make your code more sustainable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Github className="h-5 w-5" />
                Connect GitHub & Analyze Now
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">
                  View Demo Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how EcoCodeAI helps you write more efficient, sustainable code
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Code Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your code to identify inefficient patterns and resource-intensive operations.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Carbon Footprint Tracking</h3>
                <p className="text-muted-foreground">
                  Visualize the environmental impact of your code with detailed metrics and actionable insights.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gamification & Leaderboard</h3>
                <p className="text-muted-foreground">
                  Earn badges and compete with other developers to write the most sustainable code.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get started with EcoCodeAI in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-6 h-full w-px bg-border hidden md:block" />
                <div className="relative z-10 flex flex-col items-center md:items-start">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect GitHub</h3>
                  <p className="text-muted-foreground text-center md:text-left">
                    Authenticate with your GitHub account to give EcoCodeAI access to your repositories.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-6 h-full w-px bg-border hidden md:block" />
                <div className="relative z-10 flex flex-col items-center md:items-start">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scan Repositories</h3>
                  <p className="text-muted-foreground text-center md:text-left">
                    Select the repositories you want to analyze for code efficiency and carbon footprint.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 flex flex-col items-center md:items-start">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                  <p className="text-muted-foreground text-center md:text-left">
                    Receive detailed reports with AI-powered recommendations to optimize your code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-green-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to make your code more sustainable?</h2>
              <p className="text-muted-foreground max-w-2xl mb-8">
                Join thousands of developers who are reducing their carbon footprint with EcoCodeAI.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Github className="h-5 w-5" />
                Connect GitHub & Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}