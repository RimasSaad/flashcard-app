// src/pages/DeckPage.tsx
// Deck page component for the flashcards app

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Deck } from "../types/deck";

import FlashcardList from "../components/FlashcardList";
import AddCardForm from "../components/AddCardForm";
import EditCardForm from "../components/EditCardForm";

interface DeckPageProps {
  decks: Deck[];
  addCard: (deckId: string, question: string, answer: string) => void;
  deleteCard: (deckId: string, cardId: string) => void;
  updateCard: (
    deckId: string,
    cardId: string,
    updates: { question?: string; answer?: string }
  ) => void;
}

export default function DeckPage({
  decks,
  addCard,
  deleteCard,
  updateCard,
}: DeckPageProps) {
  const { deckId } = useParams();
  const navigate = useNavigate();

  // Find the deck by ID
  const deck = decks.find((d) => d.id === deckId);

  if (!deck) {
    return (
      <div
        className="min-h-screen p-6
        bg-gradient-to-b 
        from-sky-200 
        to-white
        dark:bg-gradient-to-b
        dark:from-slate-900 
        dark:to-black
        dark:text-white"
      >
        <p>Deck not found.</p>
      </div>
    );
  }

  // EditCardForm state
  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const editingCard = deck.cards.find((c) => c.id === editingCardId) || null;

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
        {/* Deck Title */}
        <h1 className="text-3xl font-bold">{deck.name}</h1>
        <p
          className="
        text-slate-600
        dark:text-slate-400"
        >
          {deck.description}
        </p>

        {/* Deck Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/deck/${deck.id}/study`)}
            className="px-3 py-1 rounded
            text-white
            bg-blue-700
            hover:bg-blue-800
            dark:bg-blue-600
            dark:hover:bg-blue-500"
          >
            Study
          </button>
        </div>

        {/* Add Card Form */}
        <AddCardForm deckId={deck.id} onAddCard={addCard} />

        {/* Edit Card Form */}
        {editingCard && (
          <EditCardForm
            deckId={deck.id}
            card={editingCard}
            onUpdateCard={updateCard}
            onCancel={() => setEditingCardId(null)}
          />
        )}

        {/* Flashcard List */}
        <FlashcardList
          cards={deck.cards}
          deckId={deck.id}
          onEdit={(id) => setEditingCardId(id)}
          onDelete={deleteCard}
        />
      </div>
    </div>
  );
}
