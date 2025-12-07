// src/components/AppCard.tsx
// Reusable card container with consistent styling.

import type { ReactNode } from "react";

interface AppCardProps {
  children: ReactNode;
}

export default function AppCard({ children }: AppCardProps) {
  return (
    <div
      className={`
        rounded-xl 
        bg-white 
        dark:bg-slate-800
        border 
        border-sky-200 
        dark:border-slate-700
        shadow-md 
        p-4
      `}
    >
      {children}
    </div>
  );
}
