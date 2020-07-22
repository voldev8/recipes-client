import React, { useState } from 'react';
import logo from '../media/recipe-app-logo.png';

import Sidebar from './Sidebar';
import { CSSTransitionGroup } from 'react-transition-group';

import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/recipes">
            <img src={logo} alt="logo" />
            <h2>Recipe-App</h2>
          </a>
        </div>
        <div className="pages">
          <a href="/recipes">Recipes</a>
          <a href="/recipe-search">Search</a>
          <a href="/recipe-add">Add a recipe</a>
        </div>
        <div className="burger-menu" onClick={handleClick}>
          {!sidebar ? (
            <svg viewBox="0 0 100 60" width="40" height="40" fill="white">
              <rect width="100" height="15" rx="6"></rect>
              <rect y="25" width="100" height="15" rx="6"></rect>
              <rect y="50" width="100" height="15" rx="6"></rect>
            </svg>
          ) : (
            <svg viewBox="0 0 100 60" width="40" height="40" fill="white">
              <line
                x1="20"
                y1="60"
                x2="80"
                y2="10"
                stroke="white"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <line
                x1="20"
                y1="10"
                x2="80"
                y2="60"
                stroke="white"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </nav>
      <CSSTransitionGroup
        className="sidebar-outer"
        transitionName="slide"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {sidebar && <Sidebar />}
      </CSSTransitionGroup>
    </>
  );
}

export default Navbar;
