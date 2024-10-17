import React, { useState, useEffect } from "react";
import "./AgiluxNavigation.css";
import { Button, Drawer, Collapse } from 'antd';
import { Link } from "react-router-dom";
import Outleadlogo from "/Outleadlogo.png"
import NavigationInside from "./NavigationInside.jpg"
import NavigationAnimationIcon from "./NavigationAnimationIcon.json"
import Lottie from "lottie-react";
const AgiluxNavigation = () => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedContent, setSelectedContent] = useState(""); // State to store content for child drawer

    // Track scroll position to switch from absolute to sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const showChildrenDrawer = (content) => {
        setSelectedContent(content);  // Set content for child drawer
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    const items = [

        {
            key: '1',
            label: <><Link to="outLeadabout/" onClick={onClose}>About Us</Link></>,
            // children:
            //     <>
            //         <div className="NavigationChildLinks">
            //             <Link to="/appdevelopment"><p onClick={onClose}>App Development</p></Link>
            //             <Link to="/webdevelopment"><p onClick={onClose}>Web Development</p></Link>
            //         </div>
            //     </>,
        },
        {
            key: '2',
            label: <><Link to="/outleadclients" onClick={onClose}>Clients</Link></>,
            // children: <p>Industry Content</p>,
        },
        
    ];

    return (
        <div className={`AgiluxNavigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="NavigationContainer">
                <div className="AgiluxLogoAnimated">
                    <Link to="/"><img src={Outleadlogo} alt="" style={{ width: "80px" }} /></Link>
                    <div className="ExploreTabs" onClick={showDrawer}>
                        <span>menu</span>
                    </div>

                    <Drawer
                        className={open ? "ant-drawer-open" : ""}
                        title={<>
                            {/* <div className="DrawerTitle">
                                <h3>Explore</h3>
                            </div> */}
                        </>}
                        width={520}
                        closable={false}
                        onClose={onClose}
                        open={open}
                    >
                        <button onClick={onClose}>
                            X
                        </button>
                        <div className="AnimatedNavigationAnimation">
                            <div>
                                <Collapse accordion items={items} />
                            </div>
                            <div >
                                <div style={{ height: "400px", overflow: "hidden" }}>
                                    <Lottie
                                        animationData={NavigationAnimationIcon}
                                        loop={true}
                                    />
                                </div>
                                <div className="ImageBottomContent">
                                    <p>/ Let's work!</p>
                                    <h3>Get your project done
                                    </h3>
                                    <p>Looking for collaboration for your
                                        <span> next project</span>? Do not hesitate to contact us to <span>👋 say hello</span></p>
                                </div>
                            </div>
                        </div>
                    </Drawer>

                    <Drawer
                        title={null}
                        width={320}
                        closable={false}
                        onClose={onChildrenDrawerClose}
                        open={childrenDrawer}
                    >
                        <button onClick={onChildrenDrawerClose}>X</button>
                        {/* Display the selected content here */}
                        <p>{selectedContent}</p>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default AgiluxNavigation;
