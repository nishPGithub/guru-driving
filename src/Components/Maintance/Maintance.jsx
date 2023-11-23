import React from "react";
import MaintanceForm from "../ContactForm/MaintanceForm";
import Logo from "../SVG/Logo";
import "./Maintance.css";

export default function Maintance() {
    return (
        <div className="MaintanceWrapper">
            <Logo />
            <div className="maintanceHeader">
                <p>Thank You For Visiting Guru Driving Academy</p>
                <h1>Sorry For the Inconvience We Are Under Currently Maintenance. Please Submit All Requests Below:</h1>
            </div>
            <div className="maintanceContent">
                <MaintanceForm class="maintanceForm" inputClass="maintanceInput" />
            </div>
        </div>
    )
}