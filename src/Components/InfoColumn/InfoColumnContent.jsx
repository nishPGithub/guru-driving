import React from "react";

export default function InfoColumnContent(props) {
    return (
        <div className="infoColumnContentContainer">
            <p className={props.class}>{props.content}</p>
        </div>
    )
}
