import React from "react";

export default function Image(props) {
    return (
        <div className="imageWrapper">
            <div className="innerImageWrapper">
            <img className="image" src={props.src} alt={props.alt}/>
            </div>
        </div>
    )
}
