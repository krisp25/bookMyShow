import React, { useContext } from 'react';

// Components
import MovieInfo from './MovieInfo.components';

// Context
import { MovieContext } from '../../context/movie.context';

const MovieHero = () => {
    const { movie } = useContext(MovieContext);

    return (
        <>
            <div>
                {/* Mobiles */}
                <div className="relative md:hidden w-full" style={{ height: "calc(180vw)" }}>
                    <div className="w-full h-56 absolute bg-black bg-opacity-50 z-10 bottom-0" />
                    <div className="absolute z-20 bottom-4 left-4">
                            <MovieInfo />
                    </div>
                    <img 
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="Movie background"
                        className="w-full h-full"
                    />
                </div>
                {/* Medium devices */}
                <div className="relative hidden md:block lg:hidden" style={{ height: "calc(140vw)" }}>
                    <div className="w-full h-80 absolute bg-black bg-opacity-50 z-10 bottom-0" />
                    <div className="absolute z-20 bottom-8">
                            <MovieInfo />
                    </div>
                    <img 
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="Movie background"
                        className="w-full h-full"
                    />
                </div>
                {/* Large devices */}
                <div className="relative hidden lg:block" style={{ height: "10 rem" }}>
                    <div 
                        className="absolute z-10 w-full h-full" 
                        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} 
                    />
                    <div className="absolute z-30 left-20 top-36 flex items-center gap-10">
                        <div className="w-80" style={{ height: "30rem" }}>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="poster"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo />
                        </div>
                    </div>
                    <img 
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="Movie background"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
};

export default MovieHero;
