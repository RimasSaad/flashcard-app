// src/utils/storage.ts
// Functions to handle saving/loading app data to/from localStorage

import type { AppData } from "../types/deck";

const STORAGE_KEY = "flashcards_app_data";

// Load data from localStorage
export function loadAppData(): AppData | null {
  const json = localStorage.getItem(STORAGE_KEY);

  if (!json) {
    return null; // storage empty → let initializer decide
  }

  try {
    return JSON.parse(json);
  } catch {
    console.error("Corrupted storage — resetting.");
    return null; // corrupted → treated as empty
  }
}

// Save updated data
export function saveAppData(data: AppData) {
  try {
    const raw = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, raw);
  } catch (error) {
    console.error("Failed to save app data:", error);
  }
}

// Clear everything
export function clearAppData() {
  localStorage.removeItem(STORAGE_KEY);
}

// Create EMPTY starting app data
export function createEmptyAppData(): AppData {
  return {
    decks: [],
    lastOpenedDeckId: undefined,
  };
}

// Load storage OR return empty app data
export function loadOrInitializeData(): AppData {
  const saved = loadAppData();

  if (saved) return saved;

  const empty = createEmptyAppData();
  saveAppData(empty);
  return empty;
}
