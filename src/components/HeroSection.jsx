import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeroSection() {
  const user = useSelector((state) => state.auth.user);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] container mx-auto text-center px-6 md:px-10">
        <h1 className="font-secondary text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Share Your <span className="text-[var(--color-primary-500)]">Coding Journey</span> with the World
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          <strong>Skill Stream</strong> is where developers share their real-world learning paths,
          projects, and experiences. Connect, grow, and inspire through authentic coding stories.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary button */}
          {!user && (
            <Link
              to="/login"
              className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary-400)]/50"
            >
              Get Started
            </Link>
          )}

          {/* Secondary button — only for logged in users */}
          {user && (
            <Link
              to="/all-posts"
              className="border border-[var(--color-secondary-300)] text-white hover:bg-[var(--color-secondary-100)] hover:text-[var(--color-secondary-900)] font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Explore Journeys
            </Link>
          )}
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent z-[1]" />
    </section>
  );
}

export default HeroSection;
