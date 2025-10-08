import React from "react";

export default function PostSkeleton() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px] px-4 md:px-6 py-12 md:py-16 lg:py-24 animate-pulse">
        <div className="flex flex-col w-full gap-6">
          {/* Title */}
          <div className="h-8 w-3/4 bg-[var(--color-secondary-700)] rounded-xl"></div>

          {/* User Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--color-secondary-700)]"></div>
              <div className="h-4 w-24 sm:w-32 bg-[var(--color-secondary-700)] rounded"></div>
            </div>
            <div className="h-4 w-32 sm:w-40 bg-[var(--color-secondary-700)] rounded"></div>
          </div>

          {/* Image */}
          <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 bg-[var(--color-secondary-800)] rounded-2xl"></div>

          {/* Content Lines */}
          <div className="flex flex-col gap-3 mt-6">
            <div className="h-4 w-full bg-[var(--color-secondary-700)] rounded"></div>
            <div className="h-4 w-5/6 bg-[var(--color-secondary-700)] rounded"></div>
            <div className="h-4 w-2/3 bg-[var(--color-secondary-700)] rounded"></div>
            <div className="h-4 w-1/2 bg-[var(--color-secondary-700)] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
