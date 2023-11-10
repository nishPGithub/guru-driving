import React from "react";

export default function CarouselNav({ data, current, onClick }) {
    return (
        <div className="carouselNavWrapper">
            {data.map((item, index) => (
                <button
                    key={index}
                    className={`carouselNavItem ${index === current ? 'active' : ''}`}
                    onClick={() => onClick(index)}
                ></button>
            ))}
        </div>
    );
}
