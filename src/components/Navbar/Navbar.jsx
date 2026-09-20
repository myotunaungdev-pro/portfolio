import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav-container">
            <a href="#" className="nav-logo">myo_t<span>.</span>dev</a>
            <ul className="nav-links">
                <li><a href="#work">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}