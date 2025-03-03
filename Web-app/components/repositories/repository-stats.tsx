import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Leaf, Zap, FileCode, Clock } from "lucide-react";

const repositories = {
  "1": {
    files: 128,
    linesOfCode: 15420,
    carbonSaved: "32 kg",
    energyEfficiency: "78%",
    scanDuration: "2m 15s"
  },
  "2": {
    files: 87,
    linesOfCode: 9845,
    carbonSaved: "18 kg",
    energyEfficiency: "65%",
    scanDuration: "1m 48s"
  },
  "3": {
    files: 156,
    linesOfCode: 21350,
    carbonSaved: "45 kg",
    energyEfficiency: "82%",
    scanDuration: "3m 22s"
  },
};

export function RepositoryStats({ id }: { id: string }) {
  const stats = repositories[id as keyof typeof repositories] || {
    files: 0,
    linesOfCode: 0,
    carbonSaved: "0 kg",
    energyEfficiency: "0%",
    scanDuration: "0s"
  };
  
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Files Analyzed
          </CardTitle>
          <FileCode className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.files}</div>
          <p className="text-xs text-muted-foreground">
            {stats.linesOfCode.toLocaleString()} lines of code
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Carbon Saved
          </CardTitle>
          <Leaf className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.carbonSaved}</div>
          <p className="text-xs text-muted-foreground">
            After implementing suggestions
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Energy Efficiency
          </CardTitle>
          <Zap className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.energyEfficiency}</div>
          <p className="text-xs text-muted-foreground">
            Scan completed in {stats.scanDuration}
          </p>
        </CardContent>
      </Card>
    </>
  );
}