import React from "react";
import Banner from "../Components/Banner/Banner";
import InfinteCarousel from "../Components/Carousel/InfinteCarousel";
import FooterForm from "../Components/ContactForm/FooterForm";
import InfoColumn from "../Components/InfoColumn/InfoColumn";
import PricingColumn from "../Components/PricingColumn/PricingColumn";
import SocialBanner from "../Components/SocialBanner/SocialBanner";
import TabBar from "../Components/Tabbing/TabBar";

export default function Home() {
    const titles = global.model.titles;
    const pricing = global.model.pricing;
    const tab = global.model.tab;
    const carousel = global.model.CarouselItems;

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
            <div className="footerFormWrapper">
                <div className="footerContactBanner">
                    <h2 className="pricingHeaderTitle">Contact Us</h2>
                    <p className="pricingHeaderContent">Get in touch today and learn to drive</p>
                </div>
                <FooterForm class="footerForm" inputClass="footerInput"/>
            </div>
        </div>
    )
}
