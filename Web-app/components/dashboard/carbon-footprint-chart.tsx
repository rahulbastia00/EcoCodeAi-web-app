"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "JavaScript", value: 45 },
  { name: "Python", value: 30 },
  { name: "Java", value: 15 },
  { name: "Other", value: 10 },
];

export function CarbonFootprintChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Carbon Footprint</CardTitle>
        <CardDescription>
          Distribution by language
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                <Cell key="cell-0" fill="hsl(var(--chart-1))" />
                <Cell key="cell-1" fill="hsl(var(--chart-2))" />
                <Cell key="cell-2" fill="hsl(var(--chart-3))" />
                <Cell key="cell-3" fill="hsl(var(--chart-4))" />
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--card-foreground))"
                }}
                formatter={(value) => [`${value}%`, "Carbon Impact"]}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span style={{ color: "hsl(var(--card-foreground))" }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}