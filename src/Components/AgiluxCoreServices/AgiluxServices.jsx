import React, { useEffect } from "react";
import "./AgiluxServices.css"
import GraphicDesign from "./GraphicDesign.jpeg"
const AgiluxServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const OutleadServices = [
        {
            Title: "BRANDING",
            keyWord: "Brand Identity",
            Description: "We offer exceptional branding services to elevate your business's identity. Collaborating with you, we craft your unique story and values. Our team conducts in-depth research to ensure your brand is authentic and impactful"
        },
        {
            Title: "SOCIAL MEDIA MARKETING",
            keyWord: "Social Media Management Services",
            Description: "OutLead Solutions harmonizes lead generation tools with meticulously planned social media marketing strategies to boost brand engagement."
        },
        {
            Title: "LINKEDIN OUTBOUND",
            keyWord: "LinkedIn Outreach Services",
            Description: <>
                <ul>
                    <li>Digital Branding</li>
                    <li>Web & Mobile Sites</li>
                    <li>User Interface Design</li>
                    <li>Responsive Techs</li>
                </ul>
            </>
        },
        {
            Title: "WEB DEVELOPMENT",
            keyWord: "Custom Web Development Services",
            Description: "OutLead Solutions enhances your online visibility through website development, providing a platform to showcase your work and attract customers."
        },
        {
            Title: "DIGITAL MARKETING CAMPAIGN",
            keyWord: "Lead Generation",
            Description: "To promote and drive sales we use data-analytics based targeted campaigns through digital marketing channels like social media, search engines, and email. We review campaign performance using analytics to further make decisions that engage customers"
        },
        {
            Title: "PHOTOSHOOT",
            keyWord: "Professional Photoshoot Services",
            Description: "Photoshoot services for businesses, offering professional images of products, properties, and events to enhance branding, marketing materials, and online presence."
        },
        {
            Title: "COLD EMAILING",
            keyWord: "Cold Email Marketing Services",
            Description: <>
                <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                </ul>
            </>
        },
        {
            Title: "SEO & GOOGLE ADS",
            keyWord: "SEO and Google Ads Services",
            Description: "Amplify your online presence with our expert SEO and Google Ads management. We boost your website's visibility with keyword optimization and strategic ad campaigns."
        },

    ];

    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div className="AgiluxCoreServicesContainer">
                    <h4 style={{ color: "#ffa401", fontWeight: "400" }} className="Slashaheading">/ Our Services</h4>
                    <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                        <h2>Business Solutions</h2>
                    </div>
                    {/* <div className="AgiluxServicesContainer"> */}
                    <div className="OutleadServices">
                        {OutleadServices.map((item, index) => (
                            <div key={index} className="AgiluxServicesContainer" data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={`${index * 100}`}>
                                <div className="InsideFlexContainer">
                                    {/* <img src={item.image} alt=""  className="AbsoluteImage"/> */}
                                    <div>
                                        <h5 style={{ color: "black", margin: "0px" }}>/&nbsp;{index + 1}</h5>&nbsp;&nbsp;&nbsp;<h2>{item.Title}</h2>
                                    </div>
                                    <div>
                                        {item.Description}
                                        <br />
                                        <br />
                                        <span>/ {item.keyWord}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
export default AgiluxServices