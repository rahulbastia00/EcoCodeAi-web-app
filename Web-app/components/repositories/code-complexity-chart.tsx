"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = {
  "1": [
    { name: "src/controllers", complexity: 78, files: 12 },
    { name: "src/models", complexity: 45, files: 8 },
    { name: "src/services", complexity: 92, files: 15 },
    { name: "src/utils", complexity: 32, files: 10 },
    { name: "src/middleware", complexity: 56, files: 6 },
  ],
  "2": [
    { name: "src/data", complexity: 85, files: 14 },
    { name: "src/processing", complexity: 92, files: 18 },
    { name: "src/api", complexity: 65, files: 12 },
    { name: "src/utils", complexity: 42, files: 9 },
    { name: "src/config", complexity: 28, files: 5 },
  ],
  "3": [
    { name: "src/controllers", complexity: 72, files: 16 },
    { name: "src/models", complexity: 58, files: 12 },
    { name: "src/services", complexity: 88, files: 20 },
    { name: "src/utils", complexity: 35, files: 14 },
    { name: "src/auth", complexity: 62, files: 8 },
  ],
};

export function CodeComplexityChart({ id }: { id: string }) {
  const chartData = data[id as keyof typeof data] || [];
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Code Complexity</CardTitle>
        <CardDescription>
          Complexity score by directory
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--card-foreground))"
                }}
                itemStyle={{ color: "hsl(var(--card-foreground))" }}
                labelStyle={{ color: "hsl(var(--card-foreground))" }}
              />
              <Legend />
              <Bar 
                dataKey="complexity" 
                name="Complexity Score" 
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="files" 
                name="Number of Files" 
                fill="hsl(var(--chart-2))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}