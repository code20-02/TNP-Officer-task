import React from 'react';
import './App.css';
import logo from './assets/logo.png';


function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className="App-logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Internships</a></li>
        <li><a href="/contact">Mock Tests</a></li>
        <li><a href="/contact">Learining</a></li>
        <li><a href="/contact">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;