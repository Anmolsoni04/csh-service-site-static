
import React from "react";
// import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
import ServicesBase from "@/components/ServicesBase";
import SplitScrollWords from "@/components/SplitScrollWords";
import MoreAboutCsh from "@/components/MoreAboutCsh";
import PortfolioBase from "@/components/PortfolioBase";
import Hero from "@/components/Hero";
import TestimonialBase from "@/components/TestimonialBase"
// import Portfolio from "@/components/Portfolio"

const Home: React.FC = () => {
    return (
        <>
            <Hero/>
            {/* <Brands /> */}
            <ServicesBase />
            <SplitScrollWords />
            <MoreAboutCsh />
            <PortfolioBase />
            <TestimonialBase />
            {/* <Portfolio /> */}
        </>
    )
}

export default Home;