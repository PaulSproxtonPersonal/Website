import React from 'react'

function Home() {
    return (
        <>
            <section className="summary" id="home">
                <div className="container">
                    <h2 className="summary-title">Experienced Software Leader</h2>
                    <div className="summary-flex">
                        <img src="../../images/HeadShot1.jpg" alt="Paul Sproxton" />
                        <div className="summary-text">
                            <p>Results oriented leader with proven success in creating and managing diverse multi-national teams of Software Development Professionals. </p>
                            <p>Experienced leader in managing and releasing software products for over 25 years.</p>
                            <p>I am experienced in creating and managing remote teams both locally and offshore.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="journey" id="journey">
                <div className="container">
                    <h2 className="journey-title">My Journey</h2>
                    <div className="journey-text">
                        <p>My journey in the software industry started in the late 90s with MGI Software.  I started working building installers in InstallShield and then in the beginning of MSI Installers.</p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home
