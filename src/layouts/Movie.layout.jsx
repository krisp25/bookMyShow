import React from 'react';

// Components
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components";

const MovieLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default MovieLayout;
