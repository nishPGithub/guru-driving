import React from "react";

export default function InfoColumnImage(props) {
    return (
        <div className="infoColumnImage">
            <img className={props.class} src={props.src} alt={props.alt} />
        </div>
    )
}
