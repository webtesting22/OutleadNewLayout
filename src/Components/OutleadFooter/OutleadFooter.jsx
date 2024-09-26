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
                                <Link to="/"><p>Info@Outleadsolutions.com</p></Link>
                                <hr />
                            </div>
                        </div>
                        <div className="Socialicons">
                            <FaInstagram />
                            <CiLinkedin />
                            <FaWhatsapp />
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