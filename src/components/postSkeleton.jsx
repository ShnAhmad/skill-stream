import React from "react";

export default function PostSkeleton() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px] px-4 md:px-6 py-12 md:py-16 lg:py-24 animate-pulse">
        <div className="flex flex-col w-full gap-5">
          {/* Title */}
          <div className="h-8 w-2/3 bg-[var(--color-secondary-900)] rounded"></div>

          {/* User row */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[var(--color-secondary-900)]"></div>
              <div className="h-4 w-24 bg-[var(--color-secondary-900)] rounded"></div>
            </div>
            <div className="h-4 w-32 bg-[var(--color-secondary-900)] rounded"></div>
          </div>

          {/* Image */}
          <div className="w-full max-h-96 h-72 bg-[var(--color-secondary-900)] rounded-xl"></div>

          {/* Content lines */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="h-4 w-full bg-[var(--color-secondary-900)] rounded"></div>
            <div className="h-4 w-5/6 bg-[var(--color-secondary-900)] rounded"></div>
            <div className="h-4 w-2/3 bg-[var(--color-secondary-900)] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
