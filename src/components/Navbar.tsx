// src/components/Navbar.tsx
// Navbar component with theme toggle and navigation links

import { Link, NavLink } from "react-router-dom";

// Logo & Icons
import logoLight from "../assets/flash-card-Light.png";
import logoDark from "../assets/flash-card-Dark.png";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Hooks
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="w-full px-6 py-3 flex items-center justify-between border-b 
      border-sky-300
      dark:border-slate-700"
    >
      {/* Logo & App Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={theme === "dark" ? logoDark : logoLight} />

        <span
          className="text-2xl font-semibold 
          text-sky-900
          dark:text-white"
        >
          Flashcards
        </span>
      </Link>

      {/* Active Nav links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors
                ${
                  isActive
                    ? "text-sky-600 dark:text-white underline underline-offset-4"
                    : "text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
                }
            `
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium transition-colors
                ${
                  isActive
                    ? "text-sky-600 dark:text-white underline underline-offset-4"
                    : "text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
                }
            `
          }
        >
          About
        </NavLink>
      </div>

      {/* Theme Toggle */}
      <div
        className="flex justify-end p-4
        bg-sky-200
        dark:bg-slate-900"
      >
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-between w-20 h-10 px-2 rounded-full border transition-colors
          bg-sky-200 
          border-sky-300 
          dark:bg-slate-800
          dark:border-slate-600"
        >
          {/* Moon icon */}
          <MoonIcon
            className={`w-5 h-5 
              ${theme === "dark" ? "text-white" : "text-slate-600"}
            `}
          />

          {/* Sun icon */}
          <SunIcon
            className={`w-5 h-5
              ${theme === "light" ? "text-yellow-500" : "text-slate-400"}
            `}
          />

          {/* Sliding bar */}
          <span
            className={`absolute left-1 w-8 h-8 rounded-full transition-all duration-300 border
              bg-white/40
              border-sky-300
              dark:bg-slate-700/40
              dark:border-slate-600
              ${theme === "dark" ? "translate-x-0" : "translate-x-10"}
            `}
          ></span>
        </button>
      </div>
    </nav>
  );
}
