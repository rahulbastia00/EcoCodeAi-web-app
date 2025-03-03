"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const data = {
  "1": [
    {
      name: "processOrderData",
      file: "src/services/orderService.js",
      line: 128,
      impact: "High",
      energyScore: 85
    },
    {
      name: "calculateTaxes",
      file: "src/utils/taxCalculator.js",
      line: 45,
      impact: "Medium",
      energyScore: 72
    },
    {
      name: "generateProductRecommendations",
      file: "src/services/recommendationService.js",
      line: 210,
      impact: "High",
      energyScore: 92
    },
    {
      name: "validateUserInput",
      file: "src/utils/validators.js",
      line: 78,
      impact: "Low",
      energyScore: 45
    },
    {
      name: "searchProducts",
      file: "src/services/searchService.js",
      line: 156,
      impact: "Medium",
      energyScore: 68
    }
  ],
  "2": [
    {
      name: "processDataBatch",
      file: "src/processing/batchProcessor.py",
      line: 87,
      impact: "High",
      energyScore: 94
    },
    {
      name: "transformData",
      file: "src/data/transformer.py",
      line: 132,
      impact: "Medium",
      energyScore: 76
    },
    {
      name: "calculateStatistics",
      file: "src/utils/statistics.py",
      line: 65,
      impact: "Medium",
      energyScore: 68
    },
    {
      name: "generateReport",
      file: "src/api/reports.py",
      line: 218,
      impact: "High",
      energyScore: 88
    }
  ],
  "3": [
    {
      name: "processUserData",
      file: "src/services/UserService.java",
      line: 145,
      impact: "Medium",
      energyScore: 72
    },
    {
      name: "authenticateUser",
      file: "src/auth/AuthenticationService.java",
      line: 98,
      impact: "Low",
      energyScore: 58
    },
    {
      name: "generateAnalytics",
      file: "src/services/AnalyticsService.java",
      line: 276,
      impact: "High",
      energyScore: 95
    },
    {
      name: "cacheUserSession",
      file: "src/utils/CacheManager.java",
      line: 112,
      impact: "Medium",
      energyScore: 76
    }
  ]
};

export function EnergyIntensiveFunctions({ id }: { id: string }) {
  const functions = data[id as keyof typeof data] || [];
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          Energy-Intensive Functions
        </CardTitle>
        <CardDescription>
          Functions with the highest energy consumption
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {functions.map((func, index) => (
            <div key={index} className="flex items-start justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">{func.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {func.file}:{func.line}
                  </span>
                  <Badge className={
                    func.impact === "High" ? "bg-red-500/20 text-red-500 hover:bg-red-500/30 border-red-500/20" : 
                    func.impact === "Medium" ? "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/20" : 
                    "bg-blue-500/20 text-blue-500 hover: <boltArtifact id="ecocode-ai-dashboard-components-continued" title="Completing EcoCodeAI Dashboard Components (Continued)">
            }
    )
    )
    }
  )
}