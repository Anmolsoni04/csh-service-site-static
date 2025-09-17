import React from "react";
import AboutHero from "@/components/aboutComponents/AboutHero"
import AboutStats from "@/components/aboutComponents/AboutStats"
import AboutMore from "@/components/aboutComponents/AboutMore"
import SplitScrollWords from "@/components/SplitScrollWords"
import AboutBusiness from "@/components/aboutComponents/AboutBusiness"

const About: React.FC = () => {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <SplitScrollWords />
      <AboutMore />
      <AboutBusiness />
    </main>
  );
};

export default About;
