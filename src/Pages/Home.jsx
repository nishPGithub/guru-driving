import React from "react";
import Banner from "../Components/Banner/Banner";
import InfoColumn from "../Components/InfoColumn/InfoColumn";
import PricingColumn from "../Components/PricingColumn/PricingColumn";
import SocialBanner from "../Components/SocialBanner/SocialBanner";

export default function Home() {
    const titles = global.model.titles;
    const pricing = global.model.pricing;

    return (
        <div className="homeContent">
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
            <div className="pricingColumnWrapper">
                <div className="pricingColumnHeaderWrapper">
                    <div className="pricingColumnHeaderTitle">
                        <h2 className="pricingHeaderTitle">Pricing</h2>
                        <p className="pricingHeaderContent">Checkout Our Pricing Options</p>
                    </div>
                </div>
                <div className="pricingColumncontentRow">
                    {pricing.map((item, index) => (
                        <PricingColumn
                            key={index}
                            title={item.title}
                            tag={item.tag}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
