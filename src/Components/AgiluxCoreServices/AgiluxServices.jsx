import React from "react";
import "./AgiluxServices.css"
import GraphicDesign from "./GraphicDesign.jpeg"
const AgiluxServices = () => {

    const OutleadServices = [
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
            Title: "B2B LEAD GENERATION",
            keyWord: "B2B Lead Generation Services",
            Description: "OutLead Solutions provides Lead Generation services with a unique process that can be useful in fulfilling your business goals."
        },
        {
            Title: "UI-UX DESIGN",
            // image: GraphicDesign,
            keyWord: "User Experience and User Interface Design",
            Description: <>
                <ul>
                    <li>Digital Strategy</li>
                    <li>User Experience Design</li>
                    <li>User Interface Design</li>
                    <li>Mobile Sites</li>
                </ul>
            </>
        },
        {
            Title: "WEB DEVELOPMENT",
            keyWord: "Custom Web Development Services",
            Description: "OutLead Solutions enhances your online visibility through website development, providing a platform to showcase your work and attract customers."
        },
        {
            Title: "Cold Emailing",
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
            Title: "Social Media Marketing",
            keyWord: "Social Media Management Services",
            Description: "OutLead Solutions harmonizes lead generation tools with meticulously planned social media marketing strategies to boost brand engagement."
        },
        {
            Title: "Content Writing",
            keyWord: "Content Creation and Copywriting Services",
            Description: "OutLead Solutions offers content writing and posting services to convey detailed information where visuals alone cannot fully capture the message."
        },
        {
            Title: "SEO & GOOGLE ADS",
            keyWord: "SEO and Google Ads Services",
            Description: "Amplify your online presence with our expert SEO and Google Ads management. We boost your website's visibility with keyword optimization and strategic ad campaigns."
        },
        {
            Title: "PHOTOSHOOT",
            keyWord: "Professional Photoshoot Services",
            Description: "Photoshoot services for businesses, offering professional images of products, properties, and events to enhance branding, marketing materials, and online presence."
        }
    ];

    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div className="AgiluxCoreServicesContainer">
                    <h4 style={{ color: "black", fontWeight: "400" }}>/ Our Services</h4>
                    <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                        <h2>Business Solutions</h2>
                    </div>
                    {/* <div className="AgiluxServicesContainer"> */}

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
                                    <p>/ {item.keyWord}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
export default AgiluxServices