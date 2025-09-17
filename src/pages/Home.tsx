
import React from "react";
// import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Clients from "@/components/Clients";
import SplitScrollWords from "@/components/SplitScrollWords";
import MoreAboutCsh from "@/components/MoreAboutCsh";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
// import Portfolio from "@/components/Portfolio"

const Home: React.FC = () => {
    return (
        <>
            <Hero/>
            <ServicesCarousel />
            <Clients />
            <SplitScrollWords />
            <MoreAboutCsh />
            <Gallery />
            {/* <Portfolio /> */}
        </>
    )
}

export default Home;