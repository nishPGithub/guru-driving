import React from "react";

export default function TabbingButton(props) {
    return (
        <button
            className={`tabbingButton ${props.isActive ? 'active' : ''}`}
            onClick={() => props.onclick()}
        >
            {props.title}
        </button>
    )
}
