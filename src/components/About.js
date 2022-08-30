import React from 'react';
import selfPortrait from '../assets/profile/profile.JPG';


export default function About() {
    return (
        <div className="container">
            <h1> About Me </h1>


            <section className="hero">
                <div className="hero-text">
                    <h2>I organize chaos through clarification and automation</h2>
                    <p>I'm a business consultant and full stack developer who loves building scalable processes and web apps. </p>
                </div>
                <div className="hero-img">
                    <img src={selfPortrait} style={{ width: "10%"}} alt="Man standing on the beach in a black tux " />
                </div>
            </section>
            
            <section id="about-me" className="about">
                <div>
                    <h2 className="section-title flex-row">Who I am</h2>
                    <p>
                        I'm passionate about ongoing improvement and data-driven decisions. <br />
                        I help businesses build their workflows, manage their projects, and increase their overall effectivness. <br />
                        I’m motivated by results and potential, if you have either of these then lets talk! <br />
                        I express my creativity through the apps I make both on the computer and in the kitchen.
                    </p>
                </div>
            </section>
        </div>
    );
}
