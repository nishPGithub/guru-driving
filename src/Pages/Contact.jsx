import React from "react";
import Banner from "../Components/Banner/Banner";
import FooterForm from "../Components/ContactForm/FooterForm";
import InfoColumn from "../Components/InfoColumn/InfoColumn";
import SocialBanner from "../Components/SocialBanner/SocialBanner";
import ContactAccordian from "../Components/Accordian/ContactAccordian";

export default function Contact() {
    const titles = global.model.titles;
    const pricing = global.model.pricing;
    const tab = global.model.tab;
    const carousel = global.model.CarouselItems;

    return (
        <div className="contactContent">
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
                    <h2>Contact us</h2>
                </div>
                <ContactAccordian />
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