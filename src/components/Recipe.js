import React, { useState, useContext } from 'react';

import RecipeContext from '../context/recipe/recipeContext';

import './Recipe.css';

const Recipe = ({ recipe }) => {
  const { name, ingredients, instructions, tags, image, link, _id } = recipe;
  const [flip, setFlip] = useState(false);

  const recipeContext = useContext(RecipeContext);
  const { deleteRecipe } = recipeContext;

  const handleDelete = () => {
    deleteRecipe(_id);
  };
  return (
    <div className="recipe-card-outer">
      <div
        className={`recipe-card ${flip ? 'flip-it' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="recipe-card-inner">
          <div className="recipe-card-front">
            <div className="recipe-card-img">
              <img src={image} alt={name} />
            </div>
            <div className="recipe-card-content">
              <h3 className="recipe-title">{name}</h3>
              <div className="recipe-card-ingredients">
                <h4>Ingredients: </h4>
                <ul className="Ingredients-list">
                  {ingredients
                    ? ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))
                    : ''}
                </ul>
              </div>
              <ul className="recipe-card-tags">
                {tags ? tags.map((tag, i) => <li key={i}>{tag}</li>) : null}
              </ul>
            </div>
          </div>
          <div className="recipe-card-back">
            <h4>Instructions: </h4>
            <ol>
              {instructions
                ? instructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))
                : ''}
            </ol>
          </div>
        </div>
      </div>
      <div className="recipe-card-buttons">
        <a
          className="recipe-card-outer-edit"
          href="#edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit
        </a>
        <a
          className="recipe-card-outer-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
        <button
          className="recipe-card-outer-link delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Recipe;
