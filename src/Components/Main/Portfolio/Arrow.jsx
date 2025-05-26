import React from "react";


export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: "block",
                backgroundColor:"#029491",
                borderRadius: "50%",
                marginRight:"35px",
            }}
            onClick={onClick}
        />
    );
}


export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: "block",
                marginLeft:"40px",
                backgroundColor:"#029491",
                borderRadius: "50%",
                zIndex: "5",
            }}
            onClick={onClick}
        />
    );
}

