import React from "react";

export const NextArrow = (props) => {
    // const {classname, style, onclick } = props;
    // i.e the props contain classname style and onlick for slick

    return (
        <>
            <div 
                classname={props.classname}
                style={{...props.style, backgroundColor: "gray"}}
                onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
            <div 
                classname={props.classname}
                style={{...props.style, backgroundColor: "gray"}}
                onClick={props.onClick}
            />
        </>
    );
};