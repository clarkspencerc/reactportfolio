import React from 'react';
import selfPortrait from '../assets/profile/profile.JPG';


export default function About() {
    return (
        <div className="container">
            <h1> About Me </h1>


            <section className="hero">
                <div className="hero-text">
                    <h2>Beaches. Boats. and Slopes.</h2>
                    <p>When I'm not working or building a website then you'll find me at the beach, behind a boat, or on the ski slopes </p>
                </div>
                <div className="hero-img">
                    <img src={selfPortrait} style={{ width: "10%"}} alt="Man standing on the beach in a black tux " />
                </div>
            </section>
            
            <section id="about-me" className="about">
                <div>
                    <h4>As a business consultant and full stack developer I</h4>
                    <p>
                        am passionate about ongoing improvement and data-driven decisions. <br />
                        I help businesses build their workflows, manage their projects, and increase their overall effectivness. <br />
                        I’m motivated by results and potential, if you have either of these then lets talk! <br />
                        I express my creativity through the apps I make both on the computer and in the kitchen.
                    </p>
                </div>
            </section>
        </div>
    );
}
