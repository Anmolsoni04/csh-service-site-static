
import React from "react";
// import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
import ServicesBase from "@/components/ServicesBase";
import SplitScrollWords from "@/components/SplitScrollWords";
import MoreAboutCsh from "@/components/MoreAboutCsh";
import PortfolioBase from "@/components/PortfolioBase";
import Hero from "@/components/Hero";
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
            {/* <Portfolio /> */}
        </>
    )
}

export default Home;