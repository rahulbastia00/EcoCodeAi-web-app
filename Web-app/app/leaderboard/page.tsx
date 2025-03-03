import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LeaderboardHeader } from "@/components/leaderboard/header";
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { LeaderboardStats } from "@/components/leaderboard/leaderboard-stats";

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <LeaderboardHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <LeaderboardStats />
          </div>
          
          <div className="mt-8">
            <LeaderboardTable />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}