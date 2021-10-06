import React, { useContext, useState } from 'react';

// Components
import PaymentModal from '../PaymentModal/Payment.components';

// Context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const { movie } = useContext(MovieContext);

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(449);
    };

    // Optional chaining
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-32 h-6">
                        <img
                            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premiere"
                            className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms-700 p-1 text-xs text-white rounded-sm">Streaming Now</span>
                </div>
                <h1 className="hidden lg:block text-white lg:text-5xl font-bold">{movie.original_title}</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5">
                    <div className="text-white font-light flex-col gap-2 md:px-4">
                        <h4>4k &bull; {movie.original_language}</h4>
                        <h4>{(movie.runtime / 60).toFixed(0)} h {(movie.runtime % 60)} m &bull; {genres} &bull; {movie.release_date}</h4>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                        <button onClick={rentMovies} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
                        <button onClick={buyMovies} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Buy ₹449</button>
                    </div> 
                </div>
                <div></div>
            </div>
        </>
    )
}

export default MovieInfo;
