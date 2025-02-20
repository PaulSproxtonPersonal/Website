import React from "react";
import { FaPaintRoller, FaHammer, FaDotCircle  } from "react-icons/fa";
import { GiBrickWall, GiFloorPolisher, GiWoodenPier  } from "react-icons/gi";
import { MdElectricalServices, MdPlumbing  } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

function Handyman() {
    return (
        <>
            <h1>Handyman Services</h1>

            <section className="summary">
                <div className="container">
                    <h2 className="handyman-summary-title">Services Summary</h2>
                    <div className="handyman-summary-text">
                    
                        <p>
                            I offer a variety of services both inside and outside of your property.  Some of these services include:
                        </p>
                        <h3 className="handyman-section-title">Inside</h3>
                        <ul className="handyman-inside-list">
                            <li className="handyman-inside-item"><FaPaintRoller className="handyman-icon" />Painting</li>
                            <li className="handyman-inside-item"><GiBrickWall className="handyman-icon" />Drywall installation and repair</li>
                            <li className="handyman-inside-item"><MdElectricalServices className="handyman-icon" />Electical</li>
                            <li className="handyman-inside-item"><FaHammer className="handyman-icon" />Basement renovations</li>
                            <li className="handyman-inside-item"><MdPlumbing  className="handyman-icon" />Minor plumbing tasks</li>
                            <li className="handyman-inside-item"><GiFloorPolisher className="handyman-icon" />Flooring installation</li>
                            <ul className="handyman-inside-list-item">
                                <li className="handyman-inside-second-list-item"><FaDotCircle className="handyman-icon" />Hardwood</li>
                                <li className="handyman-inside-second-list-item"><FaDotCircle className="handyman-icon" />Vinyl click flooring</li>
                                <li className="handyman-inside-second-list-item"><FaDotCircle className="handyman-icon" />Laminate click flooring</li>
                            </ul>
                        </ul>

                        <h3 className="handyman-section-title">Outside</h3>
                        <ul className="handyman-outside-list">
                            <li className="handyman-outside-item"><FaPaintRoller className="handyman-icon" />Painting</li>
                            <li className="handyman-outside-item"><GiWoodenPier className="handyman-icon" />Decking</li>
                            <ul className="handyman-outside-list-item">
                                <li className="handyman-outside-second-list-item"><FaDotCircle className="handyman-icon" />Staining/Sealing</li>
                                <li className="handyman-outside-second-list-item"><FaDotCircle className="handyman-icon" />New Build</li>
                                <li className="handyman-outside-second-list-item"><FaDotCircle className="handyman-icon" />Rebuild and Resurfacing</li>
                                <li className="handyman-outside-second-list-item"><FaDotCircle className="handyman-icon" />Railing Installtion</li>
                            </ul>
                            <li className="handyman-outside-item"><HiMiniWrenchScrewdriver className="handyman-icon" />General Repairs</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Handyman