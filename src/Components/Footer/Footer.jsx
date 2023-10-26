import React from "react";
import Navigation from "../Routing/Navigation";
import "./footer.css"

export default function Footer(props) {
    const links = global.model.navigation;
    const socialLinks = global.model.social;

    return (
        <footer className="footer">
            <div className="footerNav">
                <ul className="footerNavLinks ">
                    {links.map((item, index) => (
                        <Navigation
                            key={index}
                            class="footerLink"
                            index={index}
                            to={item.to}
                            label={item.label}
                        />
                    ))}
                </ul>
            </div>
            <div className="footerSocial">
                <ul className="footerSocialLinks">
                    {socialLinks.map((item, index) => (
                        <Navigation
                            key={index}
                            index={index}
                            class={item.logo + " footerSocial"}
                            to={item.to}
                        />
                    ))}
                </ul>
            </div>
            <div className="footerTextWrapper">
                <p className="copyright">© 2023 Guru Driving</p>
            </div>
        </footer>
    )
}