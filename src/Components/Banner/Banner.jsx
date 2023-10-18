import React from "react";
import Text from "../Text/Text";
import Title from "../Text/Title";
import '../Banner/banner.css'
import ContactForm from "../ContactForm/ContactForm";

export default function Banner() {
    return (
        <div className="bannerWrapper">
            <div className="bannerInner">
                <Title class="homeTitle" text="Place Title Here" />
                <Text class="bannerText" text="Add any banner text here" />
                <Text class="bannerText" text="Add any banner text here" />
                <Text class="bannerText" text="Add any banner text here" />
                <Text class="bannerText" text="Add any banner text here" />
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