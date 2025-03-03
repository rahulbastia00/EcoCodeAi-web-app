import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RepositoriesHeader } from "@/components/repositories/header";
import { RepositoriesTable } from "@/components/repositories/repositories-table";

export default function RepositoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <RepositoriesHeader />
          <RepositoriesTable />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}