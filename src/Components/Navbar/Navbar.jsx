import React from "react";
import Navigation from "../Routing/Navigation";

export default function Navbar(props) {

    const links = global.model.navigation;

    return (
        <div className="navWrapper">
            <nav className="navbar">
            <ul className="linkList">
                        {links.map((item, index) =>(
                            <Navigation
                                class="link"
                                index={index}
                                to={item.to}
                                label={item.label}
                            />
                        ))}
                    </ul>
            </nav>
        </div>
    )
}
