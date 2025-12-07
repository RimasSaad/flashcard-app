// src/components/EditDeckForm.tsx
// Component for editing an existing deck

import { useState } from "react";
import type { Deck } from "../types/deck";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface EditDeckFormProps {
  deck: Deck;
  onUpdate: (
    deckId: string,
    updates: { name?: string; description?: string }
  ) => void;
  onCancel: () => void;
}

export default function EditDeckForm({
  deck,
  onUpdate,
  onCancel,
}: EditDeckFormProps) {
  // Form state
  const [name, setName] = useState(deck.name);
  const [description, setDescription] = useState(deck.description ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    if (!trimmedName) {
      alert("Deck name cannot be empty.");
      return;
    }

    onUpdate(deck.id, {
      name: trimmedName,
      description: trimmedDescription || undefined,
    });

    onCancel(); // Close form after saving
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
      {/* Header and Close button */}
      <div className="flex items-center justify-between">
        <h2
          className="text-m font-semibold 
        text-sky-800
        dark:text-slate-200"
        >
          Edit deck:{" "}
          <span
            className="text-sky-700 
          dark:text-slate-100"
          >
            {deck.name}
          </span>
        </h2>

        <button
          type="button"
          onClick={onCancel}
          className="p-1 rounded 
          hover:bg-sky-200
          dark:hover:bg-slate-700"
          aria-label="Close edit deck form"
        >
          <XMarkIcon
            className="w-5 h-5 
            text-slate-600
            dark:text-slate-400"
          />
        </button>
      </div>
      {/* Deck Name Input*/}
      <div>
        <label
          className="block text-sm mb-1
        text-sky-900
        dark:text-slate-300"
        >
          Deck Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded border focus:outline-none 
          border-sky-800
          focus:border-sky-500
          bg-slate-50
          dark:bg-slate-900 
          dark:border-slate-600  
          dark:focus:border-slate-50"
        />
      </div>
      {/* Description Input*/}
      <div>
        <label
          className="block text-sm mb-1
          text-sky-900
          dark:text-slate-300"
        >
          Description (optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded border focus:outline-none 
          border-sky-800
          focus:border-sky-500
          bg-slate-50
          dark:bg-slate-900 
          dark:border-slate-600  
          dark:focus:border-slate-50"
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
