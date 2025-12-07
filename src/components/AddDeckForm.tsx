// src/components/AddCardForm.tsx
// Form component to add a new card to a deck

import { useState } from "react";

interface AddDeckFormProps {
  onAdd: (name: string, description?: string) => void;
}

export default function AddDeckForm({ onAdd }: AddDeckFormProps) {
  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  function handleSubmit(e: React.FormEvent) {
    // Prevent default form submission
    e.preventDefault();

    // Trim inputs
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    // Validate name
    if (!trimmedName) {
      alert("Deck name is required.");
      return;
    }

    // Call onAdd prop
    onAdd(trimmedName, trimmedDescription || undefined);

    // Reset form fields
    setName("");
    setDescription("");
  }

  return (
    // Add Deck Form
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
        Add a New Deck
      </h2>

      {/* Deck Name Input */}
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
          placeholder="Enter deck name..."
          className="w-full p-2 rounded border focus:outline-none 
          border-sky-800 
          focus:border-sky-500
          bg-slate-50
          dark:bg-slate-900 
          dark:border-slate-600 
          dark:focus:border-slate-50"
        />
      </div>
      {/* Deck Description Input */}
      <div>
        <label
          className="block text-sm mb-1
          text-sky-900
          dark:text-slate-300"
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description is optional..."
          className="w-full p-2 rounded border focus:outline-none 
          border-sky-800 
          focus:border-sky-500
          bg-slate-50
          dark:bg-slate-900 
          dark:border-slate-600 
          dark:focus:border-slate-50"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-3 py-1 rounded font-small
        text-white 
        bg-blue-700 
        hover:bg-blue-800
        dark:bg-blue-600 
        dark:hover:bg-blue-500"
      >
        Add Deck
      </button>
    </form>
  );
}
