"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const data = {
  "1": [
    {
      id: "1-1",
      title: "Replace nested loops with Map lookup",
      description: "The nested loops in processOrderData can be optimized using a Map for O(1) lookups.",
      impact: "High",
      category: "Performance",
      file: "src/services/orderService.js",
      line: 128,
      originalCode: `for (let i = 0; i < orders.length; i++) {
  for (let j = 0; j < products.length; j++) {
    if (orders[i].productId === products[j].id) {
      // Process order with product
      processOrderWithProduct(orders[i], products[j]);
    }
  }
}`,
      optimizedCode: `// Create a map for O(1) lookups
const productMap = new Map();
products.forEach(product => productMap.set(product.id, product));

// Single loop with O(1) lookups
orders.forEach(order => {
  const product = productMap.get(order.productId);
  if (product) {
    processOrderWithProduct(order, product);
  }
});`
    },
    {
      id: "1-2",
      title: "Implement lazy loading for product images",
      description: "Loading all product images at once increases page load time and energy consumption.",
      impact: "Medium",
      category: "UI",
      file: "src/components/ProductList.js",
      line: 45,
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
    {
      id: "1-3",
      title: "Optimize recommendation algorithm",
      description: "The current recommendation algorithm has exponential complexity. A more efficient approach is possible.",
      impact: "High",
      category: "Algorithm",
      file: "src/services/recommendationService.js",
      line: 210,
      originalCode: `function generateProductRecommendations(user, products) {
  let recommendations = [];
  
  // Exponential complexity algorithm
  for (let i = 0; i < user.purchases.length; i++) {
    for (let j = 0; j < products.length; j++) {
      for (let k = 0; k < products[j].categories.length; k++) {
        if (user.purchases[i].categories.includes(products[j].categories[k])) {
          recommendations.push(products[j]);
          break;
        }
      }
    }
  }
  
  return [...new Set(recommendations)];
}`,
      optimizedCode: `function generateProductRecommendations(user, products) {
  // Create a set of user's preferred categories
  const userCategories = new Set();
  user.purchases.forEach(purchase => {
    purchase.categories.forEach(category => userCategories.add(category));
  });
  
  // Filter products that match user categories
  return products.filter(product => 
    product.categories.some(category => userCategories.has(category))
  );
}`
    }
  ],
  "2": [
    {
      id: "2-1",
      title: "Optimize data batch processing",
      description: "The current batch processing algorithm loads all data into memory. A streaming approach would be more efficient.",
      impact: "High",
      category: "Memory",
      file: "src/processing/batchProcessor.py",
      line: 87,
      originalCode: `def process_data_batch(file_path):
    # Load entire file into memory
    with open(file_path, 'r') as f:
        data = f.readlines()
    
    results = []
    for line in data:
        processed = process_line(line)
        results.append(processed)
    
    return results`,
      optimizedCode: `def process_data_batch(file_path):
    results = []
    
    # Process file line by line without loading everything
    with open(file_path, 'r') as f:
        for line in f:
            processed = process_line(line)
            results.append(processed)
    
    return results`
    },
    {
      id: "2-2",
      title: "Use generator for report generation",
      description: "The report generation function builds a large list in memory. Using a generator would reduce memory usage.",
      impact: "Medium",
      category: "Memory",
      file: "src/api/reports.py",
      line: 218,
      originalCode: `def generate_report(data):
    report_items = []
    
    for item in data:
        transformed = transform_item(item)
        report_items.append(transformed)
    
    return report_items`,
      optimizedCode: `def generate_report(data):
    # Use generator to yield items one at a time
    for item in data:
        transformed = transform_item(item)
        yield transformed`
    }
  ],
  "3": [
    {
      id: "3-1",
      title: "Implement caching for analytics generation",
      description: "The analytics generation function recalculates values that could be cached.",
      impact: "High",
      category: "Performance",
      file: "src/services/AnalyticsService.java",
      line: 276,
      originalCode: `public List<AnalyticsData> generateAnalytics(User user) {
    List<AnalyticsData> analytics = new ArrayList<>();
    
    for (Activity activity : user.getActivities()) {
        AnalyticsData data = calculateAnalyticsForActivity(activity);
        analytics.add(data);
    }
    
    return analytics;
}`,
      optimizedCode: `private Map<String, AnalyticsData> analyticsCache = new HashMap<>();

public List<AnalyticsData> generateAnalytics(User user) {
    List<AnalyticsData> analytics = new ArrayList<>();
    
    for (Activity activity : user.getActivities()) {
        String cacheKey = activity.getId() + "-" + activity.getLastModified();
        
        // Check if we have cached results
        if (analyticsCache.containsKey(cacheKey)) {
            analytics.add(analyticsCache.get(cacheKey));
        } else {
            AnalyticsData data = calculateAnalyticsForActivity(activity);
            analyticsCache.put(cacheKey, data);
            analytics.add(data);
        }
    }
    
    return analytics;
}`
    },
    {
      id: "3-2",
      title: "Optimize user authentication",
      description: "The authentication service makes redundant database calls.",
      impact: "Medium",
      category: "Database",
      file: "src/auth/AuthenticationService.java",
      line: 98,
      originalCode: `public boolean authenticateUser(String username, String password) {
    User user = userRepository.findByUsername(username);
    
    if (user != null) {
        boolean isValid = passwordEncoder.matches(password, user.getPassword());
        
        if (isValid) {
            // Get user roles - additional database query
            List<Role> roles = userRepository.findRolesByUsername(username);
            user.setRoles(roles);
            
            // Get user permissions - additional database query
            List<Permission> permissions = userRepository.findPermissionsByUsername(username);
            user.setPermissions(permissions);
            
            return true;
        }
    }
    
    return false;
}`,
      optimizedCode: `public boolean authenticateUser(String username, String password) {
    // Single query to fetch user with roles and permissions
    User user = userRepository.findByUsernameWithRolesAndPermissions(username);
    
    if (user != null) {
        boolean isValid = passwordEncoder.matches(password, user.getPassword());
        return isValid;
    }
    
    return false;
}

// In UserRepository.java:
@Query("SELECT u FROM User u LEFT JOIN FETCH u.roles LEFT JOIN FETCH u.permissions WHERE u.username = :username")
User findByUsernameWithRolesAndPermissions(String username);`
    }
  ]
};

export function OptimizationRecommendations({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const recommendations = data[id as keyof typeof data] || [];
  
  const filteredRecommendations = activeTab === "all" 
    ? recommendations 
    : recommendations.filter(r => r.category.toLowerCase() === activeTab.toLowerCase());
  
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
          AI-Powered Optimization Recommendations
        </CardTitle>
        <CardDescription>
          Implement these suggestions to improve your code efficiency and reduce carbon footprint
        </CardDescription>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="memory">Memory</TabsTrigger>
            <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="ui">UI</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {filteredRecommendations.map((recommendation) => (
            <div key={recommendation.id} className="border border-border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{recommendation.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{recommendation.description}</p>
                  </div>
                  <Badge className={
                    recommendation.impact === "High" ? "bg-red-500/20 text-red-500 hover:bg-red-500/30 border-red-500/20" : 
                    recommendation.impact === "Medium" ? "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/20" : 
                    "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-blue-500/20"
                  }>
                    {recommendation.impact} Impact
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{recommendation.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {recommendation.file}:{recommendation.line}
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
                      onClick={() => handleCopy(recommendation.originalCode, `original-${recommendation.id}`)}
                    >
                      {copiedId === `original-${recommendation.id}` ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <div className="bg-card p-3 rounded-md overflow-x-auto">
                    <pre className="text-xs"><code>{recommendation.originalCode}</code></pre>
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
                      onClick={() => handleCopy(recommendation.optimizedCode, `optimized-${recommendation.id}`)}
                    >
                      {copiedId === `optimized-${recommendation.id}` ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <div className="bg-card p-3 rounded-md overflow-x-auto">
                    <pre className="text-xs"><code>{recommendation.optimizedCode}</code></pre>
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