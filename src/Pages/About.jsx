import React from "react";
import Banner from "../Components/Banner/Banner";
import SocialBanner from "../Components/SocialBanner/SocialBanner";
import InfoColumn from "../Components/InfoColumn/InfoColumn";
import BasicAccordian from "../Components/Accordian/Accordian";

export default function About() {
    const titles = global.model.titles;

    return (
        <div className="aboutContent">
            <div className="bannerContent">
                <Banner />
            </div>
            <div className="socialBannerOuterContainer">
                <SocialBanner />
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
            <div className="AccordianWrapper">
                <div className="accordianHeader">
                    <h2>Learn about us</h2>
                </div>
                <BasicAccordian />
            </div>
        </div>
    )
}