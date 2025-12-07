// src/types/deck.ts
// Types for Deck and Card objects

export interface Card {
  id: string; // Unique ID for the card
  question: string; // Front side
  answer: string; // Back side
}

export interface Deck {
  id: string; // Unique ID for the deck
  name: string; // Deck title
  description?: string; // Optional description
  createdAt: string; // Creation timestamp
  updatedAt: string; // Last updated timestamp
  cards: Card[]; // Array of cards in this deck
}

export interface AppData {
  decks: Deck[]; // Array of all decks
  lastOpenedDeckId?: string; // ID of the last opened deck
}
