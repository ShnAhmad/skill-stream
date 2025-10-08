import React from "react";
import { Code, PenTool, Users, Globe } from "lucide-react";
import Card from "./Card";

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
    <section className="px-4 md:px-6 py-12 md:py-16 bg-bg text-text">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary-500)]">
          Why Skill Stream?
        </h2>
        <p className="text-[var(--color-secondary-300)] mb-12 max-w-2xl mx-auto">
          Skill Stream is more than just posts — it’s your journey hub for
          sharing, learning, and connecting through real coding experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <Card
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
          ))}
        </div>
      </div>
    </section>
  );
}
