import React from 'react'

// Components
import Poster from '../Poster/Poster.components';
import Slider from 'react-slick';

// Configs
import PosterCarouselSettings from "../../config/PosterCarousel.config"

export const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start px-3">
                <h3 className={`text-2xl font-bold ${
                        props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.title}</h3>
                <p className={`text-sm ${
                        props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings} className="py-6">
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    );
};

export default PosterSlider;
