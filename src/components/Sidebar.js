import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-pages">
          <a href="/recipes">Recipes</a>
          <a href="/recipe-search">Search</a>
          <a href="/recipe-add">Add a recipe</a>
        </div>
      </div>
      <div className="sidebar-darken"></div>
    </>
  );
}

export default Sidebar;
