import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            {/* To access component inside the DefaultLayout tags in the HOC file  */}
            {props.children} 
        </>
    );
};

export default DefaultLayout;