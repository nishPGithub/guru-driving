import React from "react";

export default function PricingColumnContent (props) {
    return (
        <div className="pricingListItemWrapper">
            <li className={props.class}>{props.content}</li>
        </div>
    )
}
