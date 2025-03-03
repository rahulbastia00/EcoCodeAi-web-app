"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const suggestions = [
  {
    id: "1",
    title: "Replace nested loops with more efficient algorithm",
    description: "The nested loops in your data processing function can be optimized using a more efficient algorithm.",
    impact: "High",
    language: "JavaScript",
    repository: "e-commerce-platform",
    file: "src/services/dataProcessor.js",
    originalCode: `for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items.length; j++) {
    if (items[i].id === items[j].relatedId) {
      // Process related items
      processRelatedItems(items[i], items[j]);
    }
  }
}`,
    optimizedCode: `// Create a map for O(1) lookups
const itemMap = new Map();
items.forEach(item => itemMap.set(item.id, item));

// Single loop with O(1) lookups
items.forEach(item => {
  const relatedItem = itemMap.get(item.relatedId);
  if (relatedItem) {
    processRelatedItems(item, relatedItem);
  }
});`
  },
  {
    id: "2",
    title: "Optimize database queries with proper indexing",
    description: "Your database queries are performing full table scans. Adding indexes will significantly improve performance.",
    impact: "High",
    language: "SQL",
    repository: "data-processing-service",
    file: "src/database/queries.sql",
    originalCode: `SELECT * FROM orders 
WHERE customer_id = 12345 
AND order_date BETWEEN '2023-01-01' AND '2023-12-31';`,
    optimizedCode: `-- Add indexes for frequently queried columns
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_order_date ON orders(order_date);

-- Same query will now use indexes
SELECT * FROM orders 
WHERE customer_id = 12345 
AND order_date BETWEEN '2023-01-01' AND '2023-12-31';`
  },
  {
    id: "3",
    title: "Implement lazy loading for images",
    description: "Loading all images at once increases page load time and energy consumption.",
    impact: "Medium",
    language: "JavaScript",
    repository: "e-commerce-platform",
    file: "src/components/ProductList.js",
    originalCode: `<img 
  src={product.imageUrl} 
  alt={product.name} 
  className="product-image"
/>`,
    optimizedCode: `<img 
  src={product.imageUrl} 
  alt={product.name} 
  className="product-image"
  loading="lazy"
  width={300}
  height={200}
/>`
  },
];

export function OptimizationSuggestions() {
  const [activeTab, setActiveTab] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const filteredSuggestions = activeTab === "all" 
    ? suggestions 
    : suggestions.filter(s => s.impact.toLowerCase() === activeTab);
  
  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-green-500" />
          AI-Powered Optimization Suggestions
        </CardTitle>
        <CardDescription>
          Implement these suggestions to improve your code efficiency and reduce carbon footprint
        </CardDescription>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High Impact</TabsTrigger>
            <TabsTrigger value="medium">Medium Impact</TabsTrigger>
            <TabsTrigger value="low">Low Impact</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {filteredSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="border border-border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{suggestion.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{suggestion.description}</p>
                  </div>
                  <Badge className={
                    suggestion.impact === "High" ? "bg-red-500/20 text-red-500 hover:bg-red-500/30 border-red-500/20" : 
                    suggestion.impact === "Medium" ? "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/20" : 
                    "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-blue-500/20"
                  }>
                    {suggestion.impact} Impact
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{suggestion.language}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {suggestion.repository} • {suggestion.file}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 border-t border-border">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium">Original Code</h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => handleCopy(suggestion.originalCode, `original-${suggestion.id}`)}
                    >
                      {copiedId === `original-${suggestion.id}` ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <div className="bg-card p-3 rounded-md overflow-x-auto">
                    <pre className="text-xs"><code>{suggestion.originalCode}</code></pre>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium flex items-center gap-1">
                      <Zap className="h-3 w-3 text-green-500" />
                      Optimized Code
                    </h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => handleCopy(suggestion.optimizedCode, `optimized-${suggestion.id}`)}
                    >
                      {copiedId === `optimized-${suggestion.id}` ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <div className="bg-card p-3 rounded-md overflow-x-auto">
                    <pre className="text-xs"><code>{suggestion.optimizedCode}</code></pre>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-border flex justify-end">
                <Button variant="outline" size="sm">Apply Suggestion</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}