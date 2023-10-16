import React from "react";
import Image from "../Media/Image"
import Text from "../Text/Text";

export default function InfoColumn(props) {
    return(
        <div className="infoColumnWrapper">
            <div className="innerInfoColumn">
                <Image class="infoColumnImage" src={props.src} alt={props.alt}/>
                <div className="infoColumnText">
                    <Text text={props.text}/>
                </div>
            </div>
        </div>
    )
}