import React from "react";
import { FaPaintRoller, FaHammer, FaDotCircle  } from "react-icons/fa";
import { GiBrickWall, GiFloorPolisher, GiWoodenPier  } from "react-icons/gi";
import { MdElectricalServices, MdPlumbing  } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

function Handyman() {
    return (
        <>
            <header className="handyman-header">
                <ul className="handyman-header-list">
                    <li className="handyman-header-item">
                        <a href="#summary">Services</a>
                    </li>
                    <li className="handyman-header-item">
                    <a href="#projects">Past Projects</a>
                    </li>
                </ul>
            </header>
            
            <h1>Handyman Services</h1>

            <section className="handyman-summary" id="summary">
                <div className="container container-lg">
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

            <section className="handyman-projects" id="projects">
                <div className="container container-lg">
                    <h2 className="handyman-project-title">
                        Completed Projects
                    </h2>
                    <div className="handyman-project-text">
                        <p>
                            Here are some of the projects that I have completed.
                        </p>

                        <div className="container container-lg projects-grid">
                            <div className="project">
                                <h3>Hardwood floor installation Room 1</h3>
                                <p>Before and During installation</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room1\Before1.jpg" 
                                            data-lightbox="before-1"
                                            data-title="Before 1"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room1\Before1.jpg" alt="Before 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room1\Before2.jpg" 
                                            data-lightbox="before-2"
                                            data-title="Before 2"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room1\Before2.jpg" alt="Before 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room1\During1.jpg" 
                                            data-lightbox="during-1"
                                            data-title="During 1"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room1\During1.jpg" alt="During 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room1\During2.jpg" 
                                            data-lightbox="during-2"
                                            data-title="During 2"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room1\During2.jpg" alt="During 2" />
                                        </a>
                                    </div>
                                </div>

                                <p>After installation</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room1\After1.jpg"
                                            data-lightbox="after-1"
                                            data-title="After 1"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room1\After1.jpg" alt="After 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room1\After2.jpg"
                                            data-lightbox="after-2"
                                            data-title="After 2"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room1\After2.jpg" alt="After 2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="container container-lg projects-grid">
                            <div className="project">
                                <h3>Hardwood floor installation Room 2</h3>
                                <p>Before installation</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room2\Before1.jpg" 
                                            data-lightbox="before-1"
                                            data-title="Before 1"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room2\Before1.jpg" alt="Before 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room2\Before2.jpg" 
                                            data-lightbox="before-2"
                                            data-title="Before 2"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room2\Before2.jpg" alt="Before 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room2\Before3.jpg" 
                                            data-lightbox="before-3"
                                            data-title="Before 3"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room2\Before3.jpg" alt="Before 3" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room2\Before4.jpg" 
                                            data-lightbox="before-4"
                                            data-title="Before 4"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room2\Before4.jpg" alt="Before 4" />
                                        </a>
                                    </div>
                                </div>

                                <p>After installation</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room2\After1.jpg"
                                            data-lightbox="after-1"
                                            data-title="After 1"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room2\After1.jpg" alt="After 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a 
                                            href="..\..\images\Flooring\Hardwood\House1\Room2\After2.jpg"
                                            data-lightbox="after-2"
                                            data-title="After 2"
                                        >
                                            <img src="..\..\images\Flooring\Hardwood\House1\Room2\After2.jpg" alt="After 2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container container-lg projects-grid">
                            <div className="project">
                                <h3>Laminate Flooring installation</h3>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a href="..\..\images\Flooring\Laminate\After1.jpg">
                                            <img src="..\..\images\Flooring\Laminate\After1.jpg" alt="Laminate" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container container-lg projects-grid">
                            <div className="project">
                                <h3>Luxury Vinyl Plank installation</h3>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a href="..\..\images\Flooring\Vinyl\House1\Image1.jpg">
                                            <img src="..\..\images\Flooring\Vinyl\House1\Image1.jpg" alt="Vinyl 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Flooring\Vinyl\House1\Image2.jpg">
                                            <img src="..\..\images\Flooring\Vinyl\House1\Image2.jpg" alt="Vinyl 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Flooring\Vinyl\House1\Image3.jpg">
                                            <img src="..\..\images\Flooring\Vinyl\House1\Image3.jpg" alt="Vinyl 3" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Flooring\Vinyl\House1\Image4.jpg">
                                            <img src="..\..\images\Flooring\Vinyl\House1\Image4.jpg" alt="Vinyl 4" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Flooring\Vinyl\House1\Image5.jpg">
                                            <img src="..\..\images\Flooring\Vinyl\House1\Image5.jpg" alt="Vinyl 5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container container-lg projects-grid">
                            <div className="project">
                                <h3>Deck Resurfacing and Leveling</h3>
                                <p>Before</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\Before1.jpg">
                                            <img src="..\..\images\Decks\Deck1\Before1.jpg" alt="Before 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\Before2.jpg">
                                            <img src="..\..\images\Decks\Deck1\Before2.jpg" alt="Before 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\Before3.jpg">
                                            <img src="..\..\images\Decks\Deck1\Before3.jpg" alt="Before 3" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\Before4.jpg">
                                            <img src="..\..\images\Decks\Deck1\Before4.jpg" alt="Before 4" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\Before5.jpg">
                                            <img src="..\..\images\Decks\Deck1\Before5.jpg" alt="Before 5" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\Before6.jpg">
                                            <img src="..\..\images\Decks\Deck1\Before6.jpg" alt="Before 6" />
                                        </a>
                                    </div>
                                </div>

                                <p>During:  The supports had sagged sitting on the concrete blocks.  The blocks were removed, and new supports installed fastened directly to the concrete platorm.</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\During1.jpg">
                                            <img src="..\..\images\Decks\Deck1\During1.jpg" alt="During 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\During2.jpg">
                                            <img src="..\..\images\Decks\Deck1\During2.jpg" alt="During 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\During3.jpg">
                                            <img src="..\..\images\Decks\Deck1\During3.jpg" alt="During 3" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\During4.jpg">
                                            <img src="..\..\images\Decks\Deck1\During4.jpg" alt="During 4" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\During5.jpg">
                                            <img src="..\..\images\Decks\Deck1\During5.jpg" alt="During 5" />
                                        </a>
                                    </div>
                                </div>

                                <p>Finished with the railing reinstalled</p>
                                <div className="project-grid">
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\After1.jpg">
                                            <img src="..\..\images\Decks\Deck1\After1.jpg" alt="After 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\After2.jpg">
                                            <img src="..\..\images\Decks\Deck1\After2.jpg" alt="After 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\After3.jpg">
                                            <img src="..\..\images\Decks\Deck1\After3.jpg" alt="After 3" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\After4.jpg">
                                            <img src="..\..\images\Decks\Deck1\After4.jpg" alt="After 4" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\After5.jpg">
                                            <img src="..\..\images\Decks\Deck1\After5.jpg" alt="After 5" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck1\After6.jpg">
                                            <img src="..\..\images\Decks\Deck1\After6.jpg" alt="After 6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container container-lg projects-grid">
                            <div className="project">
                                <h3>Deck Resurfacing and Leveling</h3>
                                <p>Signifant leveling was done as some of the support posts had heaved in the ground.</p>
                                <p>Support beams around the concrete patio had to be replaced as they were rotten.</p>

                                <div className="project-grid">
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck2\After1.jpg">
                                            <img src="..\..\images\Decks\Deck2\After1.jpg" alt="After 1" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck2\After2.jpg">
                                            <img src="..\..\images\Decks\Deck2\After2.jpg" alt="After 2" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck2\After3.jpg">
                                            <img src="..\..\images\Decks\Deck2\After3.jpg" alt="After 3" />
                                        </a>
                                    </div>
                                    <div className="project-item">
                                        <a href="..\..\images\Decks\Deck2\After4.jpg">
                                            <img src="..\..\images\Decks\Deck2\After4.jpg" alt="After 4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Handyman