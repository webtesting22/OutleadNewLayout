import { Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PopupPlaze from "./Images/PopupPlaze.png"
import LogoDesign from "./Images/LogoDesign.png"
import BROCHURE from "./Images/BROCHURE.png"
import OfficeStationary from "./Images/OfficeStationary.png"
import BrandKit from "./IconsImages/11.png"
import LogoDesignS from "./IconsImages/12.png"
import BrochersDesign from "./IconsImages/10.png"
import Stationary from "./IconsImages/9.png"
import DEFININGTARGET from "./IconsImages/16.png"
import SCOUTINGANDFILTERING from "./IconsImages/15.png"
import REACHOUT from "./IconsImages/14.png"
import GENERATINGMEETINGS from "./IconsImages/13.png"
import CONTENTCREATION from "./IconsImages/20.png"
import GRAPHICSDESIGNING from "./IconsImages/19.png"
import ANIMATIONS from "./IconsImages/18.png"
import HARDCORE from "./IconsImages/17.png"
import UNDERSTANDINGTARGET from "./IconsImages/24.png"
import ASSIGNINGKEYWORDS from "./IconsImages/23.png"
import ASSIGNINGBUDGET from "./IconsImages/22.png"
import PROVIDINGANALYTICS from "./IconsImages/21.png"
import PRODUCTSHOOT from "./IconsImages/29.png"
import COMMERCIALSHOOT from "./IconsImages/28.png"
import Videoshoot from "./IconsImages/27.png"
import DroneShoot from "./IconsImages/26.png"
import TimeLapseShoot from "./IconsImages/25.png"
import DEFININGTARGETAUDIENCE from "./IconsImages/33.png"
import CreatingDatabase from "./IconsImages/32.png"
import SequencingEmails from "./IconsImages/31.png"
import MonitoringReview from "./IconsImages/30.png"
import KeywordResearch from "./IconsImages/37.png"
import OptimizeContent from "./IconsImages/36.png"
import TechnicalSEO from "./IconsImages/35.png"
import MonitorAdjust from "./IconsImages/34.png"
const serviceData = {
    'branding': {
        title: "Branding",
        image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p data-aos="fade-up"
                        data-aos-duration="1000">We offer exceptional branding services to elevate your business's
                        identity. Collaborating with you, we craft your unique story and values.
                        Our team conducts in-depth research to ensure your brand is
                        authentic and impactful.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div data-aos="fade-up"
                            data-aos-duration="1300">
                            <img src={BrandKit} alt="Outleadbrand" />
                            <h4>BRAND
                                KIT</h4>
                            <p>Use tailored, complete solutions
                                with expert craftsmanship to
                                ensure your brand stands out
                                consistently and effectively</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="1600">
                            <img src={LogoDesignS} alt="OutleadDesign" />
                            <h4>LOGO
                                DESIGN</h4>
                            <p>Create a versatile yet simple logo
                                that looks great on all platforms
                                and sizes.</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="1900">
                            <img src={BrochersDesign} alt="OutleadBrochure" />
                            <h4>BROCHURE
                                DESIGN</h4>
                            <p>We craft visually striking and
                                expertly tailored brochures that
                                capture your brand’s essence
                                and effectively communicate
                                your message.</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="2100">
                            <img src={Stationary} alt="" />
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
                    <div className='BrandingServiceExplaination'>
                        <h4>/ BRAND KIT</h4>
                        <Row data-aos="fade-up"
                            data-aos-duration="2100">
                            <Col lg={16} md={24}>
                                <div className='CommonServicesImageContainer'>
                                    <img src={PopupPlaze} alt="" />
                                </div>
                            </Col>
                            <Col lg={8} md={24}>
                                <div className='RightSideContentInfo'>
                                    <div>
                                        <p>Use tailored, complete solutions
                                            with expert craftsmanship to
                                            ensure your brand stands out
                                            consistently and effectively.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='BrandingServiceExplaination'>
                        <h4>/ LOGO DESIGN</h4>
                        <Row>
                            <Col lg={8} md={24}>
                                <div className='RightSideContentInfo'>
                                    <div>
                                        <p>Create a versatile yet simple logo
                                            that looks great on all platforms
                                            and sizes.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={16} md={24}>
                                <div className='CommonServicesImageContainer'>
                                    <img src={LogoDesign} alt="" />
                                </div>

                            </Col>
                        </Row>
                    </div>
                    <div className='BrandingServiceExplaination'>
                        <h4>/ BROCHURE</h4>
                        <Row>
                            <Col lg={16} md={24}>
                                <div className='CommonServicesImageContainer'>
                                    <img src={BROCHURE} alt="" />
                                </div>
                            </Col>
                            <Col lg={8} md={24}>
                                <div className='RightSideContentInfo'>
                                    <div>
                                        <p>We craft visually striking and
                                            expertly tailored brochures that
                                            capture your brand’s essence
                                            and effectively communicate
                                            your message.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='BrandingServiceExplaination'>
                        <h4>/ OFFICE STATIONERY</h4>
                        <Row>
                            <Col lg={16} md={24}>
                                <div className='CommonServicesImageContainer'>
                                    <img src={OfficeStationary} alt="" />
                                </div>
                            </Col>
                            <Col lg={8} md={24}>
                                <div className='RightSideContentInfo'>
                                    <div>
                                        <p>Elevate your workspace with our
                                            premium office stationery,
                                            designed for maximum
                                            functionality and elegance. From
                                            pens to planners, our collection
                                            ensures you stay organized and
                                            professional.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='BrandingServiceExplaination'>
                        <Row>
                            <Col lg={16} md={24}>
                                <div className='CommonServicesImageContainer'>
                                    <img src={OfficeStationary} alt="" />
                                </div>
                            </Col>
                            <Col lg={8} md={24}>
                                <div className='RightSideContentInfo'>
                                    <div>
                                        <p>Elevate your workspace with our
                                            premium office stationery,
                                            designed for maximum
                                            functionality and elegance. From
                                            pens to planners, our collection
                                            ensures you stay organized and
                                            professional.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
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
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p data-aos="fade-up"
                        data-aos-duration="1000">We boost your brand with tailored strategies, engaging content, and
                        targeted ads. From content statetizing and creation to analytics, we
                        handle it all, letting you focus on your business. We optimize your
                        social media profiles for maximum impact.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div data-aos="fade-up"
                            data-aos-duration="1300">
                            <h4>INSTAGRAM
                            </h4>
                            <p>To create a visually appealing Instagram grid, we maintain a consistency and aesthetics with a cohesive color palette and personalized graphics for content formats like photos, videos, and reels.</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="1600">
                            <h4>FACEBOOK
                            </h4>
                            <p>We design high-quality visuals, cohesive color schemes that will keep your feed dynamic while reflecting your brand’s unique voice.</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="1900">
                            <h4>
                                LINKEDIN</h4>
                            <p>To drive engagement, we create Twitter posts that are informative  eye-catching, and aligned with your brand.</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="2100">
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
        image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p>We leverage LinkedIn to connect you with targeted prospects, boost your brand, and achieve business goals through personalized outreach and data-driven insights.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <img src={DEFININGTARGET} alt="" />
                            <h4>DEFINING TARGET AUDIENCE
                            </h4>
                            <p>
                                We utilize LinkedIn to strategically engage with a well-defined target audience of key decision-makers and professionals. Our personalized outreach, backed by data insights, ensures effective connections that align with your business goals, leading to meaningful engagement and brand visibility.</p>
                        </div>
                        <div>
                            <img src={SCOUTINGANDFILTERING} alt="" />
                            <h4>SCOUTING AND FILTERING
                            </h4>
                            <p>We excel in LinkedIn outbounding to scout and filter top talent for your organization. By leveraging LinkedIn’s tools, we analyze profiles to identify candidates that align with your needs.</p>
                        </div>
                        <div>
                            <img src={REACHOUT} alt="" />
                            <h4>
                                REACH-OUT & FOLLOW-UP</h4>
                            <p>We specialize in effective outreach and follow-up strategies to nurture relationships with candidates and clients. By employing personalized communication, we ensure timely interactions that enhance engagement.</p>
                        </div>
                        <div>
                            <img src={GENERATINGMEETINGS} alt="" />
                            <h4>GENERATING MEETINGS
                            </h4>
                            <p>We leverage LinkedIn outbounding to generate meetings that foster meaningful connections and opportunities. By strategically engaging with potential clients and candidates.</p>
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
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p>We provide complete website development services, from design to maintenance, using frameworks like React.js and Node.js. Our process includes analysis, design, programming, testing, and deployment, ensuring secure, scalable, and high-performance websites.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <img src={CONTENTCREATION} alt="" />
                            <h4>CONTENT CREATION
                            </h4>
                            <p>We excel in content creation for web development, producing high-quality, engaging content that not only enhances user experience but also effectively communicates your brand's message.</p>
                        </div>
                        <div>
                            <img src={GRAPHICSDESIGNING} alt="" />
                            <h4>GRAPHICS DESIGNING
                            </h4>
                            <p>Graphic design is essential in web development, creating visually appealing and user-friendly websites. We integrate stunning visuals with intuitive layouts, enhancing user experience.</p>
                        </div>
                        <div>
                            <img src={ANIMATIONS} alt="" />
                            <h4>
                                ANIMATIONS
                            </h4>
                            <p>Animation enhances web development by creating dynamic, engaging user experiences. We incorporate smooth interactions that effectively communicate your brand's message while maintaining performance.</p>
                        </div>
                        <div>
                            <img src={HARDCORE} alt="" />
                            <h4>
                                PERSONALIZED & HARD-CORE
                            </h4>
                            <p>We focus on personalization and technical excellence in web development to create tailored user experiences. By leveraging data insights, we deliver dynamic websites that enhance engagement and drive conversions.</p>
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
        image: "https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p>To promote and drive sales we use data-analytics based targeted
                        campaigns through digital marketing channels like social media,
                        search engines, and email. We review campaign performance using
                        analytics to further make decisions that engage customers.

                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <img src={UNDERSTANDINGTARGET} alt="" />
                            <h4>UNDERSTANDING TARGET AUDIENCE
                            </h4>
                            <p>Understanding your target audience is crucial for digital marketing success, as it allows for tailored messaging and strategies. By analyzing demographics and preferences.</p>
                        </div>
                        <div>
                            <img src={ASSIGNINGKEYWORDS} alt="" />
                            <h4>ASSIGNING KEYWORDS
                            </h4>
                            <p>Assigning the right keywords is crucial for enhancing search visibility and audience reach in digital marketing campaigns through comprehensive research.</p>
                        </div>
                        <div>
                            <img src={ASSIGNINGBUDGET} alt="" />
                            <h4>
                                ASSIGNING A BUDGET
                            </h4>
                            <p>Strategically assigning a budget is essential for maximizing ROI in digital marketing. By analyzing data and trends, we ensure optimal resource allocation for effective audience engagement.</p>
                        </div>
                        <div>
                            <img src={PROVIDINGANALYTICS} alt="" />
                            <h4>
                                PROVIDING ANALYTICS
                            </h4>
                            <p>Providing analytics is essential for measuring success in digital marketing campaigns. By analyzing key performance indicators, we gain insights that inform strategy adjustments and enhance overall results.</p>
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
        image: "https://images.unsplash.com/photo-1506434304575-afbb92660c28?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            <>
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p>Photoshoot services for a company involve creating professional
                        images of products, commercial properties, or events, enhancing
                        branding and marketing materials, as well as online presence to attract
                        customers and showcase offerings effectively.

                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <img src={PRODUCTSHOOT} alt="" />
                            <h4>PRODUCT SHOOT
                            </h4>
                            <p>Our expert team combines
                                technical skill with creative flair to
                                highlight your products’ unique
                                features and appeal.</p>
                        </div>
                        <div>
                            <img src={COMMERCIALSHOOT} alt="" />
                            <h4>COMMERCIAL SHOOT
                            </h4>
                            <p>Elevate your marketing with
                                high-quality, impactful commercial
                                shoots to captivate your audience.</p>
                        </div>
                        <div>
                            <img src={Videoshoot} alt="" />
                            <h4>
                                Video shoot
                            </h4>
                            <p>A video shoot engages audiences through dynamic content, combining storytelling with quality production to enhance brand visibility and drive engagement.</p>
                        </div>
                        <div>
                            <img src={DroneShoot} alt="" />
                            <h4>
                                Drone Shoot
                            </h4>
                            <p>A drone shoot captures stunning aerial footage, offering a unique perspective that enhances visual storytelling and engages audiences in marketing campaigns.</p>
                        </div>
                        <div>
                            <img src={TimeLapseShoot} alt="" />
                            <h4>
                                Time Lapse Shoot
                            </h4>
                            <p>A time-lapse shoot condenses time into engaging visuals, effectively showcasing transformations and telling compelling stories for promotional and artistic projects.</p>
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
                <div data-aos="fade-up"
                    data-aos-duration="1300">
                    <p>We craft targeted email campaigns tailored to your audience,
                        personalizing content to drive engagement, conversion and enhance
                        your outreach.
                    </p>
                    <br /><br />
                    <div className='ProcessDefined'>
                        <div>
                            <img src={DEFININGTARGETAUDIENCE} alt="" />
                            <h4>DEFINING TARGET AUDIENCE
                            </h4>
                            <p>Defining the target audience in cold emailing is key to creating tailored messages that enhance engagement and conversion rates by addressing specific needs.</p>
                        </div>
                        <div>
                            <img src={CreatingDatabase} alt="" />
                            <h4>Creating Database
                            </h4>
                            <p>Building a database for cold emailing organizes leads for targeted outreach, enhancing campaign effectiveness. Regular updates improve deliverability and maximize conversion rates.</p>
                        </div>
                        <div>
                            <img src={SequencingEmails} alt="" />
                            <h4>
                                Sequencing Emails
                            </h4>
                            <p>Sequencing emails in cold emailing nurtures leads through tailored messages, gradually building trust and increasing response rates and conversions.</p>
                        </div>
                        <div>
                            <img src={MonitoringReview} alt="" />
                            <h4>
                                Monitoring & Review
                            </h4>
                            <p>Monitoring cold emailing campaigns is vital for optimizing outreach by analyzing key metrics. This approach enables continuous improvement in targeting and content, enhancing overall performance.</p>
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
            <div data-aos="fade-up"
                data-aos-duration="1300">
                <p>Amplify your online presence with our expert SEO and Google Ads management. With Keyword Optimization & Strategic Ad Campaigns, we enhance your website's visibility and drive targeted traffic.
                </p>
                <br /><br />
                <div className='ProcessDefined'>
                    <div>
                        <img src={KeywordResearch} alt="" />
                        <h4>Keyword Research
                        </h4>
                        <p>Keyword search is crucial for SEO and Google Ads, optimizing content for organic traffic and improving ad visibility to drive conversions and maximize ROI.</p>
                    </div>
                    <div>
                        <img src={OptimizeContent} alt="" />
                        <h4>Optimize Content
                        </h4>
                        <p>Content optimization for SEO and Google Ads improves visibility and traffic through relevant keywords and compelling copy, with ongoing performance analysis enabling effective adjustments.</p>
                    </div>
                    <div>
                        <img src={TechnicalSEO} alt="" />
                        <h4>
                            Technical SEO
                        </h4>
                        <p>Technical SEO optimizes websites for search engines by improving site structure, loading speed, and mobile-friendliness, which enhances visibility and user experience in both organic and Google Ads.</p>
                    </div>
                    <div>
                        <img src={MonitorAdjust} alt="" />
                        <h4>
                            Monitor & Adjust
                        </h4>
                        <p>Monitoring and adjusting SEO and Google Ads strategies optimize performance by analyzing metrics to enhance content and ad effectiveness, maximizing ROI.</p>
                    </div>
                </div>
            </div>
        </>,
        relatedKeywords: [
            { keyword: "Search engine optimization" },
            { keyword: "Pay-per-click advertising" },
            { keyword: "Keyword research" },
            { keyword: "On-page SEO" },
            { keyword: "Google Ads campaigns" },
            { keyword: "SEO ranking factors" },
            { keyword: "Conversion tracking" }
        ]
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
                                    <span key={index} className="keyword" data-aos="fade-up" // Inline AOS animation type
                                        data-aos-delay={index * 300}>{keywordObj.keyword}</span>
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
