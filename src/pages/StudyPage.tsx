// src/pages/StudyPage.tsx
// Study page component for the flashcards apps

import { useParams } from "react-router-dom";
import type { Deck } from "../types/deck";
import { useState, useEffect } from "react";

import Flashcard from "../components/Flashcard";

interface StudyPageProps {
  decks: Deck[];
}

export default function StudyPage({ decks }: StudyPageProps) {
  // Get deckId from URL params
  const { deckId } = useParams();

  const deck = decks.find((d) => d.id === deckId);

  if (!deck) {
    return (
      <div
        className="min-h-screen p-6
      bg-gradient-to-b 
      from-sky-200 
      to-white 
      text-sky-900
      dark:bg-gradient-to-b
      dark:from-slate-900
      dark:to-black
      dark:text-white"
      >
        <p>Deck not found.</p>
      </div>
    );
  }

  // State to track the current card index
  const [index, setIndex] = useState(0);

  const hasCards = deck.cards.length > 0;
  const card = hasCards ? deck.cards[index] : null;

  // Timer state
  const [seconds, setSeconds] = useState(0);

  // Start Timer when page mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  });

  // Time format mm:ss
  function formatTime(sec: number) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <div
      className="min-h-screen p-6
    bg-gradient-to-b 
      from-sky-200 
      to-white 
      text-sky-900
      dark:bg-gradient-to-b
      dark:from-slate-900
      dark:to-black
      dark:text-white"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Deck title */}
        <h1 className="text-3xl font-bold">{deck.name}</h1>

        {/* Progress */}
        {hasCards && (
          <div
            className="flex items-center gap-3
            text-slate-600
            dark:text-slate-400"
          >
            <span>
              Card {index + 1} / {deck.cards.length}
            </span>

            <span>•</span>

            <span>Time: {formatTime(seconds)}</span>
          </div>
        )}

        {/* Flashcard */}
        {!hasCards ? (
          <p
            className="mt-6
            text-slate-600
            dark:text-slate-400"
          >
            This deck has no cards yet.
          </p>
        ) : (
          <Flashcard question={card!.question} answer={card!.answer} />
        )}

        {/* Navigation controls */}
        {hasCards && (
          <div className="flex justify-between mt-4">
            {/* Back button */}
            <button
              onClick={() => setIndex((i) => i - 1)}
              disabled={index === 0}
              className="px-4 py-2 rounded disabled:opacity-50
              bg-sky-600
              text-white
              dark:bg-slate-700"
            >
              Back
            </button>
            <p
              className="self-center
              text-slate-600
              dark:text-slate-400"
            >
              Click card to flip
            </p>
            {/* Next button */}
            <button
              onClick={() => setIndex((i) => i + 1)}
              disabled={index === deck.cards.length - 1}
              className="px-4 py-2 rounded disabled:opacity-50
              bg-sky-600
              text-white
              dark:bg-slate-700"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
