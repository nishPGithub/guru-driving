import React from "react";
import Banner from "../Components/Banner/Banner";
import SocialBanner from "../Components/SocialBanner/SocialBanner";
import PricingColumn from "../Components/PricingColumn/PricingColumn";

export default function Pricing() {
    const pricing = global.model.pricing;
    return (
        <div className="aboutContent">
            <div className="bannerContent">
                <Banner />
            </div>
            <div className="socialBannerOuterContainer">
                <SocialBanner />
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