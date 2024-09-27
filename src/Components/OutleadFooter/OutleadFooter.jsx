import React from "react";
import Outleadlogo from "./Outleadlogo.png"
import "./FooterLogo.css"
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const OutleadFooter = () => {
    return (
        <>
            <section>
                <div className="OutleadFooter">
                    <div className="Footerlogo">
                        <img src={Outleadlogo} alt="" />
                    </div>
                    <div className="IconsandEmail">
                        <div className="EmailContainer">
                            <div style={{ width: "222px" }}>
                                <Link to="mailto:Info@Outleadsolutions.com"><p>Info@Outleadsolutions.com</p></Link>
                                <hr />
                            </div>
                        </div>
                        <div className="Socialicons">
                            <Link to="https://www.instagram.com/outlead_solutions/" target="_blank"><FaInstagram /></Link>
                            <Link to="https://in.linkedin.com/company/outlead-solutions" target="_blank"><CiLinkedin /></Link>
                            <Link to="https://wa.me/919328683614?text=Hi%20Outlead%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20graphics%20design%20and%20web%20development%20services"><FaWhatsapp /></Link>
                        </div>


                    </div>
                    <br />
                    <div>
                        <p style={{ textAlign: "center", padding: "0px", margin: "0px", fontSize: "16px" }}>Copyright © All rights reserved by <span style={{ color: "orange", fontWeight: "500" }}>Outlead Solutions</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OutleadFooter