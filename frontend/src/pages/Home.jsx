import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section className="summary" id="home">
                <div className="container container-lg">
                    <h2 className="summary-title">Experienced Software Leader</h2>
                    <div className="summary-flex">
                        <img src="../../images/HeadShot1.jpg" alt="Paul Sproxton" />
                        <div className="summary-text">
                            <p>Results oriented leader with proven success in creating and managing diverse multi-national teams of Software Development Professionals. </p>
                            <p>Experienced leader in managing and releasing software products for over 25 years.</p>
                            <p>I am experienced in creating and managing remote teams both locally and offshore.</p>

                            <div className="sumarry-links">
                                <Link to='/itprofessional' className='summary-link-btn'>Learn More</Link>
                                <a href="https://www.linkedin.com/in/paul-sproxton" className='summary-link-btn' target='_blank' rel='noreferrer'>
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="passion" id="passion">
                <div className="container container-lg">
                    <h2 className="passion-title">Handyman Passion</h2>
                    <div className="passion-flex">
                        <img src="../../images/HeadShot1.jpg" alt="Paul Sproxton" />
                        <div className="passion-text">
                            <p>Since a child I have had a passion working with my hands.  As an adult I have enjoyed working on various projects.</p>
                            <p>I have completed full basement renovations. </p>
                            <p>I specialize in flooring including installation of hardwood, laminate, and vinyl click flooring.</p>
                            <p>I also do decking and patio restoration and creation projects.</p>

                            <Link to='/handyman' className='summary-link-btn'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Home
