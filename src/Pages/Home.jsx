import React from "react";
import Banner from "../Components/Banner/Banner";
import InfoColumn from "../Components/InfoColumn/InfoColumn";
import SocialBanner from "../Components/SocialBanner/SocialBanner";

export default function Home() {
    const titles = global.model.titles;

    return (
        <div className="homeContent">
            <div className="bannerContent">
                <Banner />
            </div>
            <div className="infoColumnContainer">
                {titles.map((item, index) => (
                    <InfoColumn
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
            <div className="socialBannerOuterContainer">
                <SocialBanner />
            </div>
        </div>
    )
}
