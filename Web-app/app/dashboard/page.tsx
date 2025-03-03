import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardStats } from "@/components/dashboard/stats";
import { RepositoryList } from "@/components/dashboard/repository-list";
import { EfficiencyChart } from "@/components/dashboard/efficiency-chart";
import { CarbonFootprintChart } from "@/components/dashboard/carbon-footprint-chart";
import { OptimizationSuggestions } from "@/components/dashboard/optimization-suggestions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <DashboardHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <DashboardStats />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <EfficiencyChart />
            </div>
            <div>
              <CarbonFootprintChart />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <OptimizationSuggestions />
            </div>
            <div>
              <RepositoryList />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}