"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { DashboardHome } from "@/components/pages/dashboard-home";
import { CellAtlasPage } from "@/components/pages/cell-atlas-page";

export default function HomePage() {
  const [page, setPage] = useState<"dashboard" | "atlas">("dashboard");

  return (
    <div className="app-shell">
      <Sidebar active={page} onNavigate={setPage} />
      <main className="app-main">
        <Topbar onOpenAtlas={() => setPage("atlas")} />
        <div className="app-content">
          {page === "dashboard" ? (
            <DashboardHome onOpenAtlas={() => setPage("atlas")} />
          ) : (
            <CellAtlasPage onBack={() => setPage("dashboard")} />
          )}
        </div>
      </main>
    </div>
  );
}
