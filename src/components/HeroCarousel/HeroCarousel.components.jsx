import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import { NextArrow, PrevArrow } from "./Arrows.components";

const HeroCarousel = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        // async call
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-20 h-100 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-20 h-90 px-2 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;