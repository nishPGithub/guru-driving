import React from "react";

export default function SocialBannerTitle(props) {
    return (
        <div className="socialBannerTitleWrapper">
            <h2 className="socialBannerTitle">{props.title}</h2>
        </div>
    )
}