import React from "react";
import "./OutleadClients.css"
import Client from "./ClientsData";
const OutleadClients = () => {
    return (
        <>
            <section>
                <div className="OutleadClients">
                    <div className="TopContainer">
                        <h4>/ Our Clients</h4>
                        <div style={{ display: "flex", justifyContent: "space-Between" }}>
                            <h2>Trusted Clients</h2>
                        </div>
                    </div>
                    <div className="ClientsContainer">
                        {Client.map((item, index) => (
                            <div
                            id="ImageContainerLogo"
                                key={index}
                                data-aos="fade-up"
                            >
                                <img src={item.img} alt="" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
export default OutleadClients;