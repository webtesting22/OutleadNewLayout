import React from "react";
import "./AgiluxMV.css"
import { FaArrowRightLong } from "react-icons/fa6";
import Lottie from "lottie-react";
import Animation from "./EyesAnimation.json"
const AgiluxMV = () => {
    return (
        <>
            <section>
                <div className="AgiluxMissionVisionContainer">
                    <div id="LottieIconMV">
                        <Lottie
                            animationData={Animation}
                            loop={true}
                            className="MV"
                        />
                    </div>
                    <div className="SameContainer" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h4 className="Slashaheading">/ Mission</h4>
                        {/* <br /> */}
                        <div className="OurMissionDetails">

                            <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                                <h2>Transforming Ideas into Reality</h2>
                            </div>
                            <p>At Outlead Solution, our mission is to deliver innovative, agile, and tailor-made technology solutions that empower businesses to achieve operational excellence and scalability. We are committed to providing world-class services that seamlessly integrate cutting-edge technology with user-focused design, enabling our clients to thrive, adapt, and stay ahead in a rapidly evolving digital ecosystem.
                            </p>

                        </div>
                    </div>
                    <hr />
                    <div className="SameContainer" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h4 className="Slashaheading">/ Vision</h4>
                        {/* <br /> */}
                        <div className="OurMissionDetails">
                            <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                                <h2>Leading with Purpose</h2>
                            </div>
                            <p>Our vision is to be recognized globally as a leader in agile software solutions and digital transformation. We aspire to create a future where businesses of all sizes can harness the power of technology to accelerate growth, optimize performance, and foster sustainable innovation across industries. By continuously driving change, we aim to set new benchmarks in quality, efficiency, and client satisfaction.</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AgiluxMV