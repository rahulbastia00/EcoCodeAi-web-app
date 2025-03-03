"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", efficiency: 65, optimized: 0 },
  { name: "Feb", efficiency: 59, optimized: 0 },
  { name: "Mar", efficiency: 62, optimized: 0 },
  { name: "Apr", efficiency: 58, optimized: 0 },
  { name: "May", efficiency: 65, optimized: 0 },
  { name: "Jun", efficiency: 68, optimized: 0 },
  { name: "Jul", efficiency: 72, optimized: 75 },
  { name: "Aug", efficiency: 75, optimized: 82 },
  { name: "Sep", efficiency: 71, optimized: 87 },
];

export function EfficiencyChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Code Efficiency Trends</CardTitle>
        <CardDescription>
          Track your code efficiency improvements over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
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
                tickFormatter={(value) => `${value}%`}
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
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                name="Original Efficiency"
              />
              <Line
                type="monotone"
                dataKey="optimized"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                name="After Optimization"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}