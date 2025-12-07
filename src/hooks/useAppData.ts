// src/hooks/useAppData.ts
// Custom React hook to manage app data (decks and cards)

import { useState } from "react";
import type { AppData, Deck, Card } from "../types/deck";
import {
  loadOrInitializeData,
  saveAppData,
  clearAppData,
} from "../utils/storage";

export function useAppData() {
  // Initialize state, empty if storage has nothing
  const [appData, setAppData] = useState<AppData>(() => loadOrInitializeData());

  // Helper to update and persist
  function updateAppData(updater: (prev: AppData) => AppData) {
    setAppData((prev) => {
      const next = updater(prev);
      saveAppData(next);
      return next;
    });
  }

  // Decks array
  const decks = appData.decks;

  // Select deck
  function selectDeck(deckId: string) {
    updateAppData((prev) => ({
      ...prev,
      lastOpenedDeckId: deckId,
    }));
  }

  // Deck Action: Add deck
  function addDeck(name: string, description?: string) {
    const now = new Date().toISOString();

    const newDeck: Deck = {
      id: crypto.randomUUID(),
      name: name.trim(),
      description: description?.trim() || undefined,
      createdAt: now,
      updatedAt: now,
      cards: [],
    };

    updateAppData((prev) => ({
      ...prev,
      decks: [...prev.decks, newDeck],
      lastOpenedDeckId: newDeck.id,
    }));
  }

  // Deck Action: Delete a deck
  function deleteDeck(deckId: string) {
    updateAppData((prev) => {
      const remaining = prev.decks.filter((d) => d.id !== deckId);

      const newLastOpened =
        prev.lastOpenedDeckId === deckId
          ? remaining[0]?.id
          : prev.lastOpenedDeckId;

      return {
        ...prev,
        decks: remaining,
        lastOpenedDeckId: newLastOpened,
      };
    });
  }

  // Deck Action: Update a deck
  function updateDeck(
    deckId: string,
    updates: { name?: string; description?: string }
  ) {
    const now = new Date().toISOString();

    updateAppData((prev) => ({
      ...prev,
      decks: prev.decks.map((deck) =>
        deck.id === deckId
          ? {
              ...deck,
              name: updates.name?.trim() ?? deck.name,
              description:
                updates.description !== undefined
                  ? updates.description.trim() || undefined
                  : deck.description,
              updatedAt: now,
            }
          : deck
      ),
    }));
  }

  // Card Action: Add card
  function addCard(deckId: string, question: string, answer: string) {
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.trim();
    if (!trimmedQuestion || !trimmedAnswer) return;

    const newCard: Card = {
      id: crypto.randomUUID(),
      question: trimmedQuestion,
      answer: trimmedAnswer,
    };

    const now = new Date().toISOString();

    updateAppData((prev) => ({
      ...prev,
      decks: prev.decks.map((deck) =>
        deck.id === deckId
          ? {
              ...deck,
              updatedAt: now,
              cards: [...deck.cards, newCard],
            }
          : deck
      ),
    }));
  }

  // Card Action: Delete card
  function deleteCard(deckId: string, cardId: string) {
    const now = new Date().toISOString();

    updateAppData((prev) => ({
      ...prev,
      decks: prev.decks.map((deck) =>
        deck.id === deckId
          ? {
              ...deck,
              updatedAt: now,
              cards: deck.cards.filter((card) => card.id !== cardId),
            }
          : deck
      ),
    }));
  }

  // Card Action: Update card
  function updateCard(
    deckId: string,
    cardId: string,
    updates: { question?: string; answer?: string }
  ) {
    const now = new Date().toISOString();

    updateAppData((prev) => ({
      ...prev,
      decks: prev.decks.map((deck) => {
        if (deck.id !== deckId) return deck;

        return {
          ...deck,
          updatedAt: now,
          cards: deck.cards.map((card) =>
            card.id === cardId
              ? {
                  ...card,
                  question:
                    updates.question !== undefined
                      ? updates.question.trim()
                      : card.question,
                  answer:
                    updates.answer !== undefined
                      ? updates.answer.trim()
                      : card.answer,
                }
              : card
          ),
        };
      }),
    }));
  }

  // Reset App
  function resetAppData() {
    clearAppData(); // remove from localStorage
    const empty: AppData = { decks: [] };
    saveAppData(empty);
    setAppData(empty);
  }

  return {
    appData,
    decks,
    selectDeck,
    addDeck,
    deleteDeck,
    updateDeck,
    addCard,
    deleteCard,
    updateCard,
    resetAppData,
  };
}
