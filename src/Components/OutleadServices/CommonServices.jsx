import { Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const serviceData = {
    'branding': {
        title: "Branding",
        image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div >
                    <p>We offer exceptional branding services to elevate your business's
                        identity. Collaborating with you, we craft your unique story and values.
                        Our team conducts in-depth research to ensure your brand is
                        authentic and impactful.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>BRAND
                                KIT</h4>
                            <p>Use tailored, complete solutions
                                with expert craftsmanship to
                                ensure your brand stands out
                                consistently and effectively</p>
                        </div>
                        <div>
                            <h4>LOGO
                                DESIGN</h4>
                            <p>Create a versatile yet simple logo
                                that looks great on all platforms
                                and sizes.</p>
                        </div>
                        <div>
                            <h4>BROCHURE
                                DESIGN</h4>
                            <p>We craft visually striking and
                                expertly tailored brochures that
                                capture your brand’s essence
                                and effectively communicate
                                your message.</p>
                        </div>
                        <div>
                            <h4>OFFICE
                                STATIONERY</h4>
                            <p>Elevate your workspace with our
                                premium office stationery,
                                designed for maximum
                                functionality and elegance. From
                                pens to planners, our collection
                                ensures you stay organized and
                                professional.</p>
                        </div>
                    </div>
                </div>
            </>,
        relatedKeywords: [
            { keyword: "Brand Strategy" },
            { keyword: "Brand Identity" },
            { keyword: "Brand Awareness" },
            { keyword: "Brand Development" },
            { keyword: "Personal Branding" },
            { keyword: "Brand Positioning" },
        ]
    },
    'socialMediaMarketing': {
        title: "Social Media Marketing",
        image:"https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "demo",
    },
    'linkedInOutbound': {
        title: "LinkedIn Outbound",
        description: "demo",
    },
    'webDevelopment': {
        title: "Web Development",
        description: "demo",
    },
    'digitalMarketingCampaign': {
        title: "Digital Marketing Campaign",
        description: "demo",
    },
    'photoshoot': {
        title: "Photoshoot",
        description: "demo",
    },
    'coldEmailing': {
        title: "Cold Emailing",
        description: "demo",
    },
    'SEOAndGoogleAds': {
        title: "SEO & Google Ads",
        description: "demo",
    },
};

const CommonServices = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isImageFixed, setIsImageFixed] = useState(true);

    const { service } = useParams(); // Grabs the dynamic part of the URL
    const currentService = serviceData[service]; // Get the content based on the URL

    if (!currentService) {
        return <p>Service not found</p>;
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        // Check if the image should stop being fixed
        if (position > 300) {
            setIsImageFixed(false);
        } else {
            setIsImageFixed(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate image size and border-radius based on scroll
    const imageSize = Math.min(100, 60 + (scrollPosition / 15)); // Max 100%
    const borderRadius = Math.max(0, 10 - (scrollPosition / 20)); // Max 0%
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id='CommonServices'>
            <div className='ImageHeightContainer'>
                {currentService.image ? ( // Check if there is an image
                    <img
                        className={`scroll-image ${isImageFixed ? 'fixed' : 'static'}`}
                        style={{
                            width: `${imageSize}%`,
                            borderRadius: `${borderRadius}%`,
                        }}
                        src={currentService.image} // Set the image source
                        alt="OutleadSolutions"
                    />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="TopContainer">
                <Row className='HeadingTagsContainer'>
                    <Col lg={12} md={24}>
                        <h2>/ {currentService.title}</h2>
                    </Col>
                    <Col lg={12} md={24} >
                        <div className='keywordContainer'>
                            {currentService.relatedKeywords && currentService.relatedKeywords.length > 0 ? (
                                currentService.relatedKeywords.map((keywordObj, index) => (
                                    <span key={index} className="keyword">{keywordObj.keyword}</span>
                                ))
                            ) : (
                                <p>No related keywords available</p>
                            )}
                        </div>
                    </Col>
                </Row>
                <div className='DescriptionContainer'>
                    <p>{currentService.description}</p>
                </div>
            </div>
        </section>
    );
};

export default CommonServices;
