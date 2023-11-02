import React from "react";
import InfoColumnTitle from "../InfoColumn/InfoColumnTitle";
import PricingColumnContent from "./PricingColumnContent";
import "./pricingColumn.css";

export default function PricingColumn(props) {
    return (
        <div className="pricingColumnInnerWrapper">
            <div className="pricingColumnContentWrapper">
                <div className="pricingColumnTitle">
                    <InfoColumnTitle class='pricingTitle' title={props.title} />
                </div>
                <div className="pricingDivider">
                    <hr className="pricingBreak"></hr>
                </div>
                <div className="valueTag">
                    <InfoColumnTitle class='pricingtag' title={props.tag} />
                </div>
                <div className="pricingDivider">
                    <hr className="pricingBreak"></hr>
                </div>
                <div className="pricingColumnContent">
                    <ul className="pricingColumnList">
                        {props.content.map((contentItem, contentIndex) => (
                            <PricingColumnContent
                                key={contentIndex}
                                class="pricingListItem"
                                content={contentItem}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
