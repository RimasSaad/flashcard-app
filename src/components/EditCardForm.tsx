// src/components/EditCardForm.tsx
// Form component to edit an existing card

import { useState } from "react";
import type { Card } from "../types/deck";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface EditCardFormProps {
  deckId: string;
  card: Card;
  onUpdateCard: (
    deckId: string,
    cardId: string,
    updates: { question?: string; answer?: string }
  ) => void;
  onCancel: () => void;
}

export default function EditCardForm({
  deckId,
  card,
  onUpdateCard,
  onCancel,
}: EditCardFormProps) {
  // Form state
  const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);

  // Handle form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const qTrim = question.trim();
    const aTrim = answer.trim();

    if (!qTrim || !aTrim) {
      alert("Both question and answer are required.");
      return;
    }

    onUpdateCard(deckId, card.id, {
      question: qTrim,
      answer: aTrim,
    });

    onCancel(); // close form
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-xl p-4 space-y-4 mt-3 
      bg-sky-100
      border-sky-800
      dark:border-slate-700
      dark:bg-slate-800 "
    >
      {/* Header and Close button */}
      <div className="flex items-center justify-between">
        <h2
          className="text-m font-semibold 
        text-sky-800
        dark:text-slate-200"
        >
          Edit card
        </h2>

        <button
          type="button"
          onClick={onCancel}
          className="p-1 rounded 
          hover:bg-sky-200
          dark:hover:bg-slate-700"
        >
          <XMarkIcon
            className="w-5 h-5 
            text-slate-600
            dark:text-slate-400"
          />
        </button>
      </div>

      {/* Question Input */}
      <div>
        <label
          className="block text-sm mb-1
          text-sky-900
          dark:text-slate-300"
        >
          Question
        </label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 rounded border focus:outline-none
          border-sky-800
          focus:border-sky-500
          bg-slate-50
          dark:bg-slate-900
          dark:border-slate-600
          dark:focus:border-slate-50"
          rows={2}
        />
      </div>

      {/* Answer Input */}
      <div>
        <label
          className="block text-sm mb-1
        text-sky-900
        dark:text-slate-300"
        >
          Answer
        </label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 rounded border focus:outline-none
          border-sky-800
          focus:border-sky-500
          bg-slate-50
          dark:bg-slate-900
          dark:border-slate-600
          dark:focus:border-slate-50"
          rows={2}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 text-sm rounded border 
          border-sky-700 
          hover:bg-sky-800
          hover:text-white
          dark:border-slate-600 
          dark:text-slate-200 
          dark:hover:bg-slate-700"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-3 py-1 text-sm rounded font-medium
          text-white
          bg-blue-700
          hover:bg-blue-800
          dark:bg-blue-600
          dark:hover:bg-blue-500"
        >
          Save changes
        </button>
      </div>
    </form>
  );
}
