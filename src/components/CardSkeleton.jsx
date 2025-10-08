import React from "react";

const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="relative animate-pulse bg-[var(--color-secondary-900)] rounded-2xl h-48 overflow-hidden shadow-md border border-[var(--color-secondary-800)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-secondary-700)]/20 to-transparent animate-[shimmer_1.8s_infinite]" />

          <div className="p-4 space-y-3">
            <div className="h-24 bg-[var(--color-secondary-800)] rounded-lg"></div>
            <div className="h-4 bg-[var(--color-secondary-700)] rounded w-3/4"></div>
            <div className="h-3 bg-[var(--color-secondary-800)] rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
