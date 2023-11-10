import React, { useState } from "react";
import './Carousel.css';
import CarouselNav from "./CarouselNav";

export default function InfinteCarousel(props) {
    const data = props.data;

    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };

    const handlePrev = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

    const currentItem = data[current];
    const prevItem = data[current === 0 ? data.length - 1 : current - 1];
    const nextItem = data[current === data.length - 1 ? 0 : current + 1];

    return (
        <div className="carouselWrapper">
            <div className="carouselInnerWrapper">
                <div className="carouselButtonWrapper">
                    <button className="prev" onClick={handlePrev}>&lt;</button>
                </div>
                <div className="carouselContentWrapper">
                    <div className="itemPrev">
                        <img className="carouselImg" src={prevItem} alt="Previous Item" />
                    </div>
                    <div className="itemCurrent">
                        <img className="carouselImg active" src={currentItem} alt="Current Item" />
                    </div>
                    <div className="itemNext">
                        <img className="carouselImg" src={nextItem} alt="Next Item" />
                    </div>
                </div>
                <div className="carouselButtonWrapper">
                    <button className="next" onClick={handleNext}>&gt;</button>
                </div>
            </div>
            <CarouselNav data={data} current={current} onClick={setCurrent} />
        </div>
    );
}