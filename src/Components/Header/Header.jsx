import React from "react";
import Logo from "../SVG/Logo";
import Navbar from "../Navbar/Navbar";
import "./header.css";

export default function Header() {
    return (
        <div className="headerWrapper">
            <header className="mainHeader">
                <div className="headerImage">
                    <Logo />
                </div>
                <Navbar />
            </header>
        </div>
    )
}
