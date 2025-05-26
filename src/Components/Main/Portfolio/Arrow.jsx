import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import React from "react";


export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{ ...style,
                display: "block",
                color:"darkred",
                width:"50px",
                height:"50px",
                marginRight:"40px",
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
                color:"darkred",
                width:"50px",
                height:"50px",
                marginLeft:"40px",
                zIndex: '100',
            }}
            onClick={onClick}
        />
    );
}

