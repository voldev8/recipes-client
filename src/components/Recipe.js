import React, { useState, useContext } from 'react';

import AlertContext from '../context/alert/alertContext';

import Alert from './Alert.js';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  const { name, ingredients, instructions, tags, image, link, _id } = recipe;
  const [flip, setFlip] = useState(false);

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.setItem('delete_id', _id);
    setAlert('Are you sure you want to delete this recipe?', 'delete');
  };
  const handleEdit = () => {
    localStorage.setItem('edit_id', _id);
  };

  return (
    <>
      <Alert />
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
          <button className="recipe-card-outer-link recipe-btn">
            <a
              // className="recipe-card-outer-edit"
              onClick={handleEdit}
              href={`/recipe-edit/${_id}`}
              rel="noopener noreferrer"
            >
              Edit
            </a>
          </button>
          <button className="recipe-card-outer-link recipe-btn">
            <a
              className="recipe-card-outer-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </button>
          <button
            className="recipe-card-outer-link recipe-btn"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Recipe;
