import React from "react";

const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-[var(--color-secondary-900)] h-40 rounded-xl"
        ></div>
      ))}
    </div>
  );
};

export default CardSkeleton;
