import React from "react";
import HeroSlider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import { NextArrow, PrevArrow } from "./Arrows.components";

const HeroCarousel = () => {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1626065541062_spanishbundle1280x500ios.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625559912123_bsm_1280x500_chickflick.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
    ];

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-20 h-100 py-3">
                            <img src={image} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-20 h-100 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;