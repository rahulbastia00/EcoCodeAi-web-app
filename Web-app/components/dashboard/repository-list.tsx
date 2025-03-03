"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

const repositories = [
  {
    id: "1",
    name: "e-commerce-platform",
    language: "JavaScript",
    efficiency: 78,
    status: "Optimized"
  },
  {
    id: "2",
    name: "data-processing-service",
    language: "Python",
    efficiency: 65,
    status: "Needs Improvement"
  },
  {
    id: "3",
    name: "mobile-app-backend",
    language: "Java",
    efficiency: 82,
    status: "Optimized"
  },
  {
    id: "4",
    name: "analytics-dashboard",
    language: "TypeScript",
    efficiency: 71,
    status: "Good"
  },
];

export function RepositoryList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Repositories</CardTitle>
        <CardDescription>
          Your recently analyzed repositories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {repositories.map((repo) => (
            <div key={repo.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{repo.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{repo.language}</span>
                    <Badge variant={
                      repo.status === "Optimized" ? "default" : 
                      repo.status === "Good" ? "secondary" : 
                      "outline"
                    } className={
                      repo.status === "Optimized" ? "bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/20" : 
                      repo.status === "Good" ? "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-blue-500/20" : 
                      "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/20"
                    }>
                      {repo.status}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/repositories/${repo.id}`}>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
          
          <Button variant="outline" className="w-full" asChild>
            <Link href="/repositories">
              View All Repositories
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}