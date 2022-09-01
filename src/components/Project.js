import React, {useState} from 'react';
import Party from '../assets/medium/afterparty.png';
import Watch from '../assets/medium/whattowatch.png';
import Fitness from '../assets/medium/fitness_tracker.png';
import Horiseon from '../assets/medium/horiseon-marketing.png';
import Run from '../assets/medium/run-buddy.png';
import Robot from '../assets/medium/robot-challenger.png';

export default function Project() {

        const projects = [
            {
                name: 'After Party',
                file: Party,
                githubRepo: "https://github.com/clarkspencerc/afterParty" ,
                deployedApp: "https://lrpineda.github.io/afterParty/"
            },
            {
                name: 'What To Watch',
                file: Watch,
                githubRepo: "https://github.com/clarkspencerc/what-to-watch",
                deployedApp: "https://pacific-anchorage-44756.herokuapp.com/"
            },
            {
                name: 'Fitness Tracker',
                file: Fitness,
                githubRepo: "https://github.com/clarkspencerc/fitness-tracker",
                deployedApp: "https://enigmatic-tor-51827.herokuapp.com/"
            },
            {
                name: 'Horiseon Marketing', 
                file: Horiseon,
                githubRepo: "https://github.com/clarkspencerc/horiseon-marketing",
                deployedApp: "https://clarkspencerc.github.io/horiseon-marketing/"
            },
            {
                name: 'Run Buddy',
                file: Run,
                githubRepo: "https://github.com/clarkspencerc/run-buddy",
                deployedApp: "https://clarkspencerc.github.io/run-buddy/"
            },
            {
                name: 'Robot Challenger',
                file: Robot,
                githubRepo: " https://github.com/clarkspencerc/robot-gladiators",
                deployedApp: "https://clarkspencerc.github.io/robot-gladiators/"
            }
        ];
    return (
   
<div>
{projects.map((project, i) => (
    <>
                <div className="project-cards" key={project.name}>
                <img
                    src= {project.file}
                    alt={project.name}
                    className='img-thumbnail mx-1'
                    
                />
                <div className='tags'>
                    <a href={project.githubRepo} target="_blank" rel="noreferrer">Github Repo</a>
                    <a href={project.deployedApp} target="_blank" rel="noreferrer">Deployed App</a>
                </div>
                </div>
    </>
                ))}

</div>

    );
}
