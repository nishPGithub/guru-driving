import React from "react";

export default function Text(props) {
    return (
        <div className="textWrapepr">
            <p className={props.class}>{props.text}</p>
        </div>
    )
}