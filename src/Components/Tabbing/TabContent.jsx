import React from "react";

export default function TabContent(props) {
    return (
        <div className="contentMap">
            {props.content.map((item, index) => (
                <div key={index} className="tabContentWrapper">
                    <p className="tabContent">{item}</p>
                </div>
            ))}
        </div>
    )
}
