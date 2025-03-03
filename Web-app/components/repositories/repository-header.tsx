"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const repositories = {
  "1": {
    name: "e-commerce-platform",
    owner: "acme-corp",
    language: "JavaScript",
    stars: 45,
    lastScan: "2023-09-15",
    efficiency: 78,
    carbonFootprint: "Low",
    status: "Optimized"
  },
  "2": {
    name: "data-processing-service",
    owner: "acme-corp",
    language: "Python",
    stars: 32,
    lastScan: "2023-09-10",
    efficiency: 65,
    carbonFootprint: "Medium",
    status: "Needs Improvement"
  },
  "3": {
    name: "mobile-app-backend",
    owner: "acme-corp",
    language: "Java",
    stars: 28,
    lastScan: "2023-09-05",
    efficiency: 82,
    carbonFootprint: "Low",
    status: "Optimized"
  },
};

export function RepositoryHeader({ id }: { id: string }) {
  const [isScanning, setIsScanning] = useState(false);
  
  const repository = repositories[id as keyof typeof repositories];
  
  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => setIsScanning(false), 2000);
  };
  
  if (!repository) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/repositories">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Repository not found</h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/repositories">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{repository.name}</h1>
            <Badge variant="outline">{repository.language}</Badge>
          </div>
          <p className="text-muted-foreground">
            {repository.owner} • {repository.stars} stars • Last scan: {new Date(repository.lastScan).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={handleScan} 
          disabled={isScanning}
          className="gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Scanning..." : "Scan Again"}
        </Button>
        <Button variant="outline" className="gap-2" asChild>
          <a href={`https://github.com/${repository.owner}/${repository.name}`} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}