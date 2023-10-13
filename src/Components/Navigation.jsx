import React from "react";
import { Link } from "react-router-dom";


export default function Navigation(props) {
    const { links } = props;
    return (
        <ul className="linkList">
            {links.map((link, index) =>(
                <li key={index} className="linkListItem">
                    <Link className="link" to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    )
}
