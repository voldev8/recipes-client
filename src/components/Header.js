import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div
      className={`heading ${
        props.heading === 'All recipes' ? 'all-recipes' : ''
      }`}
    >
      <h2>{props.heading}</h2>
    </div>
  );
};

export default Header;
