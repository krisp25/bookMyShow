import React from 'react';

const Cast = (props) => {
    return (
        <>
            <div className=" flex flex-col items-center">
                <div className="w-32 h-32">
                    <img 
                        src={props.image}
                        alt="crew man"
                        className="w-full h-full rounded-full"
                    />
                </div>
                <h1 className="text-xl font-medium text-gray-800">{props.castName}</h1>
                <h5 className="text-md text-gray-400">as {props.role}</h5>
            </div>
        </>
    )
}

export default Cast;
