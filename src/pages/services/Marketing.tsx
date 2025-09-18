import React from "react";
import MarketingHero from "@/components/servicesComponents/marketing/MarketingHero";
import MarketingMain from "@/components/servicesComponents/marketing/MarketingMain";
import MarketingMainOptional from "@/components/servicesComponents/marketing/MarketingMainOptional";

const Marketing: React.FC = () => {
  return (
    <>
      <MarketingHero/>
      <MarketingMain/>
      <MarketingMainOptional/>
    </>
  )
}

export default Marketing;