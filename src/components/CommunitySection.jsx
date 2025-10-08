import React from "react";

export default function CommunitySection() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary-500)]">
          Built for Developers, by Developers
        </h2>
        <p className="text-[var(--color-secondary-300)] mb-8">
          Skill Stream connects developers worldwide — whether you’re learning
          your first language or building your next big project, you’ll find
          stories that resonate and inspire.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {["React", "Node.js", "Ruby", "Python", "Next.js", "NestJS"].map(
            (tech, i) => (
              <div
                key={i}
                className="bg-[var(--color-secondary-800)] text-[var(--color-secondary-200)] px-4 py-3 rounded-full text-sm font-medium hover:bg-[var(--color-primary-600)] hover:text-white transition-all duration-300"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
