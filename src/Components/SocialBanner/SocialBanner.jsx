import React from "react";

import Navigation from "../Routing/Navigation";
import SocialBannerTitle from "./SocialBannerTitle";

export default function SocialBanner(props) {
    const socialLink = global.model.social;
    return (
        <div className="socailBannerWrapper">
            <div className="socialBannerInnerContainer">
                <SocialBannerTitle title="Social Media" />
            </div>
            <div className="socialBannerContentWrapper">
                <div className="SocialContentInnerCOntainer">
                    <ul className="socialLink">
                        {socialLink.map((item, index) =>(
                            <Navigation
                                index={index}
                                class={item.logo}
                                to={item.to}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}