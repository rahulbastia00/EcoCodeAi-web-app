"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowUpDown, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const repositories = [
  {
    id: "1",
    name: "e-commerce-platform",
    language: "JavaScript",
    stars: 45,
    lastScan: "2023-09-15",
    efficiency: 78,
    carbonFootprint: "Low",
    status: "Optimized"
  },
  {
    id: "2",
    name: "data-processing-service",
    language: "Python",
    stars: 32,
    lastScan: "2023-09-10",
    efficiency: 65,
    carbonFootprint: "Medium",
    status: "Needs Improvement"
  },
  {
    id: "3",
    name: "mobile-app-backend",
    language: "Java",
    stars: 28,
    lastScan: "2023-09-05",
    efficiency: 82,
    carbonFootprint: "Low",
    status: "Optimized"
  },
  {
    id: "4",
    name: "analytics-dashboard",
    language: "TypeScript",
    stars: 56,
    lastScan: "2023-09-01",
    efficiency: 71,
    carbonFootprint: "Medium",
    status: "Good"
  },
  {
    id: "5",
    name: "machine-learning-model",
    language: "Python",
    stars: 89,
    lastScan: "2023-08-28",
    efficiency: 59,
    carbonFootprint: "High",
    status: "Needs Improvement"
  },
  {
    id: "6",
    name: "api-gateway",
    language: "Go",
    stars: 41,
    lastScan: "2023-08-25",
    efficiency: 88,
    carbonFootprint: "Low",
    status: "Optimized"
  },
];

type SortField = "name" | "language" | "stars" | "lastScan" | "efficiency" | "carbonFootprint";
type SortDirection = "asc" | "desc";

export function RepositoriesTable() {
  const [sortField, setSortField] = useState<SortField>("lastScan");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const sortedRepositories = [...repositories].sort((a, b) => {
    let comparison = 0;
    
    switch (sortField) {
      case "name":
      case "language":
      case "carbonFootprint":
        comparison = a[sortField].localeCompare(b[sortField]);
        break;
      case "stars":
      case "efficiency":
        comparison = a[sortField] - b[sortField];
        break;
      case "lastScan":
        comparison = new Date(a[sortField]).getTime() - new Date(b[sortField]).getTime();
        break;
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });
  
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("name")}
              >
                Repository
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("language")}
              >
                Language
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("stars")}
              >
                Stars
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("lastScan")}
              >
                Last Scan
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("efficiency")}
              >
                Efficiency
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("carbonFootprint")}
              >
                Carbon Footprint
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRepositories.map((repo) => (
            <TableRow key={repo.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code2 className="h-4 w-4 text-primary" />
                  </div>
                  <span>{repo.name}</span>
                </div>
              </TableCell>
              <TableCell>{repo.language}</TableCell>
              <TableCell>{repo.stars}</TableCell>
              <TableCell>{new Date(repo.lastScan).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        repo.efficiency >= 80 ? "bg-green-500" : 
                        repo.efficiency >= 70 ? "bg-blue-500" : 
                        repo.efficiency >= 60 ? "bg-yellow-500" : 
                        "bg-red-500"
                      }`}
                      style={{ width: `${repo.efficiency}%` }}
                    />
                  </div>
                  <span>{repo.efficiency}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={
                  repo.carbonFootprint === "Low" ? "bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/20" : 
                  repo.carbonFootprint === "Medium" ? "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/20" : 
                  "bg-red-500/20 text-red-500 hover:bg-red-500/30 border-red-500/20"
                }>
                  {repo.carbonFootprint}
                </Badge>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/repositories/${repo.id}`}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}