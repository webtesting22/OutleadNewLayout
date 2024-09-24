import React from "react";
import "./AppDevelopmentProjectContainer.css"
import AppDev from "./AppDev.avif"
const AppDevelopment = () => {

    const AppDevelopmentProjetsData = [
        {
            title: "Clotheslyne",
            desctiption: "Say goodbye to laundry day hassles with Clotheslyne, the ultimate laundry service app for busy individuals and businesses. Easily book laundry services, schedule convenient pick-up and drop-off times, and enjoy the ease of online payments—all from your phone. Whether you need a quick wash or full-service care, Clotheslyne ensures your clothes are returned fresh and clean. Designed for both users and laundry service owners, our app makes laundry management simple, efficient, and stress-free."
        },
        {
            title: "Expoleads",
            desctiption: "Expo Lead Connect is a dynamic mobile app revolutionizing event networking and lead management. Traditional business card exchanges with its QR Scanner, effortlessly capturing and organizing data on Name, Email, Address, Phone, and Services. Utilizing OCR Reader technology, the app seamlessly integrates with Firebase to enhance contact management, allowing users to export contact lists to CSV and easily save contacts to their phone book."
        },
        {
            title: "Crossfit",
            desctiption: "Unlock your full fitness potential with CROSSFIT, the ultimate app for gym members and trainers alike. Exclusively designed for trainers to manage their clients, CROSSFIT allows trainers to easily add members, schedule personalized fitness classes, and create tailored diet plans. Members can effortlessly track their workouts, view their class schedules, and access a library of fitness videos, including Zumba and other popular routines. Additionally, the app offers a convenient marketplace for purchasing fitness products like protein powder and supplements, ensuring all your fitness needs are met in one place."
        },
        {
            title: "Prepseed",
            desctiption: "Prepseed is an all-in-one educational app designed to streamline school management and enhance communication between principals, teachers, students, and parents. Tailored to each user role, Prepseed offers a comprehensive set of modules, including attendance tracking, assignment management, direct messaging, test administration, fee processing, and event coordination. Whether you're overseeing school operations, teaching, learning, or staying informed as a parent, Prepseed provides a seamless, user-friendly experience that keeps everyone connected and organized."
        },
        {
            title: "AMC Master",
            desctiption: "Annual Maintenance Contract is a contract or project management app. Users can analyze their contract amount with all estimation of employees, raw material and supplier amount with charts and graphs."
        },
        {
            title: "Bakery Shop",
            desctiption: "Bakery Shop is the perfect app for both bakery owners and customers. As an owner, easily manage your orders with a clear view of pending and completed tasks, ensuring smooth operations. For customers, Bakery Shop offers a delightful browsing experience where you can select your favorite cakes and bakery items from an extensive menu. Once you've made your choices, simply complete your order with secure online payments, and enjoy your treats in no time."
        }
    ]
    return (
        <>
            <section>
                <div className="AppDevelopmentProjectContainer">
                    <div className="TopContainer">

                        <div>
                            <h4>/ App Development</h4>
                            <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                                <h2>App Innovation</h2>
                            </div>
                        </div>
                        {/* <div className="ImageDesignCrop">
                            <img src={AppDev} alt="" />
                        </div> */}
                    </div>
                    <div className="CardContinerPadding">
                        <div className="ProjectsCards">
                            {AppDevelopmentProjetsData.map((item, index) => (
                                <div className="ProjectCard" key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={`${index * 100}`}>
                                    <div className="ProjectimageContiner">

                                    </div>
                                    <p>/ {item.title}</p>
                                    <br />
                                    <p>{item.desctiption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppDevelopment