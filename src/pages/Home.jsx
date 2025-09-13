import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

function Home() {

  return (
    <>
      {/* Hero always visible */}
      <HeroSection />
      <AboutSection/>
    </>
  );
}

export default Home;
