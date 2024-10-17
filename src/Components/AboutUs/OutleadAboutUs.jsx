import React, { useEffect, useRef, useState } from "react";
import "./OutleadAbout.css"
import AboutUsTop from "./AboutUsTop.mp4"
import Photoshop from "./Photoshop.json"
import Lottie from "lottie-react";
import { Row, Col } from "antd";
import WhatisOutleadIcon from "./WhatisOutleadIcon.json"
import AnimatedArrow from "./AnimatedArrow.json"
import Counter from "../MinimalComponent/Counter";
const OutleadAboutUs = () => {
    const [isFading, setIsFading] = useState(false);
    const [isCounterVisible, setIsCounterVisible] = useState(false); // To track visibility of the Counter
    const counterSectionRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const videoRefPc = useRef(null);
    const videoRefMobile = useRef(null);
    const handleTimeUpdate = (videoRef) => {
        const video = videoRef.current;
        if (video && video.duration - video.currentTime <= 0.5) { // 0.5 seconds before the video ends
            setIsFading(true); // Trigger fade-out
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Handle video ending event to loop smoothly
    const handleVideoEnd = (videoRef) => {
        const video = videoRef.current;
        setIsFading(false); // Reset fading
        video.currentTime = 0; // Reset video to the start
        video.play(); // Restart the video
    };

    // Initialize video playback speed
    useEffect(() => {
        if (videoRefPc.current) {
            videoRefPc.current.playbackRate = 1.0; // Adjust the speed if needed
        }
        if (videoRefMobile.current) {
            videoRefMobile.current.playbackRate = 1.0; // Adjust speed for mobile video
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsCounterVisible(true); // Start counter when section is in view
                }
            },
            { threshold: 0.5 } // Adjust threshold based on when you want to trigger
        );

        if (counterSectionRef.current) {
            observer.observe(counterSectionRef.current);
        }

        return () => {
            if (counterSectionRef.current) {
                observer.unobserve(counterSectionRef.current);
            }
        };
    }, []);
    const ContainerAbsolute = [
        {
            container: ""
        },
        {
            container: ""
        },
        {
            container: ""
        },
        {
            container: ""
        },
        {
            container: ""
        },
        {
            container: ""
        },


    ]

    const ProgressBarContent = [
        {
            ProgressTitle: "SOCIAL MEDIA MARKETING",
            width: "80%" // Set width for each progress bar
        },
        {
            ProgressTitle: "BRANDING",
            width: "65%"
        },
        {
            ProgressTitle: "WEB DEVELOPMENT",
            width: "90%"
        }
    ];


    return (
        <>
            <section style={{ paddingTop: "0px", backgroundColor: "white", color: "black" }}>
                <div className="OutleadAboutUsContainer">
                    <div className="JustHeightContainer">
                        <div className="parentAbsoluteContainer">
                            {ContainerAbsolute.map((item, index) => (
                                <div className="InsideLineContainer" key={index}>

                                </div>
                            ))}
                        </div>
                        <div className="AboutUsContent">

                            <h1>
                                <Lottie
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    animationData={Photoshop}
                                    loop={true}
                                    id="PhotoshopIconSet"
                                /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Driven by
                                <video
                                    ref={videoRefPc}
                                    src={AboutUsTop}
                                    loop={false} // We control the loop manually
                                    autoPlay
                                    muted
                                    onTimeUpdate={() => handleTimeUpdate(videoRefPc)}
                                    onEnded={() => handleVideoEnd(videoRefPc)}
                                    id="AboutUsVideo"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    playsInline 
                                    style={{pointerEvents: 'none'}}
                                /> <br /> Creativity Fueled</h1>

                            <div className="ParatextAbout" data-aos="fade-up"
                                data-aos-duration="2000">
                                <Lottie
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    animationData={AnimatedArrow}
                                    loop={true}
                                    id="ArrowIcon"
                                />
                                <p>We are an innovative marketing company, dedicated to helping businesses succeed through tailored strategies and captivating campaigns.</p>
                            </div>
                        </div>
                    </div>
                    <div className="AboutUsContainer">
                        <div className="TopContainer">
                            <h4 style={{ position: "sticky" }} className="Slashaheading">/ About Us</h4>
                            <div style={{ display: "flex", justifyContent: "space-Between" }}>
                                <h2>OutLead Solutions</h2>
                            </div>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="1000">
                            <p>/ OutLead Solution</p>
                            <br />
                            <p>OutLead Solutions is a premier graphics design, marketing, and web development company, dedicated to helping businesses grow their online presence. We specialize in crafting visually stunning designs, innovative marketing strategies, and high-performance websites tailored to your unique needs. Our expert team ensures optimal user experiences and drives measurable results, empowering your brand to succeed in the digital landscape.</p>
                            <br />
                            <p>/ What is OutLead Solution?</p>
                            <br />
                            <p>The onset of the global pandemic has drastically changed the way businesses survive and thrive. The founders of OutLead took this challenge as an opportunity with one simple goal - to reconstruct the pillars of sales and marketing in the digital world.</p>
                            <br />
                            <p>OutLead is a proud composer of a unique 5-stage process for lead generation, where special emphasis is laid on establishing trust and authenticity with clients over the internet. This process further includes researching and identifying key potential customer bases over LinkedIn, by engaging with them in a dialogue and thereby selling the idea of your product/service.</p>
                            <br />
                            <p>This process of lead generation is further accompanied with carefully designed digital marketing tools, which involve - establishing digital presence of your business on key social media platforms, targeted strategies to identify and grow followers on such platforms, designing and posting of informative content pertaining to the business on a regular basis and so on.</p>
                            <br />
                            <p>It's time to join hands; and lead together with OutLead!</p>
                        </div>
                        <br /><br />
                        {/* <div className="OutleadOverallContext">
                          
                            <Row>
                                <Col lg={12} md={24}>
                                    <div>
                                        <h2 style={{ color: "black",marginTop:"0px" }}><b style={{ fontWeight: "400" }}>/ Our journey</b> the path to achieving success</h2>
                                    </div>
                                </Col>

                                <Col lg={12} md={24}>
                                    <div>
                                        <p>We are an innovative marketing company, dedicated to helping businesses succeed through tailored strategies and captivating campaigns.</p>
                                      
                                        <div ref={counterSectionRef} id="Counters">
                                            <Row>
                                                <Col lg={12} md={24}>
                                                    <div>
                                                        {isCounterVisible && (
                                                            <Counter start={0} end={10000} suffix="+" duration={10} />
                                                        )}
                                                        <br />
                                                        <p>/ Designs</p>
                                                    </div>
                                                </Col>
                                                <Col lg={12} md={24}>
                                                    <div>
                                                        {isCounterVisible && (
                                                            <Counter start={0} end={100} suffix="+" duration={10} />
                                                        )}
                                                        <br />
                                                        <p>/ Clients</p>
                                                    </div>
                                                </Col>
                                                <Col lg={12} md={24}>
                                                    <div>
                                                        {isCounterVisible && (
                                                            <Counter start={0} end={5000} suffix="+" duration={30} />
                                                        )}
                                                        <br />
                                                        <p>/ Leads</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div> */}
                        <div className="OutleadPartnersDetails">
                            <Row>
                                <Col lg={12}>
                                    <div>
                                        <Lottie
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            animationData={WhatisOutleadIcon}
                                            loop={true}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="ProgressOutleadContentContainer">
                                        <div>
                                            <h2>/ Our Brand’s
                                                Creative Partner</h2>
                                            <p>We are an innovative marketing company, dedicated to helping businesses succeed through tailored strategies and captivating campaigns.</p>

                                            <div className="progressBarContainer">
                                                <ul>
                                                    {ProgressBarContent.map((item, index) => (
                                                        <div key={index} data-aos="fade-up"
                                                            data-aos-duration="1000"
                                                            data-aos-delay={`${index * 100}`}>
                                                            <li>
                                                                {item.ProgressTitle}
                                                            </li>
                                                            <div className="progressShow">
                                                                <hr style={{ width: item.width }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OutleadAboutUs