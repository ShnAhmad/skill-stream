import React from "react";

export default function PostFormSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row animate-pulse gap-6">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 px-2 space-y-4">
        {/* Title input */}
        <div className="h-10 bg-[var(--color-secondary-700)] rounded-lg"></div>

        {/* Slug input */}
        <div className="h-10 bg-[var(--color-secondary-700)] rounded-lg"></div>

        {/* RTE (content editor) */}
        <div className="h-64 bg-[var(--color-secondary-800)] rounded-lg"></div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/3 px-2 space-y-4">
        {/* Image upload */}
        <div className="h-10 bg-[var(--color-secondary-700)] rounded-lg"></div>

        {/* Image preview */}
        <div className="w-full h-40 bg-[var(--color-secondary-800)] rounded-lg"></div>

        {/* Status select */}
        <div className="h-10 bg-[var(--color-secondary-700)] rounded-lg"></div>

        {/* Button */}
        <div className="h-10 bg-[var(--color-primary-600)]/40 rounded-lg"></div>
      </div>
    </div>
  );
}
