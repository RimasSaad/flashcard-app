# **Flashcards App**

A clean and simple flashcards web application built with **React, TypeScript, Tailwind CSS, and LocalStorage**.

Create decks, add cards, study with a flip animation, and switch between light/dark themes — all stored directly in your browser.

---

## Live Demo

> Vercel Link:
> https://flashcard-fr3xz602w-rimassaads-projects.vercel.app/

## Features

- **Deck Management**
  - Create new decks
  - Edit deck name & description
  - Delete decks
- **Card Management**
  - Add cards with question (front) + answer (back)
  - Edit existing cards
  - Delete cards
- **Study Mode**
  - Flip card animation
  - Click to reveal the answer
  - Next/Previous buttons
  - Progress indicator (e.g. `Card 3 of 10` )
  - Simple study timer
- **UI Enhancement**
  - Beautiful light/dark themes
  - Theme toggle with smooth animation
  - Dynamic Navbar with active link styling
  - Breadcrumbs showing navigation path

> Everything is saved automatically using **LocalStorage**, so your decks stay even after closing the page.

---

## Tech Stack

- **React + TypeScript**
- **Vite** (lightweight build tool)
- **Tailwind CSS** (styling)
- **React Router** (page navigation)
- **Heroicons** (icons)
- **LocalStorage API** (persistent data)

---

## **Getting Started**

1. **Clone the repository**

   ```
   git clone https://github.com/RimasSaad/flashcards-app.git
   cd flashcards-app
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start the development server**

   ```
   npm run dev
   ```

The app will run at:

`http://localhost:5173`

---

## **Project Structure**

```
src/
 ├── components/        # Navbar, Breadcrumbs, Flashcard, Forms, etc.
 ├── pages/             # Home, Deck, Study, About
 ├── hooks/             # useAppData(), useTheme()
 ├── utils/             # LocalStorage helpers
 ├── types/             # TypeScript models (Deck, Card, AppData)
 ├── assets/            # Logos (light/dark)
 └── App.tsx            # App entry + routing

```

---

## **Key Architectural Highlights**

- **Custom Data Hook (`useAppData`)**
  Manages all app data:
  - decks
  - cards
  - updates
  - deletions
  - last opened deck
  - full sync with LocalStorage
- **Custom Theme Hook (`useTheme`)**
  Handles:
  - reading saved theme
  - applying `dark` class to `<html>`
  - toggle UI with icons
  - persistent user preference
- **Routing Structure**
  ```
  "/"                     → Home
  "/deck/:deckId"         → Deck Page
  "/deck/:deckId/study"   → Study Mode
  "/about"                → About Page
  ```
- **Clean Flashcard UI**
  - 3D flip animation
  - smooth transitions
  - mobile-friendly interaction

---

## **Project Motivation**

This app was built as a practice project to explore:

- clean component architecture
- React + TypeScript patterns
- reusable custom hooks
- responsive UI with Tailwind
- real-world state management using LocalStorage

It’s both a functional tool and a learning project designed to showcase modern front-end development practices.
