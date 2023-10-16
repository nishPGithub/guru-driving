import React from "react";
import Text from "./Text";
import Title from "./Title";
import "../Styles/banner.css"
import ContactForm from "./ContactForm";

export default function Banner() {
    return (
        <div className="bannerWrapper">
            <div className="bannerInner">
                <Title class="homeTitle" text="Guru Driving School" />
                <Text class="bannerText" text="Lorem Ipsum" />
            </div>
            <div className="bannerInner bannerForm">
                <div className="bannerInnerWrapper">
                    <div className="formText">
                        <Text class="formSlogan" text="Add Slogan Here" />
                    </div>
                    <ContactForm class="bannerContantForm" inputClass="bannerInput" buttonClass="bannerSubmit"/>
                </div>
            </div>
        </div>
    )
}
