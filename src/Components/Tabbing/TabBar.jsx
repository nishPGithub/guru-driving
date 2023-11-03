import React, { useState } from "react";
import TabbingButton from "./TabButton";
import TabContent from "./TabContent";
import "./reviewTab.css"

export default function TabBar(props) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabs= props.props;

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className="tabbingWrapper">
            <div className="TabbingButtons">
                {tabs.map((tab, index) => (
                    <div className="tabbingButtonWrapper">
                        <TabbingButton
                            key={index}
                            title={tab.title}
                            isActive={activeTabIndex === index}
                            onclick={() => handleTabClick(index)}
                        />
                    </div>
                ))}
            </div>
            <div className="tabbingContents">
                <TabContent content={tabs[activeTabIndex].content} />
            </div>
        </div>

    )
}