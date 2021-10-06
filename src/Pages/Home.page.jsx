import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import EntertainmentCardSLider from "../components/EntertainmentCard/Entertainmentcard.components";
import PosterSlider from "../components/PosterSlider/PosterSlider.components"

// Configs
import TempImages from "../config/TempPosters.config";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        // async call
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        // async call
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        // async call
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-10 py-1 ">
                    <h1 className="text-xl font-bold text-gray-800 py-4">The best of enterntainment</h1>
                    <EntertainmentCardSLider />
                </div>

                <div className="bg-bms-800 py-12">
                    <div className="container mx-auto px-4 flex flex-col gap-2">
                        <div className="hidden items-center justify-between md:flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />
                        </div>
                        <PosterSlider 
                            images={popularMovies}
                            title="Premieres"
                            subtitle="Brand new releases every friday"
                            isDark={true}
                        /> 
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-4">
                <PosterSlider 
                    images={topRatedMovies}
                    title="Online Streaming"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-4 py-4">
                <PosterSlider 
                    images={upcomingMovies}
                    title="Outdoor Events"
                    isDark={false}
                />
            </div>
        </>
    );
};

export default HomePage;