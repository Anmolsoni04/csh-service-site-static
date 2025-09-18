import React from "react";
import TechBlogsHero from "@/components/servicesComponents/techblogs/TechBlogsHero";
import TechBlogsMain from "@/components/servicesComponents/techblogs/TechBlogsMain";
import TechBlogsMainOptional from "@/components/servicesComponents/techblogs/TechBlogsMainOptional";

const TechBlogs: React.FC = () => {
  return (
    <>
      <TechBlogsHero/>
      <TechBlogsMain/>
      <TechBlogsMainOptional/>
    </>
  )
}

export default TechBlogs;