import React from "react";

function IT() {
    return (
        <>
            <header className="it-header">
                <ul className="it-header-list">
                    <li className="it-header-item">
                        <a href="#journey">My Journey</a>
                    </li>
                    <li className="it-header-item">
                    <a href="#resume">My Resum&eacute;</a>
                    </li>
                </ul>
            </header>
            <section className="journey" id="journey">
                <div className="container container-lg">
                    <h2 className="journey-title">My Journey</h2>
                    <div className="journey-text">
                        <p>
                            My journey in the software industry started in the late 90s with MGI Software.  
                            I started working building installers in InstallShield and then in the beginning of MSI Installers.  
                            I was promoted to a manager adding localization, OEM engineering and QA to my portfolio.  
                            I was working on building a local team of developers, QA, and co-op students.</p>
                        <p>
                            After 2 years we were acquired by Roxio and I began my long journey as part of the Roxio Creator team.  
                            As the teams in MGI and Roxio merged I took over management duties for Build/Installer teams locally in Richmond Hill and in California for all of the product lines. </p>
                        <p>
                            A couple of years later we were acquired by Sonic Solutions and merged with them.  
                            I took over management of the combined of the Build/Installer teams there with people in 5 different offices in Canada and the US.  
                            We started looking at China for some of our development efforts.  
                            I became involved and started hiring and training a new team in Shanghai and travelling frequently to the new office there.</p>
                        <p>
                            I was always heavily involved on our OEM Engineering business and assisted in moving that team to Shanghai.  
                            I was also involved on the Project Management side and eventually took over fully PjM duties for our flagship Roxio Creator product line.</p>
                        <p>
                            As we grew the team in China we started decreasing staff in North America, in late 2007 the Richmond Hill office that I worked in was closed with over 50 people being laid off.  
                            At this point I was mostly dealing with the California and China offices and I was giving the opportunity to stay with Sonic Solutions working remotely.</p>
                        <p>
                            In 2009 I was promoted to Director of Engineering with responsibilities over internal engineering systems, Build/Installer, and project management.  
                            Shortly after that we acquired MainConcept and DivX and I led the effort to combine all of our systems.</p>
                        <p>
                            Late in 2010 Sonic Solution was acquired by Rovi Corporation.  
                            Rovi was really only interested in the MainConcept, DivX, and RoxioNow brands and business.  
                            The consumer/OEM software business was sold to Corel Corporation in 2012, at this point most of the Roxio development team was stationed in China.</p>
                        <p>
                            After the Corel acquisition I was named as the Director of Engineering of all of the Roxio products and the full development teams.  
                            Unfortunately, Corel outsourced the development and QA efforts to a Chinese company call Glority.  
                            The Roxio China office was closed after the development transition to Glority.  
                            Some of the Shanghai team created a new company that we used for development efforts as well.</p>
                        <p>
                            I continued as the leader of the development efforts working with Glority and others on the effort and liasing with the Product Management and other teams that were still part of Corel.</p>
                        <p>
                            In 2013, I took development ownership of the Pinnacle Studio 16 video software application and then VideoStudio as well.  
                            Again, much of the development work was outsourced, but we continued major yearly releases.</p>
                        <p>
                            In 2019, I started transitioning to the MindManager team initialing taking over QA and testing automation duties in addition to my duties in the Digital Media team.  </p>
                        <p>
                            By mid, 2021 I had transitioned away from the Digital Media team and was full-time with the MindManager team.  
                            The MindManager development was largely handled by contractors and newer Corel management was intent on bringing more of the development back in-house.  
                            I started a hiring effort hiring a web architect and full-stack developers in Canada/US.  
                            Corel had created a new office in Mauritius and we started a project hiring there for the MindManager team.  
                            Working with a local recruiting agency I went to Mauritius and hired 15 full stack developers, automation engineers, and manual QA enginners.  
                            In a span of 6-8 months we had hired and onboarded the team and started to divest from some of the contactors.</p>
                        <p>
                            MindManager has both Windows and Mac desktop applications as well as a developing web SaaS Application.  
                            Most of the new hiring effort was focused on the web application, but my focus was on all 3 applications especially the Windows and Web apps.
                        </p>
                    </div>
                </div>
            </section>

            <section className="resume" id="resume">
                <div className="container">
                    <h2 className="resume-title">My Resum&eacute;</h2>
                    <object data="./PaulSproxtonResume.pdf" type="application/pdf" className="resume-resumePDF"></object>
                </div>
            </section>
        </>
    )
}

export default IT