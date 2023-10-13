import React from "react";

export default function Link(props) {
    return (
        <li className="linkListItem">
            <a href={props.href} className="link">
                {props.text}
            </a>
        </li>
    )
}
