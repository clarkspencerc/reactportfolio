import React from 'react';
import {Link} from 'react-router-dom'; 
import './components.css';
export default function Nav() {


    return (
        <div className="container">
            
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Portfolio'>Portfolio</Link></li>
            </ul>

        </div>
    );
}


