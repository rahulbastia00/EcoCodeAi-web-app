import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RepositoryHeader } from "@/components/repositories/repository-header";
import { RepositoryStats } from "@/components/repositories/repository-stats";
import { CodeComplexityChart } from "@/components/repositories/code-complexity-chart";
import { EnergyIntensiveFunctions } from "@/components/repositories/energy-intensive-functions";
import { OptimizationRecommendations } from "@/components/repositories/optimization-recommendations";

export default function RepositoryPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <RepositoryHeader id={params.id} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <RepositoryStats id={params.id} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <CodeComplexityChart id={params.id} />
            <EnergyIntensiveFunctions id={params.id} />
          </div>
          
          <div className="mt-8">
            <OptimizationRecommendations id={params.id} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}