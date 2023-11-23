import React from "react";
import MaintanceForm from "../ContactForm/MaintanceForm";
import Logo from "../SVG/Logo";
import "./Maintance.css";

export default function Maintance() {
    return (
        <div className="MaintanceWrapper">
            <Logo />
            <div className="maintanceHeader">
                <h1>Sorry We Are Under Maintance. Please Submit All Requests Below:</h1>
            </div>
            <div className="maintanceContent">
                <MaintanceForm class="maintanceForm" inputClass="maintanceInput" />
            </div>
        </div>
    )
}