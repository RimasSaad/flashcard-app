// src/hooks/useTheme.ts
// Custom hook to manage theme (light/dark) preference

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;

    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  // Function to toggle theme
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Apply to <html>
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Save to localStorage
    localStorage.setItem("theme", newTheme);
  }

  return { theme, toggleTheme };
}
