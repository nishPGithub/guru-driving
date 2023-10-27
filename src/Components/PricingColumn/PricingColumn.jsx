import React from "react";
import InfoColumnTitle from "../InfoColumn/InfoColumnTitle";
import PricingColumnContent from "./PricingColumnContent";

export default function PricingColumn(props) {
    return (
        <div className="pricingColumnWrapper">
            <div className="pricingColumnContentWrapper">
                <div className="title">
                    <InfoColumnTitle class='pricingTitle' title={props.title} />
                </div>
                <div className="divider">
                    <hr className="break"></hr>
                </div>
                <div className="valueTag">
                    <InfoColumnTitle class='pricingtag' title={props.tag} />
                </div>
                <div className="divider">
                    <hr className="break"></hr>
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
