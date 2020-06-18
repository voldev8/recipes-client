import React from 'react';
import logo from '../media/recipe-app-logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <a href="">
        <img src={logo} alt="logo" />
        <h2>Recipe-App</h2>
      </a>
    </nav>
  );
}

export default Navbar;
