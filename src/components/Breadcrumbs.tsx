// src/components/Breadcrumbs.tsx
// Breadcrumbs component to display navigation path

import { useMatch, useParams, Link } from "react-router-dom";
import type { Deck } from "../types/deck";
import { ChevronRightIcon, BookOpenIcon } from "@heroicons/react/24/solid";

interface BreadcrumbsProps {
  decks: Deck[];
}

export default function Breadcrumbs({ decks }: BreadcrumbsProps) {
  const { deckId } = useParams();

  const isDeckPage = useMatch("/deck/:deckId");
  const isStudyPage = useMatch("/deck/:deckId/study");

  const deck = deckId ? decks.find((d) => d.id === deckId) : null;

  // Nothing on home page
  if (!isDeckPage && !isStudyPage) return null;

  return (
    <nav className="text-sm mb-4 px-6 py-3">
      <ol
        className="flex items-center gap-2 flex-wrap 
       text-sky-900 
       dark:text-slate-300"
      >
        {/* Deck icon + name */}
        {deck && (
          <li className="flex items-center gap-1 font-medium">
            <BookOpenIcon
              className="w-4 h-4 
             text-sky-700 
             dark:text-slate-300"
            />
            <Link
              to={`/deck/${deck.id}`}
              className="hover:underline 
              hover:text-sky-600 
              dark:hover:text-sky-300"
            >
              {deck.name}
            </Link>
          </li>
        )}

        {/* Arrow + Study */}
        {isStudyPage && (
          <>
            <ChevronRightIcon
              className="w-4 h-4 
             text-sky-700 
             dark:text-slate-400"
            />
            <li
              className="
              text-slate-500 
              dark:text-slate-400"
            >
              Study
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
