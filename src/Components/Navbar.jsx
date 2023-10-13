import React from "react";
import Navigation from "./Navigation";

export default function Navbar(props) {

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/reviews', label: 'Reviews' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <div className="navWrapper">
            <nav className="navbar">
                <Navigation links={links} />
            </nav>
        </div>
    )
}
