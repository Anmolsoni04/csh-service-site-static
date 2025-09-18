import React from "react";
import WebDevelopmentHero from "@/components/servicesComponents/webdevelopment/WebDevelopmentHero";
import WebDevelopmentMain from "@/components/servicesComponents/webdevelopment/WebDevelopmentMain";
import WebDevelopmentMainOptional from "@/components/servicesComponents/webdevelopment/WebDevelopmentMainOptional";

const WebDevelopment: React.FC = () => {
  return (
    <>
      <WebDevelopmentHero/>
      <WebDevelopmentMain/>
      <WebDevelopmentMainOptional/>
    </>
  )
}
export default WebDevelopment;