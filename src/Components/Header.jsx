import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "../Images/logo.svg";

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
