"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowUpDown, Award, Github } from "lucide-react";
import { useState } from "react";

const users = [
  {
    id: "1",
    name: "Sarah Chen",
    username: "sarahchen",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    organization: "GreenTech Solutions",
    carbonSaved: 1245,
    repositories: 28,
    badges: ["Carbon Champion", "Efficiency Expert", "Top Contributor"],
    rank: 1
  },
  {
    id: "2",
    name: "Alex Johnson",
    username: "alexj",
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    organization: "EcoSoft Inc.",
    carbonSaved: 982,
    repositories: 15,
    badges: ["Efficiency Expert", "Code Optimizer"],
    rank: 2
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    username: "mariar",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    organization: "Sustainable Dev Team",
    carbonSaved: 876,
    repositories: 22,
    badges: ["Carbon Champion", "Rising Star"],
    rank: 3
  },
  {
    id: "4",
    name: "David Kim",
    username: "davidk",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    organization: "Green Code Labs",
    carbonSaved: 754,
    repositories: 19,
    badges: ["Code Optimizer"],
    rank: 4
  },
  {
    id: "5",
    name: "Emily Wilson",
    username: "emilyw",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    organization: "EcoTech Solutions",
    carbonSaved: 698,
    repositories: 12,
    badges: ["Rising Star"],
    rank: 5
  },
  {
    id: "6",
    name: "James Taylor",
    username: "jamest",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    organization: "Sustainable Systems",
    carbonSaved: 645,
    repositories: 17,
    badges: ["Code Optimizer"],
    rank: 6
  },
  {
    id: "7",
    name: "Olivia Martinez",
    username: "oliviam",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
    organization: "Green Dev Co.",
    carbonSaved: 612,
    repositories: 14,
    badges: ["Rising Star"],
    rank: 7
  },
  {
    id: "8",
    name: "Michael Brown",
    username: "michaelb",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
    organization: "EcoCode Solutions",
    carbonSaved: 589,
    repositories: 11,
    badges: ["Code Optimizer"],
    rank: 8
  },
  {
    id: "9",
    name: "Sophia Lee",
    username: "sophial",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    organization: "Sustainable Dev Inc.",
    carbonSaved: 542,
    repositories: 9,
    badges: ["Rising Star"],
    rank: 9
  },
  {
    id: "10",
    name: "Daniel Garcia",
    username: "danielg",
    avatarUrl: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=100&auto=format&fit=crop",
    organization: "Green Systems",
    carbonSaved: 521,
    repositories: 13,
    badges: ["Code Optimizer"],
    rank: 10
  }
];

type SortField = "rank" | "name" | "organization" | "carbonSaved" | "repositories";
type SortDirection = "asc" | "desc";

export function LeaderboardTable() {
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const sortedUsers = [...users].sort((a, b) => {
    let comparison = 0;
    
    switch (sortField) {
      case "name":
      case "organization":
        comparison = a[sortField].localeCompare(b[sortField]);
        break;
      case "rank":
      case "carbonSaved":
      case "repositories":
        comparison = a[sortField] - b[sortField];
        break;
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });
  
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("rank")}
              >
                Rank
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead className="min-w-[200px]">
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("name")}
              >
                Developer
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("organization")}
              >
                Organization
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("carbonSaved")}
              >
                Carbon Saved
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>
              <Button 
                variant="ghost" 
                className="p-0 font-medium flex items-center gap-1"
                onClick={() => handleSort("repositories")}
              >
                Repositories
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </TableHead>
            <TableHead>Badges</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div className="flex items-center justify-center">
                  {user.rank <= 3 ? (
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      user.rank === 1 ? "bg-yellow-500/20 text-yellow-500" : 
                      user.rank === 2 ? "bg-gray-300/20 text-gray-300" : 
                      "bg-amber-700/20 text-amber-700"
                    }`}>
                      <Award className="h-4 w-4" />
                    </div>
                  ) : (
                    <span>{user.rank}</span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">@{user.username}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{user.organization}</TableCell>
              <TableCell>
                <div className="font-medium">{user.carbonSaved} kg</div>
              </TableCell>
              <TableCell>{user.repositories}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {user.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className={
                      badge === "Carbon Champion" ? "bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/20" : 
                      badge === "Efficiency Expert" ? "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-blue-500/20" : 
                      badge === "Top Contributor" ? "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30 border-purple-500/20" : 
                      "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/20"
                    }>
                      {badge}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://github.com/${user.username}`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}