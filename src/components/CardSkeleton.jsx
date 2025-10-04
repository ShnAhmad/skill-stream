import React from "react";

const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-[var(--color-secondary-900)] h-40 rounded-xl"
        ></div>
      ))}
    </div>
  );
};

export default CardSkeleton;
