// src/pages/AboutPage.tsx
// About Page which explains the benefits of using flashcards for learning.

import {
  AcademicCapIcon,
  BoltIcon,
  ClockIcon,
  BookOpenIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

export default function AboutPage() {
  // Feature list data for scroll cards
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Active Recall",
      text: "Flashcards force your brain to actively retrieve information, strengthening long-term memory far more effectively than passive reading.",
    },
    {
      icon: BoltIcon,
      title: "Eliminates Passive Learning",
      text: "Reading notes feels productive, but the brain doesn't retain much. Flashcards require you to test yourself, which makes learning stick.",
    },
    {
      icon: ClockIcon,
      title: "Spaced Repetition",
      text: "Reviewing cards over time dramatically reduces forgetting. It's one of the most powerful evidence-based learning methods.",
    },
    {
      icon: BookOpenIcon,
      title: "Learn at Your Own Pace",
      text: "Whether you want to fly through easy cards or slow down for harder ones, flashcards adapt to you—not the other way around.",
    },
    {
      icon: CheckBadgeIcon,
      title: "Versatile for Any Subject",
      text: "From languages to coding, medicine, definitions, formulas, and more—flashcards work for almost everything.",
    },
  ];

  return (
    <div
      className="px-6 py-10 
      bg-gradient-to-b 
      from-sky-200 
      to-white
      text-slate-900
      dark:bg-gradient-to-b
      dark:from-slate-900 
      dark:to-black
      dark:text-white"
    >
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Learn Better. Remember More.
        </h1>
        <p
          className="text-lg 
         text-slate-600 
         dark:text-slate-400"
        >
          Flashcards are one of the most powerful, research-backed tools for
          learning. Here's why they work so well.
        </p>
      </section>

      {/* Scroll Stack Section */}
      <section className="space-y-6 max-w-2xl mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="
                p-5 rounded-xl
                bg-white 
                dark:bg-slate-800
                shadow-[0_2px_10px_rgba(0,0,0,0.1)]
                dark:shadow-[0_2px_10px_rgba(0,0,0,0.4)]
                border 
                border-slate-200 
                dark:border-slate-700
                flex gap-4
                transition-transform
                hover:scale-[1.05]"
            >
              <div>
                <Icon
                  className="w-8 h-8 flex-shrink-0
                  text-sky-700 
                  dark:text-sky-300"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p
                  className="leading-relaxed
                  text-slate-600 
                  dark:text-slate-400"
                >
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
