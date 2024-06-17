import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Import the logo

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/internships">Internships</Link></li>
                    <li><Link to="/mock-tests">Mock Tests</Link></li>
                    <li><Link to="/learning">Learning</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <button className="get-started">Get Started</button>
        </header>
    );
};

export default Header;
