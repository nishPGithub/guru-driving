import React from "react";

export default function InfoColumnTitle(props) {
    return(
        <div className="infoColumnTitleContainer">
            <h2 className={props.class}>{props.title}</h2>
        </div>
    )
}
