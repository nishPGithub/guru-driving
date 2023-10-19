import React from "react";
import InfoColumnContent from "./InfoColumnContent";
import InfoColumnTitle from "./InfoColumnTitle";
import "./infoColumn.css";
import InfoColumnImage from "./InfoColumnImage";

export default function InfoColumn(props) {
    return (
        <div className="infoColumnWrapper">
            <div className="infoColumnInnerContainer">
                <InfoColumnImage class="columnImage" src={props.src} alt={props.alt} />
            </div>
            <div className="infoColumnInnerContainer">
                <InfoColumnTitle class='title' title={props.title} />
            </div>
            <div className="divider">
                <hr className="break"></hr>
            </div>
            <div className="infoColumnInnerContainer">
                <InfoColumnContent class="content" content={props.content} />
            </div>
        </div>
    )
}
