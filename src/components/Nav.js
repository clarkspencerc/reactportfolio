import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom'; 
import './components.css';

export default function Nav(props) {
    const {
       pages = [],
        setCurrentPage, 
        currentPage
    } = props; 

    return (
        <div className="container">
            
            <ul>
                <li><NavLink to='/' activeClassName='navbar_link--active' className="navbar_link">Home</NavLink></li>
                <li><NavLink to='/Contact' activeClassName='navbar_link--active' className="navbar_link">Contact</NavLink></li>
                <li><NavLink to='/Portfolio' activeClassName='navbar_link--active' className="navbar_link">Portfolio</NavLink></li>
                <li><NavLink to='/About' activeClassName='navbar_link--active' className="navbar_link">About</NavLink></li>
                <li><NavLink to='/Resume' activeClassName='navbar_link--active' className="navbar_link">Resume</NavLink></li>
            </ul>

        </div>
    );
}


