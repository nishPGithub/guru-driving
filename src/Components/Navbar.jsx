import React from "react";
import Link from "./Link";

export default function Navbar(props) {
return (
    <div className="navWrapper">
        <nav className="navbar">
            <ul className="linkList">
            <Link href="/home" text="Home" />
            <Link href="/" text="About" />
            <Link href="/" text="Pricing" />
            <Link href="/" text="Reviews" />
            <Link href="/" text="Contact" />
            </ul>
        </nav>
    </div>
)
}
