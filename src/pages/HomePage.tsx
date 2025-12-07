// src/pages/HomePage.tsx
// Home page component for the flashcards app

import { useState } from "react";
import type { Deck } from "../types/deck";
import AddDeckForm from "../components/AddDeckForm";
import EditDeckForm from "../components/EditDeckForm";
import DeckListItem from "../components/DeckListItem";

interface HomePageProps {
  decks: Deck[];
  addDeck: (name: string, description?: string) => void;
  deleteDeck: (deckId: string) => void;
  updateDeck: (
    deckId: string,
    updates: { name?: string; description?: string }
  ) => void;
  selectDeck: (deckId: string) => void;
  resetAppData: () => void;
}

export default function HomePage({
  decks,
  addDeck,
  deleteDeck,
  updateDeck,
  resetAppData,
}: HomePageProps) {
  // EditDeckForm state
  const [editingDeckId, setEditingDeckId] = useState<string | null>(null);
  const editingDeck = decks.find((d) => d.id === editingDeckId) || null;

  return (
    <div
      className="
      min-h-screen p-6
      bg-gradient-to-b 
      from-sky-200 
      to-white
      text-slate-900
      dark:bg-gradient-to-b
      dark:from-slate-900 
      dark:to-black
      dark:text-white"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold">Home Page</h1>

        {/* Add Deck Form */}
        <AddDeckForm onAdd={addDeck} />

        {/* Edit Deck Form */}
        {editingDeck && (
          <EditDeckForm
            deck={editingDeck}
            onUpdate={updateDeck}
            onCancel={() => setEditingDeckId(null)}
          />
        )}

        {/* Deck List */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Your Decks</h2>

          {decks.length === 0 && (
            <p className="text-slate-600 dark:text-slate-400">
              No decks yet...
            </p>
          )}

          {decks.map((deck) => (
            <DeckListItem
              key={deck.id}
              deck={deck}
              to={`/deck/${deck.id}`}
              onEdit={(id) => setEditingDeckId(id)}
              onDelete={deleteDeck}
            />
          ))}
        </div>

        {/* Reset Button */}
        <button
          onClick={resetAppData}
          className="text-sm underline
          text-red-500  
          hover:text-red-600 
          dark:text-red-400 
          dark:hover:text-red-300"
        >
          Reset All Data
        </button>
      </div>
    </div>
  );
}
