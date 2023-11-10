import React from "react";
import SocialBanner from "../Components/SocialBanner/SocialBanner";
import TabBar from "../Components/Tabbing/TabBar";
import InfinteCarousel from "../Components/Carousel/InfinteCarousel";
import Banner from "../Components/Banner/Banner";

export default function Reviews() {
    const titles = global.model.titles;
    const pricing = global.model.pricing;
    const tab = global.model.tab;
    const carousel = global.model.CarouselItems;

    return (
        <div className="reviewContent">
            <div className="bannerContent">
                <Banner />
            </div>
            <div className="socialBannerOuterContainer">
                <SocialBanner />
            </div>
            <div className="tabbingOuterWrapper">
                <div className="reviewTabbingWrapper">
                    <h2 className="reviewsTitle">Reviews</h2>
                    <p className="reviewsDescription">Read What Others Have Said</p>
                </div>
                <TabBar
                    props={tab}
                />
            </div>
            <div className="carouselOuterWrapper">
                <div className="carouselBanner">
                    <h2 className="pricingHeaderTitle">Our Success Stories</h2>
                    <p className="pricingHeaderContent">Join us and become a part of it</p>
                </div>
                <InfinteCarousel
                    data={carousel}
                />
            </div>
        </div>
    )
}