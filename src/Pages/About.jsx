import React from "react";
import Banner from "../Components/Banner/Banner";
import SocialBanner from "../Components/SocialBanner/SocialBanner";
import InfoColumn from "../Components/InfoColumn/InfoColumn";

export default function About() {
    const titles = global.model.titles;
    const items = [
        {
          title: 'What is React?',
          content: 'React is a JavaScript library for building user interfaces.',
        },
        {
          title: 'Why use React?',
          content: 'React allows for modular and reusable code, making it easier to maintain and scale applications.',
        },
        {
          title: 'How do I get started with React?',
          content: 'Start by learning the basics of JavaScript and then move on to the React documentation and tutorials.',
        },
      ];

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
        </div>
    )
}