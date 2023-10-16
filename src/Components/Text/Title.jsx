import React from "react";

export default function Title(props) {
    return(
        <div className="titleWrapper">
            <h1 className={props.class}>{props.text}</h1>
        </div>
    )
}
