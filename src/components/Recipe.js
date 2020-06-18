import React, { useState } from 'react';

import './Recipe.css';

function Recipe({ recipe }) {
  const { name, ingredients, instructions, tags, photo } = recipe;
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`recipe-card ${flip ? 'flip-it' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="recipe-card-inner">
        <div className="recipe-card-front">
          <div className="recipe-card-img">
            <img src={photo} alt={name} />
          </div>
          <div className="recipe-card-content">
            <h3 className="recipe-title">{name}</h3>
            <h4>Ingredients: </h4>
            <ul className="Ingredients-list">
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
            <ul className="tags">
              {tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipe-card-back">
          <h4>Instructions: </h4>
          <ol>
            {instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Recipe;

// name: ,
// ingredients: ,
// tags:,
// photo: ,
// link: ,
// createdAt: ,
// slug
