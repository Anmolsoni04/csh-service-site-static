import React from "react";
import StrategyHero from "@/components/servicesComponents/strategy/StrategyHero";
import StrategyMain from "@/components/servicesComponents/strategy/StrategyMain";
import StrategyMainOptional from "@/components/servicesComponents/strategy/StrategyMainOptional";

const Strategy: React.FC = () => {
  return (
    <>
      <StrategyHero/>
      <StrategyMain/>
      <StrategyMainOptional/>
    </>
  )
}

export default Strategy;