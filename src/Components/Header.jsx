import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

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
