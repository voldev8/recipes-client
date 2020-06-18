import React from 'react';
import Recipe from './Recipe.js';

import './Recipelist.css';

function Recipelist({ recipes }) {
  return (
    <div className="container">
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipelist;
