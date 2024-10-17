import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { Row, Col } from 'antd';
import "./OutleadServices.css";
import brand from "/serviceIcons/brand.png";
import logoDesign from "/serviceIcons/logoDesign.png";
import brochureDesign from "/serviceIcons/brochureDesign.png";
import stationery from "/images/2.png";
import PopUpPaloozaLogo from "/images/3.png";
import BeBettaLogo from "/images/11.png";
import RSPaddlesLogo from "/RSPaddles.png";
import SavoryLogo from "/images/21.png";
import TrineLogo from "/images/174.png";

const OutleadServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const { service } = useParams();  // This will grab the dynamic part of the URL

    // const currentService = serviceData[service];  // Get the content based on the URL

    // if (!currentService) {
    //     return <p>Service not found</p>;
    // }

    return (
        <section className="serviceContainer">
            <div className="TitleContainer">
                <div>
                    <h2 >Branding</h2>
                </div>
            </div>
            <div className="listContainer">
                <ul>
                    <li>
                        <img src={brand} /><span>Brand Kit</span>
                    </li>
                    <li>
                        <img src={logoDesign} /><span>Logo Design</span>
                    </li>
                    <li>
                        <img src={brochureDesign} /><span>Brochure Design</span>
                    </li>
                    <li>
                        <img src={stationery} /><span>Office Stationery</span>
                    </li>
                </ul>

            </div>
            <div className='DescriptionContainer'>
                <p>We offer exceptional branding services to elevate your business's
                    identity. Collaborating with you, we craft your unique story and values.
                    Our team conducts in-depth research to ensure your brand is
                    authentic and impactful. </p>
            </div>
            <Row style={{ width: "100%" }}>
                <Col lg={18} md={24} className="clientLeftContainer">
                </Col>
                <Col lg={6} md={24} className="clientRightContainer">
                    <h1>BRAND KIT</h1>
                    <div className="logoContainerClient">
                        <img src={PopUpPaloozaLogo} />
                    </div>
                    <div>
                        <p>
                            Use tailored, complete solutions
                            with expert craftsmanship to
                            ensure your brand stands out
                            consistently and effectively.
                        </p>
                    </div>
                </Col>
            </Row>
            <div style={{ margin: "30px 0" }} />
            <Row style={{ width: "100%" }}>
                <Col lg={6} md={24} className="clientRightContainer">
                    <h1>BRAND KIT</h1>
                    <div className="logoContainerClient">
                        <img src={BeBettaLogo} />
                    </div>
                    <div>
                        <p>
                            We craft tailored brand elements
                            that ensure consistency and
                            make a lasting impact across all
                            platforms.
                        </p>
                    </div>

                </Col>
                <Col lg={18} md={24} className="clientLeftContainer">
                </Col>
            </Row><div style={{ margin: "30px 0" }} />
            <Row style={{ width: "100%" }}>
                <Col lg={18} md={24} className="clientLeftContainer">
                </Col>
                <Col lg={6} md={24} className="clientRightContainer">
                    <h1>LOGO DESIGN</h1>
                    <div className="logoContainerClient">
                        <img src={RSPaddlesLogo} />
                    </div>
                    <div>
                        <p>
                            Create a versatile yet simple logo
                            that looks great on all platforms
                            and sizes.
                        </p>
                    </div>

                </Col>
            </Row><div style={{ margin: "30px 0" }} />
            <Row style={{ width: "100%" }}>
                <Col lg={6} md={24} className="clientRightContainer">
                    <h1>BROCHURE </h1>
                    <div className="logoContainerClient">
                        <img src={SavoryLogo} />
                    </div>
                    <div>
                        <p>
                            We craft visually striking and
                            expertly tailored brochures that
                            capture your brand’s essence
                            and effectively communicate
                            your message.

                        </p>
                    </div>
                </Col>
                <Col lg={18} md={24} className="clientLeftContainer">
                </Col>
            </Row><div style={{ margin: "30px 0" }} />
            <Row style={{ width: "100%" }}>
                <Col lg={18} md={24} className="clientLeftContainer">
                </Col>
                <Col lg={6} md={24} className="clientRightContainer">
                    <h1>OFFICE STATIONERY </h1>
                    <div className="logoContainerClient">
                        <img src={TrineLogo} />
                    </div>
                    <div>
                        <p>
                            Elevate your workspace with our
                            premium office stationery,
                            designed for maximum
                            functionality and elegance. From
                            pens to planners, our collection
                            ensures you stay organized and
                            professional.

                        </p>
                    </div>
                </Col>
            </Row><div style={{ margin: "30px 0" }} />
        </section >
    );
};

export default OutleadServices;
