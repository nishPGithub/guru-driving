import React from "react";
import { Link } from "react-router-dom";


export default function Navigation(props) {
    return (
        <li key={props.index} className="linkListItem">
            <Link className={props.class} to={props.to}>{props.label}</Link>
        </li>
    )
}
