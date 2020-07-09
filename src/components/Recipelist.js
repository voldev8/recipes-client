import React, { useContext, useEffect } from 'react';
import Recipe from './Recipe.js';
import Loading from './Loading.js';

import RecipeContext from '../context/recipe/recipeContext';

import './RecipeList.css';

const RecipeList = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes, filtered } = recipeContext;

  useEffect(() => {
    getRecipes();

    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      {filtered === null && recipes !== null ? (
        recipes.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)
      ) : filtered !== null ? (
        filtered.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RecipeList;
