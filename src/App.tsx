// src/App.tsx

import { Routes, Route } from "react-router-dom";

// Components
import MainLayout from "./components/MainLayout";

// Hooks
import { useAppData } from "./hooks/useAppData";

// Pages
import HomePage from "./pages/HomePage";
import DeckPage from "./pages/DeckPage";
import StudyPage from "./pages/StudyPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const {
    decks,
    selectDeck,
    addDeck,
    deleteDeck,
    updateDeck,
    addCard,
    deleteCard,
    updateCard,
    resetAppData,
  } = useAppData();

  return (
    <div
      className="min-h-screen 
     bg-sky-200 
     dark:bg-slate-900"
    >
      {/* Layout Route */}
      <Routes>
        <Route element={<MainLayout decks={decks} />}>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <HomePage
                decks={decks}
                addDeck={addDeck}
                deleteDeck={deleteDeck}
                updateDeck={updateDeck}
                selectDeck={selectDeck}
                resetAppData={resetAppData}
              />
            }
          />

          {/* Deck page */}
          <Route
            path="/deck/:deckId"
            element={
              <DeckPage
                decks={decks}
                addCard={addCard}
                deleteCard={deleteCard}
                updateCard={updateCard}
              />
            }
          />

          {/* Study page */}
          <Route
            path="/deck/:deckId/study"
            element={<StudyPage decks={decks} />}
          />

          {/* About page */}
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}
