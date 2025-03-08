"use client";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { Github, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession, signIn, signOut } from "next-auth/react";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

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
          {session ? (
            <>
              <Button onClick={() => signOut()} variant="outline" size="sm" className="flex gap-2 justify-center">
                <CgProfile  className="text-lg"/>
                <span>{session.user?.name}</span>
              </Button>

              <Button onClick={() => signOut().then(() => localStorage.removeItem("welcomeToastShown"))} variant="outline" size="sm">
                <Github className="h-4 w-4" />
                <span>Log Out</span>
              </Button>
            </>
          ) : (
            <Button onClick={() => signIn("github")} variant="outline" size="sm">
              <Github className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
