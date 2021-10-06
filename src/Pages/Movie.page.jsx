import React, { useContext, useState, useEffect } from 'react';
import { FaCcVisa , FaCcApplePay } from "react-icons/fa";
import axios from 'axios';
import { useParams } from 'react-router';
import Slider from 'react-slick';

// Components
import MovieHero from '../components/MovieHero/MovieHero.components';
import Cast from '../components/Cast/Cast.components';
import PosterSlider from "../components/PosterSlider/PosterSlider.components"

// Configs
import TempImages from "../config/TempPosters.config";

// Context
import { MovieContext } from '../context/movie.context';

const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
    ],
};

const settingsCast = {
    infinity: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
    ],
};

const MoviePage = () => {
    const { id } = useParams();

    const {movie} = useContext(MovieContext);

    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        // async call
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        // async call
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommended(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, []);

    return (
        <>
            <MovieHero />
            <div className="container my-12 px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
                    <p className="text-gray-800">
                        {movie.overview}
                    </p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h1 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h1>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-dashed border-yellow-400 rounded-md">
                            <div className="w-8 h=8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all Visa cards* on
                                    BookMyShow Stream.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-dashed border-yellow-400 rounded-md">
                            <div className="w-8 h=8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">
                                    Get Rs.75* off on 3 movies you buy/rent on Stream. 
                                    Buy Filmy Pass @Rs.99.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h1 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h1>
                    <Slider {...settingsCast}>
                        {cast.map((castdata) => (
                            <Cast 
                                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                                castName={castdata.original_name}
                                role={castdata.character}
                            />
                        ))}
                    </Slider>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider 
                        images={similarMovies}
                        title="You might also like"
                        isDark={false}
                        config={settings}
                    />
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider 
                        images={recommended}
                        title="BMS XCLUSIVE"
                        isDark={false}
                        config={settings}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviePage;
