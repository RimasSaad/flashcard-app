// src/components/AddCardForm.tsx
// Form component to add a new card to a deck

import { useState, useRef } from "react";

interface AddCardFormProps {
  deckId: string;
  onAddCard: (deckId: string, question: string, answer: string) => void;
}

export default function AddCardForm({ deckId, onAddCard }: AddCardFormProps) {
  // Form state
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const questionRef = useRef<HTMLTextAreaElement | null>(null);

  // Handle form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const qTrim = question.trim();
    const aTrim = answer.trim();

    // Validate inputs
    if (!qTrim || !aTrim) {
      alert("Both question and answer are required.");
      return;
    }

    onAddCard(deckId, qTrim, aTrim);

    // Reset fields
    setQuestion("");
    setAnswer("");

    // Auto-focus back to question for fast adding
    questionRef.current?.focus();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-xl p-4 space-y-4
      border-sky-800
      bg-sky-100
      dark:border-slate-700
      dark:bg-slate-800"
    >
      <h2
        className="text-sm font-semibold 
      text-sky-800
      dark:text-slate-200"
      >
        Add a New Card
      </h2>

      {/* Question Input */}
      <div>
        <label
          className="block text-sm mb-1 
        text-sky-800
        dark:text-slate-300"
        >
          Question
        </label>
        <textarea
          ref={questionRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question..."
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
        text-sky-800
        dark:text-slate-300"
        >
          Answer
        </label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter answer..."
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

      <button
        type="submit"
        className="px-3 py-1 rounded font-medium
        text-white
        bg-blue-700
        hover:bg-blue-800
        dark:bg-blue-600
        dark:hover:bg-blue-500"
      >
        Add Card
      </button>
    </form>
  );
}
