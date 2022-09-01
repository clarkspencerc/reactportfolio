import React from 'react';

export default function Footer() {

    const Github = <a href='https://github.com/clarkspencerc' target="_blank">Github</a>;
    const Linkedin = <a href='https://www.linkedin.com/in/spencer-clark-100bb261/' target="_blank">Linkedin</a>;
    const Insta = <a href='https://www.instagram.com/channing.clark/' target="_blank">Instagram</a>;
    return (
        <div className="container">
          
            <ul>
            
                <li> <h4> {Github} </h4></li>
                <li>  <h4> {Linkedin} </h4></li>
                <li> <h4> {Insta} </h4> </li>
            
            </ul>
        </div>
    );
}
