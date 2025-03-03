"use client";

import Link from "next/link";
import { Github, Code2, BarChart3, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-500" />
          <Link href="/" className="text-xl font-bold">
            EcoCodeAI
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/dashboard" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/dashboard" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Dashboard
          </Link>
          <Link 
            href="/repositories" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/repositories" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Repositories
          </Link>
          <Link 
            href="/leaderboard" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/leaderboard" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Leaderboard
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Github className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  );
}