// src/components/DeckListItem.tsx
// Component to display a single deck item in the deck list

import { Link } from "react-router-dom";
import type { Deck } from "../types/deck";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

interface DeckListItemProps {
  deck: Deck;
  to: string;
  onEdit: (deckId: string) => void;
  onDelete: (deckId: string) => void;
}

export default function DeckListItem({
  deck,
  to,
  onEdit,
  onDelete,
}: DeckListItemProps) {
  return (
    <div
      className="group relative border rounded-xl p-4 transition-transform hover:scale-[1.05]
      border-sky-800 
      bg-sky-100
      dark:bg-slate-900
      dark:border-slate-700 
      dark:hover:bg-slate-800"
    >
      {/* Deck item is clickable */}
      <Link to={to} className="block">
        {/* Deck Name and Description */}
        <p className="font-medium">{deck.name}</p>
        <p className="text-sm text-sky-900 dark:text-slate-400">
          {deck.description || " "}
        </p>
        {/* Deck Cards length */}
        <p className="text-slate-500 text-sm mt-1">
          {deck.cards.length} {deck.cards.length === 1 ? "card" : "cards"}
        </p>
      </Link>

      {/* Edit and Delete buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        {/* Edit Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onEdit(deck.id);
          }}
          className="p-1 rounded
          hover:bg-sky-200
          dark:hover:bg-slate-700"
        >
          <PencilIcon
            className="w-4 h-4 
          text-sky-600
          hover:text-sky-700
          dark:text-slate-400 
          dark:hover:text-slate-200"
          />
        </button>

        {/* Delete Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onDelete(deck.id);
          }}
          className="p-1 rounded
          hover:bg-sky-200
          dark:hover:bg-slate-700"
        >
          <TrashIcon
            className="w-4 h-4 
          text-red-500  
          hover:text-red-600
          dark:text-red-400 
          dark:hover:text-red-300
          "
          />
        </button>
      </div>
    </div>
  );
}
