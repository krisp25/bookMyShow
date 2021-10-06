import React from "react";
import { Link } from "react-router-dom"

const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col items-start gap-1 px-1 md:px-3">
                <div className="w-full h-40 md:h-80 py-1">
                    <img
                        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                        alt={props.original_title}
                        className="w-full h-full rounded-md"
                    />
                </div>
                <h3
                    className={`text-md md:text-md font-bold ${
                        props.isDark ? "text-white" : "text-gray-700"
                    }`}
                >{props.original_title}</h3>
                <p
                    className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}
                >{props.release_date}</p>
            </div>
        </Link>
    );
};

export default Poster;