// src/components/FlashcardList.tsx
// Renders a list of flashcards inside a deck.s

import type { Card } from "../types/deck";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

interface FlashcardListProps {
  cards: Card[];
  deckId: string;

  onEdit: (cardId: string) => void;
  onDelete: (deckId: string, cardId: string) => void;
}

export default function FlashcardList({
  cards,
  deckId,
  onEdit,
  onDelete,
}: FlashcardListProps) {
  return (
    <div className="space-y-3">
      {/* Section title */}
      <h2 className="text-xl font-semibold">Cards</h2>

      {/* Empty state */}
      {cards.length === 0 && (
        <p className="text-sky-900 dark:text-slate-400">No cards yet...</p>
      )}

      {/* Card list */}
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative border rounded-xl p-4 transition-transform hover:scale-[1.05]
          border-sky-800 
          bg-sky-100
          dark:bg-slate-900
          dark:border-slate-700
          dark:hover:bg-slate-800
          "
        >
          {/* Actions buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            {/* Edit */}
            <button
              onClick={() => onEdit(card.id)}
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

            {/* Delete */}
            <button
              onClick={() => onDelete(deckId, card.id)}
              className="p-1 rounded 
              hover:bg-sky-200 
              dark:hover:bg-slate-700"
            >
              <TrashIcon
                className="w-4 h-4 
                text-red-500  
                hover:text-red-600
                dark:text-red-400 
                dark:hover:text-red-300"
              />
            </button>
          </div>

          {/* Card content */}
          <p className="font-medium">{card.question}</p>
          <p
            className="text-sm mt-1
            text-slate-600
            dark:text-slate-400"
          >
            {card.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
