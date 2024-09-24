import React, { useEffect } from "react";
import "./AgiluxProcess.css"
import Background from "./Background.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const AgiluxProcess = () => {

    const ProcessContent = [
        {
            title: "Discovery & Planning",
            description: "We start by understanding your business goals, challenges, and user needs. This forms the foundation for a tailored strategy and a detailed project roadmap."
        },
        {
            title: "Design & Prototyping",
            description: "Our creative team then develops design mockups and prototypes, ensuring that every visual element aligns with your brand and user expectations."
        },
        {
            title: "Development",
            description: "Using the latest technologies and best practices, our developers bring your project to life. Whether it’s a web application, mobile app, or digital platform, we build scalable and secure solutions."
        },
        {
            title: "Testing & Quality Assurance",
            description: "Before launch, we rigorously test every aspect of your application or website to ensure it performs flawlessly across devices and browsers. Our automated testing services further guarantee the product's reliability."
        },
        {
            title: "Launch & Support",
            description: "After a successful launch, we provide ongoing support and maintenance to keep your system running smoothly. Our team is always ready to implement updates, fix bugs, and adapt your solution to evolving market needs."
        }
    ]
    return (
        <>
            <section>

                <div className="BackOverlayImage">
                    <img src={Background} alt="" />
                    <div className="BlackOverlay">

                    </div>
                    <div className="AgiluxProcessContainer">
                        <div className="anothercontainer">
                            <h4>/ Our Process</h4>
                            {/* <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                                <h2>Leading with Purpose</h2>
                            </div> */}
                            <Swiper
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                effect="fade"
                                speed={900}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {ProcessContent.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="SwiperContentContainer">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default AgiluxProcess;