import React from "react";

const AboutCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        relative 
        rounded-xl 
        border border-[var(--color-secondary-700)] 
        p-6 
        shadow-md 
        transition-all duration-300
        text-[var(--color-secondary-100)]
        hover:-translate-y-1 hover:shadow-xl
        bg-gradient-to-b from-[var(--color-primary-600)]/20 hover:to-[var(--color-secondary-900)]
            "
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[var(--color-primary-600)]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="text-[var(--color-primary-500)] mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-[var(--color-secondary-300)] text-sm">{description}</p>
    </div>
  );
};

export default AboutCard;
