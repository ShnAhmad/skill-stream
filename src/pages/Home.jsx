import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import CommunitySection from "../components/CommunitySection";

function Home() {

  return (
    <>
      {/* Hero always visible */}
      <HeroSection />
      <AboutSection/>
      <FeaturesSection />
      <CommunitySection />
    </>
  );
}

export default Home;
