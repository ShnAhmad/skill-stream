import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative w-full mx-auto">
<div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      <div
        className="relative w-full h-full bg-cover py-24"
        style={{ backgroundImage: "url('/images/hero.png')" }} // put your image in /public folder
      >
        <div className="relative container mx-auto text-center px-4">
          <h1 className="font-secondary text-3xl md:text-5xl font-bold mb-4 ">
            Welcome to Skill Stream – Share & Explore Coding Journeys” 
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            A place for developers to document, share, and learn from real coding experiences
          </p>
          <Link
            to="/login"
            className="bg-[var(--color-primary)]  font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Login to Explore Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
