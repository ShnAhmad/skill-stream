import React from "react";
import { AboutSectionContent } from "../constants";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16 bg-bg text-text">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary-500)]">
          How Skill Stream Works
        </h2>
        <p className="text-[var(--color-secondary-300)] mb-12 max-w-2xl mx-auto">
          Document, Share, and Learn from real coding journeys.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {AboutSectionContent.map((item, index) => (
          <AboutCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
