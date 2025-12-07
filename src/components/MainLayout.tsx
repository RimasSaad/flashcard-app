// src/components/MainLayout.tsx

import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import { Outlet } from "react-router-dom";
import type { Deck } from "../types/deck";

interface MainLayoutProps {
  decks: Deck[];
}

export default function MainLayout({ decks }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-sky-200 dark:bg-slate-900">
      <Navbar />
      <Breadcrumbs decks={decks} />

      <Outlet />
    </div>
  );
}
