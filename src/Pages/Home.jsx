import React from "react";
import Banner from "../Components/Banner/Banner";
import InfoColumn from "../Components/InfoColumn/InfoColumn";

export default function Home() {
    return (
        <div className="homeContent">
            <div className="bannerContent">
                <Banner />
            </div>
            <div className="infoColumnContent">
                <InfoColumn
                    src={require("../Images/banner-bg-small.jpeg")}
                    alt="test"
                    text="Hello world 1" />
                <InfoColumn
                    src={require("../Images/banner-bg-small.jpeg")}
                    alt="test"
                    text="Hello world 2" />
            </div>
        </div>
    )
}
