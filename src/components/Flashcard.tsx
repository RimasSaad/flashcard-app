//src/components/Flashcard.tsx
// Flashcard component to handle the display and flipping of a flashcard

// A vertical-flip flashcard.
// - Click the card to flip.
// - Front shows the question.
// - Back shows the answer.
// - Resets to front when the card content changes.

import { useState, useEffect } from "react";

interface FlashcardProps {
  question: string;
  answer: string;
}

export default function Flashcard({ question, answer }: FlashcardProps) {
  // State to Track if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Moving to the next card resets to front side
  useEffect(() => {
    setIsFlipped(false);
  }, [question, answer]);

  return (
    // Outer container for perspective
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="w-full min-h-[220px] [perspective:1000px] cursor-pointer select-none"
      aria-label="Flashcard"
      role="button"
    >
      {/* Inner rotation panel: rotateX(180deg) when flipped*/}
      <div
        className={[
          "relative w-full h-full min-h-[220px]", // basic size & position rules
          "transition-transform duration-300 ease-in-out", // smooth flip transition
          "[transform-style:preserve-3d]", // enable 3D space
          isFlipped ? "[transform:rotateX(180deg)]" : "", // flip based on state "isFlipped"
        ].join(" ")}
      >
        {/* Front side (question) */}
        <div
          className={[
            "absolute inset-0", // front face covers entire card
            "flex items-center justify-center text-center", // center the question
            " border rounded-xl p-6 bg-sky-600 border:sky-700 dark:bg-slate-800 dark:border-slate-700", // visual styles
            "text-lg text-slate-100", // text styles
            "[backface-visibility:hidden]", // hide when flipped, to prevent overlapping
          ].join(" ")}
        >
          {question}
        </div>
        {/* Back side (answer) */}
        <div
          className={[
            "absolute inset-0", // front face covers entire card
            "flex items-center justify-center text-center", // center the question
            "border rounded-xl p-6 bg-sky-500 border:sky-600 dark:border-slate-500 dark:bg-slate-600", // visual styles
            "text-lg text-slate-100", // text styles
            "[transform:rotateX(180deg)]", // rotate back face
            "[backface-visibility:hidden]", // hide when flipped, to prevent overlapping
          ].join(" ")}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
