import React from "react";
import { Code, PenTool, Users, Globe } from "lucide-react";

const features = [
  {
    icon: <Code size={32} />,
    title: "Share Your Coding Journey",
    description:
      "Document the challenges, solutions, and milestones in your coding journey — help others learn from your experience.",
  },
  {
    icon: <Users size={32} />,
    title: "Connect with Developers",
    description:
      "Discover coding journeys from other developers and engage with the community to learn and grow.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Track Your Growth",
    description:
      "Recording your learning journey helps you reflect, improve, and inspire others following similar paths.",
  },
  {
    icon: <Globe size={32} />,
    title: "Global Coding Feed",
    description:
      "Explore authentic coding journeys from developers worldwide — diverse experiences, real learning.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="text-[var(--color-secondary-100)] px-4 md:px-6 py-12 md:py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary-500)]">
          Why Skill Stream?
        </h2>
        <p className="text-[var(--color-secondary-300)] mb-12 max-w-2xl mx-auto">
          Skill Stream is more than just posts — it’s your journey hub for
          sharing, learning, and connecting through real coding experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, idx) => (
            <div
              key={idx}
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
              <div className="flex justify-center mb-4 text-[var(--color-primary-500)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[var(--color-secondary-300)] text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
