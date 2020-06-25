import React from 'react';
import logo from '../media/recipe-app-logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/recipes">
          <img src={logo} alt="logo" />
          <h2>Recipe-App</h2>
        </a>
      </div>
      <div className="pages">
        <a href="/recipes">Recipes</a>
        <a href="#search">Search</a>
        <a href="/recipe-add">Add a recipe</a>
      </div>
    </nav>
  );
}

export default Navbar;
