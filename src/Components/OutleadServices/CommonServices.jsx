import { Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const serviceData = {
    'branding': {
        title: "Branding",
        image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div>
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
        image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


        description:
            <>
                <div>
                    <p>We boost your brand with tailored strategies, engaging content, and
                        targeted ads. From content statetizing and creation to analytics, we
                        handle it all, letting you focus on your business. We optimize your
                        social media profiles for maximum impact.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>INSTAGRAM
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div>
                            <h4>FACEBOOK
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div>
                            <h4>
                                LINKEDIN</h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>TWITTER
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                    </div>
                </div>
            </>,
        relatedKeywords: [
            { keyword: "Digital Marketing" },
            { keyword: "Content Marketing" },
            { keyword: "Social media advertising" },
            { keyword: "Influencer Marketing" },
            { keyword: " Online Branding" },
        ]
    },
    'linkedInOutbound': {
        title: "LinkedIn Outbound",
        image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div>
                    <p>We leverage LinkedIn to connect you with targeted prospects, boost your brand, and achieve business goals through personalized outreach and data-driven insights.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>DEFINING TARGET AUDIENCE
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div>
                            <h4>SCOUTING AND FILTERING
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div>
                            <h4>
                                REACH-OUT & FOLLOW-UP</h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>GENERATING MEETINGS
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                    </div>
                </div>
            </>,
        relatedKeywords: [
            { keyword: "Outbound prospecting" },
            { keyword: "LinkedIn lead generation" },
            { keyword: "Social selling" },
            { keyword: "B2B outreach" },
            { keyword: "Cold outreach strategy" },
            { keyword: "LinkedIn messaging" },
            { keyword: "Sales prospecting tools" }
        ]
    },
    'webDevelopment': {
        title: "Web Development",
        image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div>
                    <p>We provide complete website development services, from design to maintenance, using frameworks like React.js and Node.js. Our process includes analysis, design, programming, testing, and deployment, ensuring secure, scalable, and high-performance websites.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>CONTENT CREATION
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div>
                            <h4>GRAPHICS DESIGNING
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div>
                            <h4>
                                ANIMATIONS
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>
                                PERSONALIZED & HARD-CORE
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                    </div>
                </div>
            </>
        ,
        relatedKeywords: [
            { keyword: "Frontend development" },
            { keyword: "Backend development" },
            { keyword: "Full-stack development" },
            { keyword: "Responsive design" },
            { keyword: "JavaScript frameworks" },
            { keyword: "Web performance optimization" },
            { keyword: "UI/UX design" }
        ]
    },
    'digitalMarketingCampaign': {
        title: "Digital Marketing Campaign",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div>
                    <p>We provide complete website development services, from design to maintenance, using frameworks like React.js and Node.js. Our process includes analysis, design, programming, testing, and deployment, ensuring secure, scalable, and high-performance websites.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>UNDERSTANDING TARGET AUDIENCE
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div>
                            <h4>ASSIGNING KEYWORDS
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div>
                            <h4>
                                ASSIGNING A BUDGET
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>
                                PROVIDING ANALYTICS
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                    </div>
                </div>
            </>,
        relatedKeywords: [
            { keyword: "Campaign strategy" },
            { keyword: "Email marketing" },
            { keyword: "PPC advertising" },
            { keyword: "Social media marketing" },
            { keyword: "Content creation" },
            { keyword: "Conversion rate optimization" },
            { keyword: "Audience targeting" }
        ]
    },
    'photoshoot': {
        title: "Photoshoot",
        image: "https://plus.unsplash.com/premium_photo-1667538960104-25726d82a6e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div>
                    <p>We provide complete website development services, from design to maintenance, using frameworks like React.js and Node.js. Our process includes analysis, design, programming, testing, and deployment, ensuring secure, scalable, and high-performance websites.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>PRODUCT SHOOT
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div>
                            <h4>COMMERCIAL SHOOT
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div>
                            <h4>
                                Video shoot
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>
                                Drone Shoot
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>
                                Time Lapse Shoot
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                    </div>
                </div>
            </>
        ,
        relatedKeywords: [
            { keyword: "Portrait photography" },
            { keyword: "Lifestyle photography" },
            { keyword: "Studio lighting" },
            { keyword: "Creative direction" },
            { keyword: "Outdoor photoshoot" },
            { keyword: "Model portfolio" },
            { keyword: "Post-production editing" }
        ]
    },
    'coldEmailing': {
        title: "Cold Emailing",
        image: "https://cdn.prod.website-files.com/5b7f24cc900973de13d7beb4/633b66b6f5ddbe20905276fa_proven-tips-for-cold-outreach.svg",
        description:
            <>
                <div>
                    <p>We provide complete website development services, from design to maintenance, using frameworks like React.js and Node.js. Our process includes analysis, design, programming, testing, and deployment, ensuring secure, scalable, and high-performance websites.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <h4>DEFINING TARGET AUDIENCE
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div>
                            <h4>Creating Database
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div>
                            <h4>
                                Sequencing Emails
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div>
                            <h4>
                                Monitoring & Review
                            </h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                    </div>
                </div>
            </>,
        relatedKeywords: [
            { keyword: "Email outreach" },
            { keyword: "Lead generation" },
            { keyword: "Cold email templates" },
            { keyword: "Personalized messaging" },
            { keyword: "Email follow-ups" },
            { keyword: "B2B cold emails" },
            { keyword: "Cold email subject lines" }
        ]
    },
    'SEOAndGoogleAds': {
        title: "SEO & Google Ads",
        image: "https://icsblog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2023/03/17184006/Blog_P4B_SEO_Final-min-1024x641.png",
        description: <>
            <div>
                <p>Amplify your online presence with our expert SEO and Google Ads management. With Keyword Optimization & Strategic Ad Campaigns, we enhance your website's visibility and drive targeted traffic.
                </p>
                <br /><br />
                <div className='ProcessDefined'>
                    <div>
                        <h4>Keyword Research
                        </h4>
                        <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                    </div>
                    <div>
                        <h4>Optimize Content
                        </h4>
                        <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                    </div>
                    <div>
                        <h4>
                            Technical Seo
                        </h4>
                        <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                    </div>
                    <div>
                        <h4>
                            Monitor & Adjust
                        </h4>
                        <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                    </div>
                </div>
            </div>
        </>,
    },
    relatedKeywords: [
        { keyword: "Search engine optimization" },
        { keyword: "Pay-per-click advertising" },
        { keyword: "Keyword research" },
        { keyword: "On-page SEO" },
        { keyword: "Google Ads campaigns" },
        { keyword: "SEO ranking factors" },
        { keyword: "Conversion tracking" }
    ]
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
