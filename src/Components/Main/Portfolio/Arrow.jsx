import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import React from "react";


export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{ ...style,
                display: "block",
                color:"grey",
                width:"50px",
                height:"50px",
                margin:"-10px",
            }}
            onClick={onClick}
        />
    );
}


export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaChevronLeft
            className={className}
            style={{ ...style,
                display: "block",
                color:"grey",
                width:"50px",
                height:"50px",
                margin:"-10px",
            }}
            onClick={onClick}
        />
    );
}

