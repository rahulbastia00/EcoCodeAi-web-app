import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Leaf } from "lucide-react";

export function LeaderboardStats() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Participants
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,248</div>
          <p className="text-xs text-muted-foreground">
            +156 from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Carbon Saved
          </CardTitle>
          <Leaf className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,540 kg</div>
          <p className="text-xs text-muted-foreground">
            +22% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Top Contributor
          </CardTitle>
          <Award className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Sarah Chen</div>
          <p className="text-xs text-muted-foreground">
            1,245 kg carbon saved
          </p>
        </CardContent>
      </Card>
    </>
  );
}