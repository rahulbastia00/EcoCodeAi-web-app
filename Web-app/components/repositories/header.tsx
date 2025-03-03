"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Search } from "lucide-react";
import { useState } from "react";

export function RepositoriesHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Repositories</h1>
          <p className="text-muted-foreground">
            Manage and analyze your GitHub repositories
          </p>
        </div>
        
        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
          <Github className="h-4 w-4" />
          Connect GitHub
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search repositories..." 
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}